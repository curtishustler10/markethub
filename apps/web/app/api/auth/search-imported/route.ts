import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { name, role } = await request.json()

    if (!name || !role) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
    }

    const supabase = createServiceClient()
    const table = role === 'market_organizer' ? 'imported_markets' : 'imported_vendors'

    // First check if the table exists
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .ilike('name', `%${name}%`)
      .limit(5)

    if (error) {
      // If table doesn't exist, return empty results instead of error
      if (error.code === '42P01') { // relation does not exist
        console.log(`Table ${table} does not exist, returning empty results`)
        return NextResponse.json({ matches: [] })
      }
      throw error
    }

    return NextResponse.json({ matches: data || [] })
  } catch (error) {
    console.error('Error searching imported records:', error)
    // Return empty results instead of error to prevent blocking registration
    return NextResponse.json({ matches: [] })
  }
}
