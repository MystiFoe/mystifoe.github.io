import type { ImageAsset } from "@/content/types";
import { cn } from "@/lib/utils";

/** Renders a screenshot inside a minimal browser chrome. */
export function BrowserFrame({ image, className, priority = false }: { image: ImageAsset; className?: string; priority?: boolean }) {
  return (
    <figure className={cn("overflow-hidden rounded-xl border border-line-strong bg-surface shadow-frame", className)}>
      <div className="flex h-9 items-center gap-3 border-b border-line bg-surface-2 px-3.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        </div>
        {image.url ? (
          <div className="mx-auto hidden max-w-[60%] truncate rounded-md bg-bg/60 px-3 py-0.5 font-mono text-[11px] text-fg-subtle sm:block">
            {image.url}
          </div>
        ) : null}
      </div>
      <img
        src={image.src}
        alt={image.alt}
        width={1440}
        height={900}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="block aspect-[16/10] w-full object-cover object-top"
      />
    </figure>
  );
}

/** Renders a mobile screenshot inside a phone outline. */
export function PhoneFrame({ image, className, priority = false }: { image: ImageAsset; className?: string; priority?: boolean }) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-[2.2rem] border border-line-strong bg-surface-2 px-2 pb-2 pt-7 shadow-frame",
        className,
      )}
    >
      <div className="absolute left-1/2 top-2.5 z-10 h-2.5 w-14 -translate-x-1/2 rounded-full bg-bg" aria-hidden />
      <img
        src={image.src}
        alt={image.alt}
        width={390}
        height={844}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="block aspect-[390/844] w-full rounded-b-[1.75rem] rounded-t-md object-cover object-top"
      />
    </figure>
  );
}

export function DeviceImage({ image, className, priority }: { image: ImageAsset; className?: string; priority?: boolean }) {
  return image.frame === "phone" ? (
    <PhoneFrame image={image} className={className} priority={priority} />
  ) : (
    <BrowserFrame image={image} className={className} priority={priority} />
  );
}
