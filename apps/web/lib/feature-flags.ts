import { createClient } from '@/lib/supabase/server'
import type { FeatureFlag } from 'shared'

export async function getFeatureFlag(key: string): Promise<boolean> {
  // Check environment override first
  const overrides = process.env.FEATURE_FLAGS_OVERRIDE_JSON
  if (overrides) {
    try {
      const parsed = JSON.parse(overrides)
      if (key in parsed) {
        return Boolean(parsed[key])
      }
    } catch {
      // Ignore parsing errors
    }
  }

  // Check database
  const supabase = createClient()
  const { data } = await supabase
    .from('feature_flags')
    .select('enabled')
    .eq('key', key)
    .single()

  return data?.enabled ?? false
}

export async function getAllFeatureFlags(): Promise<Record<string, boolean>> {
  const supabase = createClient()
  const { data } = await supabase
    .from('feature_flags')
    .select('key, enabled')

  const flags: Record<string, boolean> = {}
  
  data?.forEach(flag => {
    flags[flag.key] = flag.enabled
  })

  // Apply environment overrides
  const overrides = process.env.FEATURE_FLAGS_OVERRIDE_JSON
  if (overrides) {
    try {
      const parsed = JSON.parse(overrides)
      Object.assign(flags, parsed)
    } catch {
      // Ignore parsing errors
    }
  }

  return flags
}