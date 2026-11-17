/**
 * Motion building blocks for the portfolio.
 * Every component here checks the visitor's reduced-motion preference and falls back
 * to a static rendering, so the site stays readable and calm for anyone who opts out.
 */
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Thin gradient bar at the top of the page that tracks scroll position. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3"
      style={{ scaleX }}
    />
  );
}

/** Drifting blurred colour fields. Purely decorative. */
export function Aurora({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <span className="aurora-blob left-[-10%] top-[-20%] h-[28rem] w-[28rem] animate-drift bg-accent" />
      <span className="aurora-blob right-[-8%] top-[5%] h-[24rem] w-[24rem] animate-drift-slow bg-accent-2" />
      <span className="aurora-blob bottom-[-25%] left-[30%] h-[22rem] w-[22rem] animate-drift bg-accent-3 [animation-delay:-6s]" />
    </div>
  );
}

/**
 * A soft light that follows the pointer inside its container.
 * Writes CSS variables instead of React state so moving the mouse never re-renders.
 */
export function Spotlight({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };
  return (
    <div ref={ref} onPointerMove={onMove} className={cn("group/spot relative", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(520px circle at var(--spot-x, 50%) var(--spot-y, 30%), hsl(var(--accent) / 0.12), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}

/** Cycles through short phrases with a vertical slide. */
export function RoleRotator({ items, interval = 2600, className }: { items: readonly string[]; interval?: number; className?: string }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || items.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), interval);
    return () => window.clearInterval(id);
  }, [items.length, interval, reduce]);

  if (reduce) return <span className={className}>{items[0]}</span>;

  return (
    <span className={cn("relative inline-grid overflow-hidden align-bottom", className)} aria-live="polite">
      {/* Reserve the width of the longest phrase so surrounding text never jumps. */}
      <span className="invisible col-start-1 row-start-1" aria-hidden>
        {items.reduce((a, b) => (b.length > a.length ? b : a), "")}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={items[index]}
          className="col-start-1 row-start-1"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/**
 * Reveals a sentence word by word. Words listed in `highlight` get the brand gradient.
 * The full sentence is exposed to assistive tech as one string.
 */
export function WordsReveal({
  text,
  highlight = [],
  className,
  delay = 0,
}: {
  text: string;
  highlight?: string[];
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const marked = new Set(highlight.map((w) => w.toLowerCase()));
  const isMarked = (w: string) => marked.has(w.replace(/[.,]/g, "").toLowerCase());

  if (reduce) {
    return (
      <span className={className}>
        {words.map((w, i) => (
          <span key={`${w}-${i}`} className={cn(isMarked(w) && "text-gradient")}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom" aria-hidden>
          <motion.span
            className={cn("inline-block", isMarked(w) && "text-gradient")}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.7, delay: delay + i * 0.045, ease: EASE }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Counts up to a number the first time it scrolls into view. */
export function CountUp({ to, suffix = "", duration = 1.6, className }: { to: number; suffix?: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {value}
      {suffix}
    </span>
  );
}

/** Infinite horizontal strip. Duplicates its items once so the loop is seamless. */
export function Marquee({
  items,
  reverse = false,
  className,
}: {
  items: readonly string[];
  reverse?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const loop = reduce ? items : [...items, ...items];
  return (
    <div className={cn("mask-fade-x group/marquee overflow-hidden", className)}>
      <ul
        className={cn(
          "flex w-max gap-3 group-hover/marquee:[animation-play-state:paused]",
          !reduce && (reverse ? "animate-marquee-reverse" : "animate-marquee"),
          reduce && "flex-wrap",
        )}
      >
        {loop.map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="flex shrink-0 items-center gap-3 rounded-full border border-line bg-surface/70 px-4 py-2 text-sm text-fg-muted backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent to-accent-2" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Tilts its content slightly towards the pointer. Only on fine pointers (mouse, trackpad),
 * never on touch, and never for reduced-motion users.
 */
export function Tilt({ children, className, max = 5 }: { children: ReactNode; className?: string; max?: number }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 200, damping: 20 });

  if (reduce) return <div className={className}>{children}</div>;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}

/** A vertical line that draws itself as its container scrolls through the viewport. */
export function ScrollLine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 50%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} aria-hidden className={cn("absolute w-px bg-line", className)}>
      <motion.div
        className="h-full w-full origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3"
        style={{ scaleY: reduce ? 1 : scaleY }}
      />
    </div>
  );
}

/** Staggers children into view. Pair with <StaggerItem>. */
export function Stagger({ children, className, gap = 0.08 }: { children: ReactNode; className?: string; gap?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
