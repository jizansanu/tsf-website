import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Target, MapPin } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import IsoBadges from "@/components/IsoBadges";
import TextReveal from "@/components/motion/TextReveal";
import Parallax from "@/components/motion/Parallax";
import MarqueeBand from "@/components/motion/MarqueeBand";
import {
  FadeUp,
  Stagger,
  StaggerItem,
  WipeIn,
  LineDraw,
} from "@/components/motion/Animate";
import { site } from "@/lib/site";
import {
  capabilities,
  coreStrengths,
  vision,
  mission,
  missionCommitments,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TAK Steel Fabrication LLC (TSF): structural steel fabrication and engineering in the UAE since 1997, with Dubai HQ and an ISO-certified Sharjah facility.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | TAK Steel Fabrication LLC",
    description:
      "TAK Steel Fabrication LLC (TSF): structural steel fabrication and engineering in the UAE since 1997, with Dubai HQ and an ISO-certified Sharjah facility.",
    url: "/about",
    images: [{ url: site.ogImage, width: 1200, height: 630 }],
  },
};

const facilities = [
  {
    image: "/images/facility-dubai.jpg",
    alt: "TSF corporate office, Dubai",
    label: site.hq.label,
    lines: site.hq.lines.join(", "),
    blurb: "Corporate headquarters & commercial office",
  },
  {
    image: "/images/facility-sharjah.jpg",
    alt: "TSF fabrication facility, Sajja Industrial Area, Sharjah",
    label: site.facility.label,
    lines: site.facility.lines.join(", "),
    blurb: "Large well-equipped fabrication yard and workshop",
  },
];

const eyebrowClass =
  "mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold";
const h2Light =
  "font-display text-3xl font-semibold uppercase leading-tight text-ink sm:text-4xl";
const h2Dark =
  "font-display text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl";
