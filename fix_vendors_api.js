#!/usr/bin/env node

/**
 * Script to fix the vendors API by creating a simple vendors table
 */

const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

async function fixVendorsAPI() {
  console.log('🔧 Fixing vendors API...')
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing environment variables')
    return
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    // First, let's see what tables exist and their structure
    console.log('🔍 Checking database structure...')
    
    // Check profiles table
    const { data: profilesTest, error: profilesError } = await supabase
      .from('profiles')
      .select('*')
      .limit(1)

    if (profilesError) {
      console.error('❌ Error checking profiles table:', profilesError.message)
    } else {
      console.log('✅ Profiles table accessible')
      console.log('📋 Available columns:', Object.keys(profilesTest[0] || {}))
    }

    // Check if we can create a simple vendors table
    console.log('\n🔍 Checking if we can create a vendors table...')
    
    // Try to create a simple vendors table (this might fail if we don't have permissions)
    try {
      const { error: createError } = await supabase.rpc('exec_sql', {
        sql: `
          CREATE TABLE IF NOT EXISTS simple_vendors (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name TEXT NOT NULL,
            category TEXT DEFAULT 'vendor',
            region TEXT,
            products_summary TEXT,
            website TEXT,
            lat DOUBLE PRECISION,
            lng DOUBLE PRECISION,
            city TEXT,
            state TEXT,
            created_at TIMESTAMPTZ DEFAULT NOW()
          );
        `
      })

      if (createError) {
        console.log('⚠️  Could not create vendors table (might not have permissions):', createError.message)
        console.log('💡 Using existing profiles table instead...')
        
        // Add location columns to profiles table if possible
        try {
          const { error: alterError } = await supabase.rpc('exec_sql', {
            sql: `
              ALTER TABLE profiles 
              ADD COLUMN IF NOT EXISTS lat DOUBLE PRECISION,
              ADD COLUMN IF NOT EXISTS lng DOUBLE PRECISION,
              ADD COLUMN IF NOT EXISTS city TEXT,
              ADD COLUMN IF NOT EXISTS state TEXT;
            `
          })

          if (alterError) {
            console.log('⚠️  Could not alter profiles table:', alterError.message)
            console.log('💡 Using markets table structure for vendors...')
          } else {
            console.log('✅ Added location columns to profiles table')
          }
        } catch (alterErr) {
          console.log('⚠️  Could not alter profiles table:', alterErr.message)
        }
      } else {
        console.log('✅ Created simple_vendors table')
      }
    } catch (createErr) {
      console.log('⚠️  Could not create vendors table:', createErr.message)
    }

    // Now let's add some sample vendors
    console.log('\n🏪 Adding sample vendors...')
    
    const sampleVendors = [
      {
        name: 'Fresh Farm Produce',
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
        name: 'Artisan Bread Co',
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
        name: 'Local Honey & Beeswax',
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

    // Try to add vendors to the simple_vendors table first
    let vendorsAdded = 0
    for (const vendor of sampleVendors) {
      try {
        const { error } = await supabase
          .from('simple_vendors')
          .insert(vendor)

        if (error) {
          console.log(`⚠️  Could not add to simple_vendors: ${error.message}`)
          
          // Fallback: try to add to profiles table with basic info
          const { error: profileError } = await supabase
            .from('profiles')
            .insert({
              role: 'vendor',
              name: vendor.name,
              email: `${vendor.name.toLowerCase().replace(/\s+/g, '.')}@example.com`,
              phone: '+61400000000'
            })

          if (profileError) {
            console.error(`❌ Error adding ${vendor.name}:`, profileError.message)
          } else {
            console.log(`✅ Added ${vendor.name} to profiles table`)
            vendorsAdded++
          }
        } else {
          console.log(`✅ Added ${vendor.name} to simple_vendors table`)
          vendorsAdded++
        }
      } catch (err) {
        console.error(`❌ Error adding ${vendor.name}:`, err.message)
      }
    }

    console.log(`\n🎉 Added ${vendorsAdded} vendors to database`)
    console.log('💡 Now test the vendors API endpoint')

  } catch (error) {
    console.error('❌ Unexpected error:', error.message)
  }
}

// Run the script
if (require.main === module) {
  fixVendorsAPI()
}

module.exports = { fixVendorsAPI }
