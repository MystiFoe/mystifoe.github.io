/**
 * Server-side handling of a contact form submission: validate, rate limit, send through Resend.
 * Kept free of any framework so it can be unit tested with a fake fetch and fake config.
 */
import { buildEmailBody, contactSchema, emailSubject, type ContactInput } from "./contact.js";

export interface ContactConfig {
  /** Resend API key. When missing, the function reports itself as not configured. */
  apiKey?: string;
  /** Inbox that receives portfolio messages. */
  to: string;
  /** Sender. Until a domain is verified in Resend this must be onboarding@resend.dev. */
  from: string;
}

export interface ContactResponse {
  status: number;
  body: { ok: boolean; error?: string; fields?: string[] };
}

type Fetch = typeof fetch;

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

/**
 * Best-effort limit per client within one warm function instance.
 * It stops a single visitor hammering the form; Resend's own limits cap everything else.
 */
export function isRateLimited(clientId: string, now: number = Date.now()): boolean {
  const recent = (hits.get(clientId) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    hits.set(clientId, recent);
    return true;
  }
  recent.push(now);
  hits.set(clientId, recent);
  return false;
}

export function resetRateLimits(): void {
  hits.clear();
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

/** Accent colour per enquiry type, so role enquiries stand out in the inbox at a glance. */
const typeColour: Record<ContactInput["projectType"], string> = {
  "Software engineering role": "#2563eb",
  "Product role": "#7c3aed",
  "Contract or freelance project": "#0d9488",
  "Something else": "#475569",
};

function formatIst(date: Date): string {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

/**
 * Notification email for the site owner. Table-based layout with inline styles,
 * because that is what renders consistently across Gmail, Outlook and phone mail apps.
 */
export function buildEmailHtml(input: ContactInput, receivedAt: Date = new Date()): string {
  const colour = typeColour[input.projectType];
  const name = escapeHtml(input.name);
  const email = escapeHtml(input.email);
  const company = input.company ? escapeHtml(input.company) : "";
  const firstName = escapeHtml(input.name.split(/\s+/)[0] ?? input.name);
  const message = escapeHtml(input.message).replace(/\n/g, "<br>");
  const replySubject = encodeURIComponent(`Re: ${emailSubject(input)}`);
  const preheader = escapeHtml(input.message.slice(0, 110));

  const details: [string, string | undefined][] = [
    ["Email", `<a href="mailto:${email}" style="color:#2563eb;text-decoration:none">${email}</a>`],
    ["Company", company || undefined],
    ["Budget", input.budget ? escapeHtml(input.budget) : undefined],
    ["Timeline", input.timeline ? escapeHtml(input.timeline) : undefined],
    ["Received", formatIst(receivedAt) + " IST"],
  ];
  const detailRows = details
    .filter((d): d is [string, string] => Boolean(d[1]))
    .map(
      ([k, v]) => `<tr>
        <td style="padding:6px 0;width:96px;color:#6b7280;font-size:13px;vertical-align:top">${k}</td>
        <td style="padding:6px 0;color:#111827;font-size:14px">${v}</td>
      </tr>`,
    )
    .join("");

  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f3f4f6">
<span style="display:none;max-height:0;overflow:hidden;opacity:0">${preheader}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 12px">
  <tr><td align="center">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;font-family:Arial,Helvetica,sans-serif">
      <tr><td style="height:4px;background:linear-gradient(90deg,#3b82f6,#8b5cf6,#14b8a6);background-color:#3b82f6"></td></tr>
      <tr><td style="padding:24px 28px 8px">
        <p style="margin:0;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af">Portfolio enquiry</p>
        <span style="display:inline-block;margin-top:12px;padding:4px 10px;border-radius:999px;background:${colour}14;color:${colour};font-size:12px;font-weight:bold">${escapeHtml(input.projectType)}</span>
        <h1 style="margin:14px 0 2px;font-size:22px;line-height:1.3;color:#111827">${name}</h1>
        ${company ? `<p style="margin:0;font-size:14px;color:#6b7280">${company}</p>` : ""}
      </td></tr>
      <tr><td style="padding:16px 28px 0">
        <div style="padding:16px 18px;border-radius:10px;background:#f9fafb;border-left:3px solid ${colour};color:#111827;font-size:15px;line-height:1.6">${message}</div>
      </td></tr>
      <tr><td style="padding:18px 28px 4px">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">${detailRows}</table>
      </td></tr>
      <tr><td style="padding:18px 28px 26px">
        <a href="mailto:${email}?subject=${replySubject}" style="display:inline-block;padding:11px 20px;border-radius:999px;background:#111827;color:#ffffff;font-size:14px;font-weight:bold;text-decoration:none">Reply to ${firstName}</a>
      </td></tr>
      <tr><td style="padding:14px 28px;border-top:1px solid #f3f4f6;color:#9ca3af;font-size:12px">
        Sent from the contact form on giritharanmani-portfolio.vercel.app. Pressing Reply answers ${name} directly.
      </td></tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

export async function handleContact(
  raw: unknown,
  clientId: string,
  config: ContactConfig,
  fetchImpl: Fetch = fetch,
): Promise<ContactResponse> {
  if (!config.apiKey) {
    return { status: 503, body: { ok: false, error: "Email delivery is not configured" } };
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fields = Array.from(new Set(parsed.error.issues.map((i) => String(i.path[0]))));
    return { status: 400, body: { ok: false, error: "Invalid submission", fields } };
  }
  const input = parsed.data;

  // Bots fill hidden fields. Pretend it worked so they learn nothing.
  if (input.website) return { status: 200, body: { ok: true } };

  if (isRateLimited(clientId)) {
    return { status: 429, body: { ok: false, error: "Too many messages, please try again later" } };
  }

  let response: Response;
  try {
    response = await fetchImpl("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${config.apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        reply_to: input.email,
        subject: emailSubject(input),
        text: buildEmailBody(input),
        html: buildEmailHtml(input),
      }),
    });
  } catch (err) {
    console.error(JSON.stringify({ scope: "contact", level: "error", message: "Resend request failed", error: String(err) }));
    return { status: 502, body: { ok: false, error: "Email service unreachable" } };
  }

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error(
      JSON.stringify({ scope: "contact", level: "error", message: "Resend rejected email", status: response.status, detail: detail.slice(0, 300) }),
    );
    return { status: 502, body: { ok: false, error: "Email could not be sent" } };
  }

  console.info(JSON.stringify({ scope: "contact", level: "info", message: "Contact email sent", projectType: input.projectType }));
  return { status: 200, body: { ok: true } };
}
