import { cn } from "@/lib/cn";

/**
 * Forward-pointing chevron cluster — the "progress" accent motif for heroes.
 * Three stacked chevrons that slide forward in sequence; the leading one is
 * solid brand red, the others are outlined for depth.
 */
export default function HeroChevrons({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none flex items-center", className)} aria-hidden>
      <svg width="150" height="118" viewBox="0 0 150 118" fill="none">
        <path
          className="chevron-c"
          d="M2 6 L46 59 L2 112"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="7"
          strokeLinecap="square"
        />
        <path
          className="chevron-b"
          d="M50 6 L94 59 L50 112"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          className="chevron-a"
          d="M98 4 L146 59 L98 114"
          stroke="#ff4b24"
          strokeWidth="11"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
}
