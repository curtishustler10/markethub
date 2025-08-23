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

    const { data, error } = await supabase
      .from(table)
      .select('*')
      .ilike('name', `%${name}%`)
      .limit(5)

    if (error) throw error

    return NextResponse.json({ matches: data })
  } catch (error) {
    console.error('Error searching imported records:', error)
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}
