import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merges Tailwind CSS classes without conflicts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Builds a WhatsApp deep-link URL with pre-filled message.
 * Reads WA number from NEXT_PUBLIC_WA_NUMBER env variable.
 */
export function buildWhatsAppURL(message: string): string {
  const number = process.env.NEXT_PUBLIC_WA_NUMBER ?? '';
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

/**
 * Formats a Colombian phone number for display.
 * Example: "3001234567" → "300 123 4567"
 */
export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }
  return raw;
}
