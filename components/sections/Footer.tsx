'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Share2 } from 'lucide-react';
import { SolfixLogo } from '@/components/ui/SFMark';
import { useModal } from '@/hooks/useModal';
import { FOOTER_COLUMNS, FONT_HEADING, FONT_BODY } from '@/lib/constants';

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? '';

function handleShare() {
  if (typeof navigator !== 'undefined' && navigator.share) {
    navigator.share({ title: 'SOLFIX', url: window.location.href }).catch(() => {});
  } else {
    navigator.clipboard?.writeText(window.location.href);
  }
}

export function Footer() {
  const { openTech } = useModal();

  const socialLinks = [
    { Icon: Share2,         label: 'Compartir',  href: '#',                                  onClick: handleShare },
    { Icon: MessageCircle,  label: 'WhatsApp',   href: `https://wa.me/${WA_NUMBER}`,         onClick: undefined },
    { Icon: Mail,           label: 'Email',      href: 'mailto:hola@solfix.co',              onClick: undefined },
  ];

  return (
    <footer
      style={{
        background: '#060C24',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '60px 24px 32px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{ display: 'grid', gap: 48, marginBottom: 48 }}
          className="grid-cols-1 md:[grid-template-columns:2fr_1fr_1fr_1fr]"
        >
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <SolfixLogo size={32} />
            </div>
            <p
              style={{
                color: 'rgba(255,255,255,0.3)',
                fontSize: 13,
                fontFamily: FONT_BODY,
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: 260,
              }}
            >
              Tu técnico de confianza. Servicios del hogar rápidos, verificados y con garantía.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {socialLinks.map(({ Icon, label, href, onClick }) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={onClick ? (e) => { e.preventDefault(); onClick(); } : undefined}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  data-hover
                  whileHover={{ scale: 1.1 }}
                  aria-label={label}
                  style={{
                    width: 36,
                    height: 36,
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.2s',
                  }}
                >
                  <Icon size={16} color="rgba(255,255,255,0.4)" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p style={{ color: 'white', fontFamily: FONT_HEADING, fontWeight: 600, fontSize: 14, marginBottom: 20 }}>
                {col.title}
              </p>
              {col.links.map((link) => (
                <a
                  key={link}
                  href={link.includes('@') ? `mailto:${link}` : '#'}
                  data-hover
                  onClick={(e) => {
                    if (link.includes('@')) return;
                    e.preventDefault();
                    if (link === 'Para técnicos') openTech();
                    else if (link === 'WhatsApp' && WA_NUMBER) window.open(`https://wa.me/${WA_NUMBER}`, '_blank', 'noopener,noreferrer');
                    else if (link === 'Cómo funciona') document.getElementById('cómo-funciona')?.scrollIntoView({ behavior: 'smooth' });
                    else if (link === 'Preguntas frecuentes') document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                    else document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.3)',
                    fontSize: 13,
                    fontFamily: FONT_BODY,
                    textDecoration: 'none',
                    marginBottom: 10,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.3)')}
                >
                  {link}
                </a>
              ))}
            </nav>
          ))}
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12, fontFamily: FONT_BODY }}>
            © {new Date().getFullYear()} SOLFIX · Todos los derechos reservados
          </p>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12, fontFamily: FONT_BODY }}>
            Hecho con precisión
          </p>
        </div>
      </div>
    </footer>
  );
}
