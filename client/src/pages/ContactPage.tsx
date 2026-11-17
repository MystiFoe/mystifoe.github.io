import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check, Copy, Loader2 } from "lucide-react";
import { site } from "@/content/site";
import { budgets, contactSchema, projectTypes, projectWithBudget, submitContact, timelines, type ContactInput } from "@/lib/contact";
import { usePageMeta } from "@/lib/meta";
import { cn } from "@/lib/utils";
import { ButtonLink, Reveal, StatusDot } from "@/components/site/primitives";
import { motion, useReducedMotion } from "framer-motion";

const fieldBase =
  "w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-[15px] text-fg placeholder:text-fg-subtle transition-colors focus:border-accent focus:outline-none focus-visible:outline-none";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-2 text-xs text-destructive" role="alert">
      {message}
    </p>
  );
}

function ChoiceGroup<T extends string>({
  name,
  options,
  value,
  onChange,
  label,
  optional,
}: {
  name: string;
  options: readonly T[];
  value?: T;
  onChange: (v: T | undefined) => void;
  label: string;
  optional?: boolean;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm text-fg">
        {label}
        {optional ? <span className="ml-2 text-fg-subtle">Optional</span> : null}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value === opt;
          return (
            <label
              key={opt}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent",
                selected ? "border-fg bg-fg text-bg" : "border-line-strong text-fg-muted hover:border-fg-subtle hover:text-fg",
              )}
            >
              <input
                type="radio"
                name={name}
                value={opt}
                checked={selected}
                onChange={() => onChange(opt)}
                onClick={() => optional && selected && onChange(undefined)}
                className="sr-only"
              />
              {opt}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-8 items-center gap-1.5 rounded-full border border-line px-3 text-xs text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
      aria-live="polite"
    >
      {copied ? <Check className="h-3.5 w-3.5" aria-hidden /> : <Copy className="h-3.5 w-3.5" aria-hidden />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

type Status = { kind: "idle" } | { kind: "sent"; name: string; email: string } | { kind: "mailto" } | { kind: "error"; message: string };

/** Confirmation shown after a message is delivered: what happens next and where to go meanwhile. */
function SentPanel({ name, email, onReset }: { name: string; email: string; onReset: () => void }) {
  const reduce = useReducedMotion();
  const steps = [
    { title: "I read every message myself", body: "No assistant or auto-filter in between." },
    { title: "You'll hear back within a day", body: `My reply goes to ${email}.` },
    { title: "Check spam if it's quiet", body: `Replies come from ${site.email}.` },
  ];
  return (
    <motion.div
      className="panel relative overflow-hidden p-8 sm:p-10"
      role="status"
      initial={reduce ? false : { opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-accent/30 via-accent-2/20 to-accent-3/20 blur-3xl"
      />
      <motion.span
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-success/15 text-success"
        initial={reduce ? false : { scale: 0.4, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
      >
        <Check className="h-6 w-6" aria-hidden />
      </motion.span>
      <h2 className="relative mt-6 text-2xl font-medium sm:text-3xl">Thanks, {name}. Your message is with me.</h2>
      <p className="relative mt-3 text-fg-muted">Here is what happens next.</p>

      <ol className="relative mt-8 space-y-5">
        {steps.map((step, i) => (
          <motion.li
            key={step.title}
            className="flex gap-4"
            initial={reduce ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-strong font-mono text-[11px] text-fg">
              {i + 1}
            </span>
            <div>
              <p className="text-sm font-medium text-fg">{step.title}</p>
              <p className="mt-0.5 text-sm text-fg-muted [overflow-wrap:anywhere]">{step.body}</p>
            </div>
          </motion.li>
        ))}
      </ol>

      <div className="relative mt-10 border-t border-line pt-8">
        <p className="eyebrow">While you wait</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <ButtonLink href="/work">See the case studies</ButtonLink>
          <ButtonLink href={site.socials[0].href} variant="secondary" icon="external">
            Connect on LinkedIn
          </ButtonLink>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="mt-6 text-sm text-fg-muted underline-offset-4 hover:text-fg hover:underline"
        >
          Send another message
        </button>
      </div>
    </motion.div>
  );
}

export default function ContactPage() {
  usePageMeta({
    title: "Contact",
    description: "Get in touch with Giritharan Mani about software engineering and product roles, or a project."
  });
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", message: "", website: "" },
  });

  const selectedType = watch("projectType");

  const onSubmit = async (values: ContactInput) => {
    const result = await submitContact(values);
    if (result.status === "sent") {
      setStatus({ kind: "sent", name: values.name.split(/\s+/)[0] ?? values.name, email: values.email });
      reset();
    } else if (result.status === "mailto") {
      window.location.href = result.href;
      setStatus({ kind: "mailto" });
    } else {
      setStatus({ kind: "error", message: result.message });
    }
  };

  const channels = [
    { label: "Email", value: site.email, href: `mailto:${site.email}`, extra: <CopyEmail /> },
    { label: "Phone and WhatsApp", value: site.phone, href: site.phoneHref },
    { label: "Book a call", value: "calendly.com/giritharanmani1", href: site.calendly },
    { label: "LinkedIn", value: "linkedin.com/in/mystifoe", href: site.socials[0].href },
  ];

  return (
    <section className="container-site grid gap-16 pb-24 pt-16 sm:pt-24 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-6xl">Let's talk.</h1>
          <p className="mt-6 text-lg leading-relaxed text-fg-muted">
            Hiring for a software engineering or product role, or have something you want built? Send a note and I'll reply within a day.
          </p>
          <div className="mt-8 flex items-center gap-2 text-sm text-fg">
            <StatusDot />
            {site.availability}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {channels.map((c) => (
              <li key={c.label} className="flex items-center justify-between gap-4 py-5">
                <div className="min-w-0">
                  <p className="eyebrow">{c.label}</p>
                  <a
                    href={c.href}
                    {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group mt-1.5 inline-flex max-w-full items-center gap-1.5 text-fg hover:text-accent"
                  >
                    <span className="truncate">{c.value}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-fg-subtle group-hover:text-accent" aria-hidden />
                  </a>
                </div>
                {c.extra}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="lg:col-span-6 lg:col-start-7">
        <Reveal delay={0.1}>
          {status.kind === "sent" ? (
            <SentPanel name={status.name} email={status.email} onReset={() => setStatus({ kind: "idle" })} />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="panel space-y-8 p-6 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-fg">
                    Name
                  </label>
                  <input id="name" autoComplete="name" className={fieldBase} placeholder="Your name" {...register("name")} aria-invalid={!!errors.name} />
                  <FieldError message={errors.name?.message} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-fg">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={fieldBase}
                    placeholder="you@company.com"
                    {...register("email")}
                    aria-invalid={!!errors.email}
                  />
                  <FieldError message={errors.email?.message} />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm text-fg">
                  Company <span className="ml-1 text-fg-subtle">Optional</span>
                </label>
                <input id="company" autoComplete="organization" className={fieldBase} placeholder="Company name" {...register("company")} />
              </div>

              <Controller
                control={control}
                name="projectType"
                render={({ field }) => (
                  <div>
                    <ChoiceGroup name="projectType" label="What is this about?" options={projectTypes} value={field.value} onChange={(v) => field.onChange(v)} />
                    <FieldError message={errors.projectType?.message} />
                  </div>
                )}
              />

              {selectedType === projectWithBudget ? (
                <Controller
                  control={control}
                  name="budget"
                  render={({ field }) => (
                    <ChoiceGroup name="budget" label="Budget" optional options={budgets} value={field.value} onChange={(v) => field.onChange(v)} />
                  )}
                />
              ) : null}

              <Controller
                control={control}
                name="timeline"
                render={({ field }) => (
                  <ChoiceGroup name="timeline" label="Timeline" optional options={timelines} value={field.value} onChange={(v) => field.onChange(v)} />
                )}
              />

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-fg">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className={cn(fieldBase, "resize-y")}
                  placeholder="The role or project, the team, and anything I should know."
                  {...register("message")}
                  aria-invalid={!!errors.message}
                />
                <FieldError message={errors.message?.message} />
              </div>

              <div className="hidden" aria-hidden>
                <label htmlFor="website">Website</label>
                <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
              </div>

              {status.kind === "error" ? (
                <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-fg" role="alert">
                  {status.message}{" "}
                  <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                    {site.email}
                  </a>
                </p>
              ) : null}
              {status.kind === "mailto" ? (
                <p className="rounded-lg border border-line bg-surface-2 px-4 py-3 text-sm text-fg-muted" role="status">
                  Your email app should have opened with the message filled in. If it didn't, write to{" "}
                  <a href={`mailto:${site.email}`} className="text-fg underline underline-offset-4">
                    {site.email}
                  </a>
                  .
                </p>
              ) : null}

              <div className="flex flex-col-reverse items-start gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-fg-subtle">Your details are only used to reply to you.</p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg transition-colors hover:bg-fg/90 disabled:opacity-60"
                >
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
                  {isSubmitting ? "Sending" : "Send message"}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
