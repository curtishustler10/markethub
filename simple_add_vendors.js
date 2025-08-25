#!/usr/bin/env node

/**
 * Simple script to add vendors to the database
 * This creates basic vendor data that can be displayed on the map
 */

const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

// Simple vendors data
const simpleVendors = [
  {
    business_name: 'Fresh Farm Produce',
    category: 'farmer',
    region: 'Brisbane',
    products_summary: 'Seasonal vegetables, herbs, and free-range eggs from our family farm.',
    website: 'https://freshfarmproduce.com.au',
    lat: -27.4700,
    lng: 153.0240,
    city: 'Brisbane',
    state: 'QLD'
  },
  {
    business_name: 'Artisan Bread Co',
    category: 'gourmet_food',
    region: 'Gold Coast',
    products_summary: 'Handcrafted sourdough breads, pastries, and artisanal baked goods.',
    website: 'https://artisanbreadco.com.au',
    lat: -28.0023,
    lng: 153.4145,
    city: 'Gold Coast',
    state: 'QLD'
  },
  {
    business_name: 'Local Honey & Beeswax',
    category: 'specialist',
    region: 'Brisbane',
    products_summary: 'Pure local honey, beeswax candles, and natural skincare products.',
    website: 'https://localhoney.com.au',
    lat: -27.4800,
    lng: 153.0100,
    city: 'Brisbane',
    state: 'QLD'
  }
]

async function addSimpleVendors() {
  console.log('🚀 Adding simple vendors to database...')
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing environment variables')
    return
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    // First, let's check what tables exist
    console.log('🔍 Checking database structure...')
    
    // Check if vendor_profiles table exists
    const { data: vendorProfilesTest, error: vpError } = await supabase
      .from('vendor_profiles')
      .select('*')
      .limit(1)

    if (vpError) {
      console.log('❌ vendor_profiles table not accessible:', vpError.message)
      console.log('💡 Creating vendors in profiles table instead...')
      
      // Create vendors directly in profiles table
      for (const vendor of simpleVendors) {
        console.log(`\n👤 Adding vendor: ${vendor.business_name}`)
        
        const { error } = await supabase
          .from('profiles')
          .insert({
            role: 'vendor',
            name: vendor.business_name,
            email: `${vendor.business_name.toLowerCase().replace(/\s+/g, '.')}@example.com`,
            phone: '+61400000000',
            lat: vendor.lat,
            lng: vendor.lng,
            city: vendor.city,
            state: vendor.state
          })

        if (error) {
          console.error(`❌ Error adding ${vendor.business_name}:`, error.message)
        } else {
          console.log(`✅ Added: ${vendor.business_name}`)
        }
      }
    } else {
      console.log('✅ vendor_profiles table accessible')
      
      // Check if we have any existing profiles to use as vendor_id
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id, role, name')
        .limit(5)

      if (profilesError) {
        console.error('❌ Error checking profiles:', profilesError.message)
        return
      }

      console.log(`✅ Found ${profiles.length} existing profiles`)
      
      // Use the first profile as vendor_id (or find a vendor)
      const vendorProfile = profiles.find(p => p.role === 'vendor') || profiles[0]
      console.log(`👤 Using profile as vendor: ${vendorProfile.name} (${vendorProfile.role})`)

      // Add vendors to vendor_profiles table
      for (const vendor of simpleVendors) {
        console.log(`\n🏪 Adding vendor: ${vendor.business_name}`)
        
        const { error } = await supabase
          .from('vendor_profiles')
          .insert({
            vendor_id: vendorProfile.id,
            business_name: vendor.business_name,
            category: vendor.category,
            region: vendor.region,
            products_summary: vendor.products_summary,
            website: vendor.website
          })

        if (error) {
          console.error(`❌ Error adding ${vendor.business_name}:`, error.message)
        } else {
          console.log(`✅ Added: ${vendor.business_name}`)
        }
      }
    }

    // Verify vendors were added
    console.log('\n🔍 Verifying vendors in database...')
    
    // Try to get vendors from profiles table first
    const { data: vendorProfiles, error: fetchError } = await supabase
      .from('profiles')
      .select('name, role, city, state, lat, lng')
      .eq('role', 'vendor')

    if (fetchError) {
      console.error('❌ Error fetching vendor profiles:', fetchError.message)
    } else {
      console.log(`✅ Found ${vendorProfiles.length} vendor profiles:`)
      vendorProfiles.forEach(vendor => {
        console.log(`   • ${vendor.name} (${vendor.city}, ${vendor.state})`)
      })
    }

    console.log('\n🎉 Done! Check your vendors now.')

  } catch (error) {
    console.error('❌ Unexpected error:', error.message)
  }
}

// Run the script
if (require.main === module) {
  addSimpleVendors()
}

module.exports = { addSimpleVendors }
