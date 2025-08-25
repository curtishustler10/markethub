#!/usr/bin/env node

/**
 * Simple script to add vendors directly to the profiles table
 */

const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

// Simple vendors data
const simpleVendors = [
  {
    name: 'Fresh Farm Produce',
    email: 'fresh.farm@example.com',
    phone: '+61400000001',
    lat: -27.4700,
    lng: 153.0240,
    state: 'QLD'
  },
  {
    name: 'Artisan Bread Co',
    email: 'artisan.bread@example.com',
    phone: '+61400000002',
    lat: -28.0023,
    lng: 153.4145,
    state: 'QLD'
  },
  {
    name: 'Local Honey & Beeswax',
    email: 'local.honey@example.com',
    phone: '+61400000003',
    lat: -27.4800,
    lng: 153.0100,
    state: 'QLD'
  }
]

async function addVendorsToProfiles() {
  console.log('🚀 Adding vendors to profiles table...')
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing environment variables')
    return
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    // Add vendors to profiles table
    for (const vendor of simpleVendors) {
      console.log(`\n👤 Adding vendor: ${vendor.name}`)
      
      const { error } = await supabase
        .from('profiles')
        .insert({
          role: 'vendor',
          name: vendor.name,
          email: vendor.email,
          phone: vendor.phone,
          lat: vendor.lat,
          lng: vendor.lng,
          state: vendor.state
        })

      if (error) {
        console.error(`❌ Error adding ${vendor.name}:`, error.message)
      } else {
        console.log(`✅ Added: ${vendor.name}`)
      }
    }

    // Verify vendors were added
    console.log('\n🔍 Verifying vendors in database...')
    
    const { data: vendorProfiles, error: fetchError } = await supabase
      .from('profiles')
      .select('name, role, state, lat, lng')
      .eq('role', 'vendor')

    if (fetchError) {
      console.error('❌ Error fetching vendor profiles:', fetchError.message)
    } else {
      console.log(`✅ Found ${vendorProfiles.length} vendor profiles:`)
      vendorProfiles.forEach(vendor => {
        console.log(`   • ${vendor.name} (${vendor.state}) - ${vendor.lat}, ${vendor.lng}`)
      })
    }

    console.log('\n🎉 Done! Check your vendors now.')

  } catch (error) {
    console.error('❌ Unexpected error:', error.message)
  }
}

// Run the script
if (require.main === module) {
  addVendorsToProfiles()
}

module.exports = { addVendorsToProfiles }
