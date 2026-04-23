import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default async function Icon() {
  const outfit = await readFile(join(process.cwd(), 'public/fonts/Outfit-Bold.ttf'));

  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1462F5, #0a3fa8)',
          borderRadius: 7,
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: 14,
            fontWeight: 800,
            fontFamily: 'Outfit',
            letterSpacing: -0.5,
          }}
        >
          SF
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Outfit', data: outfit, style: 'normal', weight: 800 }],
    }
  );
}
