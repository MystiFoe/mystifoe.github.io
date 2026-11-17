import { motion, useReducedMotion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Fades content up once as it enters the viewport. Disabled for reduced-motion users. */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-6 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-medium leading-[1.1] sm:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "btn-shine bg-fg text-bg hover:bg-fg/90",
  secondary: "border border-line-strong bg-surface text-fg hover:border-fg-subtle hover:bg-surface-2",
  ghost: "text-fg-muted hover:text-fg",
};

const buttonBase =
  "group inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

/** Internal links use the router; anything starting with http, mailto or tel opens as a normal anchor. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  icon = "arrow",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: "arrow" | "external" | "none";
}) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const Icon = icon === "external" || (icon === "arrow" && external && href.startsWith("http")) ? ArrowUpRight : ArrowRight;
  const content = (
    <>
      {children}
      {icon !== "none" ? (
        <Icon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
      ) : null}
    </>
  );
  const classes = cn(buttonBase, buttonStyles[variant], className);
  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} className={classes} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line px-2.5 py-1 font-mono text-[11px] leading-none text-fg-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function StatusDot({ className }: { className?: string }) {
  return (
    <span className={cn("relative flex h-2 w-2", className)} aria-hidden>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-50" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
    </span>
  );
}
