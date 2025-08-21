'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Search, Filter } from 'lucide-react'
import { LayoutProvider } from '@/components/providers/layout-provider'
import type { Market } from 'shared'

export default function MarketsPage() {
  const [markets, setMarkets] = useState<Market[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedState, setSelectedState] = useState('')

  const australianStates = [
    'NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'
  ]

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const params = new URLSearchParams()
        if (search) params.set('search', search)
        if (selectedState) params.set('state', selectedState)

        const response = await fetch(`/api/markets?${params}`)
        const data = await response.json()
        
        if (response.ok) {
          setMarkets(data.markets)
        }
      } catch (error) {
        console.error('Error fetching markets:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMarkets()
  }, [search, selectedState])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <LayoutProvider showHeader={true} showFooter={true}>
      <div className="min-h-screen bg-gray-50">

        {/* Page Header */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Local Markets</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find farmers markets, craft fairs, and food festivals in your area. Apply with confidence using your
                pre-verified documents.
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto max-w-4xl">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl mb-2">🔍</div>
                <h3 className="font-semibold">Find markets</h3>
                <p className="text-sm text-gray-600">In a click, find the local markets near you</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl mb-2">📧</div>
                <h3 className="font-semibold">Apply</h3>
                <p className="text-sm text-gray-600">Market applications just made easier, send application and get approved</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl mb-2">🫱🏻‍🫲🏾</div>
                <h3 className="font-semibold">Collaborate</h3>
                <p className="text-sm text-gray-600">Get seen by event organizer and manage your offers in one platform</p>
              </div>
            </div>
          </div>
        </section>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Available Markets
          </h2>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search markets by name or location..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </form>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">All States</option>
              {australianStates.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : markets.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No markets found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or browse all markets
            </p>
            <Button onClick={() => { setSearch(''); setSelectedState('') }}>
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((market) => (
              <Card key={market.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <span className="text-lg">{market.name}</span>
                    <Badge variant="secondary">{market.state}</Badge>
                  </CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {market.city}, {market.state}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {market.description}
                  </p>
                  
                  {market.amenities && Object.keys(market.amenities).length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-medium text-gray-500 mb-2">Amenities:</p>
                      <div className="flex flex-wrap gap-1">
                        {Object.entries(market.amenities).map(([key, value]) => (
                          value && (
                            <Badge key={key} variant="outline" className="text-xs">
                              {key.replace('_', ' ')}
                            </Badge>
                          )
                        ))}
                      </div>
                    </div>
                  )}

                  {market.events && market.events.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-medium text-gray-500 mb-2">
                        Next Event: {new Date(market.events[0].start_date).toLocaleDateString()}
                      </p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link href={`/markets/${market.slug}`}>View Details</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/auth/register?role=vendor">Apply</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to list your market?
          </h2>
          <p className="text-gray-600 mb-6">
            Join MarketHub to manage vendor applications and streamline your market operations
          </p>
          <Button asChild size="lg">
            <Link href="/auth/register?role=market_organizer">
              List Your Market
            </Link>
          </Button>
        </div>
      </main>
      </div>
    </LayoutProvider>
  )
}