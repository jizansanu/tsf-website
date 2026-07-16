import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Clock,
  Cog,
  Factory,
  FileDown,
  Globe,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import CTABand from "@/components/CTABand";
import StatBand from "@/components/StatBand";
import ClientLogos from "@/components/ClientLogos";
import IsoBadges from "@/components/IsoBadges";
import { FadeUp, Stagger, StaggerItem, WipeIn, LineDraw } from "@/components/motion/Animate";
import TextReveal from "@/components/motion/TextReveal";
import Parallax from "@/components/motion/Parallax";
import MarqueeBand from "@/components/motion/MarqueeBand";
import Magnetic from "@/components/motion/Magnetic";
import Embers from "@/components/motion/Embers";
import { site } from "@/lib/site";
import { services, whyChoose, industries, coreStrengths, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "TAK Steel Fabrication LLC (TSF) | Structural Steel Fabrication & Engineering, UAE",
  description:
    "ISO-certified structural steel fabrication and engineering in Dubai and Sharjah, UAE. Structural steel, custom fabrication, CNC machining and marine solutions since 2012.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "TAK Steel Fabrication LLC (TSF) | Structural Steel Fabrication & Engineering, UAE",
    description:
      "ISO-certified structural steel fabrication and engineering in Dubai and Sharjah, UAE. Structural steel, custom fabrication, CNC machining and marine solutions since 2012.",
    url: "/",
    images: [{ url: site.ogImage, width: 1200, height: 630 }],
  },
};

const whyIcons = [Cog, Users, Factory, Globe, BadgeCheck, Clock];

const trustItems = [
  { icon: ShieldCheck, label: "ISO 9001:2015" },
  { icon: ShieldCheck, label: "ISO 14001:2015" },
  { icon: ShieldCheck, label: "ISO 45001:2018" },
  { icon: MapPin, label: "Dubai & Sharjah, UAE" },
] as const;

const eyebrowCls =
  "mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold";
const h2Cls =
  "font-display text-3xl font-semibold uppercase leading-tight text-ink sm:text-4xl";
const ghostNumCls =
  "text-ghost pointer-events-none absolute select-none font-display text-[9rem] font-bold leading-none sm:text-[13rem]";
const cardLiftCls =
  "plate heat hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_18px_50px_rgba(11,13,16,0.12)]";

export default function HomePage() {
  return (
    <>
      {/* 1 — HERO */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Parallax strength={12} className="h-full w-full">
            <Image
              src="/images/hero-home.jpg"
              alt="Structural steel fabrication in progress at the TSF workshop"
              fill
              preload
              sizes="100vw"
              className="object-cover opacity-35"
            />
          </Parallax>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" aria-hidden />
        <div className="blueprint absolute inset-0" aria-hidden />
        <Embers density={44} />
        <span
          className="text-ghost-light pointer-events-none absolute -bottom-10 right-0 hidden select-none font-display text-[16rem] font-bold uppercase leading-none opacity-30 lg:block"
          aria-hidden
        >
          {site.shortName}
        </span>
        <div className="absolute inset-x-0 bottom-0 h-1 hazard opacity-70" aria-hidden />

        <Container className="relative py-28 sm:py-32">
          <FadeUp delay={0.1} y={20}>
            <p className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              {site.name} &middot; Since {site.established}
            </p>
          </FadeUp>
          <TextReveal
            as="h1"
            delay={0.25}
            stagger={0.16}
            lines={[
              { text: "Engineering Excellence." },
              { text: "Precision Fabrication.", className: "text-gold" },
              { text: "Trusted Performance." },
            ]}
            className="max-w-4xl font-display text-5xl font-semibold uppercase leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          />
          <FadeUp delay={0.7}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              {site.description}
            </p>
          </FadeUp>
          <FadeUp delay={0.85}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Magnetic className="w-full sm:w-auto">
                <ButtonLink href={site.whatsappHref} className="w-full sm:w-auto">
                  Contact Us
                </ButtonLink>
              </Magnetic>
              <ButtonLink
                href={site.profilePdf}
                variant="outline-light"
                external
                className="w-full sm:w-auto"
              >
                <FileDown size={15} aria-hidden /> Download Brochure
              </ButtonLink>
            </div>
          </FadeUp>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-2">
            {trustItems.map(({ icon: Icon, label }, i) => (
              <FadeUp key={label} delay={1.0 + i * 0.08} y={14}>
                <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                  <Icon size={14} className="shrink-0 text-gold" aria-hidden />
                  {label}
                </span>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={1.4} y={10}>
            <p className="anno mt-8 text-white/30">
              DWG NO. TSF-2026-001 &middot; 25.20&deg;N 55.27&deg;E &middot; EST. {site.established}
            </p>
          </FadeUp>
        </Container>

        <div
          className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white/50 sm:flex"
          aria-hidden
        >
          <span>Scroll</span>
          <span className="relative h-14 w-px overflow-hidden bg-white/20">
            <span className="absolute inset-x-0 top-0 h-6 animate-pulse bg-gold" />
          </span>
        </div>
      </section>

      {/* 2 — INTRO SPLIT */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <span className={`${ghostNumCls} -top-8 left-0`} aria-hidden>
          01
        </span>
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <FadeUp>
                <p className={eyebrowCls}>Who We Are</p>
              </FadeUp>
              <TextReveal
                as="h2"
                lines={[
                  { text: "One of the UAE's leading" },
                  { text: "steel fabrication companies" },
                ]}
                className={h2Cls}
              />
              <FadeUp delay={0.15}>
                <p className="mt-6 text-base leading-relaxed text-muted">
                  TAK Steel Fabrication LLC (TSF) is a premier structural steel fabrication and
                  engineering company delivering complete steel construction solutions across the
                  UAE. From our corporate office in Dubai and our fabrication facility in Sajja
                  Industrial Area, Sharjah, we serve industrial, commercial, infrastructure,
                  energy, and marine clients.
                </p>
              </FadeUp>
              <FadeUp delay={0.25}>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Since 2012, our engineering-led approach has combined certified people, advanced
                  CNC technology, and disciplined project management to deliver steel structures
                  that perform, on schedule and to specification.
                </p>
              </FadeUp>
              <Stagger className="mt-8 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {coreStrengths.slice(0, 5).map((s) => (
                  <StaggerItem key={s}>
                    <span className="flex gap-2.5">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden />
                      <span className="text-sm text-muted">{s}</span>
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
              <FadeUp delay={0.2}>
                <div className="mt-9">
                  <ButtonLink href="/about" variant="outline">
                    More About TSF
                  </ButtonLink>
                </div>
              </FadeUp>
            </div>
            <WipeIn delay={0.2} className="pb-4 pr-4">
              <div className="relative">
                <div
                  className="absolute -bottom-4 -right-4 h-full w-full border-2 border-gold"
                  aria-hidden
                />
                <Parallax strength={8} className="aspect-[4/5]">
                  <Image
                    src="/images/home-intro.jpg"
                    alt="Erected structural steel framework by TSF in Sajja, Sharjah"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </Parallax>
                <FadeUp delay={0.3} y={20} className="absolute bottom-6 left-6">
                  <div className="plate-dark bg-ink p-5">
                    <p className="stamped font-display text-3xl font-semibold text-gold">
                      Since 2012
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                      Serving the UAE
                    </p>
                  </div>
                </FadeUp>
                {/* CAD-style dimension callout */}
                <FadeUp
                  delay={0.55}
                  y={8}
                  className="absolute inset-x-5 top-5 z-10 hidden items-center gap-3 sm:flex"
                >
                  <span className="dim-line flex-1" aria-hidden />
                  <span className="anno bg-ink/80 px-2.5 py-1.5 text-white/80 backdrop-blur-sm">
                    Sajja Industrial Area &middot; SHJ
                  </span>
                  <span className="dim-line w-8" aria-hidden />
                </FadeUp>
              </div>
            </WipeIn>
          </div>
        </Container>
      </section>

      {/* 2b — MARQUEE BAND */}
      <section className="border-y border-line bg-white">
        <MarqueeBand
          items={[
            "Structural Steel",
            "Custom Fabrication",
            "Stainless Steel",
            "Sheet Metal",
            "CNC Machining",
            "Oil & Gas",
            "Marine Works",
          ]}
        />
      </section>

      {/* 3 — SERVICES GRID */}
      <section className="relative overflow-hidden border-b border-line bg-white py-20 sm:py-24">
        <span className={`${ghostNumCls} -top-8 right-0`} aria-hidden>
          02
        </span>
        <Container className="relative">
          <div className="max-w-3xl">
            <FadeUp>
              <p className={eyebrowCls}>What We Do</p>
            </FadeUp>
            <TextReveal
              as="h2"
              lines={[{ text: "Complete Steel" }, { text: "Structure Solutions" }]}
              className={h2Cls}
            />
            <FadeUp delay={0.2}>
              <p className="mt-4 text-base leading-relaxed text-muted">
                From heavy structural steel and custom fabrication to CNC machining, oil &amp; gas
                packages, and marine works, TSF delivers end-to-end steel solutions under one
                roof.
              </p>
            </FadeUp>
          </div>
          <Stagger className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <Link
                  href={`/services#${s.slug}`}
                  className={`group flex h-full flex-col border border-line bg-white ${cardLiftCls}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-t from-gold/40 to-transparent transition-transform duration-500 group-hover:scale-y-100"
                      aria-hidden
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
                      {s.short}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                      {s.intro}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-golddark">
                      View Capabilities{" "}
                      <ArrowRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-1.5"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* 4 — STATS */}
      <StatBand />

      {/* 5 — WHY CHOOSE */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <span className={`${ghostNumCls} -top-8 left-1/2 -translate-x-1/2`} aria-hidden>
          03
        </span>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <p className={eyebrowCls}>Why TSF</p>
            </FadeUp>
            <TextReveal
              as="h2"
              lines={[{ text: "Built on quality," }, { text: "safety & delivery" }]}
              className={h2Cls}
            />
          </div>
          <Stagger className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <StaggerItem key={w.title} className="h-full">
                  <div className={`group h-full border border-line bg-white p-7 ${cardLiftCls}`}>
                    <div className="flex h-12 w-12 items-center justify-center bg-ink text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                      <Icon size={22} aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold uppercase tracking-wide text-ink">
                      {w.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{w.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* 6 — INDUSTRIES */}
      <section className="relative overflow-hidden bg-coal py-20 sm:py-24">
        <div className="blueprint absolute inset-0" aria-hidden />
        <span
          className="text-ghost-light pointer-events-none absolute -top-8 left-0 select-none font-display text-[9rem] font-bold leading-none opacity-60 sm:text-[13rem]"
          aria-hidden
        >
          04
        </span>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <p className={eyebrowCls}>Industries We Serve</p>
            </FadeUp>
            <TextReveal
              as="h2"
              lines={[{ text: "Serving every" }, { text: "industrial sector" }]}
              className="font-display text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl"
            />
          </div>
          <Stagger amount={0.05} className="mt-12 flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <StaggerItem key={ind}>
                <span className="inline-flex items-center border border-white/15 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold">
                  {ind}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* 7 — FEATURED PROJECTS */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <span className={`${ghostNumCls} -top-8 right-0`} aria-hidden>
          05
        </span>
        <Container className="relative">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <FadeUp>
                <p className={eyebrowCls}>Recent Work</p>
              </FadeUp>
              <TextReveal as="h2" lines={[{ text: "Featured Projects" }]} className={h2Cls} />
            </div>
            <FadeUp delay={0.2}>
              <ButtonLink href="/projects" variant="outline">
                All Projects
              </ButtonLink>
            </FadeUp>
          </div>
          <Stagger className="mt-12 grid gap-7 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <StaggerItem key={p.title} className="h-full">
                <article
                  className={`group flex h-full flex-col border border-line bg-white ${cardLiftCls}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-t from-gold/40 to-transparent transition-transform duration-500 group-hover:scale-y-100"
                      aria-hidden
                    />
                    <span className="absolute left-0 top-0 z-10 bg-ink px-3 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                      {p.sector}
                    </span>
                    <span
                      className="absolute bottom-4 right-4 z-10 flex h-10 w-10 translate-y-3 items-center justify-center bg-gold text-ink opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100"
                      aria-hidden
                    >
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                      <MapPin size={13} className="shrink-0 text-gold" aria-hidden />
                      {p.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{p.scope}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* 8 — CLIENTS */}
      <ClientLogos />

      {/* 9 — QHSE */}
      <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
        <span className={`${ghostNumCls} -top-8 right-0`} aria-hidden>
          06
        </span>
        <Container className="relative">
          <div className="max-w-3xl">
            <FadeUp>
              <p className={eyebrowCls}>Quality &amp; Certifications</p>
            </FadeUp>
            <TextReveal
              as="h2"
              lines={[
                { text: "An ISO-certified integrated" },
                { text: "management system" },
              ]}
              className={h2Cls}
            />
            <LineDraw delay={0.3} className="mt-6 w-24" />
            <FadeUp delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-muted">
                TSF operates an integrated QHSE management system certified to ISO 9001, ISO
                14001, and ISO 45001, embedding quality assurance, environmental responsibility,
                and occupational safety into every stage of fabrication and site erection.
              </p>
            </FadeUp>
          </div>
          <div className="mt-12">
            <IsoBadges />
          </div>
          <FadeUp delay={0.15}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Magnetic>
                <ButtonLink href={site.profilePdf} variant="outline" external>
                  <FileDown size={15} aria-hidden /> Download Company Profile (PDF)
                </ButtonLink>
              </Magnetic>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* 10 — CTA */}
      <CTABand />
    </>
  );
}
