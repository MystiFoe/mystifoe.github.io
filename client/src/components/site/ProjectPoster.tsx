import { useReducedMotion } from "framer-motion";
import type { Project, ProjectCategory } from "@/content/types";
import { getLogo } from "@/content/logos";
import { cn } from "@/lib/utils";
import { BrowserChrome } from "./DeviceFrame";
import { LogoAvatar } from "./Logo";

/** Tint per primary category, so posters vary but stay inside the site palette. */
const tint: Record<ProjectCategory, { glow: string; dot: string }> = {
  platform: { glow: "hsl(var(--accent) / 0.38)", dot: "bg-accent" },
  ai: { glow: "hsl(var(--accent-3) / 0.34)", dot: "bg-accent-3" },
  mobile: { glow: "hsl(var(--accent-2) / 0.38)", dot: "bg-accent-2" },
  web: { glow: "hsl(var(--accent) / 0.34)", dot: "bg-accent" },
};

/**
 * Cover art for projects without public screenshots (internal tools, unreleased apps).
 * Uses the same browser frame and 16:10 ratio as screenshots, so a grid of mixed projects
 * reads as one consistent set. Type scales with the card width through container units.
 */
export function ProjectPoster({ project, className }: { project: Project; className?: string }) {
  const reduce = useReducedMotion();
  const t = tint[project.categories[0]];
  const nodes = project.diagram?.nodes.slice(0, 4) ?? [];
  const logo = getLogo(project.client);

  return (
    <BrowserChrome url={`${project.client.toLowerCase()} / ${project.status.toLowerCase()}`} className={className}>
      <div
        className="relative aspect-[16/10] w-full overflow-hidden bg-bg"
        style={{ containerType: "inline-size" }}
        role="img"
        aria-label={`${project.title}: ${nodes.map((n) => n.label).join(", ")}`}
      >
        {/* Colour field and grid */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(60% 70% at 85% 10%, ${t.glow}, transparent 70%), radial-gradient(50% 60% at 0% 100%, hsl(var(--accent-2) / 0.18), transparent 70%)`,
          }}
        />
        <div aria-hidden className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

        <div className="relative flex h-full flex-col justify-between p-[5.5cqw]">
          <div className="flex items-center gap-[2.2cqw]">
            {logo ? <LogoAvatar logo={logo} className="scale-90 origin-left sm:scale-100" /> : null}
            <span className="rounded-full border border-line bg-surface/70 px-[2cqw] py-[0.6cqw] font-mono text-[max(9px,1.7cqw)] uppercase tracking-[0.14em] text-fg-muted backdrop-blur">
              {project.diagram?.title ?? project.status}
            </span>
          </div>

          <div>
            <p className="max-w-[85%] text-[max(20px,6.4cqw)] font-medium leading-[1.02] tracking-[-0.03em] text-fg">{project.title}</p>
            <p className="mt-[1.4cqw] max-w-[78%] text-[max(11px,2.3cqw)] leading-snug text-fg-muted">{project.tagline}</p>
          </div>

          {nodes.length ? (
            <div className="relative">
              {/* Track with a pulse travelling along it */}
              <div aria-hidden className="absolute left-[3%] right-[3%] top-1/2 h-px -translate-y-1/2 bg-line-strong">
                {!reduce ? (
                  <span className={cn("absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full shadow-[0_0_12px_3px_hsl(var(--accent-2)/0.7)] animate-travel", t.dot)} />
                ) : null}
              </div>
              <ol className="relative grid grid-cols-4 gap-[1.6cqw]">
                {nodes.map((n, i) => (
                  <li
                    key={n.label}
                    className="flex items-center gap-[1.2cqw] rounded-full border border-line bg-surface/90 px-[1.8cqw] py-[1.1cqw] backdrop-blur"
                  >
                    <span className="font-mono text-[max(8px,1.5cqw)] text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span className="truncate text-[max(9px,1.9cqw)] font-medium text-fg">{n.label}</span>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
        </div>
      </div>
    </BrowserChrome>
  );
}
