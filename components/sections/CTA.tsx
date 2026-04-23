'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { useModal } from '@/hooks/useModal';
import { FONT_HEADING, FONT_BODY } from '@/lib/constants';

export function CTA() {
  const { openRequest, openTech } = useModal();

  return (
    <section
      style={{
        background: 'var(--navy)',
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(20,98,245,0.15) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{
          maxWidth: 800,
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h2
          style={{
            color: 'white',
            fontFamily: FONT_HEADING,
            fontWeight: 800,
            fontSize: 'clamp(36px,5vw,72px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 24,
          }}
        >
          ¿Algo dañado<br />en tu hogar?
        </h2>
        <p
          style={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: 18,
            fontFamily: FONT_BODY,
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: 500,
            margin: '0 auto 40px',
          }}
        >
          Tenemos técnicos disponibles ahora mismo. Un mensaje y lo resolvemos hoy.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14 }}>
          <motion.button
            whileHover={{ scale: 1.06, background: '#D94A0A' }}
            whileTap={{ scale: 0.97 }}
            data-hover
            onClick={openRequest}
            aria-label="Pedir servicio ahora"
            style={{
              background: '#F55A14',
              color: 'white',
              fontFamily: FONT_HEADING,
              fontWeight: 700,
              fontSize: 16,
              padding: '16px 32px',
              borderRadius: 14,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              transition: 'all 0.2s',
            }}
          >
            <Phone size={18} aria-hidden="true" /> Pedir servicio ahora
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.12)' }}
            data-hover
            onClick={openTech}
            aria-label="Registrarse como técnico"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1.5px solid rgba(255,255,255,0.12)',
              color: 'white',
              fontFamily: FONT_BODY,
              fontWeight: 500,
              cursor: 'pointer',
              fontSize: 16,
              padding: '16px 32px',
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              transition: 'all 0.2s',
            }}
          >
            <MessageCircle size={18} aria-hidden="true" /> Soy aliado
          </motion.button>
        </div>

        <p
          style={{
            color: 'rgba(255,255,255,0.2)',
            fontSize: 12,
            fontFamily: FONT_BODY,
            marginTop: 24,
            letterSpacing: '0.05em',
          }}
        >
          Disponible 24/7 &nbsp;·&nbsp; Sin costo de visita &nbsp;·&nbsp; Pagas solo si quedas satisfecho
        </p>
      </motion.div>
    </section>
  );
}
