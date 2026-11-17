import { useMemo, useState } from "react";
import { categoryLabels, projects } from "@/content/projects";
import type { ProjectCategory } from "@/content/types";
import { usePageMeta } from "@/lib/meta";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ButtonLink, Reveal } from "@/components/site/primitives";
import { Tilt } from "@/components/site/motion";

type Filter = "all" | "freelance" | ProjectCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "freelance", label: "Independent" },
  ...(Object.keys(categoryLabels) as ProjectCategory[]).map((id) => ({ id, label: categoryLabels[id] })),
];

function matches(filter: Filter) {
  return (p: (typeof projects)[number]) => {
    if (filter === "all") return true;
    if (filter === "freelance") return p.engagement === "freelance";
    return p.categories.includes(filter);
  };
}

/** Fills the empty grid slot when the filtered list has an odd number of projects. */
function CtaTile() {
  return (
    <div className="relative flex aspect-[16/10] flex-col justify-end overflow-hidden rounded-xl border border-line bg-surface bg-grid p-8">
      <p className="eyebrow">Hiring?</p>
      <h2 className="mt-3 text-2xl font-medium">Want to see how I would work on your team?</h2>
      <p className="mt-2 max-w-sm text-fg-muted">Happy to walk through any of these in more depth, including the trade-offs.</p>
      <ButtonLink href="/contact" className="mt-6 self-start">
        Let's talk
      </ButtonLink>
    </div>
  );
}

export default function WorkPage() {
  usePageMeta({
    title: "Work",
    description: "Case studies of internal platforms, AI products, apps and websites built by Giritharan Mani, SDE II in Bengaluru.",
  });
  const [filter, setFilter] = useState<Filter>("all");
  const visible = useMemo(() => projects.filter(matches(filter)), [filter]);

  return (
    <>
      <section className="container-site pb-12 pt-16 sm:pt-24">
        <Reveal>
          <p className="eyebrow">Work</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-6xl">
            Products I have discovered, scoped, built and shipped.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
            Each case study covers the problem, the decisions I made, what I built and how it turned out. Full-time work comes first, then independent projects.
          </p>
        </Reveal>
      </section>

      <section className="sticky top-16 z-30 border-y border-line bg-bg/85 backdrop-blur-xl">
        <div className="container-site">
          <div role="tablist" aria-label="Filter projects" className="-mx-1 flex gap-1 overflow-x-auto py-3 [scrollbar-width:none]">
            {filters.map((f) => {
              const count = projects.filter(matches(f.id)).length;
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors",
                    active ? "bg-fg text-bg" : "text-fg-muted hover:bg-surface-2 hover:text-fg",
                  )}
                >
                  {f.label}
                  <span className={cn("font-mono text-[11px]", active ? "text-bg/60" : "text-fg-subtle")}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-site py-16 sm:py-20">
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal key={`${filter}-${p.slug}`} delay={(i % 2) * 0.05}>
              <Tilt>
                <ProjectCard project={p} priority={i < 2} />
              </Tilt>
            </Reveal>
          ))}
          {visible.length % 2 === 1 ? (
            <Reveal className="hidden md:block">
              <CtaTile />
            </Reveal>
          ) : null}
        </div>
      </section>

      <section className={cn("container-site pb-24", visible.length % 2 === 1 && "md:hidden")}>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-surface p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-2xl font-medium">Want to see how I would work on your team?</h2>
            <p className="mt-2 text-fg-muted">Happy to walk through any of these in more depth, including the trade-offs.</p>
          </div>
          <ButtonLink href="/contact">Let's talk</ButtonLink>
        </div>
      </section>
    </>
  );
}
