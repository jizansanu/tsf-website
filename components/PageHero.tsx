import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import TextReveal from "@/components/motion/TextReveal";
import LogoWatermark from "@/components/motion/LogoWatermark";
import HeroChevrons from "@/components/HeroChevrons";
import { FadeUp } from "@/components/motion/Animate";

/**
 * Full-bleed photographic hero for inner pages: a bright workshop photo with a
 * living Ken Burns zoom, bottom-left bold statement, animated TSF watermark,
 * a forward chevron accent, and a red plasma edge.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  crumb,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  crumb: string;
}) {
  return (
    <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-ink">
      {/* Full-bleed living photo */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="kenburns object-cover"
        />
      </div>

      {/* Scrims: subtle overall tone + strong bottom for legibility + header top */}
      <div className="absolute inset-0 bg-ink/25" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/55 to-transparent" aria-hidden />

      {/* Animated logo watermark (client request) */}
      <LogoWatermark className="right-[-4%] top-[8%] hidden h-[46%] w-[36%] lg:block" />

      {/* Forward chevron accent */}
      <HeroChevrons className="absolute bottom-12 right-6 hidden sm:flex sm:right-12" />

      {/* Red plasma edge */}
      <div className="plasma-line absolute inset-x-0 bottom-0" aria-hidden />

      <Container className="relative pb-16 pt-40 sm:pb-24">
        <FadeUp y={16}>
          <nav aria-label="Breadcrumb" className="anno mb-5 text-white/60">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="mx-2 text-gold">/</span>
            <span className="text-white/90">{crumb}</span>
          </nav>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[3px] w-12 bg-gold" aria-hidden />
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {eyebrow}
            </p>
          </div>
        </FadeUp>
        <TextReveal
          as="h1"
          lines={[{ text: title }]}
          className="max-w-4xl font-display text-4xl font-semibold uppercase leading-[1.02] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] sm:text-5xl lg:text-6xl"
        />
        {lead && (
          <FadeUp delay={0.25}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80">{lead}</p>
          </FadeUp>
        )}
      </Container>
    </section>
  );
}
