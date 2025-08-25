import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getCurrentProfile } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const profile = await getCurrentProfile()
    if (!profile || (profile.role !== 'market_organizer' && profile.role !== 'admin')) {
      return NextResponse.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      )
    }

    const supabase = createClient()

    // Fetch imported market
    const { data: importedMarket, error: fetchError } = await supabase
      .from('imported_markets')
      .select('*')
      .eq('id', params.id)
      .single()

    if (fetchError || !importedMarket) {
      return NextResponse.json(
        { error: 'Imported market not found' },
        { status: 404 }
      )
    }

    // Insert into markets with current organizer as owner
    const { data: market, error: insertError } = await supabase
      .from('markets')
      .insert({
        name: importedMarket.name,
        slug: importedMarket.slug,
        description: importedMarket.description,
        address: importedMarket.address,
        city: importedMarket.city,
        state: importedMarket.state,
        postcode: importedMarket.postcode,
        country: importedMarket.country,
        lat: importedMarket.lat,
        lng: importedMarket.lng,
        amenities: importedMarket.amenities,
        requirements: importedMarket.requirements,
        owner_id: profile.id
      })
      .select()
      .single()

    if (insertError) {
      throw insertError
    }

    // Mark imported market as claimed
    await supabase
      .from('imported_markets')
      .update({ claimed_by: profile.id, is_verified: true })
      .eq('id', params.id)

    return NextResponse.json(market, { status: 201 })
  } catch (error) {
    console.error('Error claiming market:', error)
    return NextResponse.json(
      { error: 'Failed to claim market' },
      { status: 500 }
    )
  }
}
