import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getCurrentProfile } from '@/lib/auth'
import { createMarketSchema, marketSearchSchema } from 'shared'
import { generateSlug, getDistanceFromLatLonInKm } from 'shared'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const params = Object.fromEntries(searchParams.entries())
    
    // Parse and validate query parameters
    const {
      page = 1,
      limit = 20,
      search,
      lat,
      lng,
      radius = 50,
      state,
      city
    } = marketSearchSchema.parse({
      page: params.page ? parseInt(params.page) : 1,
      limit: params.limit ? parseInt(params.limit) : 20,
      search: params.search,
      lat: params.lat ? parseFloat(params.lat) : undefined,
      lng: params.lng ? parseFloat(params.lng) : undefined,
      radius: params.radius ? parseInt(params.radius) : 50,
      state: params.state,
      city: params.city
    })

    const supabase = createClient()
    let query = supabase
      .from('markets')
      .select(`
        *,
        owner:profiles!owner_id (
          id,
          name,
          email,
          phone
        )
      `, { count: 'exact' })
      .in('status', ['live', 'draft'])

    // Apply filters
    if (search) {
      query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`)
    }

    if (state) {
      query = query.eq('state', state)
    }

    if (city) {
      query = query.eq('city', city)
    }

    // Get results
    const { data: markets, error, count } = await query
      .range((page - 1) * limit, page * limit - 1)
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    let filteredMarkets = markets || []

    // Apply distance filter if coordinates provided
    if (lat && lng) {
      filteredMarkets = filteredMarkets
        .filter(market => {
          if (!market.lat || !market.lng) return false
          const distance = getDistanceFromLatLonInKm(lat, lng, market.lat, market.lng)
          return distance <= radius
        })
        .map(market => ({
          ...market,
          distance: getDistanceFromLatLonInKm(lat, lng, market.lat!, market.lng!)
        }))
        .sort((a, b) => (a as any).distance - (b as any).distance)
    }

    return NextResponse.json({
      markets: filteredMarkets,
      total: count || 0,
      page,
      limit
    })
  } catch (error) {
    console.error('Error fetching markets:', error)
    return NextResponse.json(
      { error: 'Failed to fetch markets' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const profile = await getCurrentProfile()
    if (!profile || (profile.role !== 'market_organizer' && profile.role !== 'admin')) {
      return NextResponse.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      )
    }

    const body = await request.json()
    const validatedData = createMarketSchema.parse(body)
    
    const slug = generateSlug(validatedData.name)
    
    const supabase = createClient()
    
    // Check if slug already exists
    const { data: existingMarket } = await supabase
      .from('markets')
      .select('slug')
      .eq('slug', slug)
      .single()
      
    if (existingMarket) {
      return NextResponse.json(
        { error: 'A market with this name already exists' },
        { status: 400 }
      )
    }

    const { data: market, error } = await supabase
      .from('markets')
      .insert({
        ...validatedData,
        slug,
        owner_id: profile.id
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    return NextResponse.json(market, { status: 201 })
  } catch (error) {
    console.error('Error creating market:', error)
    return NextResponse.json(
      { error: 'Failed to create market' },
      { status: 500 }
    )
  }
}