import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Parallax from "@/components/motion/Parallax";
import TextReveal from "@/components/motion/TextReveal";
import Embers from "@/components/motion/Embers";
import LogoWatermark from "@/components/motion/LogoWatermark";
import { FadeUp } from "@/components/motion/Animate";

/**
 * Cinematic dark hero banner for inner pages: parallax photo, blueprint grid,
 * drifting ember sparks, an interactive floating TSF logo watermark, an
 * ambient light sheen, a masked title reveal, and a red plasma edge.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  crumb,
  index,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  crumb: string;
  index?: string;
}) {
  return (
    <section className="relative flex min-h-[460px] items-center overflow-hidden bg-ink py-28 sm:min-h-[560px] sm:py-32">
      {/* Parallax photograph */}
      <Parallax className="absolute inset-0" strength={12}>
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-20" />
      </Parallax>

      {/* Depth + texture layers */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" aria-hidden />
      <div className="blueprint absolute inset-0" aria-hidden />
      <Embers density={26} />
      <div className="hero-sheen" aria-hidden />

      {/* Animated logo watermark (client request) */}
      <LogoWatermark className="right-[-8%] top-1/2 h-[130%] w-[70%] -translate-y-1/2 sm:h-[150%] sm:w-[58%]" />

      {/* Oversized ghost section number */}
      {index && (
        <span
          className="text-ghost-light pointer-events-none absolute -bottom-8 left-2 hidden select-none font-display text-[13rem] font-bold leading-none opacity-40 lg:block"
          aria-hidden
        >
          {index}
        </span>
      )}

      {/* Red plasma edge */}
      <div className="plasma-line absolute inset-x-0 bottom-0" aria-hidden />

      <Container className="relative">
        <FadeUp y={16}>
          <nav aria-label="Breadcrumb" className="anno mb-5 text-white/50">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="mx-2 text-gold">/</span>
            <span className="text-white/80">{crumb}</span>
          </nav>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" aria-hidden />
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {eyebrow}
            </p>
          </div>
        </FadeUp>
        <TextReveal
          as="h1"
          lines={[{ text: title }]}
          className="max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl"
        />
        {lead && (
          <FadeUp delay={0.25}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">{lead}</p>
          </FadeUp>
        )}
      </Container>
    </section>
  );
}
