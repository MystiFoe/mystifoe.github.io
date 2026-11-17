import { z } from "zod";
import { site } from "@/content/site";
import { createLogger } from "./logger";

const log = createLogger("contact");

export const projectTypes = ["Software engineering role", "Product role", "Contract or freelance project", "Something else"] as const;

/** Budget only applies to project work, so the form shows it for this option alone. */
export const projectWithBudget: (typeof projectTypes)[number] = "Contract or freelance project";
export const budgets = ["Under ₹50K", "₹50K to ₹1.5L", "₹1.5L to ₹5L", "Above ₹5L", "Not sure yet"] as const;
export const timelines = ["As soon as possible", "Within a month", "In one to three months", "Flexible"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email address"),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z.enum(projectTypes, { errorMap: () => ({ message: "Choose what this is about" }) }),
  budget: z.enum(budgets).optional(),
  timeline: z.enum(timelines).optional(),
  message: z.string().trim().min(20, "A couple of sentences helps me reply properly"),
  /** Honeypot. Real visitors never see or fill this field. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type SubmitResult = { status: "sent" } | { status: "mailto"; href: string } | { status: "error"; message: string };

/**
 * Endpoint for a form backend that accepts JSON (Formspree, Web3Forms, a serverless function).
 * Set VITE_CONTACT_ENDPOINT in Vercel project settings. Without it the form falls back to
 * opening the visitor's email client with the message pre-filled, so nothing is ever lost.
 */
const ENDPOINT: string | undefined = import.meta.env.VITE_CONTACT_ENDPOINT || undefined;

export function buildEmailBody(input: ContactInput): string {
  const lines = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    input.company ? `Company: ${input.company}` : null,
    `Looking for: ${input.projectType}`,
    input.budget ? `Budget: ${input.budget}` : null,
    input.timeline ? `Timeline: ${input.timeline}` : null,
    "",
    input.message,
  ];
  return lines.filter((l): l is string => l !== null).join("\n");
}

export function buildMailto(input: ContactInput): string {
  const subject = `${input.projectType} enquiry from ${input.name}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildEmailBody(input))}`;
}

export async function submitContact(input: ContactInput): Promise<SubmitResult> {
  if (input.website) {
    log.warn("Honeypot triggered, dropping submission");
    return { status: "sent" };
  }

  if (!ENDPOINT) {
    return { status: "mailto", href: buildMailto(input) };
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        company: input.company,
        projectType: input.projectType,
        budget: input.budget,
        timeline: input.timeline,
        message: input.message,
        _subject: `${input.projectType} enquiry from ${input.name}`,
      }),
    });
    if (!response.ok) {
      log.error("Contact endpoint rejected submission", { status: response.status });
      return { status: "error", message: "The message could not be sent. Please email me directly." };
    }
    return { status: "sent" };
  } catch (err) {
    log.error("Contact submission failed", { error: err instanceof Error ? err.message : String(err) });
    return { status: "error", message: "Network error. Please try again or email me directly." };
  }
}
