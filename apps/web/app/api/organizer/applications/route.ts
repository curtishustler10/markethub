import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getCurrentProfile } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const profile = await getCurrentProfile()
    
    if (!profile || (profile.role !== 'market_organizer' && profile.role !== 'admin')) {
      return NextResponse.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      )
    }

    const supabase = createClient()
    
    // Get URL parameters
    const { searchParams } = new URL(request.url)
    const marketId = searchParams.get('market')
    const status = searchParams.get('status')

    // Build query for applications to organizer's markets
    let query = supabase
      .from('vendor_applications')
      .select(`
        *,
        market:markets!market_id (
          id,
          name,
          slug,
          city,
          state,
          status,
          owner_id
        ),
        vendor:profiles!vendor_id (
          id,
          name,
          email,
          phone
        ),
        decided_by_profile:profiles!decided_by (
          id,
          name
        )
      `)

    // Filter by market ownership - only show applications for organizer's markets
    if (profile.role !== 'admin') {
      query = query.eq('market.owner_id', profile.id)
    }

    // Filter by specific market if requested
    if (marketId) {
      query = query.eq('market_id', marketId)
    }

    // Filter by status if requested
    if (status && status !== 'all') {
      query = query.eq('status', status)
    }

    const { data: applications, error } = await query
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    // Filter out applications that don't belong to this organizer's markets
    // (extra safety check since the query should already handle this)
    const filteredApplications = applications?.filter(app => 
      profile.role === 'admin' || app.market?.owner_id === profile.id
    ) || []

    return NextResponse.json({ 
      applications: filteredApplications,
      total: filteredApplications.length 
    })
  } catch (error) {
    console.error('Error fetching organizer applications:', error)
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    )
  }
}