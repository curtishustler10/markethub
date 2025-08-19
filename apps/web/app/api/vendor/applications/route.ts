import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getCurrentProfile } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const profile = await getCurrentProfile()
    if (!profile || (profile.role !== 'vendor' && profile.role !== 'admin')) {
      return NextResponse.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      )
    }

    const supabase = createClient()
    
    const { data: applications, error } = await supabase
      .from('vendor_applications')
      .select(`
        *,
        market:markets!market_id (
          id,
          name,
          slug,
          city,
          state,
          status
        ),
        decided_by_profile:profiles!decided_by (
          id,
          name
        )
      `)
      .eq('vendor_id', profile.id)
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return NextResponse.json(applications || [])
  } catch (error) {
    console.error('Error fetching vendor applications:', error)
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    )
  }
}