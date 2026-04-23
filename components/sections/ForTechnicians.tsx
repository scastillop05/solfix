'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { useModal } from '@/hooks/useModal';
import { TECH_BENEFITS, EARNINGS_DATA, FONT_HEADING, FONT_BODY } from '@/lib/constants';

export function ForTechnicians() {
  const { openTech } = useModal();

  return (
    <section
      id="para-técnicos"
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
          top: 0,
          right: 0,
          width: 600,
          height: 600,
          background: 'rgba(245,90,20,0.06)',
          borderRadius: '50%',
          filter: 'blur(100px)',
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gap: 80,
          alignItems: 'center',
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
            Para aliados
          </span>
          <h2
            style={{
              color: 'white',
              fontFamily: FONT_HEADING,
              fontWeight: 800,
              fontSize: 'clamp(28px,3.5vw,48px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: 20,
            }}
          >
            ¿Empresa o técnico?<br />
            <span style={{ color: '#F55A14' }}>Crece con</span><br />
            SOLFIX.
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontFamily: FONT_BODY,
              fontWeight: 300,
              lineHeight: 1.7,
              fontSize: 16,
              marginBottom: 32,
            }}
          >
            Empresas de servicios o técnicos independientes — conéctate con clientes verificados, aumenta tu cartera y opera con el respaldo de SOLFIX.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {TECH_BENEFITS.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: 20,
                    height: 20,
                    background: '#F55A14',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  <CheckCircle size={12} color="white" />
                </div>
                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, fontFamily: FONT_BODY }}>
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            data-hover
            onClick={openTech}
            aria-label="Unirse como aliado a SOLFIX"
            style={{
              marginTop: 28,
              background: '#F55A14',
              color: 'white',
              fontFamily: FONT_HEADING,
              fontWeight: 700,
              fontSize: 15,
              padding: '14px 28px',
              borderRadius: 12,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Unirse como aliado <ArrowRight size={16} aria-hidden="true" />
          </motion.button>
        </motion.div>

        {/* Earnings card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          aria-label="Ingresos estimados para técnicos"
        >
          <div
            style={{
              background: '#0D1A42',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24,
              padding: 32,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: 'rgba(245,90,20,0.1)',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(245,90,20,0.2)',
                }}
              >
                <TrendingUp size={20} color="#F55A14" aria-hidden="true" />
              </div>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, fontFamily: FONT_BODY }}>
                  Ingresos estimados
                </p>
                <p style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 800, fontSize: 28 }}>
                  $3.2M <span style={{ color: '#F55A14', fontSize: 18 }}>COP / mes</span>
                </p>
              </div>
            </div>

            <p
              style={{
                color: 'rgba(255,255,255,0.25)',
                fontSize: 11,
                fontFamily: FONT_BODY,
                marginBottom: 20,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Promedio técnico SOLFIX
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {EARNINGS_DATA.map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, width: 80, fontFamily: FONT_BODY }}>
                    {d.day}
                  </span>
                  <div
                    style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 4, height: 6, overflow: 'hidden' }}
                    role="progressbar"
                    aria-valuenow={Math.min(d.pct, 100)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${d.day}: ${d.amount}`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(d.pct, 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      style={{
                        height: '100%',
                        borderRadius: 4,
                        background: `linear-gradient(90deg, #1462F5, ${d.pct >= 100 ? '#F55A14' : '#1462F5'})`,
                      }}
                    />
                  </div>
                  <span style={{ color: '#F55A14', fontSize: 12, width: 80, textAlign: 'right', fontFamily: FONT_HEADING, fontWeight: 700 }}>
                    {d.amount}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 24,
                padding: '16px',
                background: 'rgba(20,98,245,0.08)',
                borderRadius: 12,
                border: '1px solid rgba(20,98,245,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <Award size={20} color="#1462F5" aria-hidden="true" />
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, fontFamily: FONT_BODY, fontWeight: 300 }}>
                Los técnicos top ganan hasta{' '}
                <strong style={{ color: 'white' }}>$6M COP/mes</strong>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
