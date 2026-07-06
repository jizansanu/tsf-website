import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { isoCerts } from "@/lib/data";
import { cn } from "@/lib/cn";

export default function IsoBadges({ dark = false }: { dark?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {isoCerts.map((c, i) => (
        <Reveal key={c.code} delay={i * 100}>
          <div
            className={cn(
              "group heat h-full border p-7",
              dark
                ? "plate-dark border-white/12 bg-white/[0.03] hover:border-gold/60"
                : "plate border-line bg-white hover:border-gold hover:shadow-[0_14px_40px_rgba(11,13,16,0.1)]"
            )}
          >
            <ShieldCheck size={26} className="text-gold" aria-hidden />
            <p
              className={cn(
                "mt-4 font-display text-lg font-semibold uppercase tracking-wide",
                dark ? "text-white" : "text-ink"
              )}
            >
              {c.code}
            </p>
            <p className="mt-0.5 text-sm font-semibold text-golddark">{c.name}</p>
            <p className={cn("mt-3 text-sm leading-relaxed", dark ? "text-white/60" : "text-muted")}>
              {c.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
