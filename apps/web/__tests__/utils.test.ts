import { describe, it, expect } from 'vitest'
import { generateSlug, calculateVerificationStatus, validateDocumentFile } from 'shared'

describe('Utils', () => {
  describe('generateSlug', () => {
    it('should generate a valid slug from market name', () => {
      expect(generateSlug('Melbourne Farmers Market')).toBe('melbourne-farmers-market')
      expect(generateSlug('Sydney & Co. Market!')).toBe('sydney-co-market')
      expect(generateSlug('  Spaced   Out   ')).toBe('spaced-out')
    })
  })

  describe('calculateVerificationStatus', () => {
    it('should return expired for past dates', () => {
      const pastDate = '2020-01-01'
      expect(calculateVerificationStatus(pastDate)).toBe('expired')
    })

    it('should return expiring_soon for dates within 30 days', () => {
      const futureDate = new Date()
      futureDate.setDate(futureDate.getDate() + 15)
      const dateStr = futureDate.toISOString().split('T')[0]
      expect(calculateVerificationStatus(dateStr)).toBe('expiring_soon')
    })

    it('should return valid for dates beyond 30 days', () => {
      const futureDate = new Date()
      futureDate.setDate(futureDate.getDate() + 60)
      const dateStr = futureDate.toISOString().split('T')[0]
      expect(calculateVerificationStatus(dateStr)).toBe('valid')
    })

    it('should return needs_review for null dates', () => {
      expect(calculateVerificationStatus(null)).toBe('needs_review')
    })
  })

  describe('validateDocumentFile', () => {
    it('should validate PDF files', () => {
      const file = new File(['test'], 'test.pdf', { type: 'application/pdf' })
      Object.defineProperty(file, 'size', { value: 1024 * 1024 }) // 1MB
      const result = validateDocumentFile(file)
      expect(result.valid).toBe(true)
    })

    it('should reject files that are too large', () => {
      const file = new File(['test'], 'test.pdf', { type: 'application/pdf' })
      Object.defineProperty(file, 'size', { value: 16 * 1024 * 1024 }) // 16MB
      const result = validateDocumentFile(file)
      expect(result.valid).toBe(false)
      expect(result.error).toContain('15MB')
    })

    it('should reject invalid file types', () => {
      const file = new File(['test'], 'test.txt', { type: 'text/plain' })
      Object.defineProperty(file, 'size', { value: 1024 })
      const result = validateDocumentFile(file)
      expect(result.valid).toBe(false)
      expect(result.error).toContain('PDF, JPEG, JPG, or PNG')
    })
  })
})