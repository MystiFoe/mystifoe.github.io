import { usePageMeta } from "@/lib/meta";
import { ButtonLink } from "@/components/site/primitives";

export default function NotFoundPage() {
  usePageMeta({ title: "Page not found" });
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl font-medium sm:text-5xl">This page doesn't exist.</h1>
      <p className="mt-4 max-w-md text-fg-muted">The link may be old, or the page may have moved. The work and contact pages are a good place to start.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/work">See the work</ButtonLink>
        <ButtonLink href="/" variant="secondary">
          Home
        </ButtonLink>
      </div>
    </section>
  );
}
