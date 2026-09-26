import { ArrowUpRight } from "lucide-react";
import { clientNames, site } from "@/content/site";
import { featuredProjects } from "@/content/projects";
import { about, experience, highlights, intro, process, services } from "@/content/profile";
import { usePageMeta } from "@/lib/meta";
import { ProjectCard, ProjectFeature } from "@/components/site/ProjectCard";
import { ButtonLink, Reveal, SectionHeader, StatusDot } from "@/components/site/primitives";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden />
      <div className="container-site relative pb-24 pt-16 sm:pb-28 sm:pt-24">
        <Reveal>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-xs text-fg-muted backdrop-blur">
            <StatusDot />
            {site.availability}
          </div>
        </Reveal>
        <div className="mt-8 grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <h1 className="max-w-4xl text-[2.5rem] font-medium leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[3.6rem] xl:text-[4rem]">
                {intro.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted">{intro.lede}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink href="/contact">Start a project</ButtonLink>
                <ButtonLink href="/work" variant="secondary">
                  See the work
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-4">
            <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-1">
              {highlights.map((h) => (
                <div key={h.label} className="bg-bg p-6">
                  <dt className="sr-only">{h.label}</dt>
                  <dd className="text-2xl font-medium tracking-tight text-fg sm:text-3xl">{h.value}</dd>
                  <dd className="mt-2 text-sm leading-snug text-fg-subtle">{h.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

function ClientStrip() {
  return (
    <section className="border-y border-line bg-surface/40">
      <div className="container-site flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:gap-12">
        <p className="eyebrow shrink-0">Built for and with</p>
        <ul className="flex flex-wrap gap-x-10 gap-y-3">
          {clientNames.map((name) => (
            <li key={name} className="text-base font-medium tracking-tight text-fg-muted">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SelectedWork() {
  const [lead, second, ...rest] = featuredProjects;
  return (
    <section className="container-site py-24 sm:py-32">
      <SectionHeader
        eyebrow="Selected work"
        title="Products I've taken from brief to production."
        description="Freelance apps and websites first, then product work from my full-time roles. Each one links to a full case study."
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
        <div className="mt-24 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.06}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function Services() {
  return (
    <section className="border-t border-line bg-surface/40">
      <div className="container-site py-24 sm:py-32">
        <SectionHeader
          eyebrow="What I build"
          title="One person from scope to launch."
          description="You work with the same person who writes the scope, designs the screens, builds the product and deploys it. Nothing gets lost between handoffs."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.05} className="bg-bg">
              <div className="flex h-full flex-col p-8 sm:p-10">
                <span className="font-mono text-xs text-fg-subtle">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">{s.body}</p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li key={item} className="rounded-full border border-line px-3 py-1 text-xs text-fg-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="container-site py-24 sm:py-32">
      <SectionHeader
        eyebrow="How a project runs"
        title="Planned like a product, not just coded."
        description="Every engagement follows the same steps, so you always know what you're paying for, what comes next and when you can test it."
      />
      <ol className="mt-16 grid gap-6 md:grid-cols-5 md:gap-0">
        {process.map((step, i) => (
          <Reveal key={step.index} delay={i * 0.05}>
            <li className="relative h-full md:border-l md:border-line md:px-6 md:first:border-l-0 md:first:pl-0">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent">{step.index}</span>
                <span className="h-px flex-1 bg-line md:hidden" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">{step.body}</p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-fg-subtle">{step.deliverable}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function AboutTeaser() {
  const roles = experience.filter((e) => e.company !== "Earlier").slice(0, 4);
  return (
    <section className="border-t border-line">
      <div className="container-site grid gap-16 py-24 sm:py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">About</p>
          <h2 className="mt-4 text-3xl font-medium leading-[1.1] sm:text-4xl">Engineer by trade, product manager by habit.</h2>
          <p className="mt-6 text-base leading-relaxed text-fg-muted">{about.paragraphs[0]}</p>
          <ButtonLink href="/about" variant="secondary" className="mt-8">
            More about me
          </ButtonLink>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ul className="divide-y divide-line border-y border-line">
            {roles.map((r) => (
              <li key={r.company} className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
                <div>
                  <p className="font-medium text-fg">{r.company}</p>
                  <p className="text-sm text-fg-muted">{r.role}</p>
                </div>
                <p className="font-mono text-xs text-fg-subtle">{r.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="container-site pb-24 sm:pb-32">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface px-6 py-16 sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_right,black_20%,transparent_70%)]" aria-hidden />
        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow">Next step</p>
            <h2 className="mt-4 text-3xl font-medium leading-[1.1] sm:text-5xl">Tell me what you want to build.</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-fg-muted">
              Send a short description and I'll reply with questions, a rough scope and how I'd approach it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <ButtonLink href="/contact">Start a project</ButtonLink>
            <ButtonLink href={site.calendly} variant="secondary" icon="external">
              Book a call
            </ButtonLink>
          </div>
        </div>
      </div>
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
      <ClientStrip />
      <SelectedWork />
      <Services />
      <Process />
      <AboutTeaser />
      <ClosingCta />
    </>
  );
}
