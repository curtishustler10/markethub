'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Search, 
  Plus,
  Clock,
  Check,
  X,
  Eye,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  AlertCircle,
  Send
} from 'lucide-react'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'

export default function VendorApplicationsPage() {
  const [applications, setApplications] = useState([
    {
      id: '1',
      marketName: 'Brisbane Riverside Market',
      organizerName: 'Sarah Chen',
      organizerEmail: 'sarah@brisbanemarket.com',
      status: 'submitted',
      appliedAt: '2024-01-15T10:30:00Z',
      message: 'We are a family-owned farm specializing in organic vegetables and seasonal fruits. We would love to bring fresh, local produce to your market.',
      siteSize: '6x3',
      powerRequired: true,
      category: 'Fresh Produce',
      city: 'Brisbane',
      state: 'QLD',
      nextEventDate: '2024-02-03T08:00:00Z',
      stallFee: 85
    },
    {
      id: '2',
      marketName: 'Northside Community Fair',
      organizerName: 'Mike Johnson',
      organizerEmail: 'mike@northsidemarket.org',
      status: 'accepted',
      appliedAt: '2024-01-12T14:20:00Z',
      message: 'Traditional sourdough bakery with 15 years experience. All breads made with organic flour and traditional methods.',
      siteSize: '3x3',
      powerRequired: false,
      category: 'Baked Goods',
      city: 'Brisbane',
      state: 'QLD',
      nextEventDate: '2024-01-28T07:00:00Z',
      stallFee: 65
    },
    {
      id: '3',
      marketName: 'Gold Coast Farmers Market',
      organizerName: 'Emma Wilson',
      organizerEmail: 'emma@gcfarmers.com',
      status: 'refused',
      appliedAt: '2024-01-10T09:15:00Z',
      message: 'Local nursery specializing in native Australian plants and cut flowers.',
      refusalReason: 'Unfortunately, we already have sufficient flower vendors for this season.',
      siteSize: '6x3',
      powerRequired: false,
      category: 'Plants & Flowers',
      city: 'Gold Coast',
      state: 'QLD',
      nextEventDate: '2024-02-10T08:30:00Z',
      stallFee: 95
    }
  ])
  
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTab, setSelectedTab] = useState('all')
  
  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.marketName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.category.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesTab = selectedTab === 'all' || app.status === selectedTab
    
    return matchesSearch && matchesTab
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-blue-100 text-blue-800 hover:bg-blue-200'
      case 'accepted': return 'bg-green-100 text-green-800 hover:bg-green-200'
      case 'refused': return 'bg-red-100 text-red-800 hover:bg-red-200'
      case 'not_now': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'submitted': return <Clock className="w-3 h-3" />
      case 'accepted': return <Check className="w-3 h-3" />
      case 'refused': return <X className="w-3 h-3" />
      case 'not_now': return <AlertCircle className="w-3 h-3" />
      default: return null
    }
  }

  const getTabCounts = () => {
    return {
      all: applications.length,
      submitted: applications.filter(app => app.status === 'submitted').length,
      accepted: applications.filter(app => app.status === 'accepted').length,
      refused: applications.filter(app => app.status === 'refused').length,
    }
  }

  const tabCounts = getTabCounts()

  return (
    <DashboardShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Applications</h1>
            <p className="text-muted-foreground">
              Track your market applications and manage your vendor bookings.
            </p>
          </div>
          <Button asChild>
            <Link href="/markets">
              <Plus className="w-4 h-4 mr-2" />
              Apply to Market
            </Link>
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search applications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All ({tabCounts.all})</TabsTrigger>
            <TabsTrigger value="submitted">Pending ({tabCounts.submitted})</TabsTrigger>
            <TabsTrigger value="accepted">Accepted ({tabCounts.accepted})</TabsTrigger>
            <TabsTrigger value="refused">Declined ({tabCounts.refused})</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedTab} className="space-y-4">
            {filteredApplications.length === 0 ? (
              <Card className="p-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <FileText className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">No applications found</h3>
                    <p className="text-muted-foreground">
                      {searchQuery ? 'Try adjusting your search terms.' : 'You haven\'t applied to any markets yet.'}
                    </p>
                  </div>
                  {!searchQuery && (
                    <Button asChild>
                      <Link href="/markets">
                        <Plus className="w-4 h-4 mr-2" />
                        Apply to Your First Market
                      </Link>
                    </Button>
                  )}
                </div>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredApplications.map((application) => (
                  <Card key={application.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarFallback>
                              {application.marketName.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              {application.marketName}
                              <Badge className={`${getStatusColor(application.status)} flex items-center gap-1`}>
                                {getStatusIcon(application.status)}
                                {application.status}
                              </Badge>
                            </CardTitle>
                            <CardDescription className="space-y-1">
                              <div className="flex items-center gap-4 text-sm">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {application.city}, {application.state}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  Applied {new Date(application.appliedAt).toLocaleDateString()}
                                </span>
                              </div>
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                          {application.status === 'accepted' && (
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <Send className="w-4 h-4 mr-1" />
                              Confirm Booking
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <h4 className="font-medium">Organizer Contact</h4>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <div className="flex items-center gap-2">
                              <Mail className="w-3 h-3" />
                              {application.organizerEmail}
                            </div>
                            <div className="font-medium">
                              {application.organizerName}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">Application Details</h4>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="outline">{application.category}</Badge>
                            <Badge variant="outline">{application.siteSize} site</Badge>
                            {application.powerRequired && (
                              <Badge variant="outline">Power required</Badge>
                            )}
                            <Badge variant="outline">${application.stallFee} fee</Badge>
                          </div>
                        </div>
                      </div>

                      {application.nextEventDate && (
                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Next Market Event</h4>
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <div className="flex items-center gap-2 text-blue-800">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">
                                {new Date(application.nextEventDate).toLocaleDateString('en-US', {
                                  weekday: 'long',
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </span>
                              <span className="text-sm">
                                at {new Date(application.nextEventDate).toLocaleTimeString('en-US', {
                                  hour: 'numeric',
                                  minute: '2-digit',
                                  hour12: true
                                })}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {application.message && (
                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Your Application Message</h4>
                          <p className="text-sm text-muted-foreground bg-muted p-3 rounded-md">
                            {application.message}
                          </p>
                        </div>
                      )}

                      {application.status === 'refused' && application.refusalReason && (
                        <div className="mt-4">
                          <h4 className="font-medium mb-2 text-red-700">Reason for Decline</h4>
                          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                            <p className="text-sm text-red-700">
                              {application.refusalReason}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <FileText className="w-8 h-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Applications</p>
                  <p className="text-2xl font-bold">{applications.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="w-8 h-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold">{tabCounts.submitted}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Check className="w-8 h-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Accepted</p>
                  <p className="text-2xl font-bold">{tabCounts.accepted}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Upcoming Events</p>
                  <p className="text-2xl font-bold">{applications.filter(a => a.status === 'accepted').length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}