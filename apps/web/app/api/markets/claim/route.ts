import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getCurrentProfile } from '@/lib/auth'

export const dynamic = 'force-dynamic'

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
    const { 
      marketId, 
      businessName, 
      businessAddress, 
      contactPhone, 
      experience, 
      reason, 
      documents = []
    } = body

    if (!marketId) {
      return NextResponse.json(
        { error: 'Market ID is required' },
        { status: 400 }
      )
    }

    const supabase = createClient()

    // Verify the market exists and is unclaimed
    const { data: market, error: marketError } = await supabase
      .from('markets')
      .select('*')
      .eq('id', marketId)
      .is('owner_id', null)
      .eq('status', 'draft')
      .single()

    if (marketError || !market) {
      return NextResponse.json(
        { error: 'Market not found or already claimed' },
        { status: 404 }
      )
    }

    // Check if user already has a pending claim for this market
    const { data: existingClaim } = await supabase
      .from('market_claims')
      .select('*')
      .eq('market_id', marketId)
      .eq('claimant_id', profile.id)
      .in('status', ['pending', 'approved'])
      .single()

    if (existingClaim) {
      return NextResponse.json(
        { error: 'You already have a claim request for this market' },
        { status: 400 }
      )
    }

    // Create the claim request
    const claimData = {
      market_id: marketId,
      claimant_id: profile.id,
      business_name: businessName,
      business_address: businessAddress,
      contact_phone: contactPhone,
      experience: experience,
      reason: reason,
      documents: documents,
      status: 'pending',
      submitted_at: new Date().toISOString()
    }

    const { data: claim, error: claimError } = await supabase
      .from('market_claims')
      .insert(claimData)
      .select()
      .single()

    if (claimError) {
      throw claimError
    }

    return NextResponse.json({
      message: 'Claim request submitted successfully',
      claim: claim
    }, { status: 201 })

  } catch (error) {
    console.error('Error creating claim request:', error)
    return NextResponse.json(
      { error: 'Failed to create claim request' },
      { status: 500 }
    )
  }
}