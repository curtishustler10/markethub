import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getCurrentProfile } from '@/lib/auth'
import { createVendorApplicationSchema } from 'shared'
import { inngest } from '@/lib/inngest'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const profile = await getCurrentProfile()
    if (!profile || (profile.role !== 'vendor' && profile.role !== 'admin')) {
      return NextResponse.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      )
    }

    const body = await request.json()
    const validatedData = createVendorApplicationSchema.parse(body)

    const supabase = createClient()
    
    // Check if vendor has a profile
    const { data: vendorProfile } = await supabase
      .from('vendor_profiles')
      .select('vendor_id')
      .eq('vendor_id', profile.id)
      .single()

    if (!vendorProfile) {
      return NextResponse.json(
        { error: 'Please complete your vendor profile before applying' },
        { status: 400 }
      )
    }

    // Check if market exists and is live
    const { data: market, error: marketError } = await supabase
      .from('markets')
      .select('id, name, status, owner_id')
      .eq('id', validatedData.market_id)
      .single()

    if (marketError || !market || market.status !== 'live') {
      return NextResponse.json(
        { error: 'Market not found or not accepting applications' },
        { status: 400 }
      )
    }

    // Check if application already exists
    const { data: existingApplication } = await supabase
      .from('vendor_applications')
      .select('id')
      .eq('market_id', validatedData.market_id)
      .eq('vendor_id', profile.id)
      .single()

    if (existingApplication) {
      return NextResponse.json(
        { error: 'You have already applied to this market' },
        { status: 400 }
      )
    }

    // Create application
    const { data: application, error } = await supabase
      .from('vendor_applications')
      .insert({
        ...validatedData,
        vendor_id: profile.id
      })
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
        vendor_profile:vendor_profiles!vendor_id (
          business_name,
          category
        )
      `)
      .single()

    if (error) {
      throw error
    }

    // Send notification email to market organizer
    try {
      await inngest.send({
        name: 'email/send',
        data: {
          template: 'new-application',
          to_email: market.owner_id, // Will be resolved to actual email in the function
          data: {
            vendor_name: profile.name || 'Unknown Vendor',
            market_name: market.name,
            application_id: application.id,
            vendor_business_name: application.vendor_profile?.business_name,
            vendor_category: application.vendor_profile?.category,
            message: application.message
          }
        }
      })
    } catch (emailError) {
      console.error('Error sending notification email:', emailError)
      // Don't fail the application if email fails
    }

    return NextResponse.json(application, { status: 201 })
  } catch (error) {
    console.error('Error creating vendor application:', error)
    return NextResponse.json(
      { error: 'Failed to create application' },
      { status: 500 }
    )
  }
}