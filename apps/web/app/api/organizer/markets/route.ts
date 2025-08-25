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

    // Get markets owned by this organizer
    const { data: markets, error } = await supabase
      .from('markets')
      .select(`
        *
      `)
      .eq('owner_id', profile.id)
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    // Calculate stats for each market (simplified for now)
    const marketsWithStats = markets?.map(market => {
      return {
        ...market,
        stats: {
          totalApplications: 0,
          pendingApplications: 0,
          approvedApplications: 0,
          totalEvents: 0,
          upcomingEvents: 0
        }
      }
    }) || []

    return NextResponse.json({ 
      markets: marketsWithStats,
      total: marketsWithStats.length
    })
  } catch (error) {
    console.error('Error fetching organizer markets:', error)
    return NextResponse.json(
      { error: 'Failed to fetch markets' },
      { status: 500 }
    )
  }
}