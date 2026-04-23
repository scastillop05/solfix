'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FONT_HEADING, FONT_BODY } from '@/lib/constants';

const FAQS = [
  {
    q: '¿Cuánto cuesta el servicio?',
    a: 'Cada servicio tiene una tarifa base que el técnico confirma antes de empezar. Plomería desde $40.000, electricidad desde $45.000, cerrajería desde $35.000. No hay costo de visita — pagas solo si quedas satisfecho con el trabajo.',
  },
  {
    q: '¿Los técnicos son de confianza?',
    a: 'Todos los técnicos y empresas pasan por un proceso de verificación antes de ser aceptados: revisamos antecedentes, comprobamos experiencia y validamos referencias. Además, cada servicio queda registrado con calificación del cliente.',
  },
  {
    q: '¿Qué pasa si el técnico no llega o se demora?',
    a: 'Si el técnico no se presenta en el tiempo acordado, te asignamos otro de inmediato sin costo adicional. Tu tiempo es valioso y lo sabemos.',
  },
  {
    q: '¿Cómo funciona el pago?',
    a: 'El pago se acuerda directamente con el técnico al finalizar el servicio. Aceptamos efectivo y transferencia. No cobramos por adelantado ni hay cargos ocultos.',
  },
  {
    q: '¿Qué zonas cubren?',
    a: 'Por ahora operamos de forma manual — conectamos técnicos según la ciudad y zona que el cliente indica al solicitar el servicio. Si tienes dudas sobre cobertura en tu zona, escríbenos por WhatsApp y te confirmamos en minutos.',
  },
  {
    q: '¿Tienen garantía en los trabajos?',
    a: 'Sí. Si el problema vuelve a ocurrir dentro de los 7 días siguientes al servicio, el técnico regresa sin costo adicional. Queremos que el problema quede resuelto de verdad.',
  },
  {
    q: '¿Puedo solicitar un servicio de noche o en fin de semana?',
    a: 'Sí, estamos disponibles 24/7. Algunos servicios como cerrajería y emergencias eléctricas tienen atención inmediata a cualquier hora. Para otros servicios como pintura o carpintería, coordinamos el horario que mejor te quede.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        background: '#060E2B',
        padding: '100px 24px',
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(20,98,245,0.12)',
              border: '1px solid rgba(20,98,245,0.25)',
              color: '#6B9FFF',
              fontSize: 11,
              fontFamily: FONT_BODY,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '6px 16px',
              borderRadius: 100,
              marginBottom: 20,
            }}
          >
            Preguntas frecuentes
          </span>
          <h2
            style={{
              color: 'white',
              fontFamily: FONT_HEADING,
              fontWeight: 800,
              fontSize: 'clamp(28px,4vw,48px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: 16,
            }}
          >
            Todo lo que necesitas saber
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.4)',
              fontFamily: FONT_BODY,
              fontSize: 16,
              lineHeight: 1.6,
              maxWidth: 500,
              margin: '0 auto',
            }}
          >
            Si tienes otra duda, escríbenos por WhatsApp y te respondemos en minutos.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{
                background: open === i ? 'rgba(20,98,245,0.08)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${open === i ? 'rgba(20,98,245,0.3)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 16,
                overflow: 'hidden',
                transition: 'border-color 0.2s, background 0.2s',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    color: open === i ? 'white' : 'rgba(255,255,255,0.8)',
                    fontFamily: FONT_HEADING,
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: 1.4,
                    transition: 'color 0.2s',
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    flexShrink: 0,
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: open === i ? '#1462F5' : 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s',
                  }}
                >
                  {open === i
                    ? <Minus size={14} color="white" aria-hidden="true" />
                    : <Plus  size={14} color="rgba(255,255,255,0.6)" aria-hidden="true" />
                  }
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p
                      style={{
                        color: 'rgba(255,255,255,0.5)',
                        fontFamily: FONT_BODY,
                        fontSize: 15,
                        lineHeight: 1.7,
                        padding: '0 24px 20px',
                      }}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
