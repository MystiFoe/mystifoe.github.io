import { describe, expect, it } from "vitest";
import { buildEmailBody, buildMailto, contactSchema, submitContact, type ContactInput } from "@/lib/contact";
import { site } from "@/content/site";

const valid: ContactInput = {
  name: "Asha Rao",
  email: "asha@example.com",
  company: "",
  projectType: "Contract or freelance project",
  budget: "₹50K to ₹1.5L",
  timeline: undefined,
  message: "We need a booking app for our clinic with WhatsApp reminders.",
  website: "",
};

describe("contact schema", () => {
  it("accepts a complete enquiry", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects a bad email and a one-line message", () => {
    const result = contactSchema.safeParse({ ...valid, email: "nope", message: "hi" });
    expect(result.success).toBe(false);
    if (!result.success) {
      const fields = result.error.issues.map((i) => i.path[0]);
      expect(fields).toContain("email");
      expect(fields).toContain("message");
    }
  });

  it("requires a project type", () => {
    const { projectType: _omit, ...rest } = valid;
    expect(contactSchema.safeParse(rest).success).toBe(false);
  });
});

describe("mail fallback", () => {
  it("includes only the fields that were filled in", () => {
    const body = buildEmailBody(valid);
    expect(body).toContain("Looking for: Contract or freelance project");
    expect(body).toContain("Budget: ₹50K to ₹1.5L");
    expect(body).not.toContain("Company:");
    expect(body).not.toContain("Timeline:");
  });

  it("builds an encoded mailto link to the site address", () => {
    const href = buildMailto(valid);
    expect(href.startsWith(`mailto:${site.email}?subject=`)).toBe(true);
    expect(href).not.toContain(" ");
  });

  it("falls back to mailto when no endpoint is configured", async () => {
    const result = await submitContact(valid);
    expect(result.status).toBe("mailto");
  });

  it("silently drops honeypot submissions", async () => {
    const result = await submitContact({ ...valid, website: "spam.example" });
    expect(result.status).toBe("sent");
  });
});
