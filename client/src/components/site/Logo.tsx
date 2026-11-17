import { useReducedMotion } from "framer-motion";
import type { CompanyLogo } from "@/content/logos";
import { cn } from "@/lib/utils";

const tileBg: Record<CompanyLogo["tile"], string> = {
  light: "bg-white",
  dark: "bg-[#0b0c0f]",
  brand: "bg-[#ff6b35]",
};

/** A logo on a tile that keeps it legible in light and dark themes. */
export function LogoTile({ logo, className }: { logo: CompanyLogo; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden rounded-xl border border-line",
        tileBg[logo.tile],
        logo.square ? "p-0" : "px-5 py-4",
        className,
      )}
    >
      <img
        src={logo.src}
        alt={`${logo.name} logo`}
        loading="lazy"
        decoding="async"
        className={cn("max-h-full w-auto object-contain", logo.square ? "h-full" : "max-w-full")}
      />
    </div>
  );
}

/** Compact logo used beside roles in timelines and lists. */
export function LogoAvatar({ logo, className }: { logo?: CompanyLogo; className?: string }) {
  if (!logo) {
    return <span className={cn("h-11 w-11 shrink-0 rounded-xl border border-line bg-surface-2", className)} aria-hidden />;
  }
  return (
    <span
      className={cn(
        "flex h-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line shadow-frame",
        tileBg[logo.tile],
        logo.square ? "w-11 p-0" : "w-24 px-2 py-1.5",
        className,
      )}
    >
      <img src={logo.src} alt="" aria-hidden loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
    </span>
  );
}

/** Scrolling row of logo tiles. Pauses on hover and stays static for reduced-motion users. */
export function LogoMarquee({ items, className }: { items: CompanyLogo[]; className?: string }) {
  const reduce = useReducedMotion();
  const loop = reduce ? items : [...items, ...items];
  return (
    <div className={cn("mask-fade-x group/logos overflow-hidden", className)}>
      <ul
        className={cn(
          "flex w-max gap-4 group-hover/logos:[animation-play-state:paused]",
          reduce ? "flex-wrap justify-center" : "animate-marquee [animation-duration:55s]",
        )}
      >
        {loop.map((logo, i) => (
          <li key={`${logo.name}-${i}`} aria-hidden={i >= items.length} title={logo.name}>
            <LogoTile
              logo={logo}
              className="h-16 w-44 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03] sm:h-[4.5rem] sm:w-52"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
