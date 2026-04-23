import { NextRequest, NextResponse } from 'next/server';
import type { ContactPayload } from '@/lib/types';
import { notifyServiceRequest } from '@/lib/notify';

const RATE_LIMIT = 5;
const WINDOW_MS  = 60_000;
const MAX_BODY_B = 8 * 1024; // 8 KB

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getClientIP(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();

  // Sweep expired entries every ~1 000 unique IPs to prevent unbounded growth
  if (rateLimitMap.size > 1_000) {
    for (const [k, v] of rateLimitMap) {
      if (now > v.resetAt) rateLimitMap.delete(k);
    }
  }

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

function validatePayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== 'object') return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.service     === 'string' && b.service.trim().length > 0 &&
    typeof b.name        === 'string' && b.name.trim().length >= 2 &&
    typeof b.phone       === 'string' && b.phone.replace(/\D/g, '').length >= 7 &&
    typeof b.barrio      === 'string' && b.barrio.trim().length > 0 &&
    typeof b.description === 'string' && b.description.trim().length > 0 &&
    (b.urgency === 'normal' || b.urgency === 'urgente')
  );
}

export async function POST(req: NextRequest) {
  // Body size guard — check header first, then actual body
  const contentLength = req.headers.get('content-length');
  if (contentLength && parseInt(contentLength, 10) > MAX_BODY_B) {
    return NextResponse.json({ error: 'Payload demasiado grande.' }, { status: 413 });
  }

  const ip = getClientIP(req);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Demasiadas solicitudes. Intenta en un momento.' },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    const text = await req.text();
    if (text.length > MAX_BODY_B) {
      return NextResponse.json({ error: 'Payload demasiado grande.' }, { status: 413 });
    }
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ error: 'JSON inválido.' }, { status: 400 });
  }

  if (!validatePayload(body)) {
    return NextResponse.json(
      { error: 'Datos inválidos. Revisa todos los campos.' },
      { status: 400 },
    );
  }

  await notifyServiceRequest(body);

  return NextResponse.json({ success: true }, { status: 200 });
}
