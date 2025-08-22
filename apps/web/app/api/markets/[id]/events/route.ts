import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

// GET /api/markets/[id]/events - Fetch events for a market
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createClient()
    const { searchParams } = new URL(request.url)
    const from = searchParams.get('from')
    const to = searchParams.get('to')
    
    // Verify user is authenticated
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Verify user owns this market
    const { data: market, error: marketError } = await supabase
      .from('markets')
      .select('owner_id, name')
      .eq('id', params.id)
      .single()

    if (marketError || !market) {
      return NextResponse.json({ error: 'Market not found' }, { status: 404 })
    }

    // Check if user owns the market
    const { data: profile } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', user.id)
      .single()

    if (!profile || market.owner_id !== profile.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Build query for events
    let query = supabase
      .from('events')
      .select('*')
      .eq('market_id', params.id)
      .order('start_at', { ascending: true })

    // Add date range filters if provided
    if (from) {
      query = query.gte('start_at', from)
    }
    if (to) {
      query = query.lte('end_at', to)
    }

    const { data: events, error: eventsError } = await query

    if (eventsError) {
      console.error('Error fetching events:', eventsError)
      return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
    }

    return NextResponse.json({
      items: events || [],
      market: {
        id: params.id,
        name: market.name
      }
    })

  } catch (error) {
    console.error('Error in GET /api/markets/[id]/events:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/markets/[id]/events - Create new event
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createClient()
    
    // Verify user is authenticated
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Verify user owns this market
    const { data: market, error: marketError } = await supabase
      .from('markets')
      .select('owner_id')
      .eq('id', params.id)
      .single()

    if (marketError || !market) {
      return NextResponse.json({ error: 'Market not found' }, { status: 404 })
    }

    // Check if user owns the market
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
      all_day = false,
      location,
      tags = [],
      visibility = 'public'
    } = body

    // Validate required fields
    if (!title || !start_at || !end_at) {
      return NextResponse.json({ 
        error: 'Missing required fields: title, start_at, end_at' 
      }, { status: 400 })
    }

    // Validate dates
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

    // Create event
    const { data: event, error: eventError } = await supabase
      .from('events')
      .insert({
        market_id: params.id,
        title,
        description,
        start_at: startDate.toISOString(),
        end_at: endDate.toISOString(),
        all_day,
        location,
        tags,
        visibility
      })
      .select()
      .single()

    if (eventError) {
      console.error('Error creating event:', eventError)
      return NextResponse.json({ error: 'Failed to create event' }, { status: 500 })
    }

    return NextResponse.json(event, { status: 201 })

  } catch (error) {
    console.error('Error in POST /api/markets/[id]/events:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}