'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Shield, CheckCircle, Star } from 'lucide-react';
import { useModal } from '@/hooks/useModal';
import { FONT_HEADING, FONT_BODY } from '@/lib/constants';

export function Hero() {
  const { openRequest, openTech } = useModal();

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--navy)',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: 'linear-gradient(180deg, rgba(20,98,245,0.05) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gap: 80,
          alignItems: 'center',
          width: '100%',
        }}
        className="grid-cols-1 md:grid-cols-2 pt-[100px] md:pt-[140px] px-6 pb-[80px] md:pb-[100px]"
      >
        {/* LEFT — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(20,98,245,0.1)',
              border: '1px solid rgba(20,98,245,0.22)',
              borderRadius: 100,
              padding: '6px 16px',
              marginBottom: 32,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#F55A14',
                display: 'block',
                flexShrink: 0,
              }}
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
              Disponible en Cali · Sur y Norte
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: FONT_HEADING,
              fontWeight: 800,
              lineHeight: 1.05,
              fontSize: 'clamp(40px,5vw,68px)',
              color: 'white',
              marginBottom: 24,
              letterSpacing: '-0.03em',
            }}
          >
            Técnicos verificados.<br />
            Precio transparente.<br />
            <span style={{ color: '#F55A14' }}>Garantía incluida.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 18,
              lineHeight: 1.7,
              fontFamily: FONT_BODY,
              fontWeight: 300,
              maxWidth: 440,
              marginBottom: 40,
            }}
          >
            Conectamos hogares y empresas con técnicos de confianza en Cali.
            Sin sorpresas en el precio, sin riesgos en la calidad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 48 }}
          >
            <button
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
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = '#D94A0A')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = '#F55A14')}
            >
              <Phone size={16} aria-hidden="true" /> Pedir servicio ahora
            </button>
            <button
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
                cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
            >
              <MessageCircle size={16} aria-hidden="true" /> Soy aliado
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}
          >
            {[
              { icon: Shield,      text: 'Técnicos verificados' },
              { icon: CheckCircle, text: 'Garantía de servicio' },
              { icon: Star,        text: 'Sin costo de visita' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon size={14} color="#1462F5" aria-hidden="true" />
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, fontFamily: FONT_BODY }}>
                  {text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — trust panel */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div
              style={{
                background: '#0D1A42',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                padding: 32,
                maxWidth: 420,
                marginLeft: 'auto',
              }}
            >
              <p
                style={{
                  color: 'rgba(255,255,255,0.3)',
                  fontSize: 11,
                  fontFamily: FONT_BODY,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: 24,
                }}
              >
                Por qué confían en SOLFIX
              </p>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  {
                    title: 'Verificación de antecedentes',
                    desc: 'Todos los técnicos pasan un proceso de validación antes de atender clientes.',
                  },
                  {
                    title: 'Precio acordado antes de empezar',
                    desc: 'Sin cobros sorpresa. El valor se confirma antes de que el técnico inicie.',
                  },
                  {
                    title: 'Garantía de 7 días',
                    desc: 'Si el problema vuelve, el técnico regresa sin costo adicional.',
                  },
                ].map((item, i, arr) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: 16,
                      paddingTop: i > 0 ? 20 : 0,
                      paddingBottom: i < arr.length - 1 ? 20 : 0,
                      borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    }}
                  >
                    <div
                      aria-hidden="true"
                      style={{
                        width: 22,
                        height: 22,
                        background: 'rgba(20,98,245,0.12)',
                        border: '1px solid rgba(20,98,245,0.25)',
                        borderRadius: 6,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <CheckCircle size={12} color="#1462F5" />
                    </div>
                    <div>
                      <p style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
                        {item.title}
                      </p>
                      <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: FONT_BODY, fontSize: 13, lineHeight: 1.6 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 24,
                  paddingTop: 20,
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: 36,
                    height: 36,
                    background: '#1462F5',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 700, fontSize: 12 }}>CM</span>
                </div>
                <div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: FONT_BODY, fontSize: 13, lineHeight: 1.65, fontStyle: 'italic' }}>
                    "Con SOLFIX tuve un técnico confirmado en minutos y el precio fue exactamente el acordado."
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.25)', fontFamily: FONT_BODY, fontSize: 11, marginTop: 6 }}>
                    Carlos M. · Sur de Cali
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
