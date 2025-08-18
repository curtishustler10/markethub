import { NextRequest, NextResponse } from 'next/server'
import { inngest } from '@/lib/inngest'

export async function POST(request: NextRequest) {
  try {
    // Verify the request is from a cron job (in production, you'd verify auth headers)
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Trigger the weekly expiry check
    await inngest.send({
      name: 'cron/weekly-expiry-check',
      data: {
        triggered_at: new Date().toISOString()
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error triggering expiry check:', error)
    return NextResponse.json(
      { error: 'Failed to trigger expiry check' },
      { status: 500 }
    )
  }
}