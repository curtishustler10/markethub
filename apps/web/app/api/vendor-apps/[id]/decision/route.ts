import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getCurrentProfile } from '@/lib/auth'
import { applicationDecisionSchema } from 'shared'
import { inngest } from '@/lib/inngest'

export async function POST(
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

    const body = await request.json()
    const { status, message } = applicationDecisionSchema.parse(body)

    const supabase = createClient()
    
    // Get the application with market info
    const { data: application, error: fetchError } = await supabase
      .from('vendor_applications')
      .select(`
        *,
        market:markets!market_id (
          id,
          name,
          owner_id
        ),
        vendor:profiles!vendor_id (
          id,
          name,
          email
        )
      `)
      .eq('id', params.id)
      .single()

    if (fetchError) {
      if (fetchError.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Application not found' },
          { status: 404 }
        )
      }
      throw fetchError
    }

    // Check if user has permission (market owner or admin)
    if (application.market.owner_id !== profile.id && profile.role !== 'admin') {
      return NextResponse.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      )
    }

    // Update application status
    const { data: updatedApplication, error } = await supabase
      .from('vendor_applications')
      .update({
        status,
        message: message || null,
        decided_at: new Date().toISOString(),
        decided_by: profile.id
      })
      .eq('id', params.id)
      .select(`
        *,
        market:markets!market_id (
          id,
          name,
          owner_id
        ),
        vendor:profiles!vendor_id (
          id,
          name,
          email
        ),
        decided_by_profile:profiles!decided_by (
          id,
          name
        )
      `)
      .single()

    if (error) {
      throw error
    }

    // Send notification email to vendor
    try {
      await inngest.send({
        name: 'email/send',
        data: {
          template: 'application-decision',
          to_email: application.vendor.email,
          data: {
            vendor_name: application.vendor.name || 'Vendor',
            market_name: application.market.name,
            status,
            message,
            market_contact_email: profile.email
          }
        }
      })
    } catch (emailError) {
      console.error('Error sending decision email:', emailError)
      // Don't fail the decision if email fails
    }

    return NextResponse.json(updatedApplication)
  } catch (error) {
    console.error('Error updating application decision:', error)
    return NextResponse.json(
      { error: 'Failed to update application' },
      { status: 500 }
    )
  }
}