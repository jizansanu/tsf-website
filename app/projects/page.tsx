import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import ClientLogos from "@/components/ClientLogos";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import TextReveal from "@/components/motion/TextReveal";
import MarqueeBand from "@/components/motion/MarqueeBand";
import {
  FadeUp,
  LineDraw,
  Stagger,
  StaggerItem,
} from "@/components/motion/Animate";
import { deliveryProcess } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore TSF steel fabrication projects across the UAE: structural steel, custom fabrication, oil & gas, and marine work delivered from Dubai and Sharjah.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | TAK Steel Fabrication LLC",
    description:
      "Explore TSF steel fabrication projects across the UAE: structural steel, custom fabrication, oil & gas, and marine work delivered from Dubai and Sharjah.",
    url: "/projects",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Projects & Fabrication Portfolio"
        lead="Representative steel fabrication and engineering work delivered across the UAE, from heavy structural frames to precision custom components."
        image="/images/hero-projects.jpg"
        crumb="Projects"
      />

      {/* Explorer */}
      <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
        <span
          aria-hidden
          className="text-ghost pointer-events-none absolute -top-8 right-2 select-none font-display text-[9rem] font-bold leading-none sm:text-[14rem]"
        >
          01
        </span>
        <Container className="relative">
          <div className="max-w-3xl">
            <FadeUp>
              <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Portfolio
              </p>
            </FadeUp>
            <TextReveal
              as="h2"
              className="font-display text-3xl font-semibold uppercase leading-tight text-ink sm:text-4xl"
              delay={0.1}
              lines={[{ text: "Delivered" }, { text: "with precision" }]}
            />
            <LineDraw className="mt-6 w-24" delay={0.35} />
            <FadeUp delay={0.3}>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Filter by sector to browse a representative selection of the
                structures and components our teams engineer, fabricate, and
                erect.
              </p>
            </FadeUp>
          </div>
          <div className="mt-12">
            <ProjectsExplorer />
          </div>
        </Container>
      </section>

      {/* Delivery process */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
        <div className="blueprint absolute inset-0" aria-hidden />
        <span
          aria-hidden
          className="text-ghost-light pointer-events-none absolute -top-8 left-2 select-none font-display text-[9rem] font-bold leading-none sm:text-[14rem]"
        >
          02
        </span>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                How We Deliver
              </p>
            </FadeUp>
            <TextReveal
              as="h2"
              className="font-display text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl"
              delay={0.1}
              lines={[{ text: "A disciplined" }, { text: "four-stage process" }]}
            />
          </div>
          <div className="mt-14">
            <LineDraw className="bg-gold/60" />
            <Stagger className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {deliveryProcess.map((stage) => (
                <StaggerItem key={stage.step} className="h-full">
                  <div className="plate-dark group h-full border border-t-2 border-white/12 border-t-gold/40 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:border-t-gold hover:bg-white/[0.06]">
                    <p className="stamped font-display text-5xl font-bold leading-none text-gold/40 transition-colors duration-300 group-hover:text-gold">
                      {stage.step}
                    </p>
                    <h3 className="mt-5 font-display text-lg font-semibold uppercase leading-snug text-white">
                      {stage.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {stage.text}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* Marquee band */}
      <section className="overflow-hidden bg-paper py-6 sm:py-10">
        <MarqueeBand
          items={["Engineered", "Fabricated", "Erected", "Delivered"]}
          ghost
          reverse
        />
      </section>

      {/* Client trust */}
      <ClientLogos />

      <CTABand title="Add your project to this list" />
    </>
  );
}
