'use client'

import { ReactNode } from 'react'
import { Header } from '@/components/layout/header'

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  // Mock user data - in a real app this would come from auth context
  const user = {
    id: '1',
    name: 'Demo User',
    email: 'demo@example.com',
    role: 'organizer' as const, // This would be determined by the current page context
    avatar: undefined
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userRole={user.role} 
        userName={user.name} 
        userAvatar={user.avatar} 
      />
      <main className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}