'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  MapPin, 
  Plus, 
  Search, 
  Settings, 
  Calendar,
  Users,
  Eye,
  Edit3,
  MoreHorizontal
} from 'lucide-react'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function OrganizerMarketsPage() {
  const [markets, setMarkets] = useState([
    {
      id: '1',
      name: 'Brisbane Riverside Market',
      slug: 'brisbane-riverside-market',
      status: 'live',
      city: 'Brisbane',
      state: 'QLD',
      description: 'Weekly farmers market by the river featuring local produce and artisan goods.',
      applications: 12,
      events: 4,
      lastEvent: '2024-01-15'
    },
    {
      id: '2', 
      name: 'Northside Community Fair',
      slug: 'northside-community-fair',
      status: 'draft',
      city: 'Brisbane',
      state: 'QLD',
      description: 'Monthly community market supporting local businesses and families.',
      applications: 3,
      events: 1,
      lastEvent: '2024-01-08'
    }
  ])
  
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)

  const filteredMarkets = markets.filter(market => 
    market.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    market.city.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-100 text-green-800 hover:bg-green-200'
      case 'draft': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
      case 'paused': return 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    }
  }

  return (
    <DashboardShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Markets</h1>
            <p className="text-muted-foreground">
              Manage your markets, events, and vendor applications.
            </p>
          </div>
          <Button asChild>
            <Link href="/organizer/create-market">
              <Plus className="w-4 h-4 mr-2" />
              Create Market
            </Link>
          </Button>
        </div>

        {/* Search */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search markets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Markets Grid */}
        {filteredMarkets.length === 0 ? (
          <Card className="p-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">No markets found</h3>
                <p className="text-muted-foreground">
                  {searchQuery ? 'Try adjusting your search terms.' : "You haven't created any markets yet."}
                </p>
              </div>
              <Button asChild>
                <Link href="/organizer/create-market">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Market
                </Link>
              </Button>
            </div>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMarkets.map((market) => (
              <Card key={market.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="line-clamp-1">{market.name}</CardTitle>
                      <CardDescription className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {market.city}, {market.state}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(market.status)}>
                        {market.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={`/markets/${market.slug}`}>
                              <Eye className="w-4 h-4 mr-2" />
                              View Public Page
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={`/organizer/markets/${market.id}/edit`}>
                              <Edit3 className="w-4 h-4 mr-2" />
                              Edit Market
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link href={`/organizer/markets/${market.id}/settings`}>
                              <Settings className="w-4 h-4 mr-2" />
                              Settings
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {market.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-xl font-semibold text-primary">{market.applications}</div>
                      <div className="text-xs text-muted-foreground">Applications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-semibold text-primary">{market.events}</div>
                      <div className="text-xs text-muted-foreground">Events</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground">Last Event</div>
                      <div className="text-sm font-medium">
                        {new Date(market.lastEvent).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={`/organizer/applications?market=${market.id}`}>
                        <Users className="w-3 h-3 mr-1" />
                        Applications
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link href={`/organizer/markets/${market.id}/events`}>
                        <Calendar className="w-3 h-3 mr-1" />
                        Events
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <MapPin className="w-8 h-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Markets</p>
                  <p className="text-2xl font-bold">{markets.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Pending Applications</p>
                  <p className="text-2xl font-bold">{markets.reduce((sum, m) => sum + m.applications, 0)}</p>
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
                  <p className="text-2xl font-bold">{markets.reduce((sum, m) => sum + m.events, 0)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}