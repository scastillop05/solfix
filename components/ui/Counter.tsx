'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

interface CounterProps {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function Counter({ to, suffix = '', prefix = '', decimals }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(count, to, {
      duration: 2.2,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) {
          const formatted = decimals != null ? v.toFixed(decimals) : Math.round(v).toLocaleString();
          ref.current.textContent = prefix + formatted + suffix;
        }
      },
    });
    return ctrl.stop;
  }, [inView, to, suffix, prefix, decimals, count]);

  return (
    <span ref={ref}>
      {prefix}{decimals != null ? (0).toFixed(decimals) : '0'}{suffix}
    </span>
  );
}
