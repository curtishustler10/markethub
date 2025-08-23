'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { MapPin, Loader2, Layers } from 'lucide-react'

// Map configuration - supports both Mapbox and OpenMapTiles
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.eyJ1IjoibWFya2V0aHViLXRlc3QiLCJhIjoiY2xrOXgxMjNkMDAwMDNlbjBxN2NzOHNrMSJ9.test-token'
const MAPTILER_KEY = process.env.NEXT_PUBLIC_MAPTILER_KEY || ''

// OpenMapTiles styles available
const MAP_STYLES = {
  // Mapbox styles (fallback)
  mapbox_streets: 'mapbox://styles/mapbox/streets-v12',
  mapbox_satellite: 'mapbox://styles/mapbox/satellite-v9',
  // OpenMapTiles styles via MapTiler
  osm_bright: 'https://api.maptiler.com/maps/bright/style.json',
  streets: 'https://api.maptiler.com/maps/streets/style.json',
  basic: 'https://api.maptiler.com/maps/basic/style.json',
  positron: 'https://api.maptiler.com/maps/toner/style.json',
  satellite: 'https://api.maptiler.com/maps/satellite/style.json',
}

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
  mapStyle?: keyof typeof MAP_STYLES
}

// Helper function to get the appropriate map style URL
const getMapStyleUrl = (style: keyof typeof MAP_STYLES = 'osm_bright'): string => {
  const styleUrl = MAP_STYLES[style]
  
  // If it's a MapTiler style and we have a key, add it to the URL
  if (styleUrl.includes('maptiler.com') && MAPTILER_KEY) {
    return `${styleUrl}?key=${MAPTILER_KEY}`
  }
  
  return styleUrl
}

