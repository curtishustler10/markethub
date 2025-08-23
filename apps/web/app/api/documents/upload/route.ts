import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getCurrentProfile } from '@/lib/auth'
import { documentUploadSchema } from 'shared'
import { z } from 'zod'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const profile = await getCurrentProfile()
    if (!profile) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { type, region, marketId } = documentUploadSchema.extend({
      marketId: z.string().uuid().optional()
    }).parse(body)

    const supabase = createClient()
    
    // Determine storage path based on document owner
    let storagePath: string
    let isMarketDocument = false
    
    if (marketId) {
      // Market document - check permission
      const { data: market } = await supabase
        .from('markets')
        .select('owner_id')
        .eq('id', marketId)
        .single()
        
      if (!market || (market.owner_id !== profile.id && profile.role !== 'admin')) {
        return NextResponse.json(
          { error: 'Insufficient permissions' },
          { status: 403 }
        )
      }
      
      storagePath = `market-docs/${marketId}/${type}-${Date.now()}`
      isMarketDocument = true

      // Mark market as verified
      const { error: marketVerifyError } = await supabase
        .from('markets')
        .update({
          is_verified: true,
          verified_at: new Date().toISOString(),
          verified_by: profile.id
        })
        .eq('id', marketId)

      if (marketVerifyError) {
        console.error('Error verifying market:', marketVerifyError)
      }
    } else {
      // Vendor document
      if (profile.role !== 'vendor' && profile.role !== 'admin') {
        return NextResponse.json(
          { error: 'Insufficient permissions' },
          { status: 403 }
        )
      }
      
      storagePath = `vendor-docs/${profile.id}/${type}-${Date.now()}`

      // Mark vendor profile as verified
      const { error: vendorVerifyError } = await supabase
        .from('vendor_profiles')
        .update({
          is_verified: true,
          verified_at: new Date().toISOString(),
          verified_by: profile.id
        })
        .or(`vendor_id.eq.${profile.id},claimed_profile_id.eq.${profile.id}`)

      if (vendorVerifyError) {
        console.error('Error verifying vendor profile:', vendorVerifyError)
      }
    }

    // Generate signed upload URL
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('documents')
      .createSignedUploadUrl(storagePath)

    if (uploadError) {
      throw uploadError
    }

    return NextResponse.json({
      signed_url: uploadData.signedUrl,
      storage_path: storagePath,
      type,
      region,
      is_market_document: isMarketDocument,
      market_id: marketId
    })
  } catch (error) {
    console.error('Error creating upload URL:', error)
    return NextResponse.json(
      { error: 'Failed to create upload URL' },
      { status: 500 }
    )
  }
}