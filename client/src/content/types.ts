/**
 * Content model for the portfolio.
 * Components render these shapes and never hard-code copy, so updating the
 * site means editing the files in this folder only.
 */

export type ProjectCategory = "mobile" | "web" | "platform" | "ai";

export type EngagementType = "freelance" | "employment";

export interface ImageAsset {
  src: string;
  alt: string;
  /** Controls which device frame the image is rendered in. */
  frame: "browser" | "phone";
  /** Optional URL shown in the browser frame address bar. */
  url?: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudyStep {
  title: string;
  body: string;
}

/** A schematic panel for projects without public visuals (internal tools, unreleased apps). */
export interface SystemDiagram {
  title: string;
  nodes: { label: string; detail: string }[];
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  engagement: EngagementType;
  /** Shown next to the client name, e.g. "Freelance" or "At Pravaig Dynamics". */
  engagementLabel: string;
  categories: ProjectCategory[];
  year: string;
  status: string;
  /** One sentence used on cards. */
  summary: string;
  /** Short line under the case study title. */
  tagline: string;
  role: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  cover?: ImageAsset;
  gallery?: ImageAsset[];
  diagram?: SystemDiagram;
  metrics: Metric[];
  context: string[];
  approach: CaseStudyStep[];
  outcome: string[];
  /** The product-side view: scoping, trade-offs, decisions. */
  productNotes: string[];
  featured: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  points: string[];
  relatedProjects?: string[];
}

export interface Service {
  title: string;
  body: string;
  items: string[];
}

export interface ProcessStep {
  index: string;
  title: string;
  body: string;
  deliverable: string;
}
