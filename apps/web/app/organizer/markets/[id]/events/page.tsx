'use client'

import { useState, useEffect, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  ArrowLeft, 
  Plus, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  Eye,
  Edit,
  Trash2,
  Settings
} from 'lucide-react'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { EventsCalendar } from '@/components/events/events-calendar'
import { EventDrawer } from '@/components/events/event-drawer'
import { useToast } from '@/components/ui/use-toast'
import { createClient } from '@/lib/supabase/client'

interface Event {
  id: string
  title: string
  description?: string
  start_at: string
  end_at: string
  all_day: boolean
  location?: string
  tags?: string[]
  visibility: 'public' | 'private'
}

interface Market {
  id: string
  name: string
  description: string
  city: string
  state: string
  address: string
}

export default function MarketEventsPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const marketId = params.id as string
  
  const [market, setMarket] = useState<Market | null>(null)
  const [events, setEvents] = useState<Event[]>([])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month')
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isCreating, setIsCreating] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load market and events on mount
  useEffect(() => {
    loadMarketAndEvents()
  }, [marketId])

  const loadMarketAndEvents = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Load market details
      const marketResponse = await fetch(`/api/markets/${marketId}`)
      if (!marketResponse.ok) {
        if (marketResponse.status === 404) {
          throw new Error('Market not found')
        } else if (marketResponse.status === 403) {
          throw new Error('You do not have permission to manage this market')
        }
        throw new Error('Failed to load market')
      }
      
      const marketData = await marketResponse.json()
      setMarket(marketData)
      
      // Load events for current month range
      await loadEventsForRange(selectedDate)
      
    } catch (error: any) {
      console.error('Error loading market and events:', error)
      setError(error.message)
      
      if (error.message.includes('permission')) {
        toast({
          title: "Access Denied",
          description: "You don't have permission to manage events for this market.",
          variant: "destructive",
        })
      }
    } finally {
      setLoading(false)
    }
  }

  const loadEventsForRange = async (date: Date) => {
    try {
      // Calculate date range based on view mode
      const { from, to } = getDateRange(date, viewMode)
      
      const response = await fetch(`/api/markets/${marketId}/events?from=${from}&to=${to}`)
      if (!response.ok) throw new Error('Failed to load events')
      
      const eventsData = await response.json()
      setEvents(eventsData.items || [])
      
    } catch (error) {
      console.error('Error loading events:', error)
      toast({
        title: "Error",
        description: "Failed to load events. Please try again.",
        variant: "destructive",
      })
    }
  }

  const getDateRange = (date: Date, mode: 'month' | 'week' | 'day') => {
    const year = date.getFullYear()
    const month = date.getMonth()
    
    let from: string, to: string
    
    switch (mode) {
      case 'month':
        from = new Date(year, month, 1).toISOString()
        to = new Date(year, month + 1, 0, 23, 59, 59).toISOString()
        break
      case 'week':
        const startOfWeek = new Date(date)
        startOfWeek.setDate(date.getDate() - date.getDay())
        startOfWeek.setHours(0, 0, 0, 0)
        
        const endOfWeek = new Date(startOfWeek)
        endOfWeek.setDate(startOfWeek.getDate() + 6)
        endOfWeek.setHours(23, 59, 59, 999)
        
        from = startOfWeek.toISOString()
        to = endOfWeek.toISOString()
        break
      case 'day':
        const startOfDay = new Date(date)
        startOfDay.setHours(0, 0, 0, 0)
        
        const endOfDay = new Date(date)
        endOfDay.setHours(23, 59, 59, 999)
        
        from = startOfDay.toISOString()
        to = endOfDay.toISOString()
        break
    }
    
    return { from, to }
  }

  const handleDateNavigation = (direction: 'prev' | 'next' | 'today') => {
    let newDate = new Date(selectedDate)
    
    if (direction === 'today') {
      newDate = new Date()
    } else {
      const increment = direction === 'next' ? 1 : -1
      
      switch (viewMode) {
        case 'month':
          newDate.setMonth(newDate.getMonth() + increment)
          break
        case 'week':
          newDate.setDate(newDate.getDate() + (7 * increment))
          break
        case 'day':
          newDate.setDate(newDate.getDate() + increment)
          break
      }
    }
    
    setSelectedDate(newDate)
    loadEventsForRange(newDate)
  }

  const handleViewModeChange = (mode: 'month' | 'week' | 'day') => {
    setViewMode(mode)
    loadEventsForRange(selectedDate)
  }

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event)
    setIsCreating(false)
    setIsDrawerOpen(true)
  }

  const handleCreateEvent = (date?: Date) => {
    setSelectedEvent(null)
    setIsCreating(true)
    if (date) setSelectedDate(date)
    setIsDrawerOpen(true)
  }

  const handleEventSave = async (eventData: Partial<Event>) => {
    try {
      const isEdit = !!selectedEvent
      const url = isEdit 
        ? `/api/markets/${marketId}/events/${selectedEvent.id}`
        : `/api/markets/${marketId}/events`
      
      const method = isEdit ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
      })
      
      if (!response.ok) throw new Error(`Failed to ${isEdit ? 'update' : 'create'} event`)
      
      const savedEvent = await response.json()
      
      // Update local state
      if (isEdit) {
        setEvents(prev => prev.map(e => e.id === savedEvent.id ? savedEvent : e))
      } else {
        setEvents(prev => [...prev, savedEvent])
      }
      
      toast({
        title: "Success",
        description: `Event ${isEdit ? 'updated' : 'created'} successfully.`,
      })
      
      setIsDrawerOpen(false)
      
    } catch (error) {
      console.error('Error saving event:', error)
      toast({
        title: "Error",
        description: "Failed to save event. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleEventDelete = async (eventId: string) => {
    if (!confirm('Are you sure you want to delete this event? This action cannot be undone.')) {
      return
    }
    
    try {
      const response = await fetch(`/api/markets/${marketId}/events/${eventId}`, {
        method: 'DELETE'
      })
      
      if (!response.ok) throw new Error('Failed to delete event')
      
      setEvents(prev => prev.filter(e => e.id !== eventId))
      setIsDrawerOpen(false)
      
      toast({
        title: "Success",
        description: "Event deleted successfully.",
      })
      
    } catch (error) {
      console.error('Error deleting event:', error)
      toast({
        title: "Error",
        description: "Failed to delete event. Please try again.",
        variant: "destructive",
      })
    }
  }

  // Format date range display
  const dateRangeText = useMemo(() => {
    const options: Intl.DateTimeFormatOptions = { 
      timeZone: 'Australia/Brisbane',
      year: 'numeric',
      month: 'long'
    }
    
    switch (viewMode) {
      case 'month':
        return selectedDate.toLocaleDateString('en-AU', options)
      case 'week': {
        const { from, to } = getDateRange(selectedDate, 'week')
        const fromDate = new Date(from)
        const toDate = new Date(to)
        return `${fromDate.toLocaleDateString('en-AU', { 
          timeZone: 'Australia/Brisbane',
          month: 'short', 
          day: 'numeric' 
        })} - ${toDate.toLocaleDateString('en-AU', { 
          timeZone: 'Australia/Brisbane',
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        })}`
      }
      case 'day':
        return selectedDate.toLocaleDateString('en-AU', { 
          timeZone: 'Australia/Brisbane',
          weekday: 'long',
          year: 'numeric',
          month: 'long', 
          day: 'numeric'
        })
    }
  }, [selectedDate, viewMode])

  if (loading) {
    return (
      <DashboardShell>
        <div className="space-y-6">
          <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-96 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </DashboardShell>
    )
  }

  if (error) {
    return (
      <DashboardShell>
        <div className="text-center py-12">
          <div className="text-red-600 mb-4">
            <Settings className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-lg font-semibold">Cannot Load Events</h2>
            <p className="text-gray-600">{error}</p>
          </div>
          <div className="space-x-4">
            <Button onClick={() => router.back()}>Go Back</Button>
            <Button variant="outline" onClick={loadMarketAndEvents}>
              Try Again
            </Button>
          </div>
        </div>
      </DashboardShell>
    )
  }

  return (
    <DashboardShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/organizer/markets/${marketId}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Market
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Events</h1>
              <p className="text-muted-foreground">
                Manage events for {market?.name} • Australia/Brisbane timezone
              </p>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-white border rounded-lg">
          <div className="flex items-center gap-2">
            {/* View Mode Tabs */}
            <Tabs value={viewMode} onValueChange={(value) => handleViewModeChange(value as any)}>
              <TabsList>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="day">Day</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Date Navigation */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleDateNavigation('prev')}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleDateNavigation('today')}
              className="min-w-[80px]"
            >
              Today
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => handleDateNavigation('next')}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            
            <span className="text-sm font-medium mx-4 min-w-[200px] text-center">
              {dateRangeText}
            </span>
            
            <Button onClick={() => handleCreateEvent()}>
              <Plus className="w-4 h-4 mr-2" />
              New Event
            </Button>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white border rounded-lg overflow-hidden">
          <EventsCalendar
            viewMode={viewMode}
            selectedDate={selectedDate}
            events={events}
            onEventClick={handleEventClick}
            onDateClick={handleCreateEvent}
            onDateChange={setSelectedDate}
          />
        </div>

        {/* Event Drawer */}
        <EventDrawer
          open={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
          event={selectedEvent}
          isCreating={isCreating}
          marketAddress={market?.address}
          selectedDate={selectedDate}
          onSave={handleEventSave}
          onDelete={handleEventDelete}
        />
      </div>
    </DashboardShell>
  )
}