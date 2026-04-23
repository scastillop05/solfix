'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Phone, MessageCircle, Shield, Star, CheckCircle,
  Clock, MapPin, Wrench,
} from 'lucide-react';
import { CircuitBg } from '@/components/ui/CircuitBg';
import { SFMark } from '@/components/ui/SFMark';
import { useModal } from '@/hooks/useModal';
import { SERVICES_DATA, TICKER_ITEMS, FONT_HEADING, FONT_BODY } from '@/lib/constants';

export function Hero() {
  const { openRequest, openTech } = useModal();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--navy)',
      }}
    >
      <CircuitBg />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '30%', left: '20%',
          width: 600, height: 600,
          background: 'rgba(20,98,245,0.12)', borderRadius: '50%',
          filter: 'blur(100px)', pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: '20%', right: '15%',
          width: 400, height: 400,
          background: 'rgba(245,90,20,0.08)', borderRadius: '50%',
          filter: 'blur(80px)', pointerEvents: 'none',
        }}
      />

      <motion.div
        style={{
          y,
          opacity,
          position: 'relative',
          zIndex: 10,
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gap: 80,
          alignItems: 'center',
          width: '100%',
        }}
        className="grid-cols-1 md:grid-cols-2 pt-[100px] md:pt-[140px] px-6 pb-[60px] md:pb-20"
      >
        {/* LEFT — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(20,98,245,0.12)',
              border: '1px solid rgba(20,98,245,0.3)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 32,
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              aria-hidden="true"
              style={{ width: 7, height: 7, borderRadius: '50%', background: '#F55A14', display: 'block' }}
            />
            <span
              style={{
                color: '#7BA8FF',
                fontSize: 11,
                fontFamily: FONT_BODY,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Disponible 24/7 · Donde estés
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: FONT_HEADING,
              fontWeight: 800,
              lineHeight: 1.02,
              fontSize: 'clamp(44px,5.5vw,74px)',
              color: 'white',
              marginBottom: 24,
              letterSpacing: '-0.03em',
            }}
          >
            Tu técnico<br />
            de confianza<br />
            <span style={{ color: '#F55A14' }}>en minutos.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: 18,
              lineHeight: 1.7,
              fontFamily: FONT_BODY,
              fontWeight: 300,
              maxWidth: 440,
              marginBottom: 40,
            }}
          >
            Plomeros, electricistas, cerrajeros y más —
            verificados, calificados y a un clic de distancia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 48 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, background: '#D94A0A' }}
              whileTap={{ scale: 0.97 }}
              data-hover
              onClick={openRequest}
              aria-label="Pedir servicio ahora"
              style={{
                background: '#F55A14',
                color: 'white',
                fontFamily: FONT_HEADING,
                fontWeight: 700,
                fontSize: 15,
                padding: '14px 28px',
                borderRadius: 12,
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.2s',
                cursor: 'pointer',
              }}
            >
              <Phone size={16} aria-hidden="true" /> Pedir servicio ahora
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.4)' }}
              data-hover
              onClick={openTech}
              aria-label="Acceder como técnico"
              style={{
                background: 'transparent',
                border: '1.5px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.65)',
                fontFamily: FONT_BODY,
                fontWeight: 500,
                fontSize: 15,
                padding: '14px 28px',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.2s',
                cursor: 'pointer',
              }}
            >
              <MessageCircle size={16} aria-hidden="true" /> Soy aliado
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}
          >
            {[
              { icon: Shield,      text: 'Técnicos verificados' },
              { icon: Star,        text: '4.9/5 calificación' },
              { icon: CheckCircle, text: 'Garantía de servicio' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon size={15} color="#1462F5" aria-hidden="true" />
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, fontFamily: FONT_BODY }}>
                  {text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — phone mockup */}
        <div className="hidden md:block" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          <div
            style={{
              position: 'absolute',
              inset: -40,
              background: 'radial-gradient(ellipse at center, rgba(20,98,245,0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              width: 280,
              background: '#060C24',
              borderRadius: 44,
              padding: 12,
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
          >
            <div style={{ background: '#0D1A42', borderRadius: 35, overflow: 'hidden', height: 560 }}>
              <div style={{ height: 30, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 4 }}>
                <div
                  style={{
                    width: 100, height: 22,
                    background: '#060C24',
                    borderRadius: '0 0 16px 16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1A2550' }} />
                  <div style={{ width: 50, height: 4, borderRadius: 2, background: '#1A2550' }} />
                </div>
              </div>

              <div style={{ padding: '12px 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, fontFamily: FONT_BODY }}>Buenos días</p>
                    <p style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 15 }}>¿Qué necesitas hoy?</p>
                  </div>
                  <div style={{ width: 34, height: 34, borderRadius: 10, overflow: 'hidden' }}>
                    <SFMark size={34} />
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: 12,
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 16,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <Wrench size={14} color="rgba(255,255,255,0.3)" />
                  <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12, fontFamily: FONT_BODY }}>
                    ¿Qué necesitas arreglar?
                  </span>
                </div>

                <p
                  style={{
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: 10,
                    fontFamily: FONT_BODY,
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: 10,
                  }}
                >
                  Servicios populares
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 16 }}>
                  {SERVICES_DATA.slice(0, 6).map(({ icon: Icon, label }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + i * 0.08 }}
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: 12,
                        padding: '10px 6px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 6,
                        border: '1px solid rgba(255,255,255,0.06)',
                        cursor: 'pointer',
                      }}
                    >
                      <Icon size={18} color={i % 2 === 0 ? '#1462F5' : '#F55A14'} />
                      <span
                        style={{
                          color: 'rgba(255,255,255,0.6)',
                          fontSize: 9,
                          textAlign: 'center',
                          fontFamily: FONT_BODY,
                          lineHeight: 1.2,
                        }}
                      >
                        {label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div
                  style={{
                    background: 'linear-gradient(135deg, rgba(20,98,245,0.2), rgba(20,98,245,0.08))',
                    border: '1px solid rgba(20,98,245,0.35)',
                    borderRadius: 14,
                    padding: 12,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ color: '#7BA8FF', fontSize: 9, fontFamily: FONT_BODY, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Técnico en camino
                    </span>
                    <span style={{ color: '#F55A14', fontSize: 11, fontFamily: FONT_HEADING, fontWeight: 700 }}>12 min</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      style={{
                        width: 32, height: 32,
                        background: '#1462F5',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <span style={{ color: 'white', fontSize: 12, fontFamily: FONT_HEADING, fontWeight: 700 }}>JM</span>
                    </div>
                    <div>
                      <p style={{ color: 'white', fontSize: 11, fontFamily: FONT_HEADING, fontWeight: 600 }}>Juan Morales</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Star size={9} color="#F55A14" fill="#F55A14" />
                        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9, fontFamily: FONT_BODY }}>4.9 · Electricista</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            className="float-1"
            style={{
              position: 'absolute', right: -20, top: 60,
              background: 'white', borderRadius: 14, padding: '10px 16px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)', zIndex: 3, minWidth: 140,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 32, height: 32, background: 'rgba(20,98,245,0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Clock size={16} color="#1462F5" />
              </div>
              <div>
                <p style={{ color: '#08122E', fontFamily: FONT_HEADING, fontWeight: 800, fontSize: 16, lineHeight: 1 }}>18 min</p>
                <p style={{ color: '#8B96B8', fontFamily: FONT_BODY, fontSize: 10, marginTop: 2 }}>Tiempo promedio</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="float-2"
            style={{
              position: 'absolute', left: -24, bottom: 100,
              background: '#F55A14', borderRadius: 14, padding: '10px 16px',
              boxShadow: '0 20px 60px rgba(245,90,20,0.4)', zIndex: 3, minWidth: 130,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.2)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={16} color="white" />
              </div>
              <div>
                <p style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 800, fontSize: 16, lineHeight: 1 }}>98%</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: FONT_BODY, fontSize: 10, marginTop: 2 }}>Satisfacción</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="float-3"
            style={{
              position: 'absolute', right: -16, bottom: 160,
              background: '#08122E', borderRadius: 14, padding: '10px 16px',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)', zIndex: 3, minWidth: 150,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 32, height: 32, background: 'rgba(20,98,245,0.15)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={16} color="#1462F5" />
              </div>
              <div>
                <p style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 13, lineHeight: 1 }}>Tu ciudad</p>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: FONT_BODY, fontSize: 10, marginTop: 2 }}>Cobertura total</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </motion.div>

      {/* Bottom ticker */}
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '12px 0',
          overflow: 'hidden',
          background: 'rgba(6,12,36,0.8)',
          backdropFilter: 'blur(10px)',
        }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: 48, whiteSpace: 'nowrap' }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((s, i) => (
            <span
              key={i}
              style={{
                color: 'rgba(255,255,255,0.18)',
                fontSize: 11,
                fontFamily: FONT_BODY,
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
