/**
 * Contact form contract shared by the browser form and the /api/contact function,
 * so both sides validate a message with exactly the same rules.
 */
import { z } from "zod";

export const projectTypes = ["Software engineering role", "Product role", "Contract or freelance project", "Something else"] as const;

/** Budget only applies to project work, so the form shows it for this option alone. */
export const projectWithBudget: (typeof projectTypes)[number] = "Contract or freelance project";
export const budgets = ["Under ₹50K", "₹50K to ₹1.5L", "₹1.5L to ₹5L", "Above ₹5L", "Not sure yet"] as const;
export const timelines = ["As soon as possible", "Within a month", "In one to three months", "Flexible"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z.enum(projectTypes, { errorMap: () => ({ message: "Choose what this is about" }) }),
  budget: z.enum(budgets).optional(),
  timeline: z.enum(timelines).optional(),
  message: z.string().trim().min(20, "A couple of sentences helps me reply properly").max(5000),
  /** Honeypot. Real visitors never see or fill this field. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function emailSubject(input: Pick<ContactInput, "projectType" | "name" | "company">): string {
  const who = input.company ? `${input.name}, ${input.company}` : input.name;
  return `Portfolio: ${input.projectType} from ${who}`;
}

/** Plain-text summary of a message, used for the email body and the mailto fallback. */
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
