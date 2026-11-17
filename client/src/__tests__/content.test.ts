import { describe, expect, it } from "vitest";
import { featuredProjects, getNextProject, getProject, projects } from "@/content/projects";
import { about, capabilities, experience, highlights, intro, process } from "@/content/profile";
import { site } from "@/content/site";

/** Collects every string value in a nested structure. */
function strings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === "object") return Object.values(value).flatMap(strings);
  return [];
}

describe("project content", () => {
  it("has unique, URL-safe slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  });

  it("gives every project a visual, metrics and a written approach", () => {
    for (const p of projects) {
      expect(p.cover ?? p.diagram, `${p.slug} needs a cover or a diagram`).toBeTruthy();
      expect(p.metrics.length, p.slug).toBeGreaterThanOrEqual(2);
      expect(p.approach.length, p.slug).toBeGreaterThanOrEqual(1);
      expect(p.context.length, p.slug).toBeGreaterThanOrEqual(1);
      expect(p.outcome.length, p.slug).toBeGreaterThanOrEqual(1);
    }
  });

  it("leads the featured list with full-time product work", () => {
    expect(featuredProjects.length).toBeGreaterThanOrEqual(4);
    expect(featuredProjects[0].engagement).toBe("employment");
    expect(featuredProjects[1].engagement).toBe("employment");
  });

  it("uses https for all external project links", () => {
    for (const p of projects) for (const l of p.links ?? []) expect(l.href).toMatch(/^https:\/\//);
  });

  it("resolves lookups and wraps the next-project link", () => {
    expect(getProject("recurva")?.title).toBe("Recurva");
    expect(getProject("does-not-exist")).toBeUndefined();
    const last = projects[projects.length - 1];
    expect(getNextProject(last.slug).slug).toBe(projects[0].slug);
  });
});

describe("profile content", () => {
  it("keeps headline numbers positive so they can count up", () => {
    for (const h of highlights) expect(h.value).toBeGreaterThan(0);
  });

  it("keeps confidential internal details off the public site", () => {
    const text = strings([projects, experience, about, intro, capabilities]).join(" ");
    for (const term of ["TrueNAS", "Hioki", "Frigate", "52 IP", "Series A", "₹2"]) expect(text).not.toContain(term);
  });

  it("only references case studies that exist", () => {
    for (const item of experience) {
      for (const slug of item.relatedProjects ?? []) expect(getProject(slug), slug).toBeDefined();
    }
  });
});

describe("house style", () => {
  const all = strings([projects, experience, about, intro, process, capabilities, site]);

  it("contains no em dashes", () => {
    const offenders = all.filter((s) => s.includes("—"));
    expect(offenders).toEqual([]);
  });

  it("contains no emoji", () => {
    const offenders = all.filter((s) => /\p{Extended_Pictographic}/u.test(s));
    expect(offenders).toEqual([]);
  });
});
