'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, AlertTriangle } from 'lucide-react';
import { TESTIMONIALS, FONT_HEADING, FONT_BODY } from '@/lib/constants';

export function Testimonials() {
  return (
    <section
      style={{ background: 'var(--navy)', padding: '100px 24px' }}
      aria-label="Casos que resuelve SOLFIX"
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
            Para esto existimos
          </span>
          <h2 style={{
            color: 'white',
            fontFamily: FONT_HEADING,
            fontWeight: 800,
            fontSize: 'clamp(32px,4vw,56px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: 16,
          }}>
            ¿Te ha pasado<br />
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>algo así?</span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.35)',
            fontFamily: FONT_BODY,
            fontSize: 16,
            lineHeight: 1.6,
            maxWidth: 480,
          }}>
            Estos son los problemas que resolvemos — rápido,
            con precio claro y sin sorpresas.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{ display: 'grid', gap: 20 }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                aria-label={t.headline}
                style={{
                  background: '#0D1A42',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 20,
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(20,98,245,0.4)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(20,98,245,0.08)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Top row: icon + badge */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 20,
                }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    background: 'rgba(20,98,245,0.12)',
                    border: '1px solid rgba(20,98,245,0.2)',
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon size={20} color="#1462F5" aria-hidden="true" />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    background: 'rgba(245,90,20,0.1)',
                    border: '1px solid rgba(245,90,20,0.25)',
                    borderRadius: 100,
                    padding: '4px 10px',
                  }}>
                    <AlertTriangle size={10} color="#F55A14" aria-hidden="true" />
                    <span style={{
                      color: '#F55A14',
                      fontSize: 10,
                      fontFamily: FONT_BODY,
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}>
                      Emergencia
                    </span>
                  </div>
                </div>

                {/* Headline */}
                <h3 style={{
                  color: 'white',
                  fontFamily: FONT_HEADING,
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: 1.3,
                  marginBottom: 12,
                }}>
                  {t.headline}
                </h3>

                {/* Detail */}
                <p style={{
                  color: 'rgba(255,255,255,0.45)',
                  fontFamily: FONT_BODY,
                  fontWeight: 300,
                  fontSize: 13,
                  lineHeight: 1.7,
                  marginBottom: 24,
                  flexGrow: 1,
                }}>
                  {t.detail}
                </p>

                {/* Divider */}
                <div style={{
                  height: 1,
                  background: 'rgba(255,255,255,0.06)',
                  marginBottom: 16,
                }} />

                {/* Metrics */}
                <div style={{
                  display: 'flex',
                  gap: 8,
                  flexWrap: 'wrap',
                  marginBottom: 14,
                }}>
                  <MetricChip
                    icon={<AlertTriangle size={11} color="#F55A14" aria-hidden="true" />}
                    label={`Respuesta ${t.responseTime}`}
                  />
                  <MetricChip
                    icon={<Clock size={11} color="#7BA8FF" aria-hidden="true" />}
                    label={`Resuelto en ${t.resolvedIn}`}
                  />
                  <MetricChip
                    icon={
                      <span style={{
                        color: '#4ADE80',
                        fontSize: 11,
                        lineHeight: 1,
                        fontFamily: FONT_HEADING,
                        fontWeight: 700,
                      }}>
                        $
                      </span>
                    }
                    label={t.price}
                    accent="green"
                  />
                </div>

                {/* City */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <MapPin size={11} color="rgba(255,255,255,0.2)" aria-hidden="true" />
                  <span style={{
                    color: 'rgba(255,255,255,0.25)',
                    fontSize: 11,
                    fontFamily: FONT_BODY,
                  }}>
                    {t.city} · {t.service}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: 'center',
            marginTop: 40,
            color: 'rgba(255,255,255,0.2)',
            fontFamily: FONT_BODY,
            fontSize: 13,
          }}
        >
          Situaciones reales que SOLFIX está diseñado para resolver.
        </motion.p>
      </div>
    </section>
  );
}

function MetricChip({
  icon,
  label,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  accent?: 'green';
}) {
  const bgColor  = accent === 'green' ? 'rgba(74,222,128,0.1)'  : 'rgba(255,255,255,0.05)';
  const bdColor  = accent === 'green' ? 'rgba(74,222,128,0.2)'  : 'rgba(255,255,255,0.08)';
  const txtColor = accent === 'green' ? '#4ADE80'                : 'rgba(255,255,255,0.5)';

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      background: bgColor,
      border: `1px solid ${bdColor}`,
      borderRadius: 100,
      padding: '4px 10px',
    }}>
      {icon}
      <span style={{
        color: txtColor,
        fontSize: 11,
        fontFamily: FONT_BODY,
        fontWeight: 500,
        whiteSpace: 'nowrap',
      }}>
        {label}
      </span>
    </div>
  );
}
