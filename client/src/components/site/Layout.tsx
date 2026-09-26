import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navigation, site } from "@/content/site";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { ButtonLink, StatusDot } from "./primitives";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
    </button>
  );
}

function isActive(location: string, href: string): boolean {
  return location === href || location.startsWith(`${href}/`);
}

function SiteHeader() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "border-line bg-bg/85 backdrop-blur-xl" : "border-transparent bg-transparent",
      )}
    >
      <div className="container-site flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name}, home`}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line-strong bg-surface text-[13px] font-semibold tracking-tight">
            GM
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-medium text-fg">{site.name}</span>
            <span className="text-xs text-fg-subtle">{site.role}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors",
                isActive(location, item.href) ? "text-fg" : "text-fg-muted hover:text-fg",
              )}
              aria-current={isActive(location, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href="/contact" className="hidden h-9 px-4 md:inline-flex">
            Start a project
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-fg md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="container-site h-[calc(100dvh-4rem)] border-t border-line pb-10 pt-6 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {[{ label: "Home", href: "/" }, ...navigation].map((item) => (
              <li key={item.href} className="border-b border-line">
                <Link href={item.href} className="flex items-center justify-between py-5 text-2xl font-medium text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href="/contact" className="mt-8 w-full">
            Start a project
          </ButtonLink>
        </nav>
      ) : null}
    </header>
  );
}

function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <div className="flex items-center gap-2 text-sm text-fg-muted">
            <StatusDot />
            {site.availability}
          </div>
          <p className="mt-6 max-w-md text-2xl font-medium leading-snug text-fg">
            Have an app, website or internal tool in mind? Tell me what it needs to do.
          </p>
          <ButtonLink href="/contact" className="mt-8">
            Start a project
          </ButtonLink>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-6 md:grid-cols-[1fr_1fr_1.5fr]">
          <div>
            <p className="eyebrow">Site</p>
            <ul className="mt-4 space-y-3 text-sm">
              {[{ label: "Home", href: "/" }, ...navigation].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-fg-muted hover:text-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-4 space-y-3 text-sm">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-underline text-fg-muted hover:text-fg">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="eyebrow">Direct</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="link-underline text-fg-muted hover:text-fg [overflow-wrap:anywhere]">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="link-underline text-fg-muted hover:text-fg">
                  {site.phone}
                </a>
              </li>
              <li className="text-fg-subtle">{site.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-fg-subtle sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p>Designed and built by me.</p>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
