"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface HeaderProps {
  userRole?: 'vendor' | 'organizer' | 'admin' | null
  userName?: string
  userAvatar?: string
}

export function Header({ userRole, userName, userAvatar }: HeaderProps) {
  const pathname = usePathname()

  const isActive = (path: string) => pathname.startsWith(path)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">MarketHub</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {!userRole && (
              <>
                <Link 
                  href="/markets" 
                  className={cn(
                    "text-gray-600 hover:text-green-600 transition-colors",
                    isActive("/markets") && "text-green-600 font-semibold"
                  )}
                >
                  Find Markets
                </Link>
                <Link href="/auth/login">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link href="/auth/register">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Join MarketHub
                  </Button>
                </Link>
              </>
            )}

            {userRole === 'vendor' && (
              <>
                <Link 
                  href="/vendor/dashboard" 
                  className={cn(
                    "text-gray-600 hover:text-green-600 transition-colors",
                    isActive("/vendor/dashboard") && "text-green-600 font-semibold"
                  )}
                >
                  Dashboard
                </Link>
                <Link 
                  href="/vendor/applications" 
                  className={cn(
                    "text-gray-600 hover:text-green-600 transition-colors",
                    isActive("/vendor/applications") && "text-green-600 font-semibold"
                  )}
                >
                  Applications
                </Link>
                <Link 
                  href="/markets" 
                  className={cn(
                    "text-gray-600 hover:text-green-600 transition-colors",
                    isActive("/markets") && "text-green-600 font-semibold"
                  )}
                >
                  Browse Markets
                </Link>
                <Link 
                  href="/vendor/profile" 
                  className={cn(
                    "text-gray-600 hover:text-green-600 transition-colors",
                    isActive("/vendor/profile") && "text-green-600 font-semibold"
                  )}
                >
                  Profile
                </Link>
              </>
            )}

            {userRole === 'organizer' && (
              <>
                <Link 
                  href="/organizer/dashboard" 
                  className={cn(
                    "text-gray-600 hover:text-green-600 transition-colors",
                    isActive("/organizer/dashboard") && "text-green-600 font-semibold"
                  )}
                >
                  Dashboard
                </Link>
                <Link 
                  href="/organizer/market" 
                  className={cn(
                    "text-gray-600 hover:text-green-600 transition-colors",
                    isActive("/organizer/market") && "text-green-600 font-semibold"
                  )}
                >
                  Market Management
                </Link>
                <Link 
                  href="/organizer/applications" 
                  className={cn(
                    "text-gray-600 hover:text-green-600 transition-colors",
                    isActive("/organizer/applications") && "text-green-600 font-semibold"
                  )}
                >
                  Applications
                </Link>
                <Link 
                  href="/organizer/messages" 
                  className={cn(
                    "text-gray-600 hover:text-green-600 transition-colors",
                    isActive("/organizer/messages") && "text-green-600 font-semibold"
                  )}
                >
                  Messages
                </Link>
              </>
            )}

            {userRole === 'admin' && (
              <>
                <Link 
                  href="/admin/dashboard" 
                  className={cn(
                    "text-gray-600 hover:text-green-600 transition-colors",
                    isActive("/admin") && "text-green-600 font-semibold"
                  )}
                >
                  Admin
                </Link>
              </>
            )}

            {/* User Avatar & Menu */}
            {userRole && (
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={userAvatar} alt={userName} />
                  <AvatarFallback>
                    {userName?.charAt(0)?.toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-600">{userName}</span>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}