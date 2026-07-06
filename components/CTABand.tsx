import { Phone } from "lucide-react";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import Magnetic from "@/components/motion/Magnetic";
import TextReveal from "@/components/motion/TextReveal";
import { FadeUp } from "@/components/motion/Animate";
import { site } from "@/lib/site";

export default function CTABand({
  title = "Have a project in mind?",
  text = "Share your drawings, BOQ, or requirements and our engineering team will respond with a competitive proposal.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <div className="blueprint absolute inset-0" aria-hidden />
      <div className="plasma-line absolute inset-x-0 top-0" aria-hidden />
      {/* oversized ghost word behind */}
      <span
        className="text-ghost-light pointer-events-none absolute -bottom-6 left-0 select-none whitespace-nowrap font-display text-[22vw] font-bold uppercase leading-none opacity-40 lg:text-[16rem]"
        aria-hidden
      >
        {site.shortName}
      </span>
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Get in touch
              </p>
            </FadeUp>
            <TextReveal
              as="h2"
              lines={[{ text: title }]}
              className="font-display text-4xl font-semibold uppercase leading-tight text-white sm:text-5xl"
            />
            <FadeUp delay={0.15}>
              <p className="mt-5 text-base leading-relaxed text-white/70">{text}</p>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Magnetic>
                <ButtonLink href="/contact" className="px-9 py-4">
                  Request a Quote
                </ButtonLink>
              </Magnetic>
              <ButtonLink href={site.phoneHref} variant="outline-light">
                <Phone size={15} aria-hidden /> {site.phoneDisplay}
              </ButtonLink>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
