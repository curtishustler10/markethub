import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getCurrentProfile } from '@/lib/auth'
import { createVendorProfileSchema, updateVendorProfileSchema } from 'shared'

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
    
    const { data: vendorProfile, error } = await supabase
      .from('vendor_profiles')
      .select(`
        *,
        vendor:profiles!vendor_id (
          id,
          name,
          email,
          phone
        ),
        documents:vendor_documents (
          id,
          type,
          region,
          verification_status,
          expiry_date,
          created_at
        )
      `)
      .eq('vendor_id', profile.id)
      .single()

    if (error && error.code !== 'PGRST116') {
      throw error
    }

    // Return null if no profile exists yet
    return NextResponse.json(vendorProfile || null)
  } catch (error) {
    console.error('Error fetching vendor profile:', error)
    return NextResponse.json(
      { error: 'Failed to fetch vendor profile' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const profile = await getCurrentProfile()
    if (!profile || (profile.role !== 'vendor' && profile.role !== 'admin')) {
      return NextResponse.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      )
    }

    const body = await request.json()
    
    const supabase = createClient()
    
    // Check if profile exists
    const { data: existingProfile } = await supabase
      .from('vendor_profiles')
      .select('vendor_id')
      .eq('vendor_id', profile.id)
      .single()

    let vendorProfile
    
    if (existingProfile) {
      // Update existing profile
      const validatedData = updateVendorProfileSchema.parse(body)
      
      const { data, error } = await supabase
        .from('vendor_profiles')
        .update(validatedData)
        .eq('vendor_id', profile.id)
        .select(`
          *,
          vendor:profiles!vendor_id (
            id,
            name,
            email,
            phone
          ),
          documents:vendor_documents (
            id,
            type,
            region,
            verification_status,
            expiry_date,
            created_at
          )
        `)
        .single()

      if (error) throw error
      vendorProfile = data
    } else {
      // Create new profile
      const validatedData = createVendorProfileSchema.parse(body)
      
      const { data, error } = await supabase
        .from('vendor_profiles')
        .insert({
          ...validatedData,
          vendor_id: profile.id
        })
        .select(`
          *,
          vendor:profiles!vendor_id (
            id,
            name,
            email,
            phone
          ),
          documents:vendor_documents (
            id,
            type,
            region,
            verification_status,
            expiry_date,
            created_at
          )
        `)
        .single()

      if (error) throw error
      vendorProfile = data
    }

    return NextResponse.json(vendorProfile)
  } catch (error) {
    console.error('Error updating vendor profile:', error)
    return NextResponse.json(
      { error: 'Failed to update vendor profile' },
      { status: 500 }
    )
  }
}