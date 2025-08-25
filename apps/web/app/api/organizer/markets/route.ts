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
        *,
        events (
          id,
          start_date,
          end_date,
          notes
        ),
        vendor_applications (
          id,
          status,
          created_at
        )
      `)
      .eq('owner_id', profile.id)
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    // Calculate stats for each market
    const marketsWithStats = markets?.map(market => {
      const applications = market.vendor_applications || []
      const events = market.events || []
      
      return {
        ...market,
        stats: {
          totalApplications: applications.length,
          pendingApplications: applications.filter((app: any) => app.status === 'submitted').length,
          approvedApplications: applications.filter((app: any) => app.status === 'accepted').length,
          totalEvents: events.length,
          upcomingEvents: events.filter((event: any) => 
            new Date(event.start_date) > new Date()
          ).length
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