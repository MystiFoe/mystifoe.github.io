import type { SystemDiagram as Diagram } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * A schematic for projects without public screenshots (internal tools, unreleased apps).
 * Nodes read left to right on wide screens and top to bottom on phones.
 */
export function SystemDiagram({ diagram, compact = false, className }: { diagram: Diagram; compact?: boolean; className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-line-strong bg-surface bg-grid shadow-frame",
        compact ? "p-5 sm:p-6" : "p-6 sm:p-10",
        className,
      )}
      role="img"
      aria-label={`${diagram.title}: ${diagram.nodes.map((n) => n.label).join(", ")}`}
    >
      <p className="eyebrow">{diagram.title}</p>
      <ol
        className={cn(
          "relative mt-6 grid gap-3",
          compact ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2",
          !compact && diagram.nodes.length >= 4 && "lg:grid-cols-4",
          !compact && diagram.nodes.length === 5 && "lg:grid-cols-5",
        )}
      >
        {diagram.nodes.map((node, i) => (
          <li key={node.label} className="relative rounded-lg border border-line bg-bg/70 p-4 backdrop-blur-sm">
            <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-2 text-sm font-medium text-fg">{node.label}</p>
            <p className={cn("mt-1 text-xs leading-relaxed text-fg-muted", compact && "line-clamp-2")}>{node.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
