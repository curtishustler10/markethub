'use client'

import { useState, useEffect, useRef } from 'react'
import { MapPin, Store, User, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import InteractiveMap, { InteractiveMapRef } from './interactive-map'

interface Market {
  id: string
  name: string
  city: string
  state: string
  description?: string
  amenities?: Record<string, any>
  events?: Array<{ start_date: string; notes?: string }>
  lat: number
  lng: number
}

interface Vendor {
  id: string
  business_name: string
  category: string
  region: string
  products_summary?: string
  website?: string
  lat: number
  lng: number
  city: string
  state: string
  phone?: string
  email?: string
}

interface MapWithListProps {
  searchMode: 'market' | 'vendor'
  searchQuery?: string
  className?: string
}

// Add ref to access the map instance
interface MapRef extends InteractiveMapRef {}

export default function MapWithList({ searchMode, searchQuery, className = '' }: MapWithListProps) {
  const [items, setItems] = useState<(Market | Vendor)[]>([])
  const [loading, setLoading] = useState(false)
  const [filteredItems, setFilteredItems] = useState<(Market | Vendor)[]>([])
  const [sortBy, setSortBy] = useState<'name' | 'location' | 'date'>('name')
  const mapRef = useRef<MapRef>(null)

  useEffect(() => {
    fetchItems()
  }, [searchMode, searchQuery])

  useEffect(() => {
    // Apply search filter
    if (!searchQuery) {
      setFilteredItems(items)
    } else {
      const filtered = items.filter(item => {
        if (searchMode === 'market') {
          const market = item as Market
          return (
            market.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            market.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
            market.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
            market.description?.toLowerCase().includes(searchQuery.toLowerCase())
          )
        } else {
          const vendor = item as Vendor
          return (
            vendor.business_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            vendor.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            vendor.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
            vendor.products_summary?.toLowerCase().includes(searchQuery.toLowerCase())
          )
        }
      })
      setFilteredItems(filtered)
    }
  }, [items, searchQuery, searchMode])

  const fetchItems = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (searchQuery) params.set('search', searchQuery)
      
      const apiEndpoint = searchMode === 'market' ? '/api/markets' : '/api/vendors'
      const response = await fetch(`${apiEndpoint}?${params}`)
      const data = await response.json()
      
      if (response.ok) {
        const fetchedItems = searchMode === 'market' ? data.markets : data.vendors
        setItems(fetchedItems || [])
        setFilteredItems(fetchedItems || [])
      } else {
        console.error(`Failed to fetch ${searchMode}s:`, data.error)
        setItems([])
        setFilteredItems([])
      }
    } catch (error) {
      console.error(`Error fetching ${searchMode}s:`, error)
      setItems([])
      setFilteredItems([])
    } finally {
      setLoading(false)
    }
  }

  const sortItems = (itemsToSort: (Market | Vendor)[]) => {
    return [...itemsToSort].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          if (searchMode === 'market') {
            return (a as Market).name.localeCompare((b as Market).name)
          } else {
            return (a as Vendor).business_name.localeCompare((b as Vendor).business_name)
          }
        case 'location':
          if (searchMode === 'market') {
            const marketA = a as Market
            const marketB = b as Market
            return `${marketA.city}, ${marketA.state}`.localeCompare(`${marketB.city}, ${marketB.state}`)
          } else {
            return (a as Vendor).region.localeCompare((b as Vendor).region)
          }
        case 'date':
          // For markets, sort by next event date
          if (searchMode === 'market') {
            const marketA = a as Market
            const marketB = b as Market
            const nextEventA = marketA.events?.[0]?.start_date || '9999-12-31'
            const nextEventB = marketB.events?.[0]?.start_date || '9999-12-31'
            return nextEventA.localeCompare(nextEventB)
          }
          return 0
        default:
          return 0
      }
    })
  }

  const sortedItems = sortItems(filteredItems)

  const renderMarketCard = (market: Market) => (
    <Card key={market.id} className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg leading-tight">{market.name}</CardTitle>
          <Badge variant="secondary" className="ml-2 flex-shrink-0">
            {market.state}
          </Badge>
        </div>
        <CardDescription className="flex items-center text-sm">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="truncate">{market.city}, {market.state}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        {market.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {market.description}
          </p>
        )}
        
        {market.amenities && Object.keys(market.amenities).length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-medium text-gray-500 mb-2">Amenities:</p>
            <div className="flex flex-wrap gap-1">
              {Object.entries(market.amenities).slice(0, 3).map(([key, value]) => (
                value && (
                  <Badge key={key} variant="outline" className="text-xs">
                    {key.replace('_', ' ')}
                  </Badge>
                )
              ))}
              {Object.keys(market.amenities).length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{Object.keys(market.amenities).length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}

        {market.events && market.events.length > 0 && (
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="w-3 h-3 mr-1" />
            <span>Next: {new Date(market.events[0].start_date).toLocaleDateString()}</span>
          </div>
        )}

        <div className="mt-3 flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => {
              // Focus map on this market
              if (mapRef.current && market.lat && market.lng) {
                mapRef.current.focusOnMarket(market.lat, market.lng, market.name)
              }
            }}
          >
            Focus on Map
          </Button>
          <Button 
            size="sm" 
            className="flex-1 bg-green-600 hover:bg-green-700"
            onClick={() => window.location.href = `/markets/${market.id}/apply`}
          >
            Apply
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  const renderVendorCard = (vendor: Vendor) => (
    <Card key={vendor.id} className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg leading-tight">{vendor.business_name}</CardTitle>
          <Badge variant="secondary" className="ml-2 flex-shrink-0 capitalize">
            {vendor.category}
          </Badge>
        </div>
        <CardDescription className="flex items-center text-sm">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="truncate">{vendor.region}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        {vendor.products_summary && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {vendor.products_summary}
          </p>
        )}
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span className="capitalize">{vendor.category}</span>
          {vendor.website && (
            <a 
              href={vendor.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700"
            >
              Visit Website
            </a>
          )}
        </div>

        <div className="mt-3 flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => {
              // Focus map on this vendor
              if (mapRef.current && vendor.lat && vendor.lng) {
                mapRef.current.focusOnMarket(vendor.lat, vendor.lng, vendor.business_name)
              }
            }}
          >
            Focus on Map
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => window.location.href = `/vendors/${vendor.id}`}
          >
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className={`${className}`}>
      {/* Side-by-side layout: Map on left, List on right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
        {/* Left Side - Map */}
        <div className="space-y-4">
          <InteractiveMap 
            ref={mapRef}
            searchMode={searchMode}
            searchQuery={searchQuery}
            className="w-full h-full"
          />
        </div>

        {/* Right Side - List */}
        <div className="space-y-4 overflow-y-auto">
          {/* List Header */}
          <div className="bg-white rounded-lg p-4 shadow-sm border sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {searchMode === 'market' ? (
                  <Store className="w-5 h-5 text-green-600" />
                ) : (
                  <User className="w-5 h-5 text-blue-600" />
                )}
                <div>
                  <h3 className="font-medium text-gray-900">
                    {searchMode === 'market' ? 'Markets' : 'Vendors'}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {filteredItems.length} {searchMode === 'market' ? 'markets' : 'vendors'} found
                  </p>
                </div>
              </div>
              
              {/* Sort Options */}
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'location' | 'date')}
                  className="text-xs border rounded px-2 py-1"
                >
                  <option value="name">Name</option>
                  <option value="location">Location</option>
                  {searchMode === 'market' && <option value="date">Next Event</option>}
                </select>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
              <p className="text-gray-500">Loading {searchMode === 'market' ? 'markets' : 'vendors'}...</p>
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {searchMode === 'market' ? (
                  <Store className="w-8 h-8 text-gray-400" />
                ) : (
                  <User className="w-8 h-8 text-gray-400" />
                )}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No {searchMode === 'market' ? 'markets' : 'vendors'} found
              </h3>
              <p className="text-gray-600 mb-4">
                {searchQuery 
                  ? `No ${searchMode === 'market' ? 'markets' : 'vendors'} match your search criteria`
                  : `No ${searchMode === 'market' ? 'markets' : 'vendors'} available at the moment`
                }
              </p>
              {searchQuery && (
                <Button 
                  variant="outline" 
                  onClick={() => window.location.reload()}
                >
                  Clear Search
                </Button>
              )}
            </div>
          )}

          {/* Items List */}
          {!loading && filteredItems.length > 0 && (
            <div className="space-y-4">
              {sortedItems.map((item) => 
                searchMode === 'market' 
                  ? renderMarketCard(item as Market)
                  : renderVendorCard(item as Vendor)
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
