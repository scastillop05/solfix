'use client';

import { createContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { ModalContextValue } from '@/lib/types';
import { RequestModal } from '@/components/modals/RequestModal';
import { TechModal } from '@/components/modals/TechModal';

export const ModalContext = createContext<ModalContextValue | null>(null);

interface ModalProviderProps {
  children: React.ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [showRequest, setShowRequest] = useState(false);
  const [showTech, setShowTech] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openRequest: () => setShowRequest(true),
        openTech: () => setShowTech(true),
      }}
    >
      <AnimatePresence>
        {showRequest && (
          <RequestModal key="request-modal" onClose={() => setShowRequest(false)} />
        )}
        {showTech && (
          <TechModal key="tech-modal" onClose={() => setShowTech(false)} />
        )}
      </AnimatePresence>
      {children}
    </ModalContext.Provider>
  );
}
