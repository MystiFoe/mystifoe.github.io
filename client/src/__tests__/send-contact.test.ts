import { beforeEach, describe, expect, it, vi } from "vitest";
import { buildEmailHtml, handleContact, isRateLimited, resetRateLimits } from "@shared/send-contact";
import type { ContactInput } from "@shared/contact";

const valid: ContactInput = {
  name: "Asha Rao",
  email: "asha@example.com",
  company: "Acme",
  projectType: "Software engineering role",
  message: "We are hiring an SDE II for our platform team and liked your work.",
  website: "",
};

const config = { apiKey: "test-key", to: "owner@example.com", from: "Portfolio <onboarding@resend.dev>" };
const ok = () => vi.fn(async () => new Response('{"id":"1"}', { status: 200 }));

describe("handleContact", () => {
  beforeEach(() => resetRateLimits());

  it("reports not configured without an API key, so the form can fall back", async () => {
    const result = await handleContact(valid, "1.1.1.1", { ...config, apiKey: undefined }, ok());
    expect(result.status).toBe(503);
  });

  it("rejects invalid input and names the bad fields", async () => {
    const send = ok();
    const result = await handleContact({ ...valid, email: "nope", message: "hi" }, "1.1.1.1", config, send);
    expect(result.status).toBe(400);
    expect(result.body.fields).toEqual(expect.arrayContaining(["email", "message"]));
    expect(send).not.toHaveBeenCalled();
  });

  it("sends through Resend with reply-to set to the visitor", async () => {
    const send = ok();
    const result = await handleContact(valid, "1.1.1.1", config, send);
    expect(result.status).toBe(200);
    const [url, init] = send.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://api.resend.com/emails");
    expect((init.headers as Record<string, string>).Authorization).toBe("Bearer test-key");
    const payload = JSON.parse(String(init.body));
    expect(payload.to).toEqual(["owner@example.com"]);
    expect(payload.reply_to).toBe("asha@example.com");
    expect(payload.subject).toBe("Software engineering role enquiry from Asha Rao");
  });

  it("drops honeypot submissions without sending", async () => {
    const send = ok();
    const result = await handleContact({ ...valid, website: "spam" }, "1.1.1.1", config, send);
    expect(result.status).toBe(400);
    expect(send).not.toHaveBeenCalled();
  });

  it("returns 502 when Resend rejects the email", async () => {
    const send = vi.fn(async () => new Response("bad", { status: 422 }));
    const result = await handleContact(valid, "1.1.1.1", config, send);
    expect(result.status).toBe(502);
  });

  it("rate limits a single client", async () => {
    for (let i = 0; i < 5; i++) expect(isRateLimited("2.2.2.2", 1000 + i)).toBe(false);
    expect(isRateLimited("2.2.2.2", 2000)).toBe(true);
    expect(isRateLimited("3.3.3.3", 2000)).toBe(false);
  });
});

describe("buildEmailHtml", () => {
  it("escapes visitor input", () => {
    const html = buildEmailHtml({ ...valid, name: "<script>x</script>", message: "Hi <b>there</b>, line one\nline two" });
    expect(html).not.toContain("<script>");
    expect(html).toContain("&lt;script&gt;");
    expect(html).toContain("line one<br>line two");
  });
});
