#!/usr/bin/env node

/**
 * Script to populate the MarketHub database with sample markets
 * Run this script to add sample markets so they appear on the map
 */

const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

// Sample markets data
const sampleMarkets = [
  {
    id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
    owner_id: '11111111-1111-1111-1111-111111111111',
    name: 'South Bank Weekend Markets',
    slug: 'south-bank-weekend-markets',
    description: 'Brisbane\'s premier weekend market featuring local produce, artisan foods, and handmade crafts. Located in the heart of South Bank with river views.',
    address: 'Stanley Street Plaza, South Bank QLD 4101, Australia',
    city: 'Brisbane',
    state: 'QLD',
    postcode: '4101',
    country: 'Australia',
    lat: -27.4750,
    lng: 153.0200,
    amenities: { parking: true, toilets: true, power: true, water: true, wifi: false, loading_dock: true },
    requirements: { food_licence: true, public_liability: true, products_list: true },
    status: 'live',
    is_verified: true
  },
  {
    id: 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
    owner_id: '11111111-1111-1111-1111-111111111111',
    name: 'West End Farmers Market',
    slug: 'west-end-farmers-market',
    description: 'A vibrant community market focusing on fresh local produce, organic foods, and sustainable products. Every Saturday morning.',
    address: 'Davies Park, West End QLD 4101, Australia',
    city: 'Brisbane',
    state: 'QLD',
    postcode: '4101',
    country: 'Australia',
    lat: -27.4800,
    lng: 153.0100,
    amenities: { parking: true, toilets: true, power: false, water: true, wifi: false, loading_dock: false },
    requirements: { food_licence: true, public_liability: true, organic_certification: false },
    status: 'live',
    is_verified: true
  },
  {
    id: 'cccccccc-cccc-cccc-cccc-cccccccccccc',
    owner_id: '22222222-2222-2222-2222-222222222222',
    name: 'Surfers Paradise Beachfront Market',
    slug: 'surfers-paradise-beachfront-market',
    description: 'Iconic beachfront market with stunning ocean views. Features food trucks, local crafts, and beach-themed products. Open Friday to Sunday.',
    address: 'Cavill Avenue, Surfers Paradise QLD 4217, Australia',
    city: 'Gold Coast',
    state: 'QLD',
    postcode: '4217',
    country: 'Australia',
    lat: -28.0023,
    lng: 153.4145,
    amenities: { parking: true, toilets: true, power: true, water: true, wifi: true, loading_dock: true },
    requirements: { food_licence: true, public_liability: true, tourism_permit: true },
    status: 'live',
    is_verified: true
  },
  {
    id: 'dddddddd-dddd-dddd-dddd-dddddddddddd',
    owner_id: '33333333-3333-3333-3333-333333333333',
    name: 'Browns Plains Community Market',
    slug: 'browns-plains-community-market',
    description: 'Family-friendly community market serving the growing Browns Plains area. Focus on fresh produce, family meals, and local businesses.',
    address: 'Grand Plaza Shopping Centre, Browns Plains QLD 4118, Australia',
    city: 'Brisbane',
    state: 'QLD',
    postcode: '4118',
    country: 'Australia',
    lat: -27.6500,
    lng: 153.0400,
    amenities: { parking: true, toilets: true, power: true, water: true, wifi: false, loading_dock: true },
    requirements: { food_licence: true, public_liability: true, products_list: true },
    status: 'live',
    is_verified: true
  },
  {
    id: 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee',
    owner_id: '44444444-4444-4444-4444-444444444444',
    name: 'Northside Artisan Market',
    slug: 'northside-artisan-market',
    description: 'Boutique market specializing in handcrafted goods, gourmet foods, and unique local products. Perfect for specialty vendors.',
    address: 'Gasworks Plaza, Newstead QLD 4006, Australia',
    city: 'Brisbane',
    state: 'QLD',
    postcode: '4006',
    country: 'Australia',
    lat: -27.4350,
    lng: 153.0450,
    amenities: { parking: true, toilets: true, power: true, water: true, wifi: true, loading_dock: false },
    requirements: { food_licence: true, public_liability: true, artisan_certification: false },
    status: 'live',
    is_verified: true
  }
]

// Sample market organizers
const marketOrganizers = [
  {
    id: '11111111-1111-1111-1111-111111111111',
    role: 'market_organizer',
    name: 'Brisbane Markets Collective',
    email: 'brisbane.markets@example.com',
    phone: '(07) 3000 1001'
  },
  {
    id: '22222222-2222-2222-2222-222222222222',
    role: 'market_organizer',
    name: 'Gold Coast Events Co',
    email: 'goldcoast.events@example.com',
    phone: '(07) 5000 2002'
  },
  {
    id: '33333333-3333-3333-3333-333333333333',
    role: 'market_organizer',
    name: 'Southside Market Group',
    email: 'southside.markets@example.com',
    phone: '(07) 3000 3003'
  },
  {
    id: '44444444-4444-4444-4444-444444444444',
    role: 'market_organizer',
    name: 'Northside Community Markets',
    email: 'northside.events@example.com',
    phone: '(07) 3000 4004'
  }
]

async function populateDatabase() {
  // Check environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing required environment variables:')
    console.error('   NEXT_PUBLIC_SUPABASE_URL')
    console.error('   SUPABASE_SERVICE_ROLE_KEY')
    console.error('\nPlease check your .env.local file')
    process.exit(1)
  }

  console.log('🚀 Starting database population...')
  console.log(`📡 Connecting to: ${supabaseUrl}`)

  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    // First, create market organizer profiles
    console.log('\n👥 Creating market organizer profiles...')
    for (const organizer of marketOrganizers) {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: organizer.id,
          role: organizer.role,
          name: organizer.name,
          email: organizer.email,
          phone: organizer.phone,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }, { onConflict: 'id' })

      if (error) {
        console.error(`❌ Error creating organizer ${organizer.name}:`, error.message)
      } else {
        console.log(`✅ Created organizer: ${organizer.name}`)
      }
    }

    // Then, create the markets
    console.log('\n🏪 Creating sample markets...')
    for (const market of sampleMarkets) {
      const { error } = await supabase
        .from('markets')
        .upsert({
          id: market.id,
          owner_id: market.owner_id,
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
          status: market.status,
          is_verified: market.is_verified,
          verified_at: new Date().toISOString(),
          verified_by: market.owner_id,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }, { onConflict: 'id' })

      if (error) {
        console.error(`❌ Error creating market ${market.name}:`, error.message)
      } else {
        console.log(`✅ Created market: ${market.name} (${market.city}, ${market.state})`)
      }
    }

    // Verify the markets were created
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
        console.log(`   • ${market.name} (${market.city}, ${market.state}) - ${market.lat}, ${market.lng}`)
      })
    }

    console.log('\n🎉 Database population complete!')
    console.log('🌐 Your markets should now appear on the map at: https://markethub-web.vercel.app/')

  } catch (error) {
    console.error('❌ Unexpected error:', error.message)
    process.exit(1)
  }
}

// Run the script
if (require.main === module) {
  populateDatabase()
}

module.exports = { populateDatabase, sampleMarkets, marketOrganizers }
