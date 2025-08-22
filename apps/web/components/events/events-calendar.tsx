'use client'

import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { format, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval,
  isSameDay,
  isToday,
  isSameMonth,
  parseISO,
  startOfDay,
  endOfDay,
  addMonths,
  subMonths
} from 'date-fns'
import { toZonedTime, fromZonedTime, formatInTimeZone } from 'date-fns-tz'
import { Calendar, Clock, MapPin } from 'lucide-react'

// Australian Eastern Time (Brisbane timezone)
const TIMEZONE = 'Australia/Brisbane'

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

interface EventsCalendarProps {
  viewMode: 'month' | 'week' | 'day'
  selectedDate: Date
  events: Event[]
  onEventClick: (event: Event) => void
  onDateClick: (date: Date) => void
  onDateChange: (date: Date) => void
}

export function EventsCalendar({
  viewMode,
  selectedDate,
  events,
  onEventClick,
  onDateClick,
  onDateChange
}: EventsCalendarProps) {
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null)

  // Convert events to Brisbane timezone for display
  const eventsWithLocalTime = useMemo(() => {
    return events.map(event => ({
      ...event,
      start_at_local: new Date(event.start_at).toLocaleString('en-AU', {
        timeZone: 'Australia/Brisbane'
      }),
      end_at_local: new Date(event.end_at).toLocaleString('en-AU', {
        timeZone: 'Australia/Brisbane'
      }),
      start_date: parseISO(event.start_at),
      end_date: parseISO(event.end_at)
    }))
  }, [events])

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    return eventsWithLocalTime.filter(event => {
      const eventStart = startOfDay(event.start_date)
      const eventEnd = endOfDay(event.end_date)
      const dayStart = startOfDay(date)
      const dayEnd = endOfDay(date)
      
      // Event overlaps with this day
      return eventStart <= dayEnd && eventEnd >= dayStart
    })
  }

  // Generate calendar days for month view
  const calendarDays = useMemo(() => {
    if (viewMode !== 'month') return []
    
    const start = startOfWeek(startOfMonth(selectedDate))
    const end = endOfWeek(endOfMonth(selectedDate))
    
    return eachDayOfInterval({ start, end })
  }, [selectedDate, viewMode])

  // Generate hours for day view
  const dayHours = useMemo(() => {
    if (viewMode !== 'day') return []
    
    return Array.from({ length: 24 }, (_, i) => i)
  }, [viewMode])

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-AU', {
      timeZone: 'Australia/Brisbane',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      timeZone: 'Australia/Brisbane',
      month: 'short',
      day: 'numeric'
    })
  }

  // Render month view
  if (viewMode === 'month') {
    return (
      <div className="p-6">
        {/* Month header */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map(day => {
            const dayEvents = getEventsForDate(day)
            const isCurrentMonth = isSameMonth(day, selectedDate)
            const isCurrentDay = isToday(day)
            const isSelected = isSameDay(day, selectedDate)
            
            return (
              <div
                key={day.toISOString()}
                className={cn(
                  "min-h-[120px] p-2 border border-gray-100 cursor-pointer transition-colors",
                  isCurrentMonth ? "bg-white hover:bg-gray-50" : "bg-gray-50 text-gray-400",
                  isCurrentDay && "bg-blue-50 border-blue-200",
                  isSelected && "ring-2 ring-blue-500"
                )}
                onClick={() => {
                  onDateChange(day)
                  onDateClick(day)
                }}
                onMouseEnter={() => setHoveredDate(day)}
                onMouseLeave={() => setHoveredDate(null)}
              >
                <div className={cn(
                  "text-sm font-medium mb-1",
                  isCurrentDay && "text-blue-600"
                )}>
                  {format(day, 'd')}
                </div>
                
                {/* Events */}
                <div className="space-y-1">
                  {dayEvents.slice(0, 3).map((event, idx) => (
                    <div
                      key={event.id}
                      className={cn(
                        "text-xs p-1 rounded cursor-pointer transition-colors",
                        event.visibility === 'private' 
                          ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                      )}
                      onClick={(e) => {
                        e.stopPropagation()
                        onEventClick(event)
                      }}
                    >
                      <div className="font-medium truncate">{event.title}</div>
                      {!event.all_day && (
                        <div className="text-xs opacity-75">
                          {formatTime(event.start_at)}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {dayEvents.length > 3 && (
                    <div className="text-xs text-gray-500 font-medium">
                      +{dayEvents.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Empty state */}
        {events.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <h3 className="font-medium mb-2">No events this month</h3>
            <p className="text-sm">Click on any date to create your first event</p>
          </div>
        )}
      </div>
    )
  }

  // Render week view
  if (viewMode === 'week') {
    const weekStart = startOfWeek(selectedDate)
    const weekDays = eachDayOfInterval({
      start: weekStart,
      end: endOfWeek(selectedDate)
    })

    return (
      <div className="p-6">
        {/* Week header */}
        <div className="grid grid-cols-8 gap-1 mb-4">
          <div className="p-2"></div> {/* Time column header */}
          {weekDays.map(day => (
            <div key={day.toISOString()} className="p-2 text-center">
              <div className="text-sm font-medium">
                {format(day, 'EEE')}
              </div>
              <div className={cn(
                "text-lg font-semibold",
                isToday(day) && "text-blue-600"
              )}>
                {format(day, 'd')}
              </div>
            </div>
          ))}
        </div>

        {/* Week grid */}
        <div className="grid grid-cols-8 gap-1">
          {/* Time labels */}
          <div className="space-y-16">
            {Array.from({ length: 12 }, (_, i) => i + 6).map(hour => (
              <div key={hour} className="text-sm text-gray-500 text-right pr-2">
                {hour === 12 ? '12 PM' : hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
              </div>
            ))}
          </div>

          {/* Day columns */}
          {weekDays.map(day => {
            const dayEvents = getEventsForDate(day)
            
            return (
              <div
                key={day.toISOString()}
                className="border-l border-gray-100 min-h-[600px] relative cursor-pointer hover:bg-gray-50"
                onClick={() => onDateClick(day)}
              >
                {/* Events */}
                {dayEvents.map(event => (
                  <div
                    key={event.id}
                    className={cn(
                      "absolute left-1 right-1 p-1 rounded text-xs cursor-pointer",
                      event.visibility === 'private' 
                        ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                    )}
                    style={{
                      top: `${(new Date(event.start_at).getHours() - 6) * 64}px`,
                      height: `${Math.max(32, (new Date(event.end_at).getTime() - new Date(event.start_at).getTime()) / (1000 * 60 * 60) * 64)}px`
                    }}
                    onClick={(e) => {
                      e.stopPropagation()
                      onEventClick(event)
                    }}
                  >
                    <div className="font-medium truncate">{event.title}</div>
                    <div className="text-xs opacity-75">
                      {formatTime(event.start_at)} - {formatTime(event.end_at)}
                    </div>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // Render day view
  if (viewMode === 'day') {
    const dayEvents = getEventsForDate(selectedDate)

    return (
      <div className="p-6">
        {/* Day header */}
        <div className="mb-6 text-center">
          <h2 className="text-xl font-semibold">
            {format(selectedDate, 'EEEE, MMMM d, yyyy')}
          </h2>
        </div>

        <div className="flex gap-6">
          {/* Time column */}
          <div className="w-24">
            {dayHours.map(hour => (
              <div key={hour} className="h-16 flex items-start pt-2">
                <span className="text-sm text-gray-500">
                  {hour === 0 ? '12 AM' : hour === 12 ? '12 PM' : hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
                </span>
              </div>
            ))}
          </div>

          {/* Day column */}
          <div className="flex-1 relative border-l border-gray-100">
            {/* Hour lines */}
            {dayHours.map(hour => (
              <div key={hour} className="h-16 border-b border-gray-100"></div>
            ))}

            {/* Events */}
            {dayEvents.map(event => {
              const startHour = new Date(event.start_at).getHours()
              const startMinute = new Date(event.start_at).getMinutes()
              const duration = (new Date(event.end_at).getTime() - new Date(event.start_at).getTime()) / (1000 * 60)
              
              return (
                <div
                  key={event.id}
                  className={cn(
                    "absolute left-2 right-2 p-2 rounded cursor-pointer",
                    event.visibility === 'private' 
                      ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                  )}
                  style={{
                    top: `${startHour * 64 + (startMinute / 60) * 64}px`,
                    height: `${Math.max(32, (duration / 60) * 64)}px`
                  }}
                  onClick={() => onEventClick(event)}
                >
                  <div className="font-medium">{event.title}</div>
                  <div className="text-sm opacity-75">
                    {formatTime(event.start_at)} - {formatTime(event.end_at)}
                  </div>
                  {event.location && (
                    <div className="text-xs mt-1 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {event.location}
                    </div>
                  )}
                </div>
              )
            })}

            {/* Empty state for day view */}
            {dayEvents.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <h3 className="font-medium mb-2">No events today</h3>
                  <p className="text-sm">Click anywhere to create an event</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return null
}