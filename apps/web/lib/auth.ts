import { createClient, createServiceClient } from '@/lib/supabase/server'
import type { Profile, UserRole } from 'shared'

export async function getCurrentUser() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export async function getCurrentProfile(): Promise<Profile | null> {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return null
  
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()
    
  return profile
}

export async function requireAuth() {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error('Unauthorized')
  }
  return user
}

export async function requireRole(role: UserRole) {
  const profile = await getCurrentProfile()
  if (!profile || (profile.role !== role && profile.role !== 'admin')) {
    throw new Error('Insufficient permissions')
  }
  return profile
}

export async function createUserProfile(
  userId: string, 
  email: string, 
  name: string, 
  role: UserRole
) {
  const supabase = createServiceClient()
  
  const { data, error } = await supabase
    .from('profiles')
    .insert({
      id: userId,
      email,
      name,
      role
    })
    .select()
    .single()
    
  if (error) throw error
  return data
}

export async function signIn(email: string, password: string) {
  const supabase = createClient()
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
  return { data, error }
}

export async function signUp(email: string, password: string, name: string, role: UserRole) {
  const supabase = createClient()
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        role,
      }
    }
  })
  
  return { data, error }
}

export async function signOut() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function sendMagicLink(email: string) {
  const supabase = createClient()
  
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
    }
  })
  
  return { data, error }
}