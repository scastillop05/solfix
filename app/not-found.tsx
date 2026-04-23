import Link from 'next/link';
import { SolfixLogo } from '@/components/ui/SFMark';
import { FONT_HEADING, FONT_BODY } from '@/lib/constants';

export const metadata = { title: 'Página no encontrada | SOLFIX' };

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#08122E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '24px',
      }}
    >
      <div style={{ marginBottom: 40 }}>
        <SolfixLogo size={40} />
      </div>
      <p
        style={{
          color: '#F55A14',
          fontSize: 11,
          fontFamily: FONT_BODY,
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}
      >
        Error 404
      </p>
      <h1
        style={{
          color: 'white',
          fontFamily: FONT_HEADING,
          fontWeight: 800,
          fontSize: 'clamp(80px,15vw,160px)',
          lineHeight: 0.9,
          letterSpacing: '-0.04em',
          marginBottom: 24,
        }}
      >
        404
      </h1>
      <p
        style={{
          color: 'rgba(255,255,255,0.4)',
          fontFamily: FONT_BODY,
          fontSize: 18,
          fontWeight: 300,
          lineHeight: 1.6,
          maxWidth: 400,
          marginBottom: 40,
        }}
      >
        Esta página no existe o fue movida.
      </p>
      <Link
        href="/"
        style={{
          background: '#F55A14',
          color: 'white',
          padding: '14px 32px',
          borderRadius: 12,
          textDecoration: 'none',
          fontFamily: FONT_HEADING,
          fontWeight: 700,
          fontSize: 15,
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}
