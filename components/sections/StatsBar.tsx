'use client';

import { motion } from 'framer-motion';
import { Counter } from '@/components/ui/Counter';
import { STATS, FONT_BODY, FONT_HEADING } from '@/lib/constants';

export function StatsBar() {
  return (
    <section
      style={{
        background: '#060C24',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '48px 24px',
      }}
      aria-label="Estadísticas de SOLFIX"
    >
      <div
        style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gap: 32 }}
        className="grid-cols-2 md:grid-cols-4"
      >
        {STATS.map(({ icon: Icon, value, suffix, prefix, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                background: 'rgba(20,98,245,0.1)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(20,98,245,0.2)',
                marginBottom: 4,
              }}
            >
              <Icon size={20} color="#1462F5" aria-hidden="true" />
            </div>
            <div
              style={{
                color: 'white',
                fontFamily: FONT_HEADING,
                fontWeight: 800,
                fontSize: 36,
                lineHeight: 1,
              }}
            >
              <Counter to={value} suffix={suffix} prefix={prefix} />
            </div>
            <div
              style={{
                color: 'rgba(255,255,255,0.35)',
                fontSize: 13,
                fontFamily: FONT_BODY,
              }}
            >
              {label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
