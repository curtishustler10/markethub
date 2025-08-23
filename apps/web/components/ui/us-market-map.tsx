'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import type { Map as MapboxMap, LngLatBoundsLike } from 'mapbox-gl'
import statesData from '../../data/us-states.json'
import marketsData from '../../data/markets.json'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.eyJ1IjoibWFya2V0aHViLXRlc3QiLCJhIjoiY2xrOXgxMjNkMDAwMDNlbjBxN2N6OHNrMSJ9.test-token'

interface Market {
  id: number
  name: string
  state: string
  coordinates: [number, number]
}

export default function USMarketMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<MapboxMap | null>(null)
  const markers = useRef<mapboxgl.Marker[]>([])
  const [selectedState, setSelectedState] = useState<string | null>(null)

  useEffect(() => {
    if (!mapContainer.current) return
    mapboxgl.accessToken = MAPBOX_TOKEN

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-98, 38.88],
      zoom: 3
    })

    map.current.on('load', () => {
      map.current!.addSource('states', {
        type: 'geojson',
        data: statesData as any
      })

      map.current!.addLayer({
        id: 'state-fills',
        type: 'fill',
        source: 'states',
        paint: {
          'fill-color': '#627BC1',
          'fill-opacity': 0.1
        }
      })

      map.current!.addLayer({
        id: 'state-borders',
        type: 'line',
        source: 'states',
        paint: {
          'line-color': '#fff',
          'line-width': 1
        }
      })

      map.current!.on('click', 'state-fills', (e) => {
        const feature = e.features && e.features[0]
        if (!feature) return
        const stateName = feature.properties?.name as string
        setSelectedState(stateName)
        map.current!.setFilter('state-fills', ['==', ['get', 'name'], stateName])
        const bounds = featureToBounds(feature)
        map.current!.fitBounds(bounds, { padding: 20, duration: 1000 })
        showMarkets(stateName)
      })

      map.current!.on('mouseenter', 'state-fills', () => {
        map.current!.getCanvas().style.cursor = 'pointer'
      })
      map.current!.on('mouseleave', 'state-fills', () => {
        map.current!.getCanvas().style.cursor = ''
      })
    })

    return () => {
      map.current?.remove()
    }
  }, [])

  const featureToBounds = (feature: any): LngLatBoundsLike => {
    const coords = feature.geometry.coordinates
    const bounds = { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity }
    const traverse = (c: any) => {
      if (typeof c[0] === 'number') {
        const [x, y] = c
        if (x < bounds.minX) bounds.minX = x
        if (y < bounds.minY) bounds.minY = y
        if (x > bounds.maxX) bounds.maxX = x
        if (y > bounds.maxY) bounds.maxY = y
      } else {
        c.forEach(traverse)
      }
    }
    traverse(coords)
    return [[bounds.minX, bounds.minY], [bounds.maxX, bounds.maxY]]
  }

  const showMarkets = (stateName: string) => {
    markers.current.forEach(m => m.remove())
    markers.current = []
    const markets = (marketsData as Market[]).filter(m => m.state === stateName)
    markets.forEach(m => {
      const marker = new mapboxgl.Marker({ color: '#FF0000' })
        .setLngLat(m.coordinates)
        .addTo(map.current!)
      markers.current.push(marker)
    })
  }

  const reset = () => {
    setSelectedState(null)
    markers.current.forEach(m => m.remove())
    markers.current = []
    map.current?.setFilter('state-fills', null)
    map.current?.flyTo({ center: [-98, 38.88], zoom: 3, duration: 1000 })
  }

  return (
    <div className="w-full">
      <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />
      {selectedState && (
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={reset}
        >
          Reset
        </button>
      )}
    </div>
  )
}
