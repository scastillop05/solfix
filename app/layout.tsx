import type { Metadata } from 'next';
import { Outfit, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GA_ID } from '@/lib/gtag';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://solfix.co';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SOLFIX — Tu técnico de confianza',
    template: '%s | SOLFIX',
  },
  description:
    'Plomeros, electricistas, cerrajeros y más — verificados, calificados y a un clic de distancia. Servicio el mismo día.',
  keywords: [
    'técnico a domicilio',
    'electricista a domicilio',
    'plomero a domicilio',
    'cerrajero a domicilio',
    'servicios del hogar',
    'SOLFIX',
  ],
  authors: [{ name: 'SOLFIX' }],
  creator: 'SOLFIX',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteUrl,
    siteName: 'SOLFIX',
    title: 'SOLFIX — Tu técnico de confianza',
    description:
      'Plomeros, electricistas, cerrajeros y más — verificados y a un clic de distancia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOLFIX — Tu técnico de confianza',
    description: 'Plomeros, electricistas, cerrajeros y más. Servicio el mismo día.',
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
