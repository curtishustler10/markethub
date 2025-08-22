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
  const [applications, setApplications] = useState([
    {
      id: '1',
      vendorName: 'Fresh Valley Produce',
      vendorEmail: 'hello@freshvalley.com',
      vendorPhone: '(07) 1234 5678',
      marketName: 'Brisbane Riverside Market',
      category: 'Fresh Produce',
      status: 'submitted',
      appliedAt: '2024-01-15T10:30:00Z',
      message: 'We are a family-owned farm specializing in organic vegetables and seasonal fruits. We would love to bring fresh, local produce to your market.',
      documents: ['food_licence', 'public_liability'],
      siteSize: '6x3',
      powerRequired: true
    },
    {
      id: '2',
      vendorName: 'Artisan Bread Co.',
      vendorEmail: 'baker@artisanbread.com',
      vendorPhone: '(07) 2345 6789',
      marketName: 'Brisbane Riverside Market',
      category: 'Baked Goods',
      status: 'accepted',
      appliedAt: '2024-01-12T14:20:00Z',
      message: 'Traditional sourdough bakery with 15 years experience. All breads made with organic flour and traditional methods.',
      documents: ['food_licence', 'public_liability'],
      siteSize: '3x3',
      powerRequired: false
    },
    {
      id: '3',
      vendorName: 'Garden Blooms',
      vendorEmail: 'info@gardenblooms.com',
      vendorPhone: '(07) 3456 7890',
      marketName: 'Northside Community Fair',
      category: 'Plants & Flowers',
      status: 'refused',
      appliedAt: '2024-01-10T09:15:00Z',
      message: 'Local nursery specializing in native Australian plants and cut flowers.',
      documents: ['public_liability'],
      siteSize: '6x3',
      powerRequired: false
    }
  ])
  
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTab, setSelectedTab] = useState('all')
  
  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.vendorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.marketName.toLowerCase().includes(searchQuery.toLowerCase()) ||
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

  const handleDecision = async (applicationId: string, decision: 'accepted' | 'refused' | 'not_now') => {
    setApplications(prev => 
      prev.map(app => 
        app.id === applicationId 
          ? { ...app, status: decision }
          : app
      )
    )
    // TODO: Implement API call to update application status
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
            {filteredApplications.length === 0 ? (
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
                              {application.vendorName.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              {application.vendorName}
                              <Badge className={getStatusColor(application.status)}>
                                {application.status}
                              </Badge>
                            </CardTitle>
                            <CardDescription className="space-y-1">
                              <div className="flex items-center gap-4 text-sm">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {application.marketName}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {new Date(application.appliedAt).toLocaleDateString()}
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
                              {application.vendorEmail}
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-3 h-3" />
                              {application.vendorPhone}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">Requirements</h4>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="outline">{application.category}</Badge>
                            <Badge variant="outline">{application.siteSize} site</Badge>
                            {application.powerRequired && (
                              <Badge variant="outline">Power required</Badge>
                            )}
                            <Badge variant="outline">{application.documents.length} docs</Badge>
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