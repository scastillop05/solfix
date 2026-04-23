'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { useModal } from '@/hooks/useModal';
import { SERVICES_DATA, FONT_HEADING, FONT_BODY } from '@/lib/constants';

export function Services() {
  const { openRequest } = useModal();

  return (
    <section
      id="servicios"
      style={{ background: 'var(--navy)', padding: '100px 24px' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 60 }}
        >
          <span
            style={{
              color: '#F55A14',
              fontSize: 11,
              fontFamily: FONT_BODY,
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 12,
            }}
          >
            Servicios
          </span>
          <h2
            style={{
              color: 'white',
              fontFamily: FONT_HEADING,
              fontWeight: 800,
              fontSize: 'clamp(32px,4vw,56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Todo lo que necesita<br />
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>tu hogar o empresa.</span>
          </h2>
        </motion.div>

        <div
          style={{ display: 'grid', gap: 16 }}
          className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          {SERVICES_DATA.map(({ icon: Icon, label, time, price }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={openRequest}
              data-hover
              role="button"
              tabIndex={0}
              aria-label={`Solicitar servicio de ${label} — ${price}`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openRequest(); }}
              style={{
                background: '#0D1A42',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 20,
                padding: 28,
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s',
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(20,98,245,0.08), transparent)',
                  pointerEvents: 'none',
                }}
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: 2,
                  background: 'linear-gradient(90deg, #1462F5, transparent)',
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: 'rgba(20,98,245,0.1)',
                    borderRadius: 14,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                    border: '1px solid rgba(20,98,245,0.2)',
                  }}
                >
                  <Icon size={22} color={i % 2 === 0 ? '#1462F5' : '#F55A14'} aria-hidden="true" />
                </div>
                <h3
                  style={{
                    color: 'white',
                    fontFamily: FONT_HEADING,
                    fontWeight: 700,
                    fontSize: 18,
                    marginBottom: 12,
                  }}
                >
                  {label}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 16,
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Clock size={13} color="#7BA8FF" aria-hidden="true" />
                    <span style={{ color: '#7BA8FF', fontSize: 12, fontFamily: FONT_BODY, fontWeight: 500 }}>
                      {time}
                    </span>
                  </div>
                  <span style={{ color: '#F55A14', fontSize: 13, fontFamily: FONT_HEADING, fontWeight: 700 }}>
                    {price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            color: 'rgba(255,255,255,0.2)',
            fontFamily: FONT_BODY,
            fontSize: 12,
            textAlign: 'center',
            marginTop: 32,
            letterSpacing: '0.03em',
          }}
        >
          Precios orientativos · El técnico confirma el valor exacto antes de iniciar · Sin costo de visita · Pagas solo si quedas satisfecho
        </motion.p>
      </div>
    </section>
  );
}
