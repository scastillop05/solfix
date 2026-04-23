'use client';

import { useContext } from 'react';
import { ModalContext } from '@/components/providers/ModalProvider';
import type { ModalContextValue } from '@/lib/types';

/**
 * Hook to access modal open actions from any component within ModalProvider.
 * Throws if used outside of ModalProvider.
 */
export function useModal(): ModalContextValue {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
