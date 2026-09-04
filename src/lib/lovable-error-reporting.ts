/**
 * Centralizes client error reporting. A monitoring provider can be wired here
 * without exposing credentials in the browser bundle.
 */
export function reportLovableError(error: unknown, context?: Record<string, string>) {
  console.error("Application error", { error, context });
}