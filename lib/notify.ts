import { Resend } from 'resend';

async function sendTelegram(text: string): Promise<void> {
  const token  = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
  });
}

async function sendEmail(subject: string, html: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to     = process.env.NOTIFY_EMAIL;
  const from   = process.env.RESEND_FROM ?? 'SOLFIX <onboarding@resend.dev>';
  if (!apiKey || !to) return;

  const resend = new Resend(apiKey);
  await resend.emails.send({ from, to, subject, html });
}

export async function notifyServiceRequest(data: {
  service: string;
  name: string;
  phone: string;
  barrio: string;
  description: string;
  urgency: 'normal' | 'urgente';
}): Promise<void> {
  const urgencyLabel = data.urgency === 'urgente' ? '🔴 URGENTE' : '🟡 Normal';

  const telegram =
    `🔧 *Nueva solicitud SOLFIX*\n\n` +
    `*Servicio:* ${data.service}\n` +
    `*Nombre:* ${data.name}\n` +
    `*Teléfono:* ${data.phone}\n` +
    `*Barrio:* ${data.barrio}\n` +
    `*Descripción:* ${data.description}\n` +
    `*Urgencia:* ${urgencyLabel}`;

  const emailHtml =
    `<h2>🔧 Nueva solicitud SOLFIX</h2>` +
    `<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:15px">` +
    `<tr><td style="padding:8px;font-weight:bold">Servicio</td><td style="padding:8px">${data.service}</td></tr>` +
    `<tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Nombre</td><td style="padding:8px">${data.name}</td></tr>` +
    `<tr><td style="padding:8px;font-weight:bold">Teléfono</td><td style="padding:8px">${data.phone}</td></tr>` +
    `<tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Barrio</td><td style="padding:8px">${data.barrio}</td></tr>` +
    `<tr><td style="padding:8px;font-weight:bold">Descripción</td><td style="padding:8px">${data.description}</td></tr>` +
    `<tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Urgencia</td><td style="padding:8px">${urgencyLabel}</td></tr>` +
    `</table>`;

  await Promise.allSettled([
    sendTelegram(telegram),
    sendEmail(`[SOLFIX] Nueva solicitud — ${data.service}`, emailHtml),
  ]);
}

export async function notifyTechRegistration(data: {
  name: string;
  phone: string;
  specialty: string;
  barrio: string;
  experience: string;
}): Promise<void> {
  const telegram =
    `👷 *Nuevo técnico quiere unirse a SOLFIX*\n\n` +
    `*Nombre:* ${data.name}\n` +
    `*Teléfono:* ${data.phone}\n` +
    `*Especialidad:* ${data.specialty}\n` +
    `*Zona:* ${data.barrio}\n` +
    `*Experiencia:* ${data.experience || 'No especificada'}`;

  const emailHtml =
    `<h2>👷 Nuevo técnico — SOLFIX</h2>` +
    `<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:15px">` +
    `<tr><td style="padding:8px;font-weight:bold">Nombre</td><td style="padding:8px">${data.name}</td></tr>` +
    `<tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Teléfono</td><td style="padding:8px">${data.phone}</td></tr>` +
    `<tr><td style="padding:8px;font-weight:bold">Especialidad</td><td style="padding:8px">${data.specialty}</td></tr>` +
    `<tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Zona</td><td style="padding:8px">${data.barrio}</td></tr>` +
    `<tr><td style="padding:8px;font-weight:bold">Experiencia</td><td style="padding:8px">${data.experience || 'No especificada'}</td></tr>` +
    `</table>`;

  await Promise.allSettled([
    sendTelegram(telegram),
    sendEmail(`[SOLFIX] Nuevo técnico — ${data.name} (${data.specialty})`, emailHtml),
  ]);
}
