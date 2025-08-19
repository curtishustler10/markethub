'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { MapPin, Search, Calendar, ExternalLink, LogOut } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Market {
  id: string
  name: string
  description: string
  city: string
  state: string
  status: string
  created_at: string
  events: Array<{
    id: string
    start_date: string
    end_date: string
  }>
}

export default function VendorBrowsePage() {
  const [markets, setMarkets] = useState<Market[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [profile, setProfile] = useState<any>(null)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    loadProfileAndMarkets()
  }, [])

  const loadProfileAndMarkets = async () => {
    try {
      const supabase = createClient()
      
      // Get current user and their profile
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        window.location.href = '/auth/login'
        return
      }

      const { data: userProfile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      
      setProfile(userProfile)

      // Load markets
      const { data: marketsData, error } = await supabase
        .from('markets')
        .select(`
          *,
          events (
            id,
            start_date,
            end_date
          )
        `)
        .eq('status', 'live')
        .order('created_at', { ascending: false })

      if (error) throw error
      setMarkets(marketsData || [])
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load markets",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleApply = async (marketId: string) => {
    try {
      const response = await fetch('/api/vendor/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          market_id: marketId,
          message: 'I am interested in joining this market.'
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error)
      }

      toast({
        title: "Application Submitted",
        description: "Your application has been sent to the market organizer.",
      })

      // Optionally reload markets to reflect application status
      loadProfileAndMarkets()
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    }
  }

  const filteredMarkets = markets.filter(market =>
    market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    market.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    market.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  const handleLogout = async () => {
    try {
      const supabase = createClient()
      await supabase.auth.signOut()
      router.push('/')
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading markets...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Browse Markets</h1>
              <p className="text-gray-600">Find and apply to local farmers markets</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {profile?.name}
              </span>
              <Link href="/vendor/applications">
                <Button variant="outline">My Applications</Button>
              </Link>
              <Link href="/vendor/profile">
                <Button>Profile</Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-600"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-green-900 mb-2">
            Welcome{profile?.name ? `, ${profile.name}` : ''}!
          </h2>
          <p className="text-green-700">
            Browse available farmers markets and submit applications to join. Make sure to complete your vendor profile before applying.
          </p>
        </div>

        {/* Search */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search markets by name, location, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Markets Grid */}
        {filteredMarkets.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No markets found</h3>
            <p className="text-gray-500">
              {searchTerm ? 'Try adjusting your search terms.' : 'No markets are currently available for applications.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMarkets.map((market) => (
              <Card key={market.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{market.name}</CardTitle>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {market.status}
                    </Badge>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{market.city}, {market.state}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {market.description}
                  </CardDescription>
                  
                  {market.events && market.events.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Upcoming Events</span>
                      </div>
                      <div className="space-y-1">
                        {market.events.slice(0, 2).map((event) => (
                          <div key={event.id} className="text-xs text-gray-500">
                            {formatDate(event.start_date)} - {formatDate(event.end_date)}
                          </div>
                        ))}
                        {market.events.length > 2 && (
                          <div className="text-xs text-gray-400">
                            +{market.events.length - 2} more events
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      onClick={() => handleApply(market.id)}
                      className="flex-1"
                    >
                      Apply
                    </Button>
                    <Link href={`/markets/${market.id}`}>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}