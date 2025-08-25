#!/usr/bin/env node
/**
 * Comprehensive database exploration script
 * Connects to Supabase and reads schema, tables, users, data, etc.
 */

const { createClient } = require('@supabase/supabase-js');

// Load environment variables
require('dotenv').config({ path: './.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function exploreDatabase() {
  try {
    console.log('🔍 COMPREHENSIVE DATABASE EXPLORATION');
    console.log('=====================================\n');

    // 1. Get all tables in public schema
    console.log('📊 DATABASE TABLES');
    console.log('------------------');
    const { data: tables, error: tablesError } = await supabase
      .from('information_schema.tables')
      .select('table_name, table_type')
      .eq('table_schema', 'public')
      .order('table_name');

    if (tablesError) {
      console.error('❌ Error fetching tables:', tablesError);
    } else {
      tables.forEach(table => {
        console.log(`📋 ${table.table_name} (${table.table_type})`);
      });
    }

    console.log('\n');

    // 2. Get table schemas and columns
    console.log('🏗️  TABLE SCHEMAS');
    console.log('------------------');
    
    const mainTables = ['profiles', 'markets', 'vendor_profiles', 'vendor_applications', 
                       'market_documents', 'vendor_documents', 'events', 'emails_log', 
                       'feature_flags', 'imported_vendors'];

    for (const tableName of mainTables) {
      console.log(`\n📋 TABLE: ${tableName.toUpperCase()}`);
      console.log('─'.repeat(50));
      
      const { data: columns, error: columnsError } = await supabase
        .from('information_schema.columns')
        .select('column_name, data_type, is_nullable, column_default')
        .eq('table_schema', 'public')
        .eq('table_name', tableName)
        .order('ordinal_position');

      if (columnsError) {
        console.error(`❌ Error fetching columns for ${tableName}:`, columnsError);
        continue;
      }

      if (columns && columns.length > 0) {
        columns.forEach(col => {
          const nullable = col.is_nullable === 'YES' ? '(nullable)' : '(required)';
          const defaultVal = col.column_default ? ` DEFAULT: ${col.column_default}` : '';
          console.log(`  🔹 ${col.column_name}: ${col.data_type} ${nullable}${defaultVal}`);
        });

        // Get row count for each table
        const { count, error: countError } = await supabase
          .from(tableName)
          .select('*', { count: 'exact', head: true });
        
        if (!countError) {
          console.log(`  📊 Total records: ${count}`);
        }
      } else {
        console.log('  (No columns found)');
      }
    }

    // 3. Auth users
    console.log('\n👥 AUTH USERS');
    console.log('-------------');
    
    const { data: authUsers, error: authError } = await supabase.auth.admin.listUsers();
    
    if (authError) {
      console.error('❌ Error fetching auth users:', authError);
    } else {
      console.log(`Total auth users: ${authUsers.users.length}`);
      authUsers.users.forEach((user, index) => {
        console.log(`${index + 1}. ID: ${user.id}`);
        console.log(`   Email: ${user.email}`);
        console.log(`   Created: ${user.created_at}`);
        console.log(`   Last sign in: ${user.last_sign_in_at || 'Never'}`);
        console.log(`   Confirmed: ${user.email_confirmed_at ? 'Yes' : 'No'}`);
        console.log('');
      });
    }

    // 4. Profiles data
    console.log('👤 PROFILES');
    console.log('-----------');
    
    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .select('id, role, name, email, created_at');
    
    if (profilesError) {
      console.error('❌ Error fetching profiles:', profilesError);
    } else {
      console.log(`Total profiles: ${profiles.length}`);
      profiles.forEach((profile, index) => {
        console.log(`${index + 1}. ${profile.name} (${profile.role})`);
        console.log(`   ID: ${profile.id}`);
        console.log(`   Email: ${profile.email}`);
        console.log(`   Created: ${profile.created_at}`);
        console.log('');
      });
    }

    // 5. Markets summary
    console.log('🏪 MARKETS SUMMARY');
    console.log('------------------');
    
    const { data: marketStats, error: marketStatsError } = await supabase
      .from('markets')
      .select('status, owner_id');
    
    if (marketStatsError) {
      console.error('❌ Error fetching market stats:', marketStatsError);
    } else {
      const statusCounts = marketStats.reduce((acc, market) => {
        acc[market.status] = (acc[market.status] || 0) + 1;
        return acc;
      }, {});
      
      const ownerCounts = marketStats.reduce((acc, market) => {
        acc[market.owner_id] = (acc[market.owner_id] || 0) + 1;
        return acc;
      }, {});

      console.log('📊 Markets by status:');
      Object.entries(statusCounts).forEach(([status, count]) => {
        console.log(`   ${status}: ${count}`);
      });

      console.log('\n📊 Markets by owner:');
      Object.entries(ownerCounts).forEach(([ownerId, count]) => {
        console.log(`   Owner ${ownerId}: ${count} markets`);
      });
    }

    // 6. Recent markets
    console.log('\n📅 RECENT MARKETS (Last 10)');
    console.log('----------------------------');
    
    const { data: recentMarkets, error: recentError } = await supabase
      .from('markets')
      .select('name, city, state, status, created_at')
      .order('created_at', { ascending: false })
      .limit(10);
    
    if (recentError) {
      console.error('❌ Error fetching recent markets:', recentError);
    } else {
      recentMarkets.forEach((market, index) => {
        console.log(`${index + 1}. ${market.name}`);
        console.log(`   Location: ${market.city}, ${market.state}`);
        console.log(`   Status: ${market.status}`);
        console.log(`   Created: ${market.created_at}`);
        console.log('');
      });
    }

    // 7. Feature flags
    console.log('🚩 FEATURE FLAGS');
    console.log('----------------');
    
    const { data: featureFlags, error: flagsError } = await supabase
      .from('feature_flags')
      .select('*');
    
    if (flagsError) {
      console.error('❌ Error fetching feature flags:', flagsError);
    } else {
      featureFlags.forEach(flag => {
        console.log(`🔹 ${flag.key}: ${flag.enabled ? '✅ ENABLED' : '❌ DISABLED'}`);
        if (flag.audience && Object.keys(flag.audience).length > 0) {
          console.log(`   Audience: ${JSON.stringify(flag.audience)}`);
        }
      });
    }

    // 8. Database constraints and indexes
    console.log('\n🔗 DATABASE CONSTRAINTS');
    console.log('-----------------------');
    
    const { data: constraints, error: constraintsError } = await supabase
      .from('information_schema.table_constraints')
      .select('table_name, constraint_name, constraint_type')
      .eq('table_schema', 'public')
      .in('constraint_type', ['PRIMARY KEY', 'FOREIGN KEY', 'UNIQUE'])
      .order('table_name');
    
    if (constraintsError) {
      console.error('❌ Error fetching constraints:', constraintsError);
    } else {
      const constraintsByTable = constraints.reduce((acc, constraint) => {
        if (!acc[constraint.table_name]) acc[constraint.table_name] = [];
        acc[constraint.table_name].push(constraint);
        return acc;
      }, {});

      Object.entries(constraintsByTable).forEach(([tableName, tableConstraints]) => {
        console.log(`\n📋 ${tableName}:`);
        tableConstraints.forEach(constraint => {
          console.log(`   ${constraint.constraint_type}: ${constraint.constraint_name}`);
        });
      });
    }

    console.log('\n✅ Database exploration completed!');
    
  } catch (error) {
    console.error('❌ Database exploration failed:', error);
  }
}

exploreDatabase();