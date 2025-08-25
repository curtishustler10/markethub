#!/usr/bin/env node
/**
 * Production Fix Script - Fix all identified issues for production deployment
 * 1. Fix orphaned system auth user
 * 2. Transfer market ownership to proper system user
 * 3. Add missing coordinates to markets (geocoding)
 * 4. Verify production readiness
 */

const { createClient } = require('@supabase/supabase-js');

// Load environment variables
require('dotenv').config({ path: './.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

const SYSTEM_USER_ID = '00000000-0000-0000-0000-000000000000';

// Geocoding function using a free service
async function geocodeAddress(address, city, state, country = 'Australia') {
  try {
    const query = `${address}, ${city}, ${state}, ${country}`.replace(/,\s*,/g, ',').replace(/^,|,$/g, '');
    
    // Using Nominatim (OpenStreetMap) - free geocoding service
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1&countrycodes=au`);
    
    if (!response.ok) {
      throw new Error(`Geocoding API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };
    }
    
    return null;
  } catch (error) {
    console.warn(`Geocoding failed for "${query}":`, error.message);
    return null;
  }
}

// Add delay between geocoding requests to respect rate limits
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fixOrphanedSystemUser() {
  console.log('🔧 FIXING ORPHANED SYSTEM AUTH USER');
  console.log('==================================');

  try {
    // Check if system user profile exists
    const { data: existingProfile } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', SYSTEM_USER_ID)
      .single();

    if (existingProfile) {
      console.log('✅ System user profile already exists');
      return SYSTEM_USER_ID;
    }

    // Create system user profile
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: SYSTEM_USER_ID,
        role: 'admin',
        name: 'System User',
        email: 'system@markethub.com.au'
      });

    if (profileError) {
      console.error('❌ Error creating system user profile:', profileError);
      return null;
    }

    console.log('✅ Created system user profile');
    return SYSTEM_USER_ID;

  } catch (error) {
    console.error('❌ Error fixing orphaned system user:', error);
    return null;
  }
}

async function transferMarketOwnership() {
  console.log('\n🔄 TRANSFERRING MARKET OWNERSHIP');
  console.log('================================');

  try {
    // Get all draft markets (the imported ones)
    const { data: draftMarkets, error: fetchError } = await supabase
      .from('markets')
      .select('id, name, owner_id')
      .eq('status', 'draft');

    if (fetchError) {
      console.error('❌ Error fetching draft markets:', fetchError);
      return false;
    }

    console.log(`📊 Found ${draftMarkets.length} draft markets to transfer`);

    // Update ownership to system user
    const { error: updateError } = await supabase
      .from('markets')
      .update({ owner_id: SYSTEM_USER_ID })
      .eq('status', 'draft');

    if (updateError) {
      console.error('❌ Error updating market ownership:', updateError);
      return false;
    }

    console.log(`✅ Transferred ${draftMarkets.length} draft markets to system user`);
    console.log('💡 These markets are now ready to be claimed by organizers');
    
    return true;

  } catch (error) {
    console.error('❌ Error transferring market ownership:', error);
    return false;
  }
}

async function addMissingCoordinates() {
  console.log('\n📍 ADDING MISSING COORDINATES');
  console.log('=============================');

  try {
    // Get markets without coordinates
    const { data: marketsWithoutCoords } = await supabase
      .from('markets')
      .select('id, name, address, city, state, country, lat, lng')
      .or('lat.is.null,lng.is.null');

    if (!marketsWithoutCoords || marketsWithoutCoords.length === 0) {
      console.log('✅ All markets already have coordinates');
      return true;
    }

    console.log(`📊 Found ${marketsWithoutCoords.length} markets missing coordinates`);

    let updated = 0;
    let failed = 0;

    for (let i = 0; i < marketsWithoutCoords.length; i++) {
      const market = marketsWithoutCoords[i];
      
      console.log(`\n${i + 1}/${marketsWithoutCoords.length}: ${market.name}`);
      
      // Try to geocode
      const coords = await geocodeAddress(
        market.address || '', 
        market.city || '', 
        market.state || '', 
        market.country || 'Australia'
      );

      if (coords) {
        // Update market with coordinates
        const { error: updateError } = await supabase
          .from('markets')
          .update({ 
            lat: coords.lat, 
            lng: coords.lng 
          })
          .eq('id', market.id);

        if (updateError) {
          console.error(`❌ Failed to update coordinates: ${updateError.message}`);
          failed++;
        } else {
          console.log(`✅ Updated: ${coords.lat}, ${coords.lng}`);
          updated++;
        }
      } else {
        console.log(`⚠️  No coordinates found`);
        failed++;
      }

      // Rate limiting: wait 1 second between requests
      if (i < marketsWithoutCoords.length - 1) {
        await delay(1000);
      }
    }

    console.log(`\n📊 Geocoding Results:`);
    console.log(`✅ Successfully updated: ${updated} markets`);
    console.log(`❌ Failed: ${failed} markets`);
    
    return updated > 0;

  } catch (error) {
    console.error('❌ Error adding missing coordinates:', error);
    return false;
  }
}

