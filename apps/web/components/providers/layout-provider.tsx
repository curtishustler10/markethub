"use client"

import { createContext, useContext, ReactNode } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

interface User {
  id: string
  name: string
  email: string
  role: 'vendor' | 'organizer' | 'admin'
  avatar?: string
}

interface LayoutContextType {
  user: User | null
  isLoading: boolean
}

const LayoutContext = createContext<LayoutContextType>({
  user: null,
  isLoading: true,
})

export const useLayout = () => useContext(LayoutContext)

interface LayoutProviderProps {
  children: ReactNode
  showHeader?: boolean
  showFooter?: boolean
  user?: User | null
  isLoading?: boolean
}

export function LayoutProvider({ 
  children, 
  showHeader = true, 
  showFooter = true,
  user = null,
  isLoading = false 
}: LayoutProviderProps) {
  return (
    <LayoutContext.Provider value={{ user, isLoading }}>
      <div className="min-h-screen flex flex-col">
        {showHeader && (
          <Header 
            userRole={user?.role || null}
            userName={user?.name}
            userAvatar={user?.avatar}
          />
        )}
        <main className="flex-1">
          {children}
        </main>
        {showFooter && <Footer />}
      </div>
    </LayoutContext.Provider>
  )
}