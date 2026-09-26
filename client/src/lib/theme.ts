import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "gm-theme";

function readTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function persist(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode, blocked cookies). The theme still applies for this visit.
  }
}

/** Dark by default; the choice is remembered per browser when storage is available. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute("content", theme === "light" ? "#f8f9fb" : "#0b0c0f");
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      persist(next);
      return next;
    });
  }, []);

  return { theme, toggle };
}
