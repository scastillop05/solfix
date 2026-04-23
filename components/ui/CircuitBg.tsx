'use client';

import { CIRCUIT_PATHS } from '@/lib/constants';

export function CircuitBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.06 }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="circuit-grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#ffffff" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-grid)" />
      {CIRCUIT_PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="#1462F5"
          strokeWidth="1.5"
          strokeDasharray="1000"
          style={{ animation: `circuit-flow ${4 + i}s linear ${i * 0.8}s infinite` }}
        />
      ))}
    </svg>
  );
}
