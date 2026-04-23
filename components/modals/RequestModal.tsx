'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, CheckCircle, ArrowRight, MessageCircle, AlertCircle,
} from 'lucide-react';
import { buildWhatsAppURL } from '@/lib/utils';
import { SERVICE_OPTIONS } from '@/lib/constants';
import { FONT_HEADING, FONT_BODY } from '@/lib/constants';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import type { RequestFormData } from '@/lib/types';

interface RequestModalProps {
  onClose: () => void;
}

const INITIAL_FORM: RequestFormData = {
  service: '',
  name: '',
  phone: '',
  address: '',
  description: '',
  urgency: 'normal',
};

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
  transition: 'border-color 0.2s',
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

const errStyle: React.CSSProperties = {
  color: '#F55A14',
  fontSize: 11,
  fontFamily: FONT_BODY,
  marginTop: 4,
  display: 'flex',
  alignItems: 'center',
  gap: 4,
};

export function RequestModal({ onClose }: RequestModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [form, setForm] = useState<RequestFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<RequestFormData>>({});
  const modalRef = useFocusTrap<HTMLDivElement>(onClose);

  const setField = (key: keyof RequestFormData, val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validateStep1 = (): boolean => {
    if (!form.service) {
      setErrors({ service: 'Selecciona un servicio' });
      return false;
    }
    return true;
  };

  const validateStep2 = (): boolean => {
    const e: Partial<RequestFormData> = {};
    if (!form.name.trim())        e.name        = 'Ingresa tu nombre';
    if (!form.phone.trim() || form.phone.length < 7) e.phone = 'Ingresa un número válido';
    if (!form.address.trim())     e.address     = 'Ingresa la dirección';
    if (!form.description.trim()) e.description = 'Describe brevemente el problema';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      const msg =
        `[SOLICITUD] *Nueva solicitud SOLFIX*\n\n` +
        `*Servicio:* ${form.service}\n` +
        `*Nombre:* ${form.name}\n` +
        `*Teléfono:* ${form.phone}\n` +
        `*Dirección:* ${form.address}\n` +
        `*Descripción:* ${form.description}\n` +
        `*Urgencia:* ${form.urgency === 'urgente' ? 'URGENTE' : 'Normal'}\n\n` +
        `_Solicitud desde ${process.env.NEXT_PUBLIC_SITE_URL ?? 'solfix.lat'}_`;

      setStep(3);
      fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      }).catch(() => {});
      setTimeout(() => {
        window.open(buildWhatsAppURL(msg), '_blank', 'noopener,noreferrer');
      }, 1200);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (step !== 3) return;
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [step, onClose]);

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
      aria-label="Solicitar servicio"
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
          maxWidth: 520,
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
            transition: 'background 0.2s',
          }}
        >
          <X size={16} color="rgba(255,255,255,0.6)" aria-hidden="true" />
        </button>

        {step < 3 && (
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, fontFamily: FONT_BODY }}>
                Paso {step} de 2
              </span>
              <span style={{ color: '#1462F5', fontSize: 12, fontFamily: FONT_BODY, fontWeight: 500 }}>
                {step === 1 ? 'Elige el servicio' : 'Tus datos'}
              </span>
            </div>
            <div style={{ height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }}>
              <motion.div
                animate={{ width: step === 1 ? '50%' : '100%' }}
                transition={{ duration: 0.4 }}
                style={{ height: '100%', background: '#1462F5', borderRadius: 2 }}
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h2 style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 800, fontSize: 24, marginBottom: 6 }}>
                ¿Qué necesitas arreglar?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, fontFamily: FONT_BODY, marginBottom: 24 }}>
                Selecciona el tipo de servicio que necesitas.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {SERVICE_OPTIONS.map(({ icon: Icon, label }) => (
                  <motion.button
                    key={label}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setField('service', label)}
                    aria-pressed={form.service === label}
                    style={{
                      background: form.service === label ? 'rgba(20,98,245,0.2)' : 'rgba(255,255,255,0.04)',
                      border: `1.5px solid ${form.service === label ? '#1462F5' : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: 12,
                      padding: '14px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      textAlign: 'left',
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: form.service === label ? 'rgba(20,98,245,0.2)' : 'rgba(255,255,255,0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Icon
                        size={18}
                        color={form.service === label ? '#1462F5' : 'rgba(255,255,255,0.4)'}
                        aria-hidden="true"
                      />
                    </div>
                    <span
                      style={{
                        color: form.service === label ? 'white' : 'rgba(255,255,255,0.6)',
                        fontFamily: FONT_BODY,
                        fontWeight: 500,
                        fontSize: 13,
                      }}
                    >
                      {label}
                    </span>
                    {form.service === label && (
                      <CheckCircle size={14} color="#1462F5" style={{ marginLeft: 'auto' }} aria-hidden="true" />
                    )}
                  </motion.button>
                ))}
              </div>

              {errors.service && (
                <p style={errStyle} role="alert">
                  <AlertCircle size={12} aria-hidden="true" /> {errors.service}
                </p>
              )}

              <div style={{ marginTop: 20 }}>
                <p style={labelStyle} id="urgency-label">Urgencia</p>
                <div style={{ display: 'flex', gap: 8 }} role="group" aria-labelledby="urgency-label">
                  {[
                    { val: 'normal' as const,  label: 'Normal · Hoy o mañana' },
                    { val: 'urgente' as const, label: 'Urgente · Ahora mismo' },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      onClick={() => setField('urgency', opt.val)}
                      aria-pressed={form.urgency === opt.val}
                      style={{
                        flex: 1,
                        padding: '10px 12px',
                        borderRadius: 10,
                        cursor: 'pointer',
                        background:
                          form.urgency === opt.val
                            ? opt.val === 'urgente'
                              ? 'rgba(245,90,20,0.15)'
                              : 'rgba(20,98,245,0.15)'
                            : 'rgba(255,255,255,0.04)',
                        border: `1.5px solid ${
                          form.urgency === opt.val
                            ? opt.val === 'urgente'
                              ? '#F55A14'
                              : '#1462F5'
                            : 'rgba(255,255,255,0.08)'
                        }`,
                        color: form.urgency === opt.val ? 'white' : 'rgba(255,255,255,0.4)',
                        fontFamily: FONT_BODY,
                        fontSize: 12,
                        transition: 'all 0.2s',
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <h2 style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 800, fontSize: 24, marginBottom: 6 }}>
                ¿Dónde y con quién?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, fontFamily: FONT_BODY, marginBottom: 24 }}>
                Servicio:{' '}
                <span style={{ color: '#1462F5', fontWeight: 500 }}>{form.service}</span>
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12 }}>
                  <div>
                    <label htmlFor="req-name" style={labelStyle}>Nombre</label>
                    <input
                      id="req-name"
                      value={form.name}
                      onChange={(e) => setField('name', e.target.value)}
                      placeholder="Tu nombre"
                      style={inputStyle(errors.name)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'req-name-err' : undefined}
                    />
                    {errors.name && (
                      <p id="req-name-err" style={errStyle} role="alert">
                        <AlertCircle size={11} aria-hidden="true" /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="req-phone" style={labelStyle}>Teléfono / WhatsApp</label>
                    <input
                      id="req-phone"
                      value={form.phone}
                      onChange={(e) => setField('phone', e.target.value)}
                      placeholder="300 123 4567"
                      type="tel"
                      style={inputStyle(errors.phone)}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'req-phone-err' : undefined}
                    />
                    {errors.phone && (
                      <p id="req-phone-err" style={errStyle} role="alert">
                        <AlertCircle size={11} aria-hidden="true" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="req-address" style={labelStyle}>Dirección</label>
                  <input
                    id="req-address"
                    value={form.address}
                    onChange={(e) => setField('address', e.target.value)}
                    placeholder="Ej: Cra 43 #12-50, Apto 201, El Poblado"
                    style={inputStyle(errors.address)}
                    aria-invalid={!!errors.address}
                    aria-describedby={errors.address ? 'req-address-err' : undefined}
                  />
                  {errors.address && (
                    <p id="req-address-err" style={errStyle} role="alert">
                      <AlertCircle size={11} aria-hidden="true" /> {errors.address}
                    </p>
                  )}
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <label htmlFor="req-desc" style={{ ...labelStyle, marginBottom: 0 }}>Describe el problema</label>
                    <span style={{
                      fontSize: 11,
                      fontFamily: FONT_BODY,
                      color: form.description.length > 270 ? '#F55A14' : 'rgba(255,255,255,0.25)',
                    }}>
                      {form.description.length} / 300
                    </span>
                  </div>
                  <textarea
                    id="req-desc"
                    value={form.description}
                    onChange={(e) => setField('description', e.target.value.slice(0, 300))}
                    placeholder="Ej: Se dañó la llave del lavamanos, hay fuga de agua..."
                    rows={3}
                    style={{ ...inputStyle(errors.description), resize: 'none' }}
                    aria-invalid={!!errors.description}
                    aria-describedby={errors.description ? 'req-desc-err' : undefined}
                    maxLength={300}
                  />
                  {errors.description && (
                    <p id="req-desc-err" style={errStyle} role="alert">
                      <AlertCircle size={11} aria-hidden="true" /> {errors.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{ textAlign: 'center', padding: '20px 0' }}
            >
              <motion.div
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'rgba(20,98,245,0.15)',
                  border: '2px solid #1462F5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }}
              >
                <CheckCircle size={36} color="#1462F5" aria-hidden="true" />
              </motion.div>
              <h2 style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 800, fontSize: 26, marginBottom: 12 }}>
                ¡Solicitud enviada!
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: FONT_BODY, fontSize: 15, lineHeight: 1.6, marginBottom: 8 }}>
                WhatsApp se abrió para confirmar tu solicitud.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontFamily: FONT_BODY, fontSize: 13, marginBottom: 24 }}>
                Un técnico te contactará en los próximos{' '}
                <strong style={{ color: '#F55A14' }}>18 minutos</strong>.
              </p>
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.5)',
                  fontFamily: FONT_BODY,
                  fontSize: 13,
                  padding: '10px 24px',
                  borderRadius: 10,
                  cursor: 'pointer',
                }}
              >
                Cerrar
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {step < 3 && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleNext}
            aria-label={step === 1 ? 'Continuar al siguiente paso' : 'Conectar por WhatsApp'}
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
              transition: 'background 0.2s',
            }}
          >
            {step === 1 ? 'Continuar' : 'Conectar por WhatsApp'}
            {step === 2 && <MessageCircle size={16} aria-hidden="true" />}
            {step === 1 && <ArrowRight size={16} aria-hidden="true" />}
          </motion.button>
        )}

        {step < 3 && (
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 11, fontFamily: FONT_BODY, textAlign: 'center', marginTop: 12 }}>
            Sin costo de visita · Pagas solo si quedas satisfecho
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
