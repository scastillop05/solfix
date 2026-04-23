import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
  const outfit = await readFile(join(process.cwd(), 'public/fonts/Outfit-Bold.ttf'));

  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1462F5, #0a3fa8)',
        }}
      >
        <span
          style={{
            color: 'white',
            fontSize: 80,
            fontWeight: 800,
            fontFamily: 'Outfit',
            letterSpacing: -2,
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
