/** Tiny class-name joiner (avoids extra deps). */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
