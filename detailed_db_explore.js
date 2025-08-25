#!/usr/bin/env node
/**
 * Detailed database exploration using direct table queries
 * since information_schema is not accessible via Supabase API
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

async function exploreTable(tableName, sampleSize = 3) {
  console.log(`\n📋 TABLE: ${tableName.toUpperCase()}`);
  console.log('═'.repeat(60));

  try {
    // Get total count
    const { count, error: countError } = await supabase
      .from(tableName)
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error(`❌ Error accessing ${tableName}:`, countError.message);
      return;
    }

    console.log(`📊 Total records: ${count}`);

    if (count === 0) {
      console.log(`🗳️  Table is empty`);
      return;
    }

    // Get sample data to understand structure
    const { data: sampleData, error: sampleError } = await supabase
      .from(tableName)
      .select('*')
      .limit(sampleSize);

    if (sampleError) {
      console.error(`❌ Error fetching sample from ${tableName}:`, sampleError.message);
      return;
    }

    if (sampleData && sampleData.length > 0) {
      console.log(`\n📝 STRUCTURE (from first record):`);
      const firstRecord = sampleData[0];
      Object.entries(firstRecord).forEach(([key, value]) => {
        const type = typeof value;
        const preview = value === null ? 'NULL' : 
                       type === 'string' && value.length > 50 ? `"${value.substring(0, 50)}..."` :
                       type === 'object' ? JSON.stringify(value) :
                       `"${value}"`;
        console.log(`  🔹 ${key}: ${type} = ${preview}`);
      });

      if (sampleData.length > 1) {
        console.log(`\n📋 SAMPLE DATA (${Math.min(sampleSize, sampleData.length)} records):`);
        sampleData.forEach((record, index) => {
          console.log(`\n${index + 1}. Record ID: ${record.id || 'No ID'}`);
          // Show key fields for each table
          if (tableName === 'profiles') {
            console.log(`   Name: ${record.name}`);
            console.log(`   Email: ${record.email}`);
            console.log(`   Role: ${record.role}`);
            console.log(`   Created: ${record.created_at}`);
          } else if (tableName === 'markets') {
            console.log(`   Name: ${record.name}`);
            console.log(`   Location: ${record.city}, ${record.state}`);
            console.log(`   Status: ${record.status}`);
            console.log(`   Owner: ${record.owner_id}`);
          } else if (tableName === 'vendor_applications') {
            console.log(`   Market ID: ${record.market_id}`);
            console.log(`   Vendor ID: ${record.vendor_id}`);
            console.log(`   Status: ${record.status}`);
            console.log(`   Created: ${record.created_at}`);
          } else if (tableName === 'events') {
            console.log(`   Market ID: ${record.market_id}`);
            console.log(`   Start: ${record.start_date}`);
            console.log(`   End: ${record.end_date}`);
          } else {
            // Generic display for other tables
            const keyFields = Object.keys(record).slice(0, 4);
            keyFields.forEach(field => {
              let value = record[field];
              if (typeof value === 'string' && value.length > 40) {
                value = value.substring(0, 40) + '...';
              }
              console.log(`   ${field}: ${value}`);
            });
          }
        });
      }
    }

  } catch (error) {
    console.error(`❌ Error exploring ${tableName}:`, error.message);
  }
}

async function exploreDatabase() {
  console.log('🔍 DETAILED DATABASE EXPLORATION');
  console.log('=================================\n');

  // List of all tables to explore
  const tables = [
    'profiles',
    'markets', 
    'vendor_profiles',
    'vendor_applications',
    'market_documents',
    'vendor_documents',
    'events',
    'emails_log',
    'feature_flags',
    'imported_vendors'
  ];

  // Explore each table
  for (const table of tables) {
    await exploreTable(table);
  }

  // Additional analysis
  console.log('\n\n🔍 DETAILED ANALYSIS');
  console.log('====================');

  // Markets analysis
  console.log('\n🏪 MARKETS DETAILED ANALYSIS');
  console.log('----------------------------');

  try {
    const { data: allMarkets } = await supabase
      .from('markets')
      .select('name, city, state, country, status, lat, lng, created_at, owner_id');

    if (allMarkets) {
      // Group by state
      const byState = allMarkets.reduce((acc, market) => {
        const state = market.state || 'Unknown';
        if (!acc[state]) acc[state] = [];
        acc[state].push(market);
        return acc;
      }, {});

      console.log('🗺️  Markets by State:');
      Object.entries(byState).forEach(([state, markets]) => {
        console.log(`   ${state}: ${markets.length} markets`);
        if (markets.length <= 3) {
          markets.forEach(m => console.log(`     - ${m.name}`));
        }
      });

      // Markets with coordinates
      const withCoords = allMarkets.filter(m => m.lat && m.lng);
      console.log(`\n📍 Markets with coordinates: ${withCoords.length}/${allMarkets.length}`);

      // Recent vs old markets
      const now = new Date();
      const recent = allMarkets.filter(m => {
        const created = new Date(m.created_at);
        const daysDiff = (now - created) / (1000 * 60 * 60 * 24);
        return daysDiff <= 7;
      });
      
      console.log(`📅 Markets created in last 7 days: ${recent.length}`);
    }
  } catch (error) {
    console.error('❌ Error in markets analysis:', error);
  }

  // Auth vs Profiles comparison
  console.log('\n👥 USER ACCOUNTS ANALYSIS');
  console.log('-------------------------');

  try {
    const { data: authUsers } = await supabase.auth.admin.listUsers();
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, role, email, name');

    console.log(`Auth users: ${authUsers.users.length}`);
    console.log(`Profile records: ${profiles.length}`);

    // Check for orphaned auth users (no profile)
    const authIds = new Set(authUsers.users.map(u => u.id));
    const profileIds = new Set(profiles.map(p => p.id));

    const orphanedAuth = authUsers.users.filter(u => !profileIds.has(u.id));
    const orphanedProfiles = profiles.filter(p => !authIds.has(p.id));

    if (orphanedAuth.length > 0) {
      console.log(`\n⚠️  Auth users without profiles: ${orphanedAuth.length}`);
      orphanedAuth.forEach(user => {
        console.log(`   - ${user.email} (${user.id})`);
      });
    }

    if (orphanedProfiles.length > 0) {
      console.log(`\n⚠️  Profiles without auth users: ${orphanedProfiles.length}`);
      orphanedProfiles.forEach(profile => {
        console.log(`   - ${profile.email} (${profile.id})`);
      });
    }

    if (orphanedAuth.length === 0 && orphanedProfiles.length === 0) {
      console.log('✅ All auth users have matching profiles');
    }

    // Role distribution
    const roleCount = profiles.reduce((acc, p) => {
      acc[p.role] = (acc[p.role] || 0) + 1;
      return acc;
    }, {});

    console.log('\n👤 Users by role:');
    Object.entries(roleCount).forEach(([role, count]) => {
      console.log(`   ${role}: ${count}`);
    });

  } catch (error) {
    console.error('❌ Error in user analysis:', error);
  }

  console.log('\n✅ Detailed database exploration completed!');
}

exploreDatabase();