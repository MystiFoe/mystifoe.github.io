import { getLogo } from "@/content/logos";
import { LogoAvatar } from "@/components/site/Logo";
import { Link } from "wouter";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { categoryLabels, getNextProject, getProject } from "@/content/projects";
import type { Project } from "@/content/types";
import { usePageMeta } from "@/lib/meta";
import { cn } from "@/lib/utils";
import { DeviceImage } from "@/components/site/DeviceFrame";
import { SystemDiagram } from "@/components/site/SystemDiagram";
import { ProjectPoster } from "@/components/site/ProjectPoster";
import { ButtonLink, Reveal } from "@/components/site/primitives";
import NotFoundPage from "./NotFoundPage";

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <Reveal>
      <section className="grid gap-6 border-t border-line py-14 lg:grid-cols-12 lg:gap-12">
        <h2 className="eyebrow pt-1 lg:col-span-3">{label}</h2>
        <div className="lg:col-span-9">{children}</div>
      </section>
    </Reveal>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="max-w-prose space-y-5 text-lg leading-relaxed text-fg-muted">
      {items.map((p) => (
        <p key={p.slice(0, 32)}>{p}</p>
      ))}
    </div>
  );
}

function SpecSheet({ project }: { project: Project }) {
  const rows: { label: string; value: ReactNode }[] = [
    { label: "Client", value: project.client },
    { label: "Engagement", value: project.engagementLabel },
    { label: "Year", value: project.year },
    { label: "Status", value: project.status },
    { label: "My role", value: project.role.join(", ") },
    {
      label: "Stack",
      value: (
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li key={s} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-fg-muted">
              {s}
            </li>
          ))}
        </ul>
      ),
    },
  ];
  return (
    <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {rows.map((r) => (
        <div key={r.label} className="bg-bg p-5">
          <dt className="eyebrow">{r.label}</dt>
          <dd className="mt-2 text-sm leading-relaxed text-fg">{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Gallery({ project }: { project: Project }) {
  const images = project.gallery ?? [];
  const browsers = images.filter((g) => g.frame === "browser");
  const phones = images.filter((g) => g.frame === "phone");
  if (!images.length) return null;
  return (
    <Reveal>
      <section className="border-t border-line py-14">
        <h2 className="eyebrow">Screens</h2>
        <div className={cn("mt-8 grid gap-8", phones.length && "lg:grid-cols-12")}>
          <div className={cn("space-y-8", phones.length && "lg:col-span-9")}>
            {browsers.map((img) => (
              <DeviceImage key={img.src} image={img} />
            ))}
          </div>
          {phones.length ? (
            <div className="mx-auto w-full max-w-[260px] space-y-8 lg:col-span-3 lg:max-w-none">
              {phones.map((img) => (
                <DeviceImage key={img.src} image={img} />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </Reveal>
  );
}

export default function CaseStudyPage({ slug }: { slug: string }) {
  const project = getProject(slug);
  usePageMeta({ title: project?.title ?? "Not found", description: project?.summary });
  if (!project) return <NotFoundPage />;
  const next = getNextProject(project.slug);

  return (
    <article>
      <header className="container-site pb-12 pt-10 sm:pt-16">
        <Link href="/work" className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All work
        </Link>
        <Reveal>
          {getLogo(project.client) ? (
            <LogoAvatar logo={getLogo(project.client)} className="mt-10" />
          ) : null}
          <p className="eyebrow mt-6">
            <span className={cn(project.engagement === "freelance" && "text-accent")}>{project.engagementLabel}</span>
            <span className="mx-2" aria-hidden>
              /
            </span>
            {project.categories.map((c) => categoryLabels[c]).join(", ")}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-fg-muted sm:text-xl">{project.tagline}</p>
          {project.links?.length ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((l, i) => (
                <ButtonLink key={l.href} href={l.href} variant={i === 0 ? "primary" : "secondary"} icon="external">
                  {l.label}
                </ButtonLink>
              ))}
            </div>
          ) : null}
        </Reveal>
      </header>

      <div className="container-site">
        <Reveal>
          {project.cover ? <DeviceImage image={project.cover} priority /> : <ProjectPoster project={project} />}
        </Reveal>

        <Reveal>
          <dl className="mt-12 grid gap-8 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="border-l border-line-strong pl-5">
                <dt className="sr-only">{m.label}</dt>
                <dd className="text-3xl font-medium tracking-tight text-fg sm:text-4xl">{m.value}</dd>
                <dd className="mt-2 text-sm leading-snug text-fg-subtle">{m.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal>
          <section aria-label="At a glance" className="mt-12 grid overflow-hidden rounded-2xl border border-line sm:grid-cols-3">
            {(
              [
                ["Problem", project.brief.problem],
                ["Decision", project.brief.decision],
                ["Result", project.brief.result],
              ] as const
            ).map(([label, text], i) => (
              <div key={label} className={`p-6 ${i > 0 ? "border-t border-line sm:border-l sm:border-t-0" : ""}`}>
                <p className="eyebrow">{label}</p>
                <p className="mt-3 text-base leading-relaxed text-fg">{text}</p>
              </div>
            ))}
          </section>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <SpecSheet project={project} />
          </Reveal>
        </div>

        <div className="mt-16">
          <Block label="The problem">
            <Paragraphs items={project.context} />
          </Block>

          <Block label="What I did">
            <ol className="space-y-10">
              {project.approach.map((step, i) => (
                <li key={step.title} className="grid gap-3 sm:grid-cols-[3rem_1fr]">
                  <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-medium">{step.title}</h3>
                    <p className="mt-2 max-w-prose text-base leading-relaxed text-fg-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Block>

          {project.diagram ? (
            <Reveal>
              <section className="border-t border-line py-14">
                <SystemDiagram diagram={project.diagram} />
              </section>
            </Reveal>
          ) : null}

          <Gallery project={project} />

          <Block label="Outcome">
            <Paragraphs items={project.outcome} />
          </Block>

          {project.productNotes.length ? (
            <Block label="Product decisions">
              <ul className="max-w-prose space-y-4">
                {project.productNotes.map((note) => (
                  <li key={note.slice(0, 32)} className="flex gap-4 text-base leading-relaxed text-fg-muted">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}
        </div>
      </div>

      <nav className="border-t border-line" aria-label="Next project">
        <Link href={`/work/${next.slug}`} className="group block">
          <div className="container-site flex items-center justify-between gap-6 py-14 sm:py-20">
            <div>
              <p className="eyebrow">Next project</p>
              <p className="mt-3 text-3xl font-medium tracking-tight transition-colors group-hover:text-accent sm:text-5xl">{next.title}</p>
              <p className="mt-3 max-w-xl text-sm text-fg-muted">{next.summary}</p>
            </div>
            <ArrowUpRight
              className="h-10 w-10 shrink-0 text-fg-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-fg"
              aria-hidden
            />
          </div>
        </Link>
      </nav>
    </article>
  );
}
