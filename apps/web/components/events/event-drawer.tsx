'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Tag, 
  Eye, 
  EyeOff, 
  Save, 
  Trash2,
  X,
  Plus
} from 'lucide-react'
import { format, parseISO } from 'date-fns'
import { toZonedTime, fromZonedTime, formatInTimeZone } from 'date-fns-tz'

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

interface EventDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  event: Event | null
  isCreating: boolean
  marketAddress?: string
  selectedDate: Date
  onSave: (eventData: Partial<Event>) => void
  onDelete: (eventId: string) => void
}

export function EventDrawer({
  open,
  onOpenChange,
  event,
  isCreating,
  marketAddress,
  selectedDate,
  onSave,
  onDelete
}: EventDrawerProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    start_at: '',
    end_at: '',
    all_day: false,
    location: '',
    tags: [] as string[],
    visibility: 'public' as 'public' | 'private'
  })
  const [newTag, setNewTag] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Reset form when event changes or drawer opens/closes
  useEffect(() => {
    if (open) {
      if (event && !isCreating) {
        // Editing existing event
        const startDate = new Date(event.start_at)
        const endDate = new Date(event.end_at)
        
        setFormData({
          title: event.title || '',
          description: event.description || '',
          start_at: formatDateTimeLocal(startDate),
          end_at: formatDateTimeLocal(endDate),
          all_day: event.all_day || false,
          location: event.location || '',
          tags: event.tags || [],
          visibility: event.visibility || 'public'
        })
      } else {
        // Creating new event
        const startDate = new Date(selectedDate)
        startDate.setHours(9, 0) // Default to 9:00 AM
        
        const endDate = new Date(selectedDate)
        endDate.setHours(11, 0) // Default to 11:00 AM
        
        setFormData({
          title: '',
          description: '',
          start_at: formatDateTimeLocal(startDate),
          end_at: formatDateTimeLocal(endDate),
          all_day: false,
          location: marketAddress || '',
          tags: [],
          visibility: 'public'
        })
      }
    }
    
    setErrors({})
    setNewTag('')
  }, [event, isCreating, open, selectedDate, marketAddress])

  // Format date for datetime-local input (Brisbane timezone)
  const formatDateTimeLocal = (date: Date) => {
    const brisbaneDate = new Date(date.toLocaleString('en-US', { timeZone: 'Australia/Brisbane' }))
    const year = brisbaneDate.getFullYear()
    const month = String(brisbaneDate.getMonth() + 1).padStart(2, '0')
    const day = String(brisbaneDate.getDate()).padStart(2, '0')
    const hours = String(brisbaneDate.getHours()).padStart(2, '0')
    const minutes = String(brisbaneDate.getMinutes()).padStart(2, '0')
    
    return `${year}-${month}-${day}T${hours}:${minutes}`
  }

  // Convert local datetime to UTC for storage
  const convertToUTC = (localDateTime: string) => {
    if (!localDateTime) return null
    
    // Parse as Brisbane time and convert to UTC
    const localDate = new Date(localDateTime)
    const utcDate = new Date(localDate.getTime() + (10 * 60 * 60 * 1000)) // Add 10 hours for Brisbane offset
    
    return utcDate.toISOString()
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    }
    
    if (!formData.start_at) {
      newErrors.start_at = 'Start time is required'
    }
    
    if (!formData.end_at) {
      newErrors.end_at = 'End time is required'
    }
    
    if (formData.start_at && formData.end_at) {
      const startDate = new Date(formData.start_at)
      const endDate = new Date(formData.end_at)
      
      if (startDate >= endDate) {
        newErrors.end_at = 'End time must be after start time'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      const eventData = {
        title: formData.title.trim(),
        description: formData.description.trim() || undefined,
        start_at: convertToUTC(formData.start_at)!,
        end_at: convertToUTC(formData.end_at)!,
        all_day: formData.all_day,
        location: formData.location.trim() || undefined,
        tags: formData.tags,
        visibility: formData.visibility
      }
      
      await onSave(eventData)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!event) return
    await onDelete(event.id)
  }

  const handleAddTag = () => {
    const tag = newTag.trim().toLowerCase()
    if (tag && !formData.tags.includes(tag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tag]
      }))
      setNewTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const handleAllDayToggle = (allDay: boolean) => {
    setFormData(prev => {
      if (allDay) {
        // Set to full day
        const startDate = new Date(prev.start_at || selectedDate)
        const endDate = new Date(prev.start_at || selectedDate)
        
        startDate.setHours(0, 0, 0, 0)
        endDate.setHours(23, 59, 59, 999)
        
        return {
          ...prev,
          all_day: true,
          start_at: formatDateTimeLocal(startDate),
          end_at: formatDateTimeLocal(endDate)
        }
      } else {
        // Set default times
        const startDate = new Date(prev.start_at || selectedDate)
        const endDate = new Date(prev.start_at || selectedDate)
        
        startDate.setHours(9, 0, 0, 0)
        endDate.setHours(11, 0, 0, 0)
        
        return {
          ...prev,
          all_day: false,
          start_at: formatDateTimeLocal(startDate),
          end_at: formatDateTimeLocal(endDate)
        }
      }
    })
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <SheetHeader>
            <SheetTitle>
              {isCreating ? 'Create New Event' : 'Edit Event'}
            </SheetTitle>
            <SheetDescription>
              {isCreating 
                ? 'Create a new event for this market. All times are in Australia/Brisbane timezone.'
                : 'Update event details. All times are in Australia/Brisbane timezone.'
              }
            </SheetDescription>
          </SheetHeader>

          <div className="space-y-6 py-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">
                Event Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter event title"
                className={errors.title ? 'border-red-500' : ''}
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title}</p>
              )}
            </div>

            {/* All Day Toggle */}
            <div className="flex items-center gap-2">
              <input
                id="all-day"
                type="checkbox"
                checked={formData.all_day}
                onChange={(e) => handleAllDayToggle(e.target.checked)}
                className="rounded"
              />
              <Label htmlFor="all-day">All day event</Label>
            </div>

            {/* Start Time */}
            <div className="space-y-2">
              <Label htmlFor="start-time">
                Start Time <span className="text-red-500">*</span>
              </Label>
              <Input
                id="start-time"
                type="datetime-local"
                value={formData.start_at}
                onChange={(e) => setFormData(prev => ({ ...prev, start_at: e.target.value }))}
                className={errors.start_at ? 'border-red-500' : ''}
              />
              {errors.start_at && (
                <p className="text-sm text-red-500">{errors.start_at}</p>
              )}
            </div>

            {/* End Time */}
            <div className="space-y-2">
              <Label htmlFor="end-time">
                End Time <span className="text-red-500">*</span>
              </Label>
              <Input
                id="end-time"
                type="datetime-local"
                value={formData.end_at}
                onChange={(e) => setFormData(prev => ({ ...prev, end_at: e.target.value }))}
                className={errors.end_at ? 'border-red-500' : ''}
              />
              {errors.end_at && (
                <p className="text-sm text-red-500">{errors.end_at}</p>
              )}
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">
                <MapPin className="w-4 h-4 inline mr-1" />
                Location
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                placeholder="Event location (optional)"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Add event description (optional)"
                rows={3}
              />
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label>
                <Tag className="w-4 h-4 inline mr-1" />
                Tags
              </Label>
              
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map(tag => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="cursor-pointer hover:bg-red-100"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      {tag}
                      <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ))}
                </div>
              )}
              
              <div className="flex gap-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add a tag"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                />
                <Button 
                  type="button" 
                  size="sm" 
                  onClick={handleAddTag}
                  disabled={!newTag.trim()}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Visibility */}
            <div className="space-y-2">
              <Label>Visibility</Label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={formData.visibility === 'public' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFormData(prev => ({ ...prev, visibility: 'public' }))}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  Public
                </Button>
                <Button
                  type="button"
                  variant={formData.visibility === 'private' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFormData(prev => ({ ...prev, visibility: 'private' }))}
                >
                  <EyeOff className="w-4 h-4 mr-1" />
                  Private
                </Button>
              </div>
            </div>
          </div>

          <SheetFooter className="flex justify-between">
            <div className="flex gap-2">
              {!isCreating && (
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={handleDelete}
                  disabled={isSubmitting}
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </Button>
              )}
            </div>
            
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-1" />
                    {isCreating ? 'Create Event' : 'Update Event'}
                  </>
                )}
              </Button>
            </div>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}