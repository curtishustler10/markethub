import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    const supabase = createClient()
    
    // Query vendor profiles with coordinates
    let query = supabase
      .from('profiles')
      .select(`
        id,
        name,
        business_name,
        phone,
        email,
        bio,
        lat,
        lng,
        city,
        state,
        created_at
      `)
      .eq('role', 'vendor')
      .not('lat', 'is', null)
      .not('lng', 'is', null)

    // Apply search filter
    if (search) {
      query = query.or(`name.ilike.%${search}%,business_name.ilike.%${search}%,bio.ilike.%${search}%`)
    }

    // Get results with pagination
    const { data: vendors, error, count } = await query
      .range((page - 1) * limit, page * limit - 1)
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    // Transform data to match map expectations
    const transformedVendors = (vendors || []).map(vendor => ({
      id: vendor.id,
      name: vendor.business_name || vendor.name || 'Unnamed Vendor',
      description: vendor.bio,
      lat: vendor.lat,
      lng: vendor.lng,
      city: vendor.city,
      state: vendor.state,
      phone: vendor.phone,
      email: vendor.email
    }))

    return NextResponse.json({
      vendors: transformedVendors,
      total: count || 0,
      page,
      limit
    })
  } catch (error) {
    console.error('Error fetching vendors:', error)
    return NextResponse.json(
      { error: 'Failed to fetch vendors' },
      { status: 500 }
    )
  }
}