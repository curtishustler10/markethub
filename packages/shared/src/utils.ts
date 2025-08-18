import { addDays, isAfter, isBefore, parseISO } from 'date-fns';
import type { VerificationStatus } from './types';

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function calculateVerificationStatus(expiryDate: string | null): VerificationStatus {
  if (!expiryDate) return 'needs_review';
  
  try {
    const expiry = parseISO(expiryDate);
    const now = new Date();
    const thirtyDaysFromNow = addDays(now, 30);
    
    if (isBefore(expiry, now)) {
      return 'expired';
    } else if (isBefore(expiry, thirtyDaysFromNow)) {
      return 'expiring_soon';
    } else {
      return 'valid';
    }
  } catch {
    return 'needs_review';
  }
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function isValidFileType(file: File, allowedTypes: string[]): boolean {
  return allowedTypes.includes(file.type);
}

export function isValidFileSize(file: File, maxSizeInMB: number): boolean {
  return file.size <= maxSizeInMB * 1024 * 1024;
}

export const ALLOWED_DOCUMENT_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/jpg',
  'image/png',
];

export const MAX_FILE_SIZE_MB = 15;

export function validateDocumentFile(file: File): { valid: boolean; error?: string } {
  if (!isValidFileType(file, ALLOWED_DOCUMENT_TYPES)) {
    return {
      valid: false,
      error: 'File must be a PDF, JPEG, JPG, or PNG'
    };
  }
  
  if (!isValidFileSize(file, MAX_FILE_SIZE_MB)) {
    return {
      valid: false,
      error: `File size must be less than ${MAX_FILE_SIZE_MB}MB`
    };
  }
  
  return { valid: true };
}

export function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatCurrency(amount: number, currency: string = 'AUD'): string {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

export function parsePhoneNumber(phone: string): string {
  // Simple Australian phone number formatting
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.startsWith('61')) {
    return '+' + cleaned;
  } else if (cleaned.startsWith('0')) {
    return '+61' + cleaned.slice(1);
  } else {
    return '+61' + cleaned;
  }
}