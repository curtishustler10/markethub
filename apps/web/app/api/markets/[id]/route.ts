import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getCurrentProfile } from '@/lib/auth'
import { updateMarketSchema } from 'shared'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = createClient()
    
    const { data: market, error } = await supabase
      .from('markets')
      .select(`
        *,
        owner:profiles!owner_id (
          id,
          name,
          email,
          phone
        ),
        events (
          id,
          start_date,
          end_date,
          notes
        ),
        market_documents (
          id,
          type,
          verification_status,
          expiry_date
        )
      `)
      .eq('id', params.id)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Market not found' },
          { status: 404 }
        )
      }
      throw error
    }

    // Only show full details for live markets or market owners
    const profile = await getCurrentProfile()
    const isOwner = profile?.id === market.owner_id || profile?.role === 'admin'
    
    if (market.status !== 'live' && !isOwner) {
      return NextResponse.json(
        { error: 'Market not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(market)
  } catch (error) {
    console.error('Error fetching market:', error)
    return NextResponse.json(
      { error: 'Failed to fetch market' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const profile = await getCurrentProfile()
    if (!profile) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const supabase = createClient()
    
    // Check if market exists and user has permission
    const { data: existingMarket, error: fetchError } = await supabase
      .from('markets')
      .select('owner_id')
      .eq('id', params.id)
      .single()

    if (fetchError) {
      if (fetchError.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Market not found' },
          { status: 404 }
        )
      }
      throw fetchError
    }

    if (existingMarket.owner_id !== profile.id && profile.role !== 'admin') {
      return NextResponse.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      )
    }

    const body = await request.json()
    const validatedData = updateMarketSchema.parse(body)

    const { data: market, error } = await supabase
      .from('markets')
      .update(validatedData)
      .eq('id', params.id)
      .select()
      .single()

    if (error) {
      throw error
    }

    return NextResponse.json(market)
  } catch (error) {
    console.error('Error updating market:', error)
    return NextResponse.json(
      { error: 'Failed to update market' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const profile = await getCurrentProfile()
    if (!profile) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const supabase = createClient()
    
    // Check if market exists and user has permission
    const { data: existingMarket, error: fetchError } = await supabase
      .from('markets')
      .select('owner_id')
      .eq('id', params.id)
      .single()

    if (fetchError) {
      if (fetchError.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Market not found' },
          { status: 404 }
        )
      }
      throw fetchError
    }

    if (existingMarket.owner_id !== profile.id && profile.role !== 'admin') {
      return NextResponse.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      )
    }

    const { error } = await supabase
      .from('markets')
      .delete()
      .eq('id', params.id)

    if (error) {
      throw error
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting market:', error)
    return NextResponse.json(
      { error: 'Failed to delete market' },
      { status: 500 }
    )
  }
}