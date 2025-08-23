import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get('search')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    // For now, return mock vendor data to prevent frontend crashes
    // TODO: Implement proper vendor database integration
    const mockVendors = [
      {
        id: 'vendor-001',
        business_name: 'Fresh Farm Produce',
        category: 'farmer',
        region: 'Brisbane',
        products_summary: 'Seasonal vegetables, herbs, and free-range eggs from our family farm.',
        website: 'https://freshfarmproduce.com.au',
        lat: -27.4700,
        lng: 153.0240,
        city: 'Brisbane',
        state: 'QLD',
        phone: '+61400000001',
        email: 'fresh.farm@example.com'
      },
      {
        id: 'vendor-002',
        business_name: 'Artisan Bread Co',
        category: 'gourmet_food',
        region: 'Gold Coast',
        products_summary: 'Handcrafted sourdough breads, pastries, and artisanal baked goods.',
        website: 'https://artisanbreadco.com.au',
        lat: -28.0023,
        lng: 153.4145,
        city: 'Gold Coast',
        state: 'QLD',
        phone: '+61400000002',
        email: 'artisan.bread@example.com'
      },
      {
        id: 'vendor-003',
        business_name: 'Local Honey & Beeswax',
        category: 'specialist',
        region: 'Brisbane',
        products_summary: 'Pure local honey, beeswax candles, and natural skincare products.',
        website: 'https://localhoney.com.au',
        lat: -27.4800,
        lng: 153.0100,
        city: 'Brisbane',
        state: 'QLD',
        phone: '+61400000003',
        email: 'local.honey@example.com'
      }
    ]

    // Apply search filter to mock data
    let filteredVendors = mockVendors
    if (search) {
      filteredVendors = mockVendors.filter(vendor => 
        vendor.business_name.toLowerCase().includes(search.toLowerCase()) ||
        vendor.category.toLowerCase().includes(search.toLowerCase()) ||
        vendor.region.toLowerCase().includes(search.toLowerCase()) ||
        vendor.products_summary.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Apply pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedVendors = filteredVendors.slice(startIndex, endIndex)

    return NextResponse.json({
      vendors: paginatedVendors,
      total: filteredVendors.length,
      page,
      limit
    })
  } catch (error) {
    console.error('Error fetching vendors:', error)
    return NextResponse.json(
      { error: 'Failed to fetch vendors' },
      { status: 500 }
    )
  }
}