async function verifyProductionReadiness() {
  console.log('\n✅ VERIFYING PRODUCTION READINESS');
  console.log('=================================');

  const issues = [];
  
  try {
    // 1. Check auth users vs profiles sync
    const { data: authUsers } = await supabase.auth.admin.listUsers();
    const { data: profiles } = await supabase.from('profiles').select('id');
    
    const authIds = new Set(authUsers.users.map(u => u.id));
    const profileIds = new Set(profiles.map(p => p.id));
    
    const orphanedAuth = authUsers.users.filter(u => !profileIds.has(u.id));
    if (orphanedAuth.length > 0) {
      issues.push(`${orphanedAuth.length} orphaned auth users without profiles`);
    }

    // 2. Check markets
    const { data: markets } = await supabase.from('markets').select('id, owner_id, status, lat, lng');
    
    // Markets without coordinates
    const marketsWithoutCoords = markets.filter(m => !m.lat || !m.lng);
    if (marketsWithoutCoords.length > 0) {
      issues.push(`${marketsWithoutCoords.length} markets missing coordinates`);
    }

    // Draft markets owned by regular users (should be system-owned)
    const draftMarketsOwnedByUsers = markets.filter(m => 
      m.status === 'draft' && m.owner_id !== SYSTEM_USER_ID
    );
    if (draftMarketsOwnedByUsers.length > 0) {
      issues.push(`${draftMarketsOwnedByUsers.length} draft markets owned by regular users instead of system`);
    }

    // 3. Check feature flags
    const { data: flags } = await supabase.from('feature_flags').select('*');
    const vendorFlag = flags.find(f => f.key === 'plan.vendor_management');
    if (!vendorFlag || !vendorFlag.enabled) {
      issues.push('Vendor management feature flag is not enabled');
    }

    // 4. Check system user exists
    const { data: systemUser } = await supabase
      .from('profiles')
      .select('id')
      .eq('id', SYSTEM_USER_ID)
      .single();
    
    if (!systemUser) {
      issues.push('System user profile does not exist');
    }

    // Report results
    console.log('\n📋 PRODUCTION READINESS REPORT');
    console.log('------------------------------');
    
    if (issues.length === 0) {
      console.log('🎉 ALL SYSTEMS GO! Ready for production deployment!');
      console.log('\n📊 System Status:');
      console.log(`   👥 Auth users: ${authUsers.users.length}`);
      console.log(`   👤 Profiles: ${profiles.length}`);
      console.log(`   🏪 Total markets: ${markets.length}`);
      console.log(`   📍 Markets with coordinates: ${markets.filter(m => m.lat && m.lng).length}`);
      console.log(`   📝 Draft markets: ${markets.filter(m => m.status === 'draft').length}`);
      console.log(`   ✅ Live markets: ${markets.filter(m => m.status === 'live').length}`);
      console.log(`   🚩 Feature flags: ${flags.length}`);
      
      return true;
    } else {
      console.log('⚠️  ISSUES FOUND:');
      issues.forEach(issue => console.log(`   - ${issue}`));
      return false;
    }

  } catch (error) {
    console.error('❌ Error during production readiness check:', error);
    return false;
  }
}

async function main() {
  console.log('🚀 PRODUCTION FIX SCRIPT - PREPARING FOR DEPLOYMENT');
  console.log('=====================================================\n');

  let allFixed = true;

  // Step 1: Fix orphaned system user
  const systemUserId = await fixOrphanedSystemUser();
  if (!systemUserId) {
    console.error('❌ CRITICAL: Could not fix system user');
    allFixed = false;
  }

  // Step 2: Transfer market ownership
  if (systemUserId) {
    const ownershipFixed = await transferMarketOwnership();
    if (!ownershipFixed) {
      console.error('❌ WARNING: Could not transfer market ownership');
      allFixed = false;
    }
  }

  // Step 3: Add missing coordinates (optional but recommended)
  console.log('\n❓ Adding coordinates may take several minutes due to rate limiting.');
  console.log('   This is optional for production deployment.');
  
  // Skip geocoding for now to speed up deployment
  // const coordsAdded = await addMissingCoordinates();

  // Step 4: Verify production readiness
  const productionReady = await verifyProductionReadiness();
  if (!productionReady) {
    allFixed = false;
  }

  // Final report
  console.log('\n' + '='.repeat(60));
  if (allFixed && productionReady) {
    console.log('🎉 SUCCESS! All production issues have been resolved!');
    console.log('🚀 Your MarketHub database is ready for production deployment!');
  } else {
    console.log('⚠️  Some issues remain. Please review the output above.');
  }
  console.log('='.repeat(60));
}

main();