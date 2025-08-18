import { describe, it, expect, beforeEach, vi } from 'vitest'
import { GET, POST } from '@/app/api/markets/route'
import { NextRequest } from 'next/server'

// Mock auth
vi.mock('@/lib/auth', () => ({
  getCurrentProfile: vi.fn(() => Promise.resolve({
    id: 'test-user-id',
    role: 'market_organizer',
    name: 'Test User',
    email: 'test@example.com'
  }))
}))

// Mock Supabase
const mockSupabase = {
  from: vi.fn(() => ({
    select: vi.fn(() => ({
      eq: vi.fn(() => ({
        range: vi.fn(() => ({
          order: vi.fn(() => Promise.resolve({
            data: [
              {
                id: 'test-market-id',
                name: 'Test Market',
                slug: 'test-market',
                status: 'live',
                city: 'Melbourne',
                state: 'VIC'
              }
            ],
            error: null,
            count: 1
          }))
        }))
      }))
    })),
    insert: vi.fn(() => ({
      select: vi.fn(() => ({
        single: vi.fn(() => Promise.resolve({
          data: {
            id: 'new-market-id',
            name: 'New Market',
            slug: 'new-market'
          },
          error: null
        }))
      }))
    }))
  }))
}

vi.mock('@/lib/supabase/server', () => ({
  createClient: () => mockSupabase
}))

describe('/api/markets', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('GET', () => {
    it('should return markets list', async () => {
      const request = new NextRequest('http://localhost:3000/api/markets')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.markets).toHaveLength(1)
      expect(data.markets[0].name).toBe('Test Market')
    })

    it('should filter markets by state', async () => {
      const request = new NextRequest('http://localhost:3000/api/markets?state=VIC')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(mockSupabase.from().select().eq).toHaveBeenCalledWith('state', 'VIC')
    })
  })

  describe('POST', () => {
    it('should create a new market', async () => {
      const marketData = {
        name: 'New Market',
        address: '123 Test St',
        city: 'Melbourne',
        state: 'VIC',
        postcode: '3000'
      }

      const request = new NextRequest('http://localhost:3000/api/markets', {
        method: 'POST',
        body: JSON.stringify(marketData)
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(201)
      expect(data.name).toBe('New Market')
      expect(mockSupabase.from().insert).toHaveBeenCalled()
    })

    it('should require authentication', async () => {
      vi.mocked(require('@/lib/auth').getCurrentProfile).mockResolvedValueOnce(null)

      const request = new NextRequest('http://localhost:3000/api/markets', {
        method: 'POST',
        body: JSON.stringify({})
      })

      const response = await POST(request)
      expect(response.status).toBe(403)
    })
  })
})