const ghostBase =
  "pointer-events-none select-none absolute font-display font-bold leading-none";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TSF"
        title="Engineering Excellence Since 1997"
        lead="One of the UAE's leading structural steel fabrication and engineering companies, delivering precision-built steel solutions from concept through commissioning."
        image="/images/hero-about.jpg"
        crumb="About"
      />

      {/* 01 — Who We Are */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <Container className="relative">
          <span
            aria-hidden
            className={`text-ghost ${ghostBase} -top-8 -left-2 text-[9rem] sm:text-[12rem]`}
          >
            01
          </span>
          <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <FadeUp y={16}>
                <p className={eyebrowClass}>Who We Are</p>
              </FadeUp>
              <TextReveal
                as="h2"
                lines={[{ text: "TAK Steel" }, { text: "Fabrication LLC" }]}
                className={`max-w-3xl ${h2Light}`}
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                <FadeUp delay={0.1}>
                  <p>
                    TAK Steel Fabrication LLC (TSF) is one of the UAE&apos;s
                    leading structural steel fabrication and engineering
                    companies. Since 1997, our multidisciplinary team of
                    structural engineers, fabrication specialists, project
                    managers, QA/QC professionals, and certified welding
                    inspectors has delivered engineered steel solutions for
                    projects of every scale and complexity.
                  </p>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p>
                    From our corporate headquarters in Dubai and our fully
                    integrated fabrication facility in Sajja Industrial Area,
                    Sharjah, we serve clients across the industrial, commercial,
                    infrastructure, energy, oil &amp; gas, petrochemical, and
                    marine sectors throughout the region.
                  </p>
                </FadeUp>
                <FadeUp delay={0.3}>
                  <p>
                    Every project is managed end to end under one roof: from
                    concept and structural design through detailing,
                    fabrication, protective coating, site erection, and
                    commissioning. This integrated model gives our clients a
                    single point of accountability, consistent quality, and
                    dependable delivery on even the most demanding programmes.
                  </p>
                </FadeUp>
              </div>
            </div>
            <div>
              <WipeIn>
                <div className="relative aspect-[4/3] w-[85%] overflow-hidden">
                  <Parallax className="absolute inset-0" strength={7}>
                    <Image
                      src="/images/about-team.jpg"
                      alt="TSF engineering and project management team"
                      fill
                      sizes="(max-width: 1024px) 85vw, 42vw"
                      className="object-cover"
                    />
                  </Parallax>
                  <div className="absolute bottom-0 left-0 z-10">
                    <FadeUp delay={0.5} y={14}>
                      <div className="bg-gold px-5 py-3">
                        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink">
                          Since {site.established}
                        </p>
                      </div>
                    </FadeUp>
                  </div>
                </div>
              </WipeIn>
              <WipeIn
                delay={0.15}
                className="relative z-10 -mt-20 ml-auto w-[70%] border-4 border-gold bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Parallax className="absolute inset-0" strength={7}>
                    <Image
                      src="/images/about-workshop.jpg"
                      alt="Fabrication workshop at TSF Sharjah facility"
                      fill
                      sizes="(max-width: 1024px) 70vw, 35vw"
                      className="object-cover"
                    />
                  </Parallax>
                </div>
              </WipeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — Vision & Mission */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
        <div className="blueprint absolute inset-0" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-1 hazard opacity-70" aria-hidden />
        <Container className="relative">
          <span
            aria-hidden
            className={`text-ghost-light ${ghostBase} -top-10 right-0 text-[9rem] sm:text-[12rem]`}
          >
            02
          </span>
          <Stagger className="relative grid gap-7 lg:grid-cols-2">
            <StaggerItem className="h-full">
              <div className="plate-dark group h-full border border-white/12 bg-white/[0.03] p-9 transition-all duration-300 hover:border-gold/60 hover:bg-white/[0.06]">
                <div className="flex h-12 w-12 items-center justify-center bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                  <Eye size={24} aria-hidden />
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold uppercase tracking-wide text-white">
                  Our Vision
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/70">
                  {vision}
                </p>
              </div>
            </StaggerItem>
            <StaggerItem className="h-full">
              <div className="plate-dark group h-full border border-white/12 bg-white/[0.03] p-9 transition-all duration-300 hover:border-gold/60 hover:bg-white/[0.06]">
                <div className="flex h-12 w-12 items-center justify-center bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                  <Target size={24} aria-hidden />
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold uppercase tracking-wide text-white">
                  Our Mission
                </h2>
                <p className="mt-4 text-base leading-relaxed text-white/70">
                  {mission}
                </p>
                <Stagger className="mt-6" amount={0.2}>
                  <ul className="space-y-2.5">
                    {missionCommitments.map((c) => (
                      <li key={c}>
                        <StaggerItem className="flex gap-2.5">
                          <span
                            className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-gold"
                            aria-hidden
                          />
                          <span className="text-sm text-white/70">{c}</span>
                        </StaggerItem>
                      </li>
                    ))}
                  </ul>
                </Stagger>
              </div>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      {/* 03 — Core Strengths */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <Container className="relative">
          <span
            aria-hidden
            className={`text-ghost ${ghostBase} -top-8 -left-2 text-[9rem] sm:text-[12rem]`}
          >
            03
          </span>
          <div className="relative max-w-3xl">
            <FadeUp y={16}>
              <p className={eyebrowClass}>Our Core Strengths</p>
            </FadeUp>
            <TextReveal
              as="h2"
              lines={[
                { text: "Technical excellence &" },
                { text: "operational discipline" },
              ]}
              className={h2Light}
            />
            <LineDraw className="mt-6 w-24" delay={0.35} />
            <FadeUp delay={0.15}>
              <p className="mt-5 text-base leading-relaxed text-muted">
                The people, plant, and processes behind every TSF project,
                built over nearly three decades of steel fabrication in the
                UAE.
              </p>
            </FadeUp>
          </div>
          <Stagger className="relative mt-10">
            <ul className="grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {coreStrengths.map((s) => (
                <li key={s}>
                  <StaggerItem className="flex gap-2.5">
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-gold"
                      aria-hidden
                    />
                    <span className="text-sm text-muted">{s}</span>
                  </StaggerItem>
                </li>
              ))}
            </ul>
          </Stagger>
        </Container>
      </section>

      {/* Values marquee */}
      <MarqueeBand
        items={["Quality", "Safety", "Integrity", "Precision", "Delivery"]}
      />

      {/* 04 — Engineering Capabilities */}
      <section className="relative overflow-hidden border-y border-line bg-white py-20 sm:py-24">
        <Container className="relative">
          <span
            aria-hidden
            className={`text-ghost ${ghostBase} -top-8 right-0 text-[9rem] sm:text-[12rem]`}
          >
            04
          </span>
          <div className="relative max-w-3xl">
            <FadeUp y={16}>
              <p className={eyebrowClass}>Engineering Capabilities</p>
            </FadeUp>
            <TextReveal
              as="h2"
              lines={[{ text: "From concept" }, { text: "to commissioning" }]}
              className={h2Light}
            />
            <FadeUp delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-muted">
                A complete in-house capability chain covering design,
                fabrication, coating, erection, and handover, so nothing is
                lost between disciplines.
              </p>
            </FadeUp>
          </div>
          <Stagger
            amount={0.05}
            className="relative mt-12 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {capabilities.map((c, i) => (
              <StaggerItem key={c} className="h-full">
                <div className="group flex h-full items-center gap-3 border border-line px-5 py-4 transition-all duration-300 hover:translate-x-1 hover:border-gold">
                  <span className="font-display text-lg font-semibold text-gold/50 transition-colors duration-300 group-hover:text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-ink">{c}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* 05 — QHSE */}
      <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
        <Container className="relative">
          <span
            aria-hidden
            className={`text-ghost ${ghostBase} -top-8 -left-2 text-[9rem] sm:text-[12rem]`}
          >
            05
          </span>
          <div className="relative max-w-3xl">
            <FadeUp y={16}>
              <p className={eyebrowClass}>QHSE</p>
            </FadeUp>
            <TextReveal
              as="h2"
              lines={[
                { text: "Quality, Health," },
                { text: "Safety & Environment" },
              ]}
              className={h2Light}
            />
            <FadeUp delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-muted">
                An integrated QHSE management system, certified to ISO 9001,
                ISO 14001, and ISO 45001, governs every stage of engineering,
                fabrication, and site erection.
              </p>
            </FadeUp>
          </div>
          <div className="relative mt-12">
            <IsoBadges />
          </div>
          <FadeUp className="relative mt-10" delay={0.1}>
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              Safety is a core value at TSF, not a checkpoint. Every workshop
              and site activity is planned around proactive risk assessment,
              certified welding procedures, documented inspection and test
              plans, and continuous training. Our teams are empowered to stop
              work whenever conditions fall short of standard, so every
              structure leaves our facilities safe, compliant, and built to
              specification.
            </p>
          </FadeUp>
        </Container>
      </section>

      {/* 06 — Facilities */}
      <section className="relative overflow-hidden bg-coal py-20 sm:py-24">
        <div className="blueprint absolute inset-0" aria-hidden />
        <Container className="relative">
          <span
            aria-hidden
            className={`text-ghost-light ${ghostBase} -top-10 left-1/2 -translate-x-1/2 text-[9rem] sm:text-[12rem]`}
          >
            06
          </span>
          <div className="relative mx-auto max-w-3xl text-center">
            <FadeUp y={16}>
              <p className={eyebrowClass}>Our Facilities</p>
            </FadeUp>
            <TextReveal
              as="h2"
              lines={[{ text: "Dubai & Sharjah, UAE" }]}
              className={h2Dark}
            />
            <FadeUp delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                A Dubai corporate office backed by a fully equipped fabrication
                yard in Sajja Industrial Area, Sharjah.
              </p>
            </FadeUp>
          </div>
          <Stagger className="relative mt-14 grid gap-7 lg:grid-cols-2">
            {facilities.map((f) => (
              <StaggerItem key={f.label} className="h-full">
                <div className="plate-dark group h-full overflow-hidden border border-white/12 bg-white/[0.03] transition-all duration-300 hover:border-gold/60 hover:bg-white/[0.06] hover:shadow-[0_18px_60px_rgba(255,75,36,0.15)]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Parallax className="absolute inset-0" strength={8}>
                      <Image
                        src={f.image}
                        alt={f.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </Parallax>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                        <MapPin size={16} aria-hidden />
                      </span>
                      <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">
                        {f.label}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-white/70">{f.lines}</p>
                    <p className="mt-1.5 text-sm text-white/60">{f.blurb}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTABand title="Partner with a trusted steel fabricator" />
    </>
  );
}
