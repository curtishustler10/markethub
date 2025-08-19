import { calculateVerificationStatus } from 'shared'
import type { DocumentParseResult } from 'shared'

interface ParsedDocument {
  extracted_text: string
  number: string | null
  expiry_date: string | null
  verification_status: 'valid' | 'expiring_soon' | 'expired' | 'needs_review'
}

export class DocumentParser {
  private static readonly EXPIRY_PATTERNS = [
    /\b(?:Expir(?:y|es|y Date)|Valid (?:Until|Thru)|Expires?)\s*:?\s*([0-3]?\d[\/\-][01]?\d[\/\-]\d{2,4})\b/gi,
    /\b(?:Valid to|Valid until|Expiry)\s*:?\s*([0-3]?\d[\/\-][01]?\d[\/\-]\d{2,4})\b/gi,
    /\b([0-3]?\d[\/\-][01]?\d[\/\-]\d{2,4})\s*(?:expir|valid)/gi
  ]

  private static readonly LICENSE_PATTERNS = [
    /\b(?:Policy|Licence|License|Certificate|Registration)\s*(?:No\.?|#|Number)?\s*:?\s*([A-Z0-9\-]{6,})\b/gi,
    /\b(?:ABN|ACN|Business Number)\s*:?\s*([0-9\s]{11,})\b/gi,
    /\b([A-Z]{2,3}[0-9]{6,})\b/g // Common format like ABC123456
  ]

  static async parseDocument(buffer: Buffer, mimeType: string): Promise<ParsedDocument> {
    let extractedText = ''

    try {
      if (mimeType === 'application/pdf') {
        extractedText = await this.parsePDF(buffer)
      } else if (mimeType.startsWith('image/')) {
        extractedText = await this.parseImage(buffer)
      } else {
        throw new Error(`Unsupported file type: ${mimeType}`)
      }

      const number = this.extractLicenseNumber(extractedText)
      const expiryDate = this.extractExpiryDate(extractedText)
      const verificationStatus = calculateVerificationStatus(expiryDate)

      return {
        extracted_text: extractedText,
        number,
        expiry_date: expiryDate,
        verification_status: verificationStatus
      }
    } catch (error) {
      console.error('Error parsing document:', error)
      return {
        extracted_text: '',
        number: null,
        expiry_date: null,
        verification_status: 'needs_review'
      }
    }
  }

  private static async parsePDF(buffer: Buffer): Promise<string> {
    try {
      // Dynamic import to avoid bundling issues
      const pdf = await import('pdf-parse')
      const data = await pdf.default(buffer)
      return data.text
    } catch (error) {
      console.error('Error importing or using pdf-parse:', error)
      // Fallback: return empty string if pdf-parse fails to load
      return ''
    }
  }

  private static async parseImage(buffer: Buffer): Promise<string> {
    try {
      // Dynamic import to avoid bundling issues
      const { createWorker } = await import('tesseract.js')
      const worker = await createWorker()
      
      try {
        await (worker as any).loadLanguage('eng')
        await (worker as any).initialize('eng')
        
        const { data: { text } } = await (worker as any).recognize(buffer)
        return text
      } finally {
        await (worker as any).terminate()
      }
    } catch (error) {
      console.error('Error importing or using tesseract.js:', error)
      // Fallback: return empty string if tesseract fails to load
      return ''
    }
  }

  private static extractLicenseNumber(text: string): string | null {
    for (const pattern of this.LICENSE_PATTERNS) {
      const matches = Array.from(text.matchAll(pattern))
      for (const match of matches) {
        if (match[1] && match[1].length >= 6) {
          return match[1].trim().replace(/\s+/g, '')
        }
      }
    }
    return null
  }

  private static extractExpiryDate(text: string): string | null {
    for (const pattern of this.EXPIRY_PATTERNS) {
      const matches = Array.from(text.matchAll(pattern))
      for (const match of matches) {
        if (match[1]) {
          const dateStr = match[1].trim()
          const parsedDate = this.parseDate(dateStr)
          if (parsedDate) {
            return parsedDate
          }
        }
      }
    }
    return null
  }

  private static parseDate(dateStr: string): string | null {
    // Handle various date formats: DD/MM/YYYY, DD-MM-YYYY, MM/DD/YYYY, etc.
    const datePatterns = [
      /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/, // DD/MM/YYYY or MM/DD/YYYY
      /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})$/, // DD/MM/YY or MM/DD/YY
    ]

    for (const pattern of datePatterns) {
      const match = dateStr.match(pattern)
      if (match) {
        const [, part1, part2, yearPart] = match
        let year = yearPart
        
        // Convert 2-digit year to 4-digit
        if (year.length === 2) {
          const currentYear = new Date().getFullYear()
          const currentCentury = Math.floor(currentYear / 100) * 100
          const twoDigitYear = parseInt(year)
          year = String(twoDigitYear > 50 ? currentCentury + twoDigitYear : currentCentury + 100 + twoDigitYear)
        }

        // Assume DD/MM/YYYY format for Australian documents
        const day = parseInt(part1)
        const month = parseInt(part2)
        
        // Validate date ranges
        if (day >= 1 && day <= 31 && month >= 1 && month <= 12) {
          const date = new Date(parseInt(year), month - 1, day)
          // Check if the created date is valid
          if (date.getDate() === day && date.getMonth() === month - 1) {
            return date.toISOString().split('T')[0] // Return YYYY-MM-DD format
          }
        }
      }
    }

    return null
  }
}