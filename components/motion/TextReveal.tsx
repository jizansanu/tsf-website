"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Cinematic line-by-line masked text reveal.
 *
 * The viewport trigger lives on the OUTER (unclipped) wrapper — the inner
 * lines start fully clipped by their overflow mask, so observing them
 * directly would never fire IntersectionObserver.
 */
export default function TextReveal({
  lines,
  as: Tag = "h2",
  className,
  lineClassName,
  delay = 0,
  stagger = 0.14,
}: {
  lines: { text: string; className?: string }[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  return (
    <Tag className={className}>
      <motion.span
        className="block"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
            <motion.span
              className={cn("block will-change-transform", lineClassName, line.className)}
              variants={{
                hidden: { y: "110%" },
                show: {
                  y: "0%",
                  transition: { duration: 0.9, delay: delay + i * stagger, ease: EASE },
                },
              }}
            >
              {line.text}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
