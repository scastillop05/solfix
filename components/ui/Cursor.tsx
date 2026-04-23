'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Cursor() {
  const [pos, setPos]         = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isFine, setIsFine]   = useState(false);

  useEffect(() => {
    // Only show custom cursor on pointer: fine devices (mouse / trackpad)
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setIsFine(true);

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) =>
      setHovered(!!(e.target as HTMLElement).closest('button,a,[data-hover]'));
    const down = () => setClicked(true);
    const up   = () => setClicked(false);

    window.addEventListener('mousemove', move,  { passive: true });
    window.addEventListener('mouseover', over,  { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup',   up);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup',   up);
    };
  }, []);

  if (!isFine) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#F55A14',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
        animate={{ x: pos.x - 5, y: pos.y - 5, scale: clicked ? 0.5 : hovered ? 3 : 1 }}
        transition={{ type: 'spring', stiffness: 700, damping: 35 }}
      />
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(245,90,20,0.4)',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
        animate={{ x: pos.x - 18, y: pos.y - 18, scale: hovered ? 1.5 : 1, opacity: hovered ? 1 : 0.6 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      />
    </>
  );
}
