'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import { buildWhatsAppURL } from '@/lib/utils';
import { FONT_HEADING, FONT_BODY } from '@/lib/constants';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import type { TechFormData } from '@/lib/types';

interface TechModalProps {
  onClose: () => void;
}

const INITIAL_FORM: TechFormData = { name: '', phone: '', specialty: '', barrio: '', experience: '' };

const inputStyle = (err?: string): React.CSSProperties => ({
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: `1.5px solid ${err ? '#F55A14' : 'rgba(255,255,255,0.1)'}`,
  borderRadius: 10,
  padding: '12px 16px',
  color: 'white',
  fontFamily: FONT_BODY,
  fontSize: 14,
  outline: 'none',
});

const labelStyle: React.CSSProperties = {
  display: 'block',
  color: 'rgba(255,255,255,0.5)',
  fontSize: 11,
  fontFamily: FONT_BODY,
  fontWeight: 500,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginBottom: 6,
};

const fieldErrStyle: React.CSSProperties = {
  color: '#F55A14',
  fontSize: 11,
  marginTop: 4,
  fontFamily: FONT_BODY,
};

export function TechModal({ onClose }: TechModalProps) {
  const [form, setForm] = useState<TechFormData>(INITIAL_FORM);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<TechFormData>>({});
  const modalRef = useFocusTrap<HTMLDivElement>(onClose);

  const setField = (key: keyof TechFormData, val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = () => {
    const e: Partial<TechFormData> = {};
    if (!form.name.trim())      e.name      = 'Requerido';
    if (!form.phone.trim())     e.phone     = 'Requerido';
    if (!form.specialty.trim()) e.specialty = 'Requerido';
    if (!form.barrio.trim())    e.barrio    = 'Requerido';
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    const msg =
      `[TECNICO] *Quiero unirme a SOLFIX como técnico*\n\n` +
      `*Nombre:* ${form.name}\n` +
      `*Teléfono:* ${form.phone}\n` +
      `*Especialidad:* ${form.specialty}\n` +
      `*Zona:* ${form.barrio}\n` +
      `*Experiencia:* ${form.experience || 'No especificada'}\n\n` +
      `_Solicitud desde ${process.env.NEXT_PUBLIC_SITE_URL ?? 'solfix.lat'}_`;

    setSent(true);
    fetch('/api/tech', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(form),
    }).catch(() => {});
    setTimeout(() => {
      window.open(buildWhatsAppURL(msg), '_blank', 'noopener,noreferrer');
    }, 1000);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(4,8,24,0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Registro de técnico"
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.92, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 24 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        style={{
          background: '#0D1A42',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 24,
          width: '100%',
          maxWidth: 500,
          padding: '32px',
          position: 'relative',
          boxShadow: '0 40px 120px rgba(0,0,0,0.6)',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={16} color="rgba(255,255,255,0.6)" aria-hidden="true" />
        </button>

        {!sent ? (
          <>
            <div
              style={{
                width: 48,
                height: 48,
                background: 'rgba(245,90,20,0.1)',
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
                border: '1px solid rgba(245,90,20,0.2)',
              }}
            >
              <Wrench size={22} color="#F55A14" aria-hidden="true" />
            </div>
            <h2 style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 800, fontSize: 24, marginBottom: 6 }}>
              Únete como técnico
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, fontFamily: FONT_BODY, marginBottom: 24 }}>
              Gana más clientes, trabaja en tu barrio y cobra de forma segura.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12 }}>
                <div>
                  <label htmlFor="tech-name" style={labelStyle}>Nombre completo</label>
                  <input
                    id="tech-name"
                    value={form.name}
                    onChange={(e) => setField('name', e.target.value)}
                    placeholder="Tu nombre"
                    style={inputStyle(errors.name)}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p style={fieldErrStyle} role="alert">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="tech-phone" style={labelStyle}>WhatsApp</label>
                  <input
                    id="tech-phone"
                    value={form.phone}
                    onChange={(e) => setField('phone', e.target.value)}
                    placeholder="300 000 0000"
                    type="tel"
                    style={inputStyle(errors.phone)}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p style={fieldErrStyle} role="alert">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="tech-specialty" style={labelStyle}>Especialidad</label>
                <input
                  id="tech-specialty"
                  value={form.specialty}
                  onChange={(e) => setField('specialty', e.target.value)}
                  placeholder="Ej: Electricista, Plomero, Cerrajero..."
                  style={inputStyle(errors.specialty)}
                  aria-invalid={!!errors.specialty}
                />
                {errors.specialty && <p style={fieldErrStyle} role="alert">{errors.specialty}</p>}
              </div>
              <div>
                <label htmlFor="tech-barrio" style={labelStyle}>Zona donde trabajas</label>
                <input
                  id="tech-barrio"
                  value={form.barrio}
                  onChange={(e) => setField('barrio', e.target.value)}
                  placeholder="Ej: Norte, Sur, Centro de tu ciudad..."
                  style={inputStyle(errors.barrio)}
                  aria-invalid={!!errors.barrio}
                />
                {errors.barrio && <p style={fieldErrStyle} role="alert">{errors.barrio}</p>}
              </div>
              <div>
                <label htmlFor="tech-exp" style={labelStyle}>Años de experiencia (opcional)</label>
                <input
                  id="tech-exp"
                  value={form.experience}
                  onChange={(e) => setField('experience', e.target.value)}
                  placeholder="Ej: 5 años"
                  style={inputStyle()}
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleSubmit}
              aria-label="Enviar solicitud de registro como técnico"
              style={{
                width: '100%',
                marginTop: 24,
                background: '#F55A14',
                color: 'white',
                border: 'none',
                borderRadius: 12,
                padding: '14px 24px',
                fontFamily: FONT_HEADING,
                fontWeight: 700,
                fontSize: 15,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                cursor: 'pointer',
              }}
            >
              Enviar solicitud <ArrowRight size={16} aria-hidden="true" />
            </motion.button>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <motion.div
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5 }}
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'rgba(245,90,20,0.1)',
                border: '2px solid #F55A14',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
              }}
            >
              <CheckCircle size={36} color="#F55A14" aria-hidden="true" />
            </motion.div>
            <h2 style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 800, fontSize: 24, marginBottom: 12 }}>
              ¡Bienvenido a SOLFIX!
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: FONT_BODY, fontSize: 14, lineHeight: 1.6 }}>
              Te redirigimos a WhatsApp para completar tu registro.
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
