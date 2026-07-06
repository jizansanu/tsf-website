import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import TextReveal from "@/components/motion/TextReveal";
import Parallax from "@/components/motion/Parallax";
import Magnetic from "@/components/motion/Magnetic";
import MarqueeBand from "@/components/motion/MarqueeBand";
import { FadeUp, Stagger, StaggerItem, WipeIn, LineDraw } from "@/components/motion/Animate";
import AnchorNav from "@/components/pages/services/AnchorNav";
import { services } from "@/lib/data";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Structural steel fabrication, custom fabrication, CNC machining, sheet metal, oil & gas and marine engineering services in Dubai & Sharjah, UAE.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | TAK Steel Fabrication LLC",
    description:
      "Structural steel fabrication, custom fabrication, CNC machining, sheet metal, oil & gas and marine engineering services in Dubai & Sharjah, UAE.",
    url: "/services",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Steel Structure Solutions"
        lead="Comprehensive fabrication, machining, and engineering services under one roof: structural steel, custom components, precision machining, oil &amp; gas, and marine scopes."
        image="/images/hero-services.jpg"
        crumb="Services"
      />

      {/* Anchor navigation with scrollspy */}
      <AnchorNav items={services.map((s) => ({ slug: s.slug, label: s.short }))} />

      {/* Service sections */}
      {services.map((service, i) => {
        const isEven = i % 2 === 0;
        const num = `0${i + 1}`;
        return (
          <Fragment key={service.slug}>
            <section
              id={service.slug}
              className={cn(
                "relative scroll-mt-36 overflow-hidden py-20 sm:py-24",
                isEven ? "bg-paper" : "bg-white border-y border-line"
              )}
            >
              <Container className="grid items-center gap-14 lg:grid-cols-2">
                {/* Image side: wipe reveal + parallax drift */}
                <WipeIn className={cn(!isEven && "lg:order-2")}>
                  <div className="group relative aspect-[4/3] overflow-hidden">
                    <Parallax className="absolute inset-0" strength={8}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </Parallax>
                    <div
                      className="pointer-events-none absolute bottom-3 right-3 z-10 h-10 w-10 border-b-2 border-r-2 border-gold"
                      aria-hidden
                    />
                    <div className="absolute left-4 top-4 z-10 bg-ink px-3.5 py-1.5 font-display text-sm text-gold">
                      {num}
                    </div>
                  </div>
                </WipeIn>

                {/* Text side: ghost number + masked heading + staggered checklist */}
                <div className={cn("relative", !isEven && "lg:order-1")}>
                  <span
                    className="text-ghost pointer-events-none absolute -top-16 -left-3 select-none font-display text-[10rem] font-bold leading-none sm:-left-8 sm:text-[12rem]"
                    aria-hidden
                  >
                    {num}
                  </span>
                  <div className="relative">
                    <FadeUp y={16}>
                      <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                        Service {num}
                      </p>
                    </FadeUp>
                    <TextReveal
                      as="h2"
                      lines={[{ text: service.title }]}
                      className="max-w-xl font-display text-3xl font-semibold uppercase leading-tight text-ink sm:text-4xl"
                    />
                    <LineDraw className="mt-6 w-20" delay={0.25} />
                    <FadeUp delay={0.15}>
                      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                        {service.intro}
                      </p>
                    </FadeUp>
                    <Stagger
                      className="mt-8 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2"
                      amount={0.1}
                    >
                      {service.items.map((item) => (
                        <StaggerItem key={item}>
                          <div className="group flex gap-2.5">
                            <span
                              className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-gold transition-transform duration-300 group-hover:scale-125"
                              aria-hidden
                            />
                            <span className="text-sm text-muted transition-colors duration-300 group-hover:text-ink">
                              {item}
                            </span>
                          </div>
                        </StaggerItem>
                      ))}
                    </Stagger>
                    <FadeUp delay={0.1} className="mt-9">
                      <Magnetic className="inline-block" strength={0.25}>
                        <ButtonLink href="/contact" variant="outline" className="group">
                          Enquire About This Service
                          <ArrowRight
                            size={14}
                            aria-hidden
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </ButtonLink>
                      </Magnetic>
                    </FadeUp>
                  </div>
                </div>
              </Container>
            </section>

            {/* Single ghost marquee band, midway through the service stack */}
            {i === 3 && (
              <div className="bg-paper py-8">
                <MarqueeBand items={services.map((s) => s.short)} />
              </div>
            )}
          </Fragment>
        );
      })}

      <CTABand
        title="Need a capability not listed here?"
        text="Our engineering team regularly delivers custom scopes. Share your requirement and we will confirm capability and pricing quickly."
      />
    </>
  );
}
