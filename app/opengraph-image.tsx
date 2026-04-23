import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'SOLFIX — Tu técnico de confianza';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const outfit = await readFile(join(process.cwd(), 'public/fonts/Outfit-Bold.ttf'));

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #040818 0%, #0D1A42 60%, #0a1230 100%)',
          padding: '64px 72px',
          fontFamily: 'Outfit, sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(20,98,245,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(20,98,245,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            display: 'flex',
          }}
        />

        {/* Top: logo badge + tagline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: 'linear-gradient(135deg, #1462F5, #0a3fa8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(20,98,245,0.4)',
            }}
          >
            <span style={{ color: 'white', fontSize: 28, fontWeight: 800 }}>SF</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 22, fontWeight: 400, letterSpacing: 2 }}>
            SOLFIX
          </span>
        </div>

        {/* Center: main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto', marginBottom: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <div style={{ width: 48, height: 5, background: '#F55A14', borderRadius: 3, display: 'flex' }} />
            <span style={{ color: '#F55A14', fontSize: 20, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' }}>
              Servicios del hogar
            </span>
          </div>
          <span
            style={{
              color: 'white',
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Tu técnico de{' '}
            <span style={{ color: '#1462F5' }}>confianza</span>
            {'\n'}donde estés
          </span>
          <span
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 26,
              fontWeight: 400,
              marginTop: 24,
              lineHeight: 1.4,
            }}
          >
            Plomeros · Electricistas · Cerrajeros · Verificados
          </span>
        </div>

        {/* Bottom: response time badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginTop: 'auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'rgba(245,90,20,0.12)',
              border: '1.5px solid rgba(245,90,20,0.3)',
              borderRadius: 50,
              padding: '12px 24px',
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F55A14', display: 'flex' }} />
            <span style={{ color: 'white', fontSize: 20, fontWeight: 600 }}>Respuesta en ~18 min</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'rgba(20,98,245,0.12)',
              border: '1.5px solid rgba(20,98,245,0.3)',
              borderRadius: 50,
              padding: '12px 24px',
            }}
          >
            <span style={{ color: 'white', fontSize: 20, fontWeight: 600 }}>solfix.co</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Outfit', data: outfit, style: 'normal', weight: 800 }],
    }
  );
}
