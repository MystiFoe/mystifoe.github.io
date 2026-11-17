/**
 * Vercel serverless function behind the portfolio contact form.
 *
 * Environment variables (Vercel, Project Settings, Environment Variables):
 *   RESEND_API_KEY  required  Resend API key. Never commit it.
 *   CONTACT_TO      optional  Inbox for messages. Defaults to giritharanmani1@gmail.com.
 *   CONTACT_FROM    optional  Sender. Defaults to Resend's test sender until a domain is verified.
 */
import { handleContact } from "../shared/send-contact.js";

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });

export async function POST(request: Request): Promise<Response> {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json(400, { ok: false, error: "Body must be JSON" });
  }

  const clientId = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const result = await handleContact(payload, clientId, {
    apiKey: process.env.RESEND_API_KEY,
    to: process.env.CONTACT_TO || "giritharanmani1@gmail.com",
    from: process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>",
  });
  return json(result.status, result.body);
}

export function GET(): Response {
  return json(405, { ok: false, error: "Use POST" });
}
