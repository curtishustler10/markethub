#!/usr/bin/env node

/**
 * Quick script to check the current status of markets in the database
 * This helps diagnose why no market pins are showing on the map
 */

const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

async function checkMarketsStatus() {
  console.log('🔍 Checking MarketHub database status...\n')

  // Check environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl) {
    console.error('❌ Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
    console.log('💡 Please check your .env.local file')
    return
  }

  if (!supabaseKey) {
    console.error('❌ Missing Supabase key environment variable')
    console.log('💡 Please check your .env.local file for SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY')
    return
  }

  console.log(`📡 Connecting to: ${supabaseUrl}`)
  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    // Check if markets table exists and has data
    console.log('\n📊 Checking markets table...')
    const { data: markets, error: marketsError, count } = await supabase
      .from('markets')
      .select('*', { count: 'exact' })

    if (marketsError) {
      console.error('❌ Error accessing markets table:', marketsError.message)
      return
    }

    console.log(`📈 Total markets in database: ${count || 0}`)

    if (count === 0) {
      console.log('\n🚨 PROBLEM IDENTIFIED: No markets in database!')
      console.log('💡 This is why no market pins appear on the map.')
      console.log('\n🔧 SOLUTION: Run the population script:')
      console.log('   node populate_sample_markets.js')
      return
    }

    // Show market details
    console.log('\n🏪 Markets found:')
    markets.forEach((market, index) => {
      console.log(`   ${index + 1}. ${market.name}`)
      console.log(`      Location: ${market.city}, ${market.state}`)
      console.log(`      Coordinates: ${market.lat}, ${market.lng}`)
      console.log(`      Status: ${market.status}`)
      console.log(`      Verified: ${market.is_verified ? 'Yes' : 'No'}`)
      console.log('')
    })

    // Check for live markets specifically
    const liveMarkets = markets.filter(m => m.status === 'live')
    console.log(`✅ Live markets: ${liveMarkets.length}/${count}`)

    if (liveMarkets.length === 0) {
      console.log('\n⚠️  WARNING: No markets with "live" status found!')
      console.log('💡 Markets must have status = "live" to appear in the API')
    }

    // Check for markets with coordinates
    const marketsWithCoords = markets.filter(m => m.lat && m.lng)
    console.log(`📍 Markets with coordinates: ${marketsWithCoords.length}/${count}`)

    if (marketsWithCoords.length === 0) {
      console.log('\n⚠️  WARNING: No markets have coordinates!')
      console.log('💡 Markets need lat/lng values to appear on the map')
    }

    // Check API endpoint
    console.log('\n🌐 Testing API endpoint...')
    try {
      const response = await fetch(`${supabaseUrl.replace('supabase.co', 'markethub-web.vercel.app')}/api/markets`)
      const apiData = await response.json()
      
      if (apiData.markets && apiData.markets.length > 0) {
        console.log(`✅ API working: ${apiData.markets.length} markets returned`)
      } else {
        console.log('❌ API issue: No markets returned from /api/markets')
        console.log('💡 This suggests a database connection or RLS policy issue')
      }
    } catch (apiError) {
      console.log('⚠️  Could not test API endpoint (this is normal for local development)')
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error.message)
  }
}

// Run the script
if (require.main === module) {
  checkMarketsStatus()
}

module.exports = { checkMarketsStatus }
