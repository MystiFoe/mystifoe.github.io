import { useEffect } from "react";
import { site } from "@/content/site";

interface PageMeta {
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = `${site.name} | ${site.role}`;

function setMeta(selector: string, attr: string, value: string): void {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/** Sets the document title and description for client-side routes. */
export function usePageMeta({ title, description }: PageMeta): void {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : DEFAULT_TITLE;
    document.title = fullTitle;
    setMeta('meta[property="og:title"]', "content", fullTitle);
    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
    }
  }, [title, description]);
}
