'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { MapPin, Loader2 } from 'lucide-react'

// Note: In production, this should be an environment variable
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.eyJ1IjoibWFya2V0aHViLXRlc3QiLCJhIjoiY2xrOXgxMjNkMDAwMDNlbjBxN2NzOHNrMSJ9.test-token'

interface Market {
  id: string
  name: string
  lat: number
  lng: number
  city: string
  state: string
  description?: string
}

interface InteractiveMapProps {
  searchMode: 'market' | 'vendor'
  searchQuery?: string
  className?: string
}

export default function InteractiveMap({ searchMode, searchQuery, className = '' }: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [markets, setMarkets] = useState<Market[]>([])

  // Brisbane center coordinates
  const brisbaneCenter: [number, number] = [153.0260, -27.4698]

  useEffect(() => {
    if (!MAPBOX_TOKEN || MAPBOX_TOKEN.includes('test-token')) {
      setError('Mapbox token not configured')
      setLoading(false)
      return
    }

    if (!mapContainer.current) return

    try {
      mapboxgl.accessToken = MAPBOX_TOKEN

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: brisbaneCenter,
        zoom: 10
      })

      map.current.on('load', () => {
        setLoading(false)
        fetchAndDisplayMarkers()
      })

      map.current.on('error', (e) => {
        console.error('Mapbox error:', e)
        setError('Failed to load map')
        setLoading(false)
      })

    } catch (err) {
      console.error('Map initialization error:', err)
      setError('Failed to initialize map')
      setLoading(false)
    }

    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [])

  const fetchAndDisplayMarkers = async () => {
    try {
      const params = new URLSearchParams()
      if (searchQuery) params.set('search', searchQuery)
      
      const response = await fetch(`/api/markets?${params}`)
      const data = await response.json()
      
      if (response.ok && data.markets) {
        setMarkets(data.markets)
        addMarkersToMap(data.markets)
      }
    } catch (error) {
      console.error('Error fetching markets:', error)
    }
  }

  const addMarkersToMap = (marketsData: Market[]) => {
    if (!map.current) return

    // Clear existing markers
    const existingMarkers = document.querySelectorAll('.mapboxgl-marker')
    existingMarkers.forEach(marker => marker.remove())

    marketsData.forEach((market) => {
      if (!market.lat || !market.lng) return

      // Create marker element
      const el = document.createElement('div')
      el.className = 'marker'
      el.innerHTML = `
        <div class="w-8 h-8 bg-green-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
        </div>
      `

      // Create popup
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: true,
        closeOnClick: false
      }).setHTML(`
        <div class="p-3 max-w-xs">
          <h3 class="font-semibold text-lg mb-1">${market.name}</h3>
          <p class="text-gray-600 text-sm mb-2">${market.city}, ${market.state}</p>
          ${market.description ? `<p class="text-gray-700 text-sm mb-3 line-clamp-2">${market.description}</p>` : ''}
          <button 
            onclick="window.location.href='/markets/${market.id}'" 
            class="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
          >
            View Details
          </button>
        </div>
      `)

      // Add marker to map
      new mapboxgl.Marker(el)
        .setLngLat([market.lng, market.lat])
        .setPopup(popup)
        .addTo(map.current!)
    })

    // Fit map to markers if there are any
    if (marketsData.length > 0) {
      const coordinates = marketsData
        .filter(m => m.lat && m.lng)
        .map(m => [m.lng, m.lat] as [number, number])
      
      if (coordinates.length > 1) {
        const bounds = coordinates.reduce((bounds, coord) => {
          return bounds.extend(coord)
        }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]))
        
        map.current?.fitBounds(bounds, {
          padding: 50,
          maxZoom: 13
        })
      } else if (coordinates.length === 1) {
        map.current?.flyTo({
          center: coordinates[0],
          zoom: 12
        })
      }
    }
  }

  useEffect(() => {
    if (map.current && !loading) {
      fetchAndDisplayMarkers()
    }
  }, [searchQuery, searchMode])

  if (error || !MAPBOX_TOKEN || MAPBOX_TOKEN.includes('test-token')) {
    return (
      <div 
        className={`bg-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors ${className}`}
        style={{ minHeight: '400px' }}
        onClick={() => window.location.href = '/markets'}
      >
        <MapPin className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-gray-500 text-center mb-2">
          <span className="font-medium">Interactive Map</span>
          <br />
          <span className="text-sm">
            {searchMode === 'market' ? `Showing ${searchQuery ? 'search results for markets' : 'Brisbane area markets'}` : 'Vendor search coming soon'}
          </span>
        </p>
        <div className="text-xs text-gray-400 bg-white px-3 py-1 rounded-full">
          Click to browse all markets
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center z-10">
          <div className="text-center">
            <Loader2 className="w-8 h-8 text-gray-400 animate-spin mb-2" />
            <p className="text-gray-500">Loading map...</p>
          </div>
        </div>
      )}
      <div 
        ref={mapContainer} 
        className={`w-full rounded-lg shadow-lg ${className}`}
        style={{ minHeight: '400px' }}
      />
      {markets.length > 0 && !loading && (
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md px-3 py-2 z-10">
          <p className="text-sm font-medium text-gray-700">
            {markets.length} {searchMode === 'market' ? 'markets' : 'vendors'} found
          </p>
        </div>
      )}
    </div>
  )
}