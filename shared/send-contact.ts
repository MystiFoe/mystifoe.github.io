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

export function buildEmailHtml(input: ContactInput): string {
  const rows: [string, string | undefined][] = [
    ["Name", input.name],
    ["Email", input.email],
    ["Company", input.company || undefined],
    ["Looking for", input.projectType],
    ["Budget", input.budget],
    ["Timeline", input.timeline],
  ];
  const table = rows
    .filter((r): r is [string, string] => Boolean(r[1]))
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 16px 4px 0;color:#6b7280;vertical-align:top">${k}</td><td style="padding:4px 0;color:#111827">${escapeHtml(v)}</td></tr>`,
    )
    .join("");
  const message = escapeHtml(input.message).replace(/\n/g, "<br>");
  return `<div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.5">
<p style="margin:0 0 12px;color:#6b7280">New message from your portfolio contact form.</p>
<table style="border-collapse:collapse">${table}</table>
<div style="margin-top:16px;padding:12px 16px;border-left:3px solid #3b82f6;background:#f9fafb;color:#111827">${message}</div>
<p style="margin-top:16px;color:#9ca3af;font-size:12px">Reply to this email to answer ${escapeHtml(input.name)} directly.</p>
</div>`;
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
