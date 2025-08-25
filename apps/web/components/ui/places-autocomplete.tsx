'use client'

import { useEffect, useRef, useState } from 'react'
import { Input } from '@/components/ui/input'

interface PlaceResult {
  address: string
  city: string
  state: string
  postcode: string
  country: string
  lat: number
  lng: number
  formattedAddress: string
}

interface PlacesAutocompleteProps {
  value: string
  onSelect: (place: PlaceResult) => void
  placeholder?: string
  className?: string
}

export function PlacesAutocomplete({
  value,
  onSelect,
  placeholder = "Start typing an address...",
  className
}: PlacesAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const [inputValue, setInputValue] = useState(value)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  useEffect(() => {
    // Load Google Maps API if not already loaded
    if (!window.google) {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      if (!apiKey || apiKey === 'YOUR_GOOGLE_MAPS_API_KEY') {
        console.warn('Google Maps API key not configured. Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment variables.')
        return
      }

      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = () => setIsLoaded(true)
      document.head.appendChild(script)
    } else {
      setIsLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (!isLoaded || !inputRef.current) return

    // Initialize autocomplete
    autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: 'au' }, // Restrict to Australia
      fields: ['address_components', 'formatted_address', 'geometry', 'name'],
      types: ['establishment', 'geocode']
    })

    // Add place changed listener
    const listener = autocompleteRef.current.addListener('place_changed', () => {
      const place = autocompleteRef.current?.getPlace()
      if (!place || !place.geometry) return

      const addressComponents = place.address_components || []
      const location = place.geometry.location

      // Parse address components
      const getComponent = (type: string) => {
        const component = addressComponents.find(c => c.types.includes(type))
        return component?.long_name || ''
      }

      const streetNumber = getComponent('street_number')
      const streetName = getComponent('route')
      const address = streetNumber && streetName ? `${streetNumber} ${streetName}` : 
                     getComponent('establishment') || place.name || ''

      const placeResult: PlaceResult = {
        address: address,
        city: getComponent('locality') || getComponent('sublocality'),
        state: getComponent('administrative_area_level_1'),
        postcode: getComponent('postal_code'),
        country: getComponent('country'),
        lat: location!.lat(),
        lng: location!.lng(),
        formattedAddress: place.formatted_address || ''
      }

      setInputValue(placeResult.formattedAddress)
      onSelect(placeResult)
    })

    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current)
      }
    }
  }, [isLoaded, onSelect])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  if (!isLoaded && process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY') {
    return (
      <div className="p-3 border border-yellow-300 bg-yellow-50 rounded-md">
        <p className="text-sm text-yellow-800">
          ⚠️ Google Places API not configured. Please add your Google Maps API key to continue.
        </p>
      </div>
    )
  }

  return (
    <Input
      ref={inputRef}
      value={inputValue}
      onChange={handleInputChange}
      placeholder={placeholder}
      className={className}
      autoComplete="off"
    />
  )
}

// Type declaration for Google Maps
declare global {
  interface Window {
    google: typeof google
  }
}