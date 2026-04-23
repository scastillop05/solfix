'use client';

import { motion } from 'framer-motion';
import { HOW_IT_WORKS_STEPS, FONT_HEADING, FONT_BODY } from '@/lib/constants';

export function HowItWorks() {
  return (
    <section
      id="cómo-funciona"
      style={{
        background: '#060C24',
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
          opacity: 0.025,
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
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
            Proceso
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
            Simple como pedir<br />
            <span style={{ color: '#1462F5' }}>un domicilio.</span>
          </h2>
        </motion.div>

        <div
          style={{ display: 'grid', gap: 40, position: 'relative' }}
          className="grid-cols-1 md:grid-cols-3"
        >
          <div
            aria-hidden="true"
            className="hidden md:block"
            style={{
              position: 'absolute',
              top: 56,
              left: '16%',
              right: '16%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(20,98,245,0.3), rgba(20,98,245,0.3), transparent)',
            }}
          />

          {HOW_IT_WORKS_STEPS.map(({ n, icon: Icon, title, desc }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ textAlign: 'center', position: 'relative' }}
            >
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: 24 }}>
                <motion.div
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    border: '2px solid rgba(20,98,245,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(20,98,245,0.05)',
                    position: 'relative',
                  }}
                  whileInView={{ borderColor: 'rgba(20,98,245,0.7)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <motion.div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      border: '1px solid rgba(245,90,20,0.3)',
                    }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.7 }}
                  />
                  <Icon size={30} color="#1462F5" aria-hidden="true" />
                </motion.div>
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: -8,
                    right: -8,
                    width: 28,
                    height: 28,
                    background: '#F55A14',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 800, fontSize: 10 }}>{n}</span>
                </div>
              </div>
              <h3 style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 20, marginBottom: 12 }}>
                {title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: FONT_BODY, fontWeight: 300, lineHeight: 1.7, fontSize: 15 }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
