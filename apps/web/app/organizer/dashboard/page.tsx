'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Users, 
  Calendar, 
  MapPin, 
  Plus, 
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  Building,
  FileText
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useToast } from '@/components/ui/use-toast'
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

interface VendorApplication {
  id: string
  message: string
  status: 'pending' | 'approved' | 'rejected'
  created_at: string
  vendor: {
    id: string
    name: string
    email: string
  }
  market: {
    id: string
    name: string
  }
}

export default function OrganizerDashboardPage() {
  const [markets, setMarkets] = useState<Market[]>([])
  const [applications, setApplications] = useState<VendorApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<any>(null)
  const { toast } = useToast()

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
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
      const { data: marketsData, error: marketsError } = await supabase
        .from('markets')
        .select(`
          *,
          events (
            id,
            start_date,
            end_date
          )
        `)
        .eq('owner_id', userProfile?.id)
        .order('created_at', { ascending: false })

      if (marketsError) throw marketsError
      setMarkets(marketsData || [])

      // Load applications for user's markets
      if (marketsData && marketsData.length > 0) {
        const marketIds = marketsData.map(m => m.id)
        const { data: applicationsData, error: applicationsError } = await supabase
          .from('vendor_applications')
          .select(`
            *,
            vendor:profiles!vendor_id (
              id,
              name,
              email
            ),
            market:markets!market_id (
              id,
              name
            )
          `)
          .in('market_id', marketIds)
          .order('created_at', { ascending: false })

        if (applicationsError) throw applicationsError
        setApplications(applicationsData || [])
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleApplicationDecision = async (applicationId: string, decision: 'approved' | 'rejected') => {
    try {
      const response = await fetch(`/api/vendor-apps/${applicationId}/decision`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: decision,
          message: `Application has been ${decision}.`
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error)
      }

      toast({
        title: "Decision Recorded",
        description: `Application has been ${decision}.`,
      })

      // Reload applications
      loadDashboardData()
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: 'default' | 'secondary' | 'destructive' } = {
      pending: 'default',
      approved: 'secondary', 
      rejected: 'destructive'
    }
    return (
      <Badge variant={variants[status] || 'default'}>
        {status}
      </Badge>
    )
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-600" />
      default:
        return <Clock className="w-4 h-4 text-yellow-600" />
    }
  }

  const pendingApplications = applications.filter(app => app.status === 'pending')
  const totalVendors = applications.filter(app => app.status === 'approved').length

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
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
              <h1 className="text-3xl font-bold text-gray-900">Organizer Dashboard</h1>
              <p className="text-gray-600">Manage your markets and vendor applications</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/organizer/create-market">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Market
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            Welcome back{profile?.name ? `, ${profile.name}` : ''}!
          </h2>
          <p className="text-blue-700">
            Here's an overview of your markets and pending vendor applications.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Markets</p>
                  <p className="text-3xl font-bold text-gray-900">{markets.length}</p>
                </div>
                <Building className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Vendors</p>
                  <p className="text-3xl font-bold text-gray-900">{totalVendors}</p>
                </div>
                <Users className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Applications</p>
                  <p className="text-3xl font-bold text-gray-900">{pendingApplications.length}</p>
                </div>
                <FileText className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Applications</p>
                  <p className="text-3xl font-bold text-gray-900">{applications.length}</p>
                </div>
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="markets" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="markets">My Markets</TabsTrigger>
            <TabsTrigger value="applications">Vendor Applications</TabsTrigger>
          </TabsList>

          {/* Markets Tab */}
          <TabsContent value="markets" className="space-y-6">
            {markets.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No markets yet</h3>
                <p className="text-gray-500 mb-4">Create your first farmers market to get started.</p>
                <Link href="/organizer/create-market">
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Market
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {markets.map((market) => (
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
                        <Link href={`/organizer/markets/${market.id}`}>
                          <Button size="sm" className="flex-1">
                            <Eye className="w-4 h-4 mr-1" />
                            Manage
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            {applications.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No applications yet</h3>
                <p className="text-gray-500">Vendor applications will appear here when submitted.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {applications.map((application) => (
                  <Card key={application.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{application.vendor.name}</CardTitle>
                          <CardDescription>
                            Applied to {application.market.name} • {formatDate(application.created_at)}
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(application.status)}
                          {getStatusBadge(application.status)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{application.message}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          Contact: {application.vendor.email}
                        </div>
                        {application.status === 'pending' && (
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleApplicationDecision(application.id, 'rejected')}
                            >
                              Reject
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleApplicationDecision(application.id, 'approved')}
                            >
                              Approve
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}