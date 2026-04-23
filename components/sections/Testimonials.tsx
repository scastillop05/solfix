'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS, FONT_HEADING, FONT_BODY } from '@/lib/constants';

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      style={{ background: 'var(--navy)', padding: '100px 24px' }}
      aria-label="Testimonios de clientes"
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
            Testimonios
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
            Caleños que confían<br />
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>en SOLFIX.</span>
          </h2>
        </motion.div>

        <div
          style={{ display: 'grid', gap: 20 }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              aria-label={`Testimonio de ${t.name}`}
              style={{
                background: '#0D1A42',
                border: active === i ? '1px solid rgba(20,98,245,0.5)' : '1px solid rgba(255,255,255,0.06)',
                borderRadius: 20,
                padding: 28,
                cursor: 'pointer',
                transition: 'all 0.4s',
                boxShadow: active === i ? '0 0 40px rgba(20,98,245,0.1)' : 'none',
              }}
            >
              <div style={{ display: 'flex', gap: 3, marginBottom: 20 }} aria-label={`${t.stars} estrellas`}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} color="#F55A14" fill="#F55A14" aria-hidden="true" />
                ))}
              </div>
              <div
                aria-hidden="true"
                style={{
                  width: 32,
                  height: 32,
                  background: 'rgba(20,98,245,0.1)',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                <span style={{ color: '#1462F5', fontSize: 18, lineHeight: 1, paddingTop: 4 }}>"</span>
              </div>
              <blockquote
                style={{
                  color: 'rgba(255,255,255,0.65)',
                  fontFamily: FONT_BODY,
                  fontWeight: 300,
                  lineHeight: 1.75,
                  fontSize: 14,
                  marginBottom: 24,
                }}
              >
                {t.text}
              </blockquote>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  paddingTop: 20,
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: 38,
                    height: 38,
                    background: '#1462F5',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 14 }}>
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 600, fontSize: 13 }}>{t.name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, fontFamily: FONT_BODY, marginTop: 2 }}>
                    {t.barrio}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div
          style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}
          role="tablist"
          aria-label="Navegación de testimonios"
        >
          {TESTIMONIALS.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              data-hover
              role="tab"
              aria-selected={active === i}
              aria-label={`Ver testimonio ${i + 1}`}
              style={{
                height: 6,
                borderRadius: 3,
                border: 'none',
                background: active === i ? '#F55A14' : 'rgba(255,255,255,0.15)',
                cursor: 'pointer',
              }}
              animate={{ width: active === i ? 24 : 6 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
