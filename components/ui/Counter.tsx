'use client';

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

interface CounterProps {
  to: number;
  suffix?: string;
  prefix?: string;
}

export function Counter({ to, suffix = '', prefix = '' }: CounterProps) {
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
          ref.current.textContent = prefix + Math.round(v).toLocaleString() + suffix;
        }
      },
    });
    return ctrl.stop;
  }, [inView, to, suffix, prefix, count]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
