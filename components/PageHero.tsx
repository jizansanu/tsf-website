import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Parallax from "@/components/motion/Parallax";
import TextReveal from "@/components/motion/TextReveal";
import { FadeUp } from "@/components/motion/Animate";

/** Compact dark hero banner for inner pages, with parallax + masked title. */
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
    <section className="relative flex min-h-[340px] items-center overflow-hidden bg-ink py-24 sm:min-h-[420px]">
      <Parallax className="absolute inset-0" strength={10}>
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
      </Parallax>
      <div className="blueprint absolute inset-0" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-1 hazard opacity-70" aria-hidden />
      <Container className="relative">
        <FadeUp y={16}>
          <nav aria-label="Breadcrumb" className="anno mb-5 text-white/50">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="mx-2 text-gold">/</span>
            <span className="text-white/80">{crumb}</span>
          </nav>
          <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {eyebrow}
          </p>
        </FadeUp>
        <TextReveal
          as="h1"
          lines={[{ text: title }]}
          className="max-w-3xl font-display text-4xl font-semibold uppercase leading-tight text-white sm:text-5xl lg:text-6xl"
        />
        {lead && (
          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">{lead}</p>
          </FadeUp>
        )}
      </Container>
    </section>
  );
}
