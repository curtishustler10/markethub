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
      .from('vendor_profiles')
      .select(`
        vendor_id,
        business_name,
        category,
        region,
        products_summary,
        website,
        profiles!inner (
          id,
          name,
          phone,
          email,
          lat,
          lng,
          city,
          state
        )
      `)
      .not('profiles.lat', 'is', null)
      .not('profiles.lng', 'is', null)

    // Apply search filter
    if (search) {
      query = query.or(`business_name.ilike.%${search}%,category.ilike.%${search}%,region.ilike.%${search}%,products_summary.ilike.%${search}%`)
    }

    // Get results with pagination
    const { data: vendors, error, count } = await query
      .range((page - 1) * limit, page * limit - 1)
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    // Transform data to match map expectations
    const transformedVendors = (vendors || []).map(vendor => {
      const profile = Array.isArray(vendor.profiles) ? vendor.profiles[0] : vendor.profiles
      return {
        id: vendor.vendor_id,
        business_name: vendor.business_name || 'Unnamed Vendor',
        category: vendor.category || 'vendor',
        region: vendor.region || profile?.state || 'Unknown',
        products_summary: vendor.products_summary,
        website: vendor.website,
        lat: profile?.lat,
        lng: profile?.lng,
        city: profile?.city,
        state: profile?.state,
        phone: profile?.phone,
        email: profile?.email
      }
    })

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