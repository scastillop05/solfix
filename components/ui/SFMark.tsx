'use client';

import { FONT_HEADING } from '@/lib/constants';

interface SFMarkProps {
  size?: number;
}

export function SFMark({ size = 40 }: SFMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flexShrink: 0 }}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="100" height="100" rx="22" fill="#1462F5" />
      <text
        x="10"
        y="72"
        fontFamily={FONT_HEADING}
        fontWeight="800"
        fontSize="62"
        fill="#FFFFFF"
        letterSpacing="-2"
      >
        S
      </text>
      <text
        x="52"
        y="72"
        fontFamily={FONT_HEADING}
        fontWeight="800"
        fontSize="62"
        fill="#F55A14"
        letterSpacing="-2"
      >
        F
      </text>
    </svg>
  );
}

interface SolfixLogoProps {
  size?: number;
  showText?: boolean;
}

export function SolfixLogo({ size = 36, showText = true }: SolfixLogoProps) {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: Math.round(size * 0.35) }}
      role="img"
      aria-label="SOLFIX logo"
    >
      <SFMark size={size} />
      {showText && (
        <span
          style={{
            fontFamily: FONT_HEADING,
            fontWeight: 800,
            fontSize: Math.round(size * 0.55),
            letterSpacing: '-0.025em',
            lineHeight: 1,
          }}
        >
          <span style={{ color: '#FFFFFF' }}>SOL</span>
          <span style={{ color: '#F55A14' }}>FIX</span>
        </span>
      )}
    </div>
  );
}
