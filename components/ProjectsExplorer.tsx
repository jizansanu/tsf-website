"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projects, projectSectors } from "@/lib/data";
import { cn } from "@/lib/cn";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProjectsExplorer() {
  const [filter, setFilter] = useState<string>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.sector === filter);

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter projects by sector">
        {["All", ...projectSectors].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setFilter(s)}
            aria-pressed={filter === s}
            className={cn(
              "heat relative border px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.16em]",
              filter === s
                ? "border-gold bg-gold text-ink shadow-[0_6px_20px_rgba(192,145,47,0.35)]"
                : "border-line bg-white text-muted hover:-translate-y-0.5 hover:border-gold hover:text-golddark"
            )}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Grid with layout animation on filter change */}
      <motion.div layout className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -12 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="plate group relative border border-line bg-white transition-[border-color,box-shadow] duration-300 hover:border-gold hover:shadow-[0_18px_50px_rgba(11,13,16,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                />
                {/* gold wipe on hover */}
                <div
                  className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-t from-gold/45 to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
                  aria-hidden
                />
                <span className="absolute left-0 top-4 bg-ink px-3.5 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                  {p.sector}
                </span>
                <span
                  className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center bg-gold text-ink opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100"
                  aria-hidden
                >
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <div className="p-6">
                <p className="anno mb-2 text-muted/80">
                  REF TSF-P-{String(projects.indexOf(p) + 1).padStart(3, "0")}
                </p>
                <h3 className="font-display text-lg font-semibold uppercase leading-snug text-ink transition-colors group-hover:text-golddark">
                  {p.title}
                </h3>
                <p className="mt-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-golddark">
                  <MapPin size={13} aria-hidden /> {p.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.scope}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-8 text-xs italic text-muted">
        Representative sample projects. Full project references and photography available on request.
      </p>
    </div>
  );
}
