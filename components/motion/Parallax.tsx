"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/cn";

/**
 * Subtle vertical parallax for images. Wrap around a fill Image inside a
 * relative overflow-hidden container; the inner layer is oversized so the
 * drift never exposes edges.
 */
export default function Parallax({
  children,
  className,
  strength = 8, // percent drift
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  // Only add `relative` when the caller doesn't position the element itself
  // (e.g. className="absolute inset-0") — competing position classes would
  // otherwise resolve unpredictably and can collapse the box to zero height.
  const positioned = /\b(absolute|fixed|sticky|relative)\b/.test(className ?? "");

  return (
    <div ref={ref} className={cn(!positioned && "relative", "overflow-hidden", className)}>
      <motion.div
        style={{ y }}
        className="absolute -inset-y-[12%] inset-x-0 will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
