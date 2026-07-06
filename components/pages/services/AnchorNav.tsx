"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/Container";
import { cn } from "@/lib/cn";

/**
 * Sticky anchor navigation with IntersectionObserver scrollspy.
 * The link matching the section currently in view gets `.is-active`,
 * which lights up its animated gold underline (see .link-underline).
 */
export default function AnchorNav({
  items,
}: {
  items: { slug: string; label: string }[];
}) {
  const [active, setActive] = useState<string>("");
  const rowRef = useRef<HTMLDivElement>(null);

  // Scrollspy: watch each service section and mark the one in view.
  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.slug))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Band across the middle of the viewport: a section becomes active
      // once it occupies the reading zone under the sticky bars.
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, [items]);

  // Keep the active link visible inside the horizontally scrollable row.
  useEffect(() => {
    const row = rowRef.current;
    if (!active || !row || row.scrollWidth <= row.clientWidth) return;
    const link = row.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    if (!link) return;
    row.scrollTo({
      left: link.offsetLeft - row.clientWidth / 2 + link.clientWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <div className="sticky top-[72px] z-40 border-b border-line bg-white/95 backdrop-blur">
      <Container>
        <div ref={rowRef} className="flex gap-6 overflow-x-auto pt-1 pb-2.5">
          {items.map((item) => (
            <a
              key={item.slug}
              href={`#${item.slug}`}
              className={cn(
                "link-underline whitespace-nowrap px-1.5 py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300",
                active === item.slug
                  ? "is-active text-golddark"
                  : "text-muted hover:text-golddark"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
