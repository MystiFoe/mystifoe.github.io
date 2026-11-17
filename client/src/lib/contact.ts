import { site } from "@/content/site";
import { buildEmailBody, emailSubject, type ContactInput } from "@shared/contact";
import { createLogger } from "./logger";

export {
  budgets,
  buildEmailBody,
  contactSchema,
  projectTypes,
  projectWithBudget,
  timelines,
  type ContactInput,
} from "@shared/contact";

const log = createLogger("contact");

export type SubmitResult = { status: "sent" } | { status: "mailto"; href: string } | { status: "error"; message: string };

/**
 * Where the form posts. Defaults to the site's own /api/contact function, which sends the
 * message through Resend. VITE_CONTACT_ENDPOINT can point it at another JSON form backend.
 */
const ENDPOINT: string = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact";

export function buildMailto(input: ContactInput): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(emailSubject(input))}&body=${encodeURIComponent(buildEmailBody(input))}`;
}

export async function submitContact(input: ContactInput, endpoint: string = ENDPOINT): Promise<SubmitResult> {
  if (input.website) {
    log.warn("Honeypot triggered, dropping submission");
    return { status: "sent" };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(input),
    });
    if (response.ok) return { status: "sent" };

    // Email delivery is not configured yet: let the visitor send from their own mail app instead.
    if (response.status === 503 || response.status === 404) {
      log.warn("Contact endpoint unavailable, using mail fallback", { status: response.status });
      return { status: "mailto", href: buildMailto(input) };
    }
    if (response.status === 429) {
      return { status: "error", message: "Too many messages in a short time. Please try again in a few minutes, or email me directly." };
    }
    log.error("Contact endpoint rejected submission", { status: response.status });
    return { status: "error", message: "The message could not be sent. Please email me directly." };
  } catch (err) {
    log.error("Contact submission failed", { error: err instanceof Error ? err.message : String(err) });
    return { status: "error", message: "Network error. Please try again or email me directly." };
  }
}
