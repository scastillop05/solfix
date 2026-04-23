'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { SolfixLogo } from '@/components/ui/SFMark';
import { useModal } from '@/hooks/useModal';
import { NAV_LINKS, FONT_BODY, FONT_HEADING } from '@/lib/constants';

export function Navbar() {
  const { openRequest, openTech } = useModal();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => setMenuOpen(false);

  const hasBg = scrolled || menuOpen;

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Navegación principal"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: hasBg ? 'rgba(8,18,46,0.96)' : 'transparent',
        backdropFilter: hasBg ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      {/* ── Top bar ── */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <SolfixLogo size={34} />

        {/* Desktop nav links */}
        <nav
          className="hidden md:flex items-center"
          style={{ gap: 36 }}
          aria-label="Links de navegación"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              data-hover
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: 14,
                fontFamily: FONT_BODY,
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#fff')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex items-center" style={{ gap: 12 }}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            data-hover
            onClick={openTech}
            aria-label="Acceder como técnico"
            style={{
              background: 'transparent',
              border: '1.5px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.7)',
              padding: '9px 20px',
              borderRadius: 10,
              fontSize: 13,
              fontFamily: FONT_BODY,
              fontWeight: 500,
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
          >
            Soy aliado
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, background: '#D94A0A' }}
            whileTap={{ scale: 0.97 }}
            data-hover
            onClick={openRequest}
            aria-label="Pedir un servicio ahora"
            style={{
              background: '#F55A14',
              color: 'white',
              padding: '9px 22px',
              borderRadius: 10,
              fontSize: 13,
              fontFamily: FONT_HEADING,
              fontWeight: 700,
              border: 'none',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              cursor: 'pointer',
            }}
          >
            Pedir servicio <ArrowRight size={14} aria-hidden="true" />
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden items-center justify-center"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          style={{
            width: 40,
            height: 40,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 10,
            cursor: 'pointer',
          }}
        >
          {menuOpen
            ? <X    size={18} color="rgba(255,255,255,0.8)" aria-hidden="true" />
            : <Menu size={18} color="rgba(255,255,255,0.8)" aria-hidden="true" />
          }
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div style={{ padding: '12px 24px 24px', display: 'flex', flexDirection: 'column', gap: 2 }}>
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={close}
                  data-hover
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: 16,
                    fontFamily: FONT_BODY,
                    fontWeight: 500,
                    textDecoration: 'none',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    display: 'block',
                  }}
                >
                  {item}
                </a>
              ))}
              <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
                <button
                  onClick={() => { openTech(); close(); }}
                  style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1.5px solid rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.7)',
                    padding: '12px',
                    borderRadius: 10,
                    fontSize: 14,
                    fontFamily: FONT_BODY,
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  Soy aliado
                </button>
                <button
                  onClick={() => { openRequest(); close(); }}
                  style={{
                    flex: 1,
                    background: '#F55A14',
                    border: 'none',
                    color: 'white',
                    padding: '12px',
                    borderRadius: 10,
                    fontSize: 14,
                    fontFamily: FONT_HEADING,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Pedir servicio
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
