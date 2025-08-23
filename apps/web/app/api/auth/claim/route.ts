import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { userId, role, recordId } = await request.json()
    if (!userId || !role || !recordId) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
    }

    const supabase = createServiceClient()
    const table = role === 'market_organizer' ? 'imported_markets' : 'imported_vendors'

    const { data: record, error: fetchError } = await supabase
      .from(table)
      .select('*')
      .eq('id', recordId)
      .single()

    if (fetchError || !record) {
      return NextResponse.json({ error: 'Record not found' }, { status: 404 })
    }

    if (role === 'vendor') {
      const { error: upsertError } = await supabase
        .from('profiles')
        .upsert({
          id: userId,
          name: record.name,
          email: record.email,
          phone: record.phone,
          role: 'vendor'
        }, { onConflict: 'id' })

      if (upsertError) throw upsertError
    } else {
      const { error: marketError } = await supabase
        .from('markets')
        .update({ owner_id: userId })
        .eq('id', recordId)

      if (marketError) throw marketError
    }

    await supabase.from(table).delete().eq('id', recordId)

    await supabase.from('claim_audit_logs').insert({
      user_id: userId,
      target_type: role === 'vendor' ? 'vendor' : 'market',
      target_id: recordId
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error claiming imported record:', error)
    return NextResponse.json({ error: 'Claim failed' }, { status: 500 })
  }
}
