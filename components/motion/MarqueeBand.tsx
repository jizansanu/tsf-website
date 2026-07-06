import { cn } from "@/lib/cn";

/**
 * Oversized scrolling text band — ghost-outlined display type with gold
 * separators. Pure CSS animation (pauses for reduced motion via globals).
 */
export default function MarqueeBand({
  items,
  className,
  ghost = true,
  reverse = false,
}: {
  items: string[];
  className?: string;
  ghost?: boolean;
  reverse?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div
      className={cn("relative select-none overflow-hidden py-6", className)}
      aria-hidden
    >
      <div
        className={cn(
          "marquee-track flex w-max items-center gap-10 whitespace-nowrap",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span
              className={cn(
                "font-display text-6xl font-bold uppercase tracking-tight sm:text-7xl lg:text-8xl",
                ghost ? "text-ghost" : "text-ink"
              )}
            >
              {item}
            </span>
            <span className="h-3 w-3 rotate-45 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