export default function InteractiveMap({ searchMode, searchQuery, className = '', mapStyle = 'osm_bright' }: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [markets, setMarkets] = useState<Market[]>([])
  const [currentMapStyle, setCurrentMapStyle] = useState<keyof typeof MAP_STYLES>(mapStyle)
  const [showStyleSelector, setShowStyleSelector] = useState(false)
  const styleSelectorRef = useRef<HTMLDivElement>(null)

  // Brisbane center coordinates
  const brisbaneCenter: [number, number] = [153.0260, -27.4698]

  useEffect(() => {
    // Determine which map service to use
    const useMapTiler = MAPTILER_KEY && currentMapStyle !== 'mapbox_streets' && currentMapStyle !== 'mapbox_satellite'
    const useMapbox = MAPBOX_TOKEN && !MAPBOX_TOKEN.includes('test-token')

    if (!useMapTiler && !useMapbox) {
      setError('Map service not configured. Please set NEXT_PUBLIC_MAPTILER_KEY or NEXT_PUBLIC_MAPBOX_TOKEN.')
      setLoading(false)
      return
    }

    if (!mapContainer.current) return

    try {
      // Set access token for Mapbox GL JS (required even when using MapTiler)
      if (useMapbox) {
        mapboxgl.accessToken = MAPBOX_TOKEN
      } else {
        // Use a dummy token for MapTiler (Mapbox GL JS still requires this)
        mapboxgl.accessToken = 'pk.dummy'
      }

      const styleUrl = getMapStyleUrl(currentMapStyle)
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: styleUrl,
        center: brisbaneCenter,
        zoom: 10,
        // Add attribution for OpenMapTiles when using MapTiler
        ...(useMapTiler && {
          attribution: '© OpenMapTiles © OpenStreetMap contributors'
        })
      })

      map.current.on('load', () => {
        setLoading(false)
        fetchAndDisplayMarkers()
      })

      map.current.on('error', (e) => {
        console.error('Map error:', e)
        setError(`Failed to load ${useMapTiler ? 'OpenMapTiles' : 'Mapbox'} map`)
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
  }, [currentMapStyle])

  const fetchAndDisplayMarkers = async () => {
    try {
      const params = new URLSearchParams()
      if (searchQuery) params.set('search', searchQuery)
      
      console.log(`Fetching ${searchMode}s from API...`)
      const apiEndpoint = searchMode === 'market' ? '/api/markets' : '/api/vendors'
      const response = await fetch(`${apiEndpoint}?${params}`)
      const data = await response.json()
      
      console.log(`${searchMode} API response:`, data)
      
      if (response.ok) {
        const items = searchMode === 'market' ? data.markets : data.vendors
        console.log(`Found ${items?.length || 0} ${searchMode}s`)
        
        if (items) {
          setMarkets(items) // We'll rename this to setItems later
          addMarkersToMap(items)
        } else {
          console.warn(`No ${searchMode}s found in response`)
          setMarkets([])
        }
      } else {
        console.error(`Failed to fetch ${searchMode}s:`, data.error)
        setMarkets([])
      }
    } catch (error) {
      console.error(`Error fetching ${searchMode}s:`, error)
      setMarkets([])
    }
  }

  const addMarkersToMap = (itemsData: any[]) => {
    if (!map.current) {
      console.warn('Map not initialized, cannot add markers')
      return
    }

    console.log(`Adding ${itemsData.length} markers to map for ${searchMode}s`)

    // Clear existing markers
    const existingMarkers = document.querySelectorAll('.mapboxgl-marker')
    existingMarkers.forEach(marker => marker.remove())
    console.log(`Cleared ${existingMarkers.length} existing markers`)

    let validItems = 0
    itemsData.forEach((item) => {
      if (!item.lat || !item.lng) {
        console.warn(`${searchMode} ${item.name} missing coordinates:`, item)
        return
      }

      validItems++
      
      // Different colors for markets vs vendors
      const markerColor = searchMode === 'market' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
      const buttonColor = searchMode === 'market' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'

      // Create marker element
      const el = document.createElement('div')
      el.className = 'marker'
      el.innerHTML = `
        <div class="w-8 h-8 ${markerColor} rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer transition-colors">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
        </div>
      `

      // Create popup with appropriate content
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: true,
        closeOnClick: false
      }).setHTML(`
        <div class="p-3 max-w-xs">
          <h3 class="font-semibold text-lg mb-1">${item.name}</h3>
          <p class="text-gray-600 text-sm mb-2">${item.city || ''}, ${item.state || ''}</p>
          ${item.description ? `<p class="text-gray-700 text-sm mb-3 line-clamp-2">${item.description}</p>` : ''}
          <button 
            onclick="window.location.href='/${searchMode}s/${item.id}'" 
            class="${buttonColor} text-white px-3 py-1 rounded text-sm transition-colors"
          >
            View Details
          </button>
        </div>
      `)

      // Add marker to map
      new mapboxgl.Marker(el)
        .setLngLat([item.lng, item.lat])
        .setPopup(popup)
        .addTo(map.current!)
    })
    
    console.log(`Successfully added ${validItems} markers to map`)

    // Fit map to markers if there are any
    if (itemsData.length > 0) {
      const coordinates = itemsData
        .filter(item => item.lat && item.lng)
        .map(item => [item.lng, item.lat] as [number, number])
      
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

  const handleStyleChange = (newStyle: keyof typeof MAP_STYLES) => {
    setCurrentMapStyle(newStyle)
    setShowStyleSelector(false)
    setLoading(true)
  }

  // Get friendly names for map styles
  const getStyleDisplayName = (style: keyof typeof MAP_STYLES): string => {
    const names: Record<keyof typeof MAP_STYLES, string> = {
      mapbox_streets: 'Mapbox Streets',
      mapbox_satellite: 'Mapbox Satellite',
      osm_bright: 'OSM Bright',
      streets: 'Streets',
      basic: 'Basic',
      positron: 'Positron',
      satellite: 'Satellite',
    }
    return names[style]
  }

  useEffect(() => {
    if (map.current && !loading) {
      fetchAndDisplayMarkers()
    }
  }, [searchQuery, searchMode])

  // Handle click outside style selector
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (styleSelectorRef.current && !styleSelectorRef.current.contains(event.target as Node)) {
        setShowStyleSelector(false)
      }
    }

    if (showStyleSelector) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showStyleSelector])

  if (error || (!MAPTILER_KEY && (!MAPBOX_TOKEN || MAPBOX_TOKEN.includes('test-token')))) {
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
            {error ? 'Map temporarily unavailable' : 
             searchMode === 'market' ? `Showing ${searchQuery ? 'search results for markets' : 'Brisbane area markets'}` : 'Vendor search coming soon'}
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
      
      {/* Style Selector */}
      <div className="absolute top-4 right-4 z-10">
        <div className="relative" ref={styleSelectorRef}>
          <button
            onClick={() => setShowStyleSelector(!showStyleSelector)}
            className="bg-white rounded-lg shadow-md p-2 hover:bg-gray-50 transition-colors flex items-center space-x-2"
            title="Change map style"
          >
            <Layers className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700 hidden sm:inline">{getStyleDisplayName(currentMapStyle)}</span>
          </button>
          
          {showStyleSelector && (
            <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border py-1 min-w-48">
              {Object.keys(MAP_STYLES).map((style) => {
                const styleKey = style as keyof typeof MAP_STYLES
                const isMapboxStyle = style.startsWith('mapbox_')
                const hasMapboxToken = MAPBOX_TOKEN && !MAPBOX_TOKEN.includes('test-token')
                const hasMapTilerKey = MAPTILER_KEY
                
                // Show style if it's available
                const isAvailable = isMapboxStyle ? hasMapboxToken : hasMapTilerKey
                
                return (
                  <button
                    key={style}
                    onClick={() => isAvailable && handleStyleChange(styleKey)}
                    disabled={!isAvailable}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      currentMapStyle === styleKey 
                        ? 'bg-green-50 text-green-700 font-medium' 
                        : isAvailable
                          ? 'text-gray-700 hover:bg-gray-50'
                          : 'text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {getStyleDisplayName(styleKey)}
                    {!isAvailable && <span className="text-xs ml-2">(requires {isMapboxStyle ? 'Mapbox' : 'MapTiler'} key)</span>}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}