import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/types";
import { categoryLabels } from "@/content/projects";
import { cn } from "@/lib/utils";
import { BrowserFrame } from "./DeviceFrame";
import { SystemDiagram } from "./SystemDiagram";
import { Tilt } from "./motion";
import { LogoAvatar } from "./Logo";
import { getLogo } from "@/content/logos";

function ProjectVisual({ project, priority }: { project: Project; priority?: boolean }) {
  if (project.cover) {
    return <BrowserFrame image={project.cover} priority={priority} className="transition-transform duration-500 group-hover:-translate-y-1" />;
  }
  if (project.diagram) {
    return (
      <SystemDiagram
        diagram={project.diagram}
        compact
        className="aspect-[16/10] transition-transform duration-500 group-hover:-translate-y-1"
      />
    );
  }
  return null;
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle">
      <span className={cn(project.engagement === "freelance" && "text-accent")}>{project.engagementLabel}</span>
      <span aria-hidden>/</span>
      <span>{project.year}</span>
      <span aria-hidden>/</span>
      <span>{project.categories.map((c) => categoryLabels[c]).join(", ")}</span>
    </div>
  );
}

/** Standard grid card. */
export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block focus-visible:outline-offset-8">
      <ProjectVisual project={project} priority={priority} />
      <div className="mt-6">
        <ProjectMeta project={project} />
        <h3 className="mt-3 flex items-center gap-2 text-xl font-medium">
          {project.title}
          <ArrowUpRight
            className="h-4 w-4 text-fg-subtle transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
            aria-hidden
          />
        </h3>
        <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-fg-muted">{project.summary}</p>
      </div>
    </Link>
  );
}

/** Wide two-column card used for the lead projects on the home page. */
export function ProjectFeature({ project, reverse = false, priority }: { project: Project; reverse?: boolean; priority?: boolean }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group grid items-center gap-8 focus-visible:outline-offset-8 lg:grid-cols-12 lg:gap-12"
    >
      <Tilt className={cn("lg:col-span-7", reverse && "lg:order-2")} max={4}>
        <ProjectVisual project={project} priority={priority} />
      </Tilt>
      <div className={cn("lg:col-span-5", reverse && "lg:order-1")}>
        {getLogo(project.client) ? <LogoAvatar logo={getLogo(project.client)} className="mb-5" /> : null}
        <ProjectMeta project={project} />
        <h3 className="mt-4 text-2xl font-medium sm:text-3xl">{project.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-fg-muted">{project.summary}</p>
        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6">
          {project.metrics.slice(0, 2).map((m) => (
            <div key={m.label}>
              <dt className="sr-only">{m.label}</dt>
              <dd className="text-2xl font-medium tracking-tight text-fg">{m.value}</dd>
              <dd className="mt-1 text-xs leading-snug text-fg-subtle">{m.label}</dd>
            </div>
          ))}
        </dl>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-fg">
          Read the case study
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
