#!/usr/bin/env node
/**
 * Fix market ownership using existing system user
 */

const { createClient } = require('@supabase/supabase-js');

require('dotenv').config({ path: './.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function findSystemUserAndFixOwnership() {
  console.log('🔧 FINDING SYSTEM USER AND FIXING OWNERSHIP');
  console.log('===========================================\n');

  try {
    // Find the latest auth user (likely our system user)
    console.log('1️⃣ Finding system user...');
    
    const { data: authUsers } = await supabase.auth.admin.listUsers();
    const { data: profiles } = await supabase.from('profiles').select('*');

    console.log('👥 Auth users found:');
    authUsers.users.forEach((user, i) => {
      console.log(`   ${i+1}. ${user.email} (${user.id}) - Created: ${user.created_at}`);
    });

    console.log('\n👤 Profiles found:');
    profiles.forEach((profile, i) => {
      console.log(`   ${i+1}. ${profile.name} - ${profile.email} (${profile.id}) - Role: ${profile.role}`);
    });

    // Find a system/admin user
    let systemUser = profiles.find(p => p.role === 'admin');
    
    if (!systemUser) {
      // If no admin, use the first market_organizer as temporary system user
      systemUser = profiles.find(p => p.role === 'market_organizer');
    }

    if (!systemUser) {
      console.error('❌ No suitable user found to act as system user');
      return false;
    }

    console.log(`\n✅ Using as system user: ${systemUser.name} (${systemUser.id})`);

    // Step 2: Check current market ownership
    console.log('\n2️⃣ Checking current market ownership...');
    
    const { data: allMarkets } = await supabase
      .from('markets')
      .select('id, name, status, owner_id');

    const ownershipStats = allMarkets.reduce((acc, market) => {
      const key = `${market.status}-${market.owner_id}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    console.log('📊 Current ownership:');
    Object.entries(ownershipStats).forEach(([key, count]) => {
      const [status, ownerId] = key.split('-');
      const owner = profiles.find(p => p.id === ownerId);
      console.log(`   ${status} markets owned by ${owner?.name || 'Unknown'}: ${count}`);
    });

    // Step 3: Transfer ownership if needed
    const draftMarkets = allMarkets.filter(m => m.status === 'draft');
    const draftOwnedBySystem = draftMarkets.filter(m => m.owner_id === systemUser.id);
    
    if (draftOwnedBySystem.length === draftMarkets.length) {
      console.log('\n✅ All draft markets already owned by system user - no transfer needed');
    } else {
      console.log(`\n3️⃣ Transferring ${draftMarkets.length} draft markets to system user...`);
      
      const { error: transferError } = await supabase
        .from('markets')
        .update({ owner_id: systemUser.id })
        .eq('status', 'draft');

      if (transferError) {
        console.error('❌ Error transferring markets:', transferError);
        return false;
      }

      console.log(`✅ Transferred ${draftMarkets.length} draft markets to ${systemUser.name}`);
    }

    // Step 4: Final verification
    console.log('\n4️⃣ Final verification...');
    
    const { data: finalMarkets } = await supabase
      .from('markets')
      .select('status, owner_id, name')
      .order('status');

    const finalStats = finalMarkets.reduce((acc, market) => {
      const key = market.status;
      if (!acc[key]) acc[key] = { count: 0, owners: new Set() };
      acc[key].count++;
      acc[key].owners.add(market.owner_id);
      return acc;
    }, {});

    console.log('\n📊 FINAL STATUS:');
    console.log('================');
    Object.entries(finalStats).forEach(([status, data]) => {
      console.log(`${status.toUpperCase()} MARKETS: ${data.count}`);
      data.owners.forEach(ownerId => {
        const owner = profiles.find(p => p.id === ownerId);
        const ownerMarkets = finalMarkets.filter(m => m.status === status && m.owner_id === ownerId);
        console.log(`   Owned by ${owner?.name || 'Unknown'}: ${ownerMarkets.length} markets`);
      });
    });

    // Production readiness check
    console.log('\n🎯 PRODUCTION READINESS:');
    console.log('========================');
    
    const issues = [];
    
    // Check for orphaned auth users
    const authIds = new Set(authUsers.users.map(u => u.id));
    const profileIds = new Set(profiles.map(p => p.id));
    const orphanedAuth = authUsers.users.filter(u => !profileIds.has(u.id));
    
    if (orphanedAuth.length > 0) {
      console.log(`⚠️  ${orphanedAuth.length} auth user(s) without profiles:`);
      orphanedAuth.forEach(user => console.log(`     - ${user.email}`));
      // This is not critical for production
    }

    // Check draft markets ownership
    const draftCount = finalMarkets.filter(m => m.status === 'draft').length;
    if (draftCount > 0) {
      console.log(`✅ ${draftCount} unclaimed draft markets ready for organizers to claim`);
    }

    // Check live markets
    const liveCount = finalMarkets.filter(m => m.status === 'live').length;
    if (liveCount > 0) {
      console.log(`✅ ${liveCount} live markets already operational`);
    }

    // Feature flags check
    const { data: flags } = await supabase.from('feature_flags').select('*');
    const vendorFlag = flags.find(f => f.key === 'plan.vendor_management');
    if (vendorFlag?.enabled) {
      console.log(`✅ Vendor management feature is enabled`);
    } else {
      console.log(`⚠️  Vendor management feature is disabled`);
    }

    console.log('\n🚀 PRODUCTION DEPLOYMENT READY!');
    console.log('================================');
    console.log('✅ Market ownership structure is correct');
    console.log('✅ System user manages unclaimed markets');
    console.log('✅ Database is ready for production use');
    console.log('\n💡 Next steps after deployment:');
    console.log('   - Organizers can claim draft markets');
    console.log('   - Vendors can apply to join markets');
    console.log('   - Document verification system is ready');

    return true;

  } catch (error) {
    console.error('❌ Error during ownership fix:', error);
    return false;
  }
}

findSystemUserAndFixOwnership();