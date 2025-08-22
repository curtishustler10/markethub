import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// GET /api/markets/[id]/events/[eventId] - Get single event
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string; eventId: string } }
) {
  try {
    const supabase = createClient()
    
    // Verify user is authenticated
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Verify user owns the market
    const { data: market, error: marketError } = await supabase
      .from('markets')
      .select('owner_id')
      .eq('id', params.id)
      .single()

    if (marketError || !market) {
      return NextResponse.json({ error: 'Market not found' }, { status: 404 })
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', user.id)
      .single()

    if (!profile || market.owner_id !== profile.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Get event
    const { data: event, error: eventError } = await supabase
      .from('events')
      .select('*')
      .eq('id', params.eventId)
      .eq('market_id', params.id)
      .single()

    if (eventError || !event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 })
    }

    return NextResponse.json(event)

  } catch (error) {
    console.error('Error in GET /api/markets/[id]/events/[eventId]:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT /api/markets/[id]/events/[eventId] - Update event
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string; eventId: string } }
) {
  try {
    const supabase = createClient()
    
    // Verify user is authenticated
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Verify user owns the market
    const { data: market, error: marketError } = await supabase
      .from('markets')
      .select('owner_id')
      .eq('id', params.id)
      .single()

    if (marketError || !market) {
      return NextResponse.json({ error: 'Market not found' }, { status: 404 })
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', user.id)
      .single()

    if (!profile || market.owner_id !== profile.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Parse request body
    const body = await request.json()
    const {
      title,
      description,
      start_at,
      end_at,
      all_day,
      location,
      tags,
      visibility
    } = body

    // Validate dates if provided
    if (start_at && end_at) {
      const startDate = new Date(start_at)
      const endDate = new Date(end_at)
      
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        return NextResponse.json({ error: 'Invalid date format' }, { status: 400 })
      }

      if (startDate >= endDate) {
        return NextResponse.json({ 
          error: 'End time must be after start time' 
        }, { status: 400 })
      }
    }

    // Build update object (only include provided fields)
    const updateData: any = {}
    if (title !== undefined) updateData.title = title
    if (description !== undefined) updateData.description = description
    if (start_at !== undefined) updateData.start_at = new Date(start_at).toISOString()
    if (end_at !== undefined) updateData.end_at = new Date(end_at).toISOString()
    if (all_day !== undefined) updateData.all_day = all_day
    if (location !== undefined) updateData.location = location
    if (tags !== undefined) updateData.tags = tags
    if (visibility !== undefined) updateData.visibility = visibility

    // Update event
    const { data: event, error: eventError } = await supabase
      .from('events')
      .update(updateData)
      .eq('id', params.eventId)
      .eq('market_id', params.id)
      .select()
      .single()

    if (eventError) {
      console.error('Error updating event:', eventError)
      if (eventError.code === 'PGRST116') {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 })
      }
      return NextResponse.json({ error: 'Failed to update event' }, { status: 500 })
    }

    return NextResponse.json(event)

  } catch (error) {
    console.error('Error in PUT /api/markets/[id]/events/[eventId]:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE /api/markets/[id]/events/[eventId] - Delete event
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string; eventId: string } }
) {
  try {
    const supabase = createClient()
    
    // Verify user is authenticated
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Verify user owns the market
    const { data: market, error: marketError } = await supabase
      .from('markets')
      .select('owner_id')
      .eq('id', params.id)
      .single()

    if (marketError || !market) {
      return NextResponse.json({ error: 'Market not found' }, { status: 404 })
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', user.id)
      .single()

    if (!profile || market.owner_id !== profile.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Delete event
    const { error: deleteError } = await supabase
      .from('events')
      .delete()
      .eq('id', params.eventId)
      .eq('market_id', params.id)

    if (deleteError) {
      console.error('Error deleting event:', deleteError)
      return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 })
    }

    return new NextResponse(null, { status: 204 })

  } catch (error) {
    console.error('Error in DELETE /api/markets/[id]/events/[eventId]:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}