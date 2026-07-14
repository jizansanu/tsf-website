"use client";

import { useEffect, useRef } from "react";

/**
 * Workshop embers: soft gold particles drifting upward with flicker.
 * Canvas-based, ~40 particles, pauses off-screen, disabled for
 * reduced-motion users. Place inside a `relative` dark container.
 */
export default function Embers({ density = 40 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = false;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.max(1, w * dpr);
      canvas.height = Math.max(1, h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    type P = {
      x: number;
      y: number;
      vy: number;
      vx: number;
      r: number;
      a: number;
      tw: number;
      hue: number;
    };
    const rnd = (a: number, b: number) => a + Math.random() * (b - a);
    const spawn = (seed = false): P => ({
      x: rnd(0, w),
      y: seed ? rnd(0, h) : h + rnd(4, 40),
      vy: rnd(0.15, 0.55),
      vx: rnd(-0.08, 0.08),
      r: rnd(0.6, 1.7),
      a: rnd(0.12, 0.55),
      tw: rnd(0.02, 0.09),
      hue: rnd(8, 24),
    });
    const ps: P[] = Array.from({ length: density }, () => spawn(true));

    let t = 0;
    const loop = () => {
      t += 1;
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.y -= p.vy;
        p.x += p.vx + Math.sin(t * 0.01 + p.y * 0.012) * 0.12;
        const alpha = p.a * (0.65 + 0.35 * Math.sin(t * p.tw));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 62%, ${alpha})`;
        ctx.shadowColor = "rgba(255, 110, 50, 0.85)";
        ctx.shadowBlur = 7;
        ctx.fill();
        ctx.shadowBlur = 0;
        if (p.y < -12) Object.assign(p, spawn());
      }
      raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          raf = requestAnimationFrame(loop);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [density]);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />;
}
