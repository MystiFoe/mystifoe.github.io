/**
 * Minimal structured logger for the browser.
 * Debug output is suppressed in production builds; warnings and errors always emit
 * as a single structured object so they are easy to filter in devtools or forward
 * to a monitoring service later.
 */

type Level = "debug" | "info" | "warn" | "error";

const LEVEL_ORDER: Record<Level, number> = { debug: 10, info: 20, warn: 30, error: 40 };
const MIN_LEVEL: Level = import.meta.env.PROD ? "warn" : "debug";

function emit(level: Level, scope: string, message: string, context?: Record<string, unknown>): void {
  if (LEVEL_ORDER[level] < LEVEL_ORDER[MIN_LEVEL]) return;
  const entry = { level, scope, message, ts: new Date().toISOString(), ...(context ?? {}) };
  // eslint-disable-next-line no-console
  const sink = level === "error" ? console.error : level === "warn" ? console.warn : console.info;
  sink(entry);
}

export function createLogger(scope: string) {
  return {
    debug: (message: string, context?: Record<string, unknown>) => emit("debug", scope, message, context),
    info: (message: string, context?: Record<string, unknown>) => emit("info", scope, message, context),
    warn: (message: string, context?: Record<string, unknown>) => emit("warn", scope, message, context),
    error: (message: string, context?: Record<string, unknown>) => emit("error", scope, message, context),
  };
}
