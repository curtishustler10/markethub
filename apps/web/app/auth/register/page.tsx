'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { createClient } from '@/lib/supabase/client'
import { Eye, EyeOff, Users, Store } from 'lucide-react'
import type { UserRole } from 'shared'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultRole = (searchParams.get('role') as UserRole) || 'vendor'
  const [role, setRole] = useState<UserRole>(defaultRole)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const supabase = createClient()
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            role,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) {
        throw error
      }

      toast({
        title: "Account created!",
        description: "Please check your email to verify your account.",
      })

      // Redirect to appropriate dashboard after email verification
      router.push('/auth/verify-email')
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
          </div>
          <CardTitle className="text-2xl text-center">Create your MarketHub account</CardTitle>
          <CardDescription className="text-center">
            Join the community connecting local markets with quality vendors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="role">I am a...</Label>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant={role === 'vendor' ? "default" : "outline"}
                  onClick={() => setRole('vendor')}
                  className="p-6 h-auto flex-col"
                >
                  <Store className="w-6 h-6 mb-2" />
                  <span className="font-medium">Vendor</span>
                  <span className="text-xs opacity-90">Sell at markets</span>
                </Button>
                <Button
                  type="button"
                  variant={role === 'market_organizer' ? "default" : "outline"}
                  onClick={() => setRole('market_organizer')}
                  className="p-6 h-auto flex-col"
                >
                  <Users className="w-6 h-6 mb-2" />
                  <span className="font-medium">Organizer</span>
                  <span className="text-xs opacity-90">Manage markets</span>
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password (min. 6 characters)"
                  minLength={6}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <Link href="/auth/login" className="font-medium text-green-600 hover:text-green-500">
              Sign in
            </Link>
          </div>

          <div className="mt-4 text-center text-xs text-gray-500">
            By creating an account, you agree to our{' '}
            <Link href="/terms" className="underline hover:text-gray-700">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="underline hover:text-gray-700">
              Privacy Policy
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}