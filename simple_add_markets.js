#!/usr/bin/env node

/**
 * Simple script to add markets to the database
 * This bypasses the complex profile creation and just adds markets
 */

const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

// Simple markets data - no complex relationships
const simpleMarkets = [
  {
    name: 'South Bank Weekend Markets',
    slug: 'south-bank-weekend-markets',
    description: 'Brisbane\'s premier weekend market featuring local produce, artisan foods, and handmade crafts.',
    address: 'Stanley Street Plaza, South Bank QLD 4101, Australia',
    city: 'Brisbane',
    state: 'QLD',
    postcode: '4101',
    country: 'Australia',
    lat: -27.4750,
    lng: 153.0200,
    amenities: { parking: true, toilets: true, power: true, water: true },
    requirements: { food_licence: true, public_liability: true },
    status: 'live'
  },
  {
    name: 'West End Farmers Market',
    slug: 'west-end-farmers-market',
    description: 'A vibrant community market focusing on fresh local produce and organic foods.',
    address: 'Davies Park, West End QLD 4101, Australia',
    city: 'Brisbane',
    state: 'QLD',
    postcode: '4101',
    country: 'Australia',
    lat: -27.4800,
    lng: 153.0100,
    amenities: { parking: true, toilets: true, power: false, water: true },
    requirements: { food_licence: true, public_liability: true },
    status: 'live'
  },
  {
    name: 'Surfers Paradise Beachfront Market',
    slug: 'surfers-paradise-beachfront-market',
    description: 'Iconic beachfront market with stunning ocean views and local crafts.',
    address: 'Cavill Avenue, Surfers Paradise QLD 4217, Australia',
    city: 'Gold Coast',
    state: 'QLD',
    postcode: '4217',
    country: 'Australia',
    lat: -28.0023,
    lng: 153.4145,
    amenities: { parking: true, toilets: true, power: true, water: true },
    requirements: { food_licence: true, public_liability: true },
    status: 'live'
  }
]

async function addSimpleMarkets() {
  console.log('🚀 Adding simple markets to database...')
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing environment variables')
    return
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    // First, let's see what columns actually exist in the markets table
    console.log('🔍 Checking markets table structure...')
    const { data: tableInfo, error: tableError } = await supabase
      .from('markets')
      .select('*')
      .limit(1)

    if (tableError) {
      console.error('❌ Error checking table structure:', tableError.message)
      return
    }

    console.log('✅ Markets table accessible')

    // Check if we have any existing profiles
    console.log('🔍 Checking for existing profiles...')
    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .select('id, role, name')
      .limit(5)

    if (profilesError) {
      console.error('❌ Error checking profiles:', profilesError.message)
      return
    }

    console.log(`✅ Found ${profiles.length} existing profiles:`)
    profiles.forEach(profile => {
      console.log(`   • ${profile.name} (${profile.role})`)
    })

    if (profiles.length === 0) {
      console.log('❌ No profiles found. Cannot create markets without an owner.')
      return
    }

    // Use the first profile as owner (or find a market_organizer)
    const ownerProfile = profiles.find(p => p.role === 'market_organizer') || profiles[0]
    console.log(`\n👤 Using profile as owner: ${ownerProfile.name} (${ownerProfile.role})`)

    // Add markets one by one
    for (const market of simpleMarkets) {
      console.log(`\n🏪 Adding market: ${market.name}`)
      
      const { error } = await supabase
        .from('markets')
        .insert({
          owner_id: ownerProfile.id,
          name: market.name,
          slug: market.slug,
          description: market.description,
          address: market.address,
          city: market.city,
          state: market.state,
          postcode: market.postcode,
          country: market.country,
          lat: market.lat,
          lng: market.lng,
          amenities: market.amenities,
          requirements: market.requirements,
          status: market.status
        })

      if (error) {
        console.error(`❌ Error adding ${market.name}:`, error.message)
      } else {
        console.log(`✅ Added: ${market.name}`)
      }
    }

    // Verify markets were added
    console.log('\n🔍 Verifying markets in database...')
    const { data: markets, error: fetchError } = await supabase
      .from('markets')
      .select('name, city, state, status, lat, lng')
      .eq('status', 'live')

    if (fetchError) {
      console.error('❌ Error fetching markets:', fetchError.message)
    } else {
      console.log(`✅ Found ${markets.length} live markets:`)
      markets.forEach(market => {
        console.log(`   • ${market.name} (${market.city}, ${market.state})`)
      })
    }

    console.log('\n🎉 Done! Check your map now.')

  } catch (error) {
    console.error('❌ Unexpected error:', error.message)
  }
}

// Run the script
if (require.main === module) {
  addSimpleMarkets()
}

module.exports = { addSimpleMarkets }
