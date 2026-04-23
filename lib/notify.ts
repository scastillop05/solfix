import { Resend } from 'resend';

async function appendToSheet(payload: Record<string, string>): Promise<void> {
  const url = process.env.SHEETS_WEBHOOK_URL;
  if (!url) return;

  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

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
  address: string;
  description: string;
  urgency: 'normal' | 'urgente';
}): Promise<void> {
  const urgencyLabel = data.urgency === 'urgente' ? '🔴 URGENTE' : '🟡 Normal';

  const telegram =
    `🔧 *Nueva solicitud SOLFIX*\n\n` +
    `*Servicio:* ${data.service}\n` +
    `*Nombre:* ${data.name}\n` +
    `*Teléfono:* ${data.phone}\n` +
    `*Dirección:* ${data.address}\n` +
    `*Descripción:* ${data.description}\n` +
    `*Urgencia:* ${urgencyLabel}`;

  const emailHtml =
    `<h2>🔧 Nueva solicitud SOLFIX</h2>` +
    `<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:15px">` +
    `<tr><td style="padding:8px;font-weight:bold">Servicio</td><td style="padding:8px">${data.service}</td></tr>` +
    `<tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Nombre</td><td style="padding:8px">${data.name}</td></tr>` +
    `<tr><td style="padding:8px;font-weight:bold">Teléfono</td><td style="padding:8px">${data.phone}</td></tr>` +
    `<tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Dirección</td><td style="padding:8px">${data.address}</td></tr>` +
    `<tr><td style="padding:8px;font-weight:bold">Descripción</td><td style="padding:8px">${data.description}</td></tr>` +
    `<tr style="background:#f5f5f5"><td style="padding:8px;font-weight:bold">Urgencia</td><td style="padding:8px">${urgencyLabel}</td></tr>` +
    `</table>`;

  await Promise.allSettled([
    sendTelegram(telegram),
    sendEmail(`[SOLFIX] Nueva solicitud — ${data.service}`, emailHtml),
    appendToSheet({
      type:        'solicitud',
      service:     data.service,
      name:        data.name,
      phone:       data.phone,
      address:     data.address,
      description: data.description,
      urgency:     data.urgency,
    }),
  ]);
}

export async function notifyTechRegistration(data: {
  type?: string;
  name?: string;
  phone: string;
  specialty?: string;
  barrio?: string;
  experience?: string;
  companyName?: string;
  nit?: string;
  services?: string;
  coverage?: string;
}): Promise<void> {
  const isEmpresa = data.type === 'empresa';

  const telegram = isEmpresa
    ? `[EMPRESA] *Nueva empresa quiere ser aliada de SOLFIX*\n\n` +
      `*Empresa:* ${data.companyName}\n` +
      `*NIT/RUT:* ${data.nit || 'No indicado'}\n` +
      `*WhatsApp:* ${data.phone}\n` +
      `*Contacto:* ${data.name || 'No indicado'}\n` +
      `*Servicios:* ${data.services}\n` +
      `*Cobertura:* ${data.coverage}`
    : `[TECNICO] *Nuevo técnico quiere unirse a SOLFIX*\n\n` +
      `*Nombre:* ${data.name}\n` +
      `*Teléfono:* ${data.phone}\n` +
      `*Especialidad:* ${data.specialty}\n` +
      `*Zona:* ${data.barrio}\n` +
      `*Experiencia:* ${data.experience || 'No especificada'}`;

  const rows = isEmpresa
    ? [
        ['Empresa',   data.companyName ?? ''],
        ['NIT/RUT',   data.nit || 'No indicado'],
        ['WhatsApp',  data.phone],
        ['Contacto',  data.name || 'No indicado'],
        ['Servicios', data.services ?? ''],
        ['Cobertura', data.coverage ?? ''],
      ]
    : [
        ['Nombre',       data.name ?? ''],
        ['Teléfono',     data.phone],
        ['Especialidad', data.specialty ?? ''],
        ['Zona',         data.barrio ?? ''],
        ['Experiencia',  data.experience || 'No especificada'],
      ];

  const emailHtml =
    `<h2>${isEmpresa ? 'Nueva empresa aliada' : 'Nuevo técnico'} — SOLFIX</h2>` +
    `<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:15px">` +
    rows.map(([k, v], i) =>
      `<tr${i % 2 ? ' style="background:#f5f5f5"' : ''}><td style="padding:8px;font-weight:bold">${k}</td><td style="padding:8px">${v}</td></tr>`
    ).join('') +
    `</table>`;

  const subject = isEmpresa
    ? `[SOLFIX] Nueva empresa aliada — ${data.companyName}`
    : `[SOLFIX] Nuevo técnico — ${data.name} (${data.specialty})`;

  const sheetPayload: Record<string, string> = isEmpresa
    ? {
        type:        'aliado',
        aliadoType:  'empresa',
        companyName: data.companyName ?? '',
        nit:         data.nit ?? '',
        phone:       data.phone,
        name:        data.name ?? '',
        services:    data.services ?? '',
        coverage:    data.coverage ?? '',
      }
    : {
        type:       'aliado',
        aliadoType: 'independiente',
        name:       data.name ?? '',
        phone:      data.phone,
        specialty:  data.specialty ?? '',
        barrio:     data.barrio ?? '',
        experience: data.experience ?? '',
      };

  await Promise.allSettled([
    sendTelegram(telegram),
    sendEmail(subject, emailHtml),
    appendToSheet(sheetPayload),
  ]);
}
