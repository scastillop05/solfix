'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { TESTIMONIALS, FONT_HEADING, FONT_BODY } from '@/lib/constants';

export function Testimonials() {
  return (
    <section
      style={{ background: 'var(--navy)', padding: '100px 24px' }}
      aria-label="Testimonios de clientes SOLFIX"
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 64 }}
        >
          <span style={{
            color: '#F55A14',
            fontSize: 11,
            fontFamily: FONT_BODY,
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: 12,
          }}>
            Lo que dicen nuestros clientes
          </span>
          <h2 style={{
            color: 'white',
            fontFamily: FONT_HEADING,
            fontWeight: 800,
            fontSize: 'clamp(32px,4vw,52px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: 560,
          }}>
            La confianza se construye<br />
            <span style={{ color: 'rgba(255,255,255,0.22)' }}>con cada servicio.</span>
          </h2>
        </motion.div>

        <div
          style={{ display: 'grid', gap: 20 }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                aria-label={`Testimonio de ${t.city}`}
                style={{
                  background: '#0D1A42',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 20,
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    color: '#1462F5',
                    fontSize: 52,
                    lineHeight: 0.9,
                    fontFamily: FONT_HEADING,
                    fontWeight: 800,
                    marginBottom: 20,
                    display: 'block',
                    opacity: 0.35,
                  }}
                >
                  "
                </span>

                <p style={{
                  color: 'rgba(255,255,255,0.72)',
                  fontFamily: FONT_BODY,
                  fontSize: 15,
                  lineHeight: 1.75,
                  flexGrow: 1,
                  marginBottom: 28,
                }}>
                  {t.detail}
                </p>

                <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 20 }} />

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: 'rgba(20,98,245,0.12)',
                      border: '1px solid rgba(20,98,245,0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} color="#1462F5" aria-hidden="true" />
                  </div>
                  <div>
                    <p style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 600, fontSize: 13, lineHeight: 1 }}>
                      {t.city}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                      <MapPin size={10} color="rgba(255,255,255,0.2)" aria-hidden="true" />
                      <p style={{ color: 'rgba(255,255,255,0.3)', fontFamily: FONT_BODY, fontSize: 11 }}>
                        {t.service}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
