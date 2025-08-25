'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Search, 
  Filter,
  Clock,
  Check,
  X,
  Eye,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText
} from 'lucide-react'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'

export default function OrganizerApplicationsPage() {
  const [applications, setApplications] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTab, setSelectedTab] = useState('all')
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    loadApplications()
  }, [selectedTab])

  const loadApplications = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (selectedTab !== 'all') {
        params.set('status', selectedTab)
      }
      
      const response = await fetch(`/api/organizer/applications?${params}`)
      if (response.ok) {
        const data = await response.json()
        setApplications(data.applications || [])
      } else {
        console.error('Failed to load applications')
      }
    } catch (error) {
      console.error('Error loading applications:', error)
    } finally {
      setLoading(false)
    }
  }
  
  const filteredApplications = applications.filter(app => {
    const vendorName = app.vendor?.name || ''
    const marketName = app.market?.name || ''
    const category = app.category || ''
    
    const matchesSearch = vendorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         marketName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         category.toLowerCase().includes(searchQuery.toLowerCase())
    
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

  const handleDecision = async (applicationId: string, decision: 'accepted' | 'refused' | 'not_now', message?: string) => {
    try {
      const response = await fetch(`/api/vendor-apps/${applicationId}/decision`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: decision,
          message: message || undefined
        })
      })

      if (response.ok) {
        // Update local state
        setApplications(prev => 
          prev.map(app => 
            app.id === applicationId 
              ? { ...app, status: decision, message, decided_at: new Date().toISOString() }
              : app
          )
        )
      } else {
        console.error('Failed to update application status')
        // TODO: Show error toast
      }
    } catch (error) {
      console.error('Error updating application:', error)
      // TODO: Show error toast
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
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Vendor Applications</h1>
          <p className="text-muted-foreground">
            Review and manage vendor applications for your markets.
          </p>
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
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All ({tabCounts.all})</TabsTrigger>
            <TabsTrigger value="submitted">Pending ({tabCounts.submitted})</TabsTrigger>
            <TabsTrigger value="accepted">Accepted ({tabCounts.accepted})</TabsTrigger>
            <TabsTrigger value="refused">Refused ({tabCounts.refused})</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedTab} className="space-y-4">
            {loading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <Card key={i} className="animate-pulse">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <div className="space-y-2 flex-1">
                          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                        </div>
                      </div>
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
            ) : filteredApplications.length === 0 ? (
              <Card className="p-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <FileText className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">No applications found</h3>
                    <p className="text-muted-foreground">
                      {searchQuery ? 'Try adjusting your search terms.' : 'No applications match the selected criteria.'}
                    </p>
                  </div>
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
                              {(application.vendor?.name || 'V').split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              {application.vendor?.name || 'Unknown Vendor'}
                              <Badge className={getStatusColor(application.status)}>
                                {application.status}
                              </Badge>
                            </CardTitle>
                            <CardDescription className="space-y-1">
                              <div className="flex items-center gap-4 text-sm">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {application.market?.name || 'Unknown Market'}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {new Date(application.created_at).toLocaleDateString()}
                                </span>
                              </div>
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {application.status === 'submitted' && (
                            <>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-green-600 border-green-200 hover:bg-green-50"
                                onClick={() => handleDecision(application.id, 'accepted')}
                              >
                                <Check className="w-4 h-4 mr-1" />
                                Accept
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 border-red-200 hover:bg-red-50"
                                onClick={() => handleDecision(application.id, 'refused')}
                              >
                                <X className="w-4 h-4 mr-1" />
                                Refuse
                              </Button>
                            </>
                          )}
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <h4 className="font-medium">Contact Information</h4>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <div className="flex items-center gap-2">
                              <Mail className="w-3 h-3" />
                              {application.vendor?.email || 'No email provided'}
                            </div>
                            {application.vendor?.phone && (
                              <div className="flex items-center gap-2">
                                <Phone className="w-3 h-3" />
                                {application.vendor.phone}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">Application Details</h4>
                          <div className="flex flex-wrap gap-1">
                            {application.category && (
                              <Badge variant="outline">{application.category}</Badge>
                            )}
                            {application.stall_preferences?.size && (
                              <Badge variant="outline">{application.stall_preferences.size} stall</Badge>
                            )}
                            {application.stall_preferences?.power_required && (
                              <Badge variant="outline">Power required</Badge>
                            )}
                            <Badge variant="outline" className="capitalize">
                              {application.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      {application.message && (
                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Application Message</h4>
                          <p className="text-sm text-muted-foreground bg-muted p-3 rounded-md">
                            {application.message}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}