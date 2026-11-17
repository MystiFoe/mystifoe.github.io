import { Link } from "wouter";
import { site } from "@/content/site";
import { getProject } from "@/content/projects";
import { about, experience, toolkit } from "@/content/profile";
import { usePageMeta } from "@/lib/meta";
import { ButtonLink, Reveal, StatusDot } from "@/components/site/primitives";

export default function AboutPage() {
  usePageMeta({
    title: "About",
    description: "Background, experience and toolkit of Giritharan Mani, Software Development Engineer II in Bengaluru."
  });

  const facts = [
    { label: "Based in", value: site.location },
    { label: "Works on", value: "Internal platforms, web products, AI agents, product discovery" },
    { label: "Education", value: about.education.map((e) => e.title).join(". ") },
  ];

  return (
    <>
      <section className="container-site grid gap-16 pb-20 pt-16 sm:pt-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-6xl">
              Engineer by trade, product manager by habit.
            </h1>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-fg-muted">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
        <aside className="lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.1}>
            <div className="panel sticky top-24 p-6">
              <div className="flex items-center gap-2 text-sm text-fg">
                <StatusDot />
                {site.availability}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{about.openTo}</p>
              <dl className="mt-6 space-y-5 border-t border-line pt-6">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="eyebrow">{f.label}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-fg">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-col gap-2">
                <ButtonLink href="/contact">Let's talk</ButtonLink>
                <ButtonLink href={site.socials[0].href} variant="secondary" icon="external">
                  LinkedIn
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </aside>
      </section>

      <section className="border-t border-line">
        <div className="container-site py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow">Experience</p>
            <h2 className="mt-4 text-3xl font-medium sm:text-4xl">Where I have done the work.</h2>
          </Reveal>
          <ol className="mt-14">
            {experience.map((item) => (
              <Reveal key={item.company}>
                <li className="grid gap-4 border-t border-line py-10 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-4">
                    <p className="font-mono text-xs text-fg-subtle">{item.period}</p>
                    <h3 className="mt-3 text-xl font-medium">{item.company}</h3>
                    <p className="mt-1 text-sm text-fg-muted">{item.role}</p>
                    <p className="text-sm text-fg-subtle">{item.location}</p>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-base leading-relaxed text-fg">{item.summary}</p>
                    <ul className="mt-5 space-y-3">
                      {item.points.map((pt) => (
                        <li key={pt.slice(0, 32)} className="flex gap-4 text-[15px] leading-relaxed text-fg-muted">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-fg-subtle" aria-hidden />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    {item.relatedProjects?.length ? (
                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        <span className="eyebrow mr-1">Case studies</span>
                        {item.relatedProjects.map((slug) => {
                          const p = getProject(slug);
                          return p ? (
                            <Link
                              key={slug}
                              href={`/work/${slug}`}
                              className="rounded-full border border-line px-3 py-1 text-xs text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
                            >
                              {p.title}
                            </Link>
                          ) : null;
                        })}
                      </div>
                    ) : null}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-surface/40">
        <div className="container-site py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow">Toolkit</p>
            <h2 className="mt-4 text-3xl font-medium sm:text-4xl">What I use day to day.</h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {toolkit.map((group) => (
              <div key={group.group} className="bg-bg p-6">
                <h3 className="eyebrow">{group.group}</h3>
                <ul className="mt-5 space-y-2.5 text-sm text-fg">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
