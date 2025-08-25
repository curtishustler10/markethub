#!/usr/bin/env node

/**
 * Comprehensive diagnostic script to check database status
 * and identify why markets aren't showing on the map
 */

const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

async function checkDatabaseStatus() {
  console.log('🔍 COMPREHENSIVE DATABASE DIAGNOSTIC')
  console.log('=====================================\n')
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing environment variables')
    return
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    // 1. Check total markets count
    console.log('📊 1. MARKETS COUNT CHECK')
    console.log('------------------------')
    
    const { count: totalMarkets, error: countError } = await supabase
      .from('markets')
      .select('*', { count: 'exact', head: true })

    if (countError) {
      console.error('❌ Error counting markets:', countError.message)
    } else {
      console.log(`✅ Total markets in database: ${totalMarkets}`)
    }

    // 2. Check markets with coordinates
    console.log('\n📍 2. MARKETS WITH COORDINATES')
    console.log('-------------------------------')
    
    const { data: marketsWithCoords, error: coordsError } = await supabase
      .from('markets')
      .select('id, name, city, state, lat, lng, status')
      .not('lat', 'is', null)
      .not('lng', 'is', null)

    if (coordsError) {
      console.error('❌ Error fetching markets with coordinates:', coordsError.message)
    } else {
      console.log(`✅ Markets with coordinates: ${marketsWithCoords.length}`)
      marketsWithCoords.forEach(market => {
        console.log(`   • ${market.name} (${market.city}, ${market.state}) - ${market.lat}, ${market.lng} - Status: ${market.status}`)
      })
    }

    // 3. Check live markets
    console.log('\n🟢 3. LIVE MARKETS')
    console.log('-------------------')
    
    const { data: liveMarkets, error: liveError } = await supabase
      .from('markets')
      .select('id, name, city, state, lat, lng, status')
      .eq('status', 'live')
      .not('lat', 'is', null)
      .not('lng', 'is', null)

    if (liveError) {
      console.error('❌ Error fetching live markets:', coordsError.message)
    } else {
      console.log(`✅ Live markets with coordinates: ${liveMarkets.length}`)
      liveMarkets.forEach(market => {
        console.log(`   • ${market.name} (${market.city}, ${market.state}) - ${market.lat}, ${market.lng}`)
      })
    }

    // 4. Check API endpoint response
    console.log('\n🌐 4. API ENDPOINT TEST')
    console.log('------------------------')
    
    try {
      const response = await fetch(`${supabaseUrl.replace('supabase.co', 'supabase.co')}/rest/v1/markets?select=*&status=eq.live&lat=not.is.null&lng=not.is.null`, {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        console.log(`✅ Direct API response: ${data.length} markets`)
      } else {
        console.log(`❌ API response status: ${response.status}`)
      }
    } catch (apiError) {
      console.error('❌ API test failed:', apiError.message)
    }

    // 5. Check for any markets without coordinates
    console.log('\n❌ 5. MARKETS WITHOUT COORDINATES')
    console.log('----------------------------------')
    
    const { data: marketsWithoutCoords, error: noCoordsError } = await supabase
      .from('markets')
      .select('id, name, city, state, lat, lng, status')
      .or('lat.is.null,lng.is.null')

    if (noCoordsError) {
      console.error('❌ Error fetching markets without coordinates:', noCoordsError.message)
    } else {
      console.log(`⚠️  Markets without coordinates: ${marketsWithoutCoords.length}`)
      if (marketsWithoutCoords.length > 0) {
        marketsWithoutCoords.forEach(market => {
          console.log(`   • ${market.name} (${market.city}, ${market.state}) - Lat: ${market.lat}, Lng: ${market.lng}`)
        })
      }
    }

    // 6. Check profiles table for market organizers
    console.log('\n👥 6. MARKET ORGANIZER PROFILES')
    console.log('--------------------------------')
    
    const { data: organizers, error: orgError } = await supabase
      .from('profiles')
      .select('id, name, role, email')
      .eq('role', 'market_organizer')

    if (orgError) {
      console.error('❌ Error fetching organizers:', orgError.message)
    } else {
      console.log(`✅ Market organizers: ${organizers.length}`)
      organizers.forEach(org => {
        console.log(`   • ${org.name} (${org.role}) - ${org.email}`)
      })
    }

    // 7. Summary and recommendations
    console.log('\n📋 7. SUMMARY & RECOMMENDATIONS')
    console.log('--------------------------------')
    
    const totalMarketsCount = totalMarkets || 0
    const marketsWithCoordsCount = marketsWithCoords?.length || 0
    const liveMarketsCount = liveMarkets?.length || 0
    
    console.log(`📊 Database Status:`)
    console.log(`   • Total markets: ${totalMarketsCount}`)
    console.log(`   • Markets with coordinates: ${marketsWithCoordsCount}`)
    console.log(`   • Live markets with coordinates: ${liveMarketsCount}`)
    
    if (liveMarketsCount === 0) {
      console.log('\n🚨 ISSUE IDENTIFIED: No live markets with coordinates found!')
      console.log('💡 This explains why nothing shows on the map.')
      
      if (totalMarketsCount > 0 && marketsWithCoordsCount === 0) {
        console.log('🔧 SOLUTION: All markets are missing coordinates')
        console.log('   → Run coordinate population script')
      } else if (totalMarketsCount > 0 && marketsWithCoordsCount > 0) {
        console.log('🔧 SOLUTION: Markets exist but none are marked as "live"')
        console.log('   → Update market status to "live"')
      } else if (totalMarketsCount === 0) {
        console.log('🔧 SOLUTION: No markets in database')
        console.log('   → Run market import script')
      }
    } else {
      console.log('\n✅ Markets should be visible on the map!')
      console.log('💡 If they\'re not showing, check the frontend map component.')
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error.message)
  }
}

// Run the script
if (require.main === module) {
  checkDatabaseStatus()
}

module.exports = { checkDatabaseStatus }
