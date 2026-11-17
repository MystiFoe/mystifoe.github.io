import { ArrowUpRight, Code2, Compass, Sparkles, type LucideIcon } from "lucide-react";
import { clientNames, primaryCta, site } from "@/content/site";
import { featuredProjects } from "@/content/projects";
import { about, capabilities, experience, highlights, intro, marquee, process } from "@/content/profile";
import type { Capability } from "@/content/types";
import { getLogo, type CompanyLogo } from "@/content/logos";
import { LogoAvatar, LogoMarquee } from "@/components/site/Logo";
import { usePageMeta } from "@/lib/meta";
import { cn } from "@/lib/utils";
import { ProjectCard, ProjectFeature } from "@/components/site/ProjectCard";
import { ButtonLink, Reveal, SectionHeader, StatusDot } from "@/components/site/primitives";
import {
  Aurora,
  CountUp,
  Marquee,
  RoleRotator,
  ScrollLine,
  Spotlight,
  Stagger,
  StaggerItem,
  Tilt,
  WordsReveal,
} from "@/components/site/motion";

function Hero() {
  return (
    <Spotlight className="overflow-hidden">
      <section className="relative">
        <Aurora />
        <div
          className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
          aria-hidden
        />
        <div className="container-site relative pb-20 pt-14 sm:pb-24 sm:pt-20">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs text-fg-muted backdrop-blur">
              <StatusDot />
              {site.availability}
            </div>
          </Reveal>

          <div className="mt-8 grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <Reveal delay={0.02}>
                <p className="text-base text-fg-muted sm:text-lg">
                  Hi, I'm Giri, a{" "}
                  <RoleRotator items={intro.roles} className="font-medium text-fg" />
                </p>
              </Reveal>
              <h1 className="mt-5 max-w-4xl text-[2.6rem] font-medium leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[4.1rem]">
                <WordsReveal text={intro.headline} highlight={["products", "every", "day."]} delay={0.1} />
              </h1>
              <Reveal delay={0.35}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted">{intro.lede}</p>
              </Reveal>
              <Reveal delay={0.45}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
                  <ButtonLink href="/work" variant="secondary">
                    See the work
                  </ButtonLink>
                  <a
                    href={site.socials[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline ml-1 inline-flex items-center gap-1 text-sm text-fg-muted hover:text-fg"
                  >
                    LinkedIn
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </div>
              </Reveal>
            </div>

            <Stagger className="grid gap-3 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1" gap={0.12}>
              <StaggerItem className="sm:col-span-3 lg:col-span-1">
                <div className="glow-card group flex items-center gap-4 rounded-2xl border border-line bg-surface/80 p-4 backdrop-blur transition-transform duration-300 hover:-translate-y-1">
                  <LogoAvatar logo={getLogo("Pravaig Dynamics")} className="transition-transform duration-300 group-hover:rotate-[-4deg]" />
                  <span className="min-w-0">
                    <span className="eyebrow block">Currently</span>
                    <span className="mt-1 block text-sm font-medium text-fg">SDE II at Pravaig Dynamics</span>
                  </span>
                </div>
              </StaggerItem>
              {highlights.map((h, i) => (
                <StaggerItem key={h.label}>
                  <div
                    className={cn(
                      "glow-card rounded-2xl border border-line bg-surface/80 p-5 backdrop-blur transition-transform duration-300 hover:-translate-y-1",
                      i === 1 && "lg:animate-float",
                    )}
                  >
                    <CountUp
                      to={h.value}
                      suffix={h.suffix}
                      className="text-gradient text-4xl font-semibold tracking-tight sm:text-[2.6rem]"
                    />
                    <p className="mt-2 text-sm leading-snug text-fg-muted">{h.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </Spotlight>
  );
}

function SkillStrip() {
  const half = Math.ceil(marquee.length / 2);
  return (
    <section className="border-y border-line bg-surface/40 py-8" aria-label="Skills">
      <div className="space-y-3">
        <Marquee items={marquee.slice(0, half)} />
        <Marquee items={marquee.slice(half)} reverse />
      </div>
    </section>
  );
}

function LogoWall() {
  const companies = clientNames.map((n) => getLogo(n)).filter((l): l is CompanyLogo => Boolean(l));
  return (
    <section className="pb-2 pt-16 sm:pt-20" aria-labelledby="logos-heading">
      <div className="container-site flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
        <Reveal>
          <p className="eyebrow">Built for and with</p>
          <h2 id="logos-heading" className="mt-3 text-2xl font-medium sm:text-3xl">
            Teams I have shipped products for.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="max-w-sm text-sm leading-relaxed text-fg-muted">
            Full-time roles, internships and independent client work, from EV manufacturing to enterprise IT.
          </p>
        </Reveal>
      </div>
      <Reveal delay={0.1}>
        <LogoMarquee items={companies} className="mt-10" />
      </Reveal>
    </section>
  );
}

function SelectedWork() {
  const [lead, second, ...rest] = featuredProjects;
  return (
    <section className="container-site py-24 sm:py-32">
      <SectionHeader
        eyebrow="Selected work"
        title="Products I've discovered, scoped, built and shipped."
        description="Full-time product work first, then independent projects. Each one opens a case study with the problem, the decisions and the result."
        action={
          <ButtonLink href="/work" variant="secondary">
            All projects
          </ButtonLink>
        }
      />
      <div className="mt-16 space-y-24">
        {lead ? (
          <Reveal>
            <ProjectFeature project={lead} />
          </Reveal>
        ) : null}
        {second ? (
          <Reveal>
            <ProjectFeature project={second} reverse />
          </Reveal>
        ) : null}
      </div>
      {rest.length ? (
        <Stagger className="mt-24 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {rest.map((p) => (
            <StaggerItem key={p.slug}>
              <Tilt>
                <ProjectCard project={p} />
              </Tilt>
            </StaggerItem>
          ))}
        </Stagger>
      ) : null}
    </section>
  );
}

const capabilityIcons: Record<Capability["kind"], LucideIcon> = {
  engineering: Code2,
  product: Compass,
  ai: Sparkles,
};

const capabilityTint: Record<Capability["kind"], string> = {
  engineering: "from-accent/20 text-accent",
  product: "from-accent-2/20 text-accent-2",
  ai: "from-accent-3/20 text-accent-3",
};

function Capabilities() {
  return (
    <section className="relative border-t border-line bg-surface/40">
      <div className="container-site py-24 sm:py-32">
        <SectionHeader
          eyebrow="What I bring"
          title="An engineer who thinks like a product manager."
          description="Most products fail between the handoffs. I work across all three, so the person who understands the user is the same person shipping the code."
        />
        <Stagger className="mt-16 grid gap-4 md:grid-cols-3" gap={0.1}>
          {capabilities.map((c) => {
            const Icon = capabilityIcons[c.kind];
            return (
              <StaggerItem key={c.title} className="h-full">
                <div className="glow-card h-full rounded-2xl border border-line bg-bg transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex h-full flex-col rounded-2xl p-7 sm:p-8">
                    <span
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-gradient-to-br to-transparent",
                        capabilityTint[c.kind],
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-6 text-xl font-medium">{c.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">{c.body}</p>
                    <ul className="mt-auto flex flex-wrap gap-2 pt-8">
                      {c.items.map((item) => (
                        <li key={item} className="rounded-full border border-line px-3 py-1 text-xs text-fg-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="container-site py-24 sm:py-32">
      <SectionHeader
        eyebrow="How I work"
        title="From a messy workflow to a product in daily use."
        description="The same four steps behind every product I've shipped, whether it's an ERP, an AI assistant or a public website."
      />
      <Stagger className="relative mt-16 grid gap-4 md:grid-cols-4" gap={0.12}>
        <div
          aria-hidden
          className="absolute left-0 right-0 top-[2.15rem] hidden h-px bg-gradient-to-r from-accent/0 via-accent-2/50 to-accent-3/0 md:block"
        />
        {process.map((step) => (
          <StaggerItem key={step.index}>
            <div className="group relative h-full rounded-2xl border border-line bg-surface/60 p-6 transition-colors hover:border-line-strong">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-bg font-mono text-xs text-fg transition-transform duration-300 group-hover:scale-110">
                {step.index}
              </span>
              <h3 className="mt-5 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{step.body}</p>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">{step.deliverable}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function Journey() {
  const roles = experience.slice(0, 4);
  return (
    <section className="border-t border-line">
      <div className="container-site grid gap-16 py-24 sm:py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.1] sm:text-4xl">
              Engineer by trade, <span className="text-gradient">product manager by habit.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-fg-muted">{about.paragraphs[1]}</p>
            <ButtonLink href="/about" variant="secondary" className="mt-8">
              More about me
            </ButtonLink>
          </Reveal>
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7">
          <ScrollLine className="bottom-2 left-[7px] top-2" />
          <ol className="space-y-8">
            {roles.map((r) => (
              <Reveal key={r.company}>
                <li className="relative pl-10">
                  <span
                    aria-hidden
                    className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-bg bg-gradient-to-br from-accent to-accent-2 shadow-[0_0_0_4px_hsl(var(--accent)/0.12)]"
                  />
                  <div className="group flex gap-4 rounded-2xl border border-transparent p-3 -m-3 transition-colors hover:border-line hover:bg-surface/60">
                    <LogoAvatar logo={getLogo(r.logo ?? r.company)} className="mt-0.5 transition-transform duration-300 group-hover:scale-105" />
                    <div className="min-w-0">
                      <p className="font-mono text-xs text-fg-subtle">{r.period}</p>
                      <p className="mt-1 font-medium text-fg">{r.role}</p>
                      <p className="text-sm text-fg-muted">{r.company}</p>
                      <p className="mt-2 text-sm leading-relaxed text-fg-muted">{r.summary}</p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="container-site pb-24 sm:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 sm:px-12 sm:py-20">
          <Aurora className="opacity-80" />
          <div
            className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_right,black_20%,transparent_70%)]"
            aria-hidden
          />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow">Next step</p>
              <h2 className="mt-4 text-3xl font-medium leading-[1.1] sm:text-5xl">
                Building something people should <span className="text-gradient">actually use?</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-fg-muted">
                I'm open to Software Engineer, Product Engineer and Associate Product Manager roles in Bengaluru. Send a note and I'll reply within a day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
              <ButtonLink href={site.socials[0].href} variant="secondary" icon="external">
                LinkedIn
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
      <p className="mt-6 flex items-center gap-1.5 text-sm text-fg-subtle">
        Prefer email?
        <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1 text-fg-muted hover:text-fg">
          {site.email}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </a>
      </p>
    </section>
  );
}

export default function HomePage() {
  usePageMeta({});
  return (
    <>
      <Hero />
      <SkillStrip />
      <LogoWall />
      <SelectedWork />
      <Capabilities />
      <Process />
      <Journey />
      <ClosingCta />
    </>
  );
}
