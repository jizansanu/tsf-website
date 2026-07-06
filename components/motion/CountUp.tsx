"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "motion/react";

/**
 * Animates a number from 0 (or `from`) to `value` when scrolled into view.
 * Non-numeric values render as-is.
 */
export default function CountUp({
  value,
  from,
  duration = 1.6,
  className,
  suffix = "",
}: {
  value: string;
  from?: number;
  duration?: number;
  className?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const target = Number(value.replace(/[^0-9.]/g, ""));
  const numeric = !Number.isNaN(target) && value.trim() !== "";

  useEffect(() => {
    if (!inView || !numeric || !ref.current) return;
    const el = ref.current;
    const start = from ?? (target > 500 ? Math.max(0, target - 80) : 0);
    const controls = animate(start, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, numeric, target, from, duration, suffix]);

  return (
    <span ref={ref} className={className}>
      {numeric ? `${from ?? (target > 500 ? Math.max(0, target - 80) : 0)}${suffix}` : value}
    </span>
  );
}
