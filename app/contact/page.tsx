import type { Metadata } from "next";
import {
  Building2,
  Clock,
  Factory,
  FileDown,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import PageHero from "@/components/PageHero";
import TextReveal from "@/components/motion/TextReveal";
import Magnetic from "@/components/motion/Magnetic";
import { FadeUp, LineDraw, Stagger, StaggerItem } from "@/components/motion/Animate";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TAK Steel Fabrication LLC for structural steel fabrication in Dubai and Sharjah, UAE. Reach us on WhatsApp or download our company brochure.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | TAK Steel Fabrication LLC",
    description:
      "Contact TAK Steel Fabrication LLC for structural steel fabrication in Dubai and Sharjah, UAE. Reach us on WhatsApp or download our company brochure.",
    url: "/contact",
    images: [{ url: site.ogImage, width: 1200, height: 630 }],
  },
};

const cardCls =
  "plate heat group flex gap-4 border border-line bg-white p-6 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_50px_rgba(11,13,16,0.12)]";
const iconCls =
  "flex h-11 w-11 shrink-0 items-center justify-center bg-ink transition-colors duration-300 group-hover:bg-gold";
const iconGlyphCls = "text-gold transition-colors duration-300 group-hover:text-ink";
const labelCls = "font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink";
const linkCls = "mt-1.5 block text-sm text-muted transition-colors hover:text-golddark";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let&apos;s Discuss Your Project"
        lead="Reach our engineering team directly on WhatsApp, or download our company brochure to review our capabilities and certifications first."
        image="/images/hero-contact.jpg"
        crumb="Contact"
      />

      {/* Primary action tiles: WhatsApp + Brochure */}
      <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
        <span
          className="text-ghost pointer-events-none absolute -top-8 right-0 select-none font-display text-[9rem] font-bold leading-none sm:text-[13rem]"
          aria-hidden
        >
          01
        </span>
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <FadeUp>
              <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Get In Touch
              </p>
            </FadeUp>
            <TextReveal
              as="h2"
              lines={[{ text: "Two ways to reach us" }]}
              className="font-display text-3xl font-semibold uppercase leading-tight text-ink sm:text-4xl"
            />
            <LineDraw className="mx-auto mt-6 w-24" delay={0.25} />
          </div>

          <Stagger className="mx-auto mt-12 grid max-w-4xl gap-7 sm:grid-cols-2" amount={0.2}>
            <StaggerItem>
              <div className="plate heat group flex h-full flex-col border-2 border-gold bg-white p-8 hover:shadow-[0_18px_60px_rgba(192,145,47,0.2)] sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center bg-gold text-ink">
                  <MessageCircle size={26} aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold uppercase text-ink">
                  Chat on WhatsApp
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  The fastest way to reach our team. Send your drawings, BOQ, or project
                  requirements and get a response the same day.
                </p>
                <Magnetic className="mt-7 inline-block self-start">
                  <ButtonLink href={site.whatsappHref}>Contact Us</ButtonLink>
                </Magnetic>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="plate heat group flex h-full flex-col border border-line bg-white p-8 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_50px_rgba(11,13,16,0.12)] sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center bg-ink text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                  <FileDown size={26} aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold uppercase text-ink">
                  Download Brochure
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  Our full company profile: capabilities, ISO certifications, machinery list,
                  and project references, ready to share internally.
                </p>
                <ButtonLink
                  href={site.profilePdf}
                  variant="outline"
                  external
                  className="mt-7 self-start"
                >
                  Download Brochure
                </ButtonLink>
              </div>
            </StaggerItem>
          </Stagger>

          <FadeUp delay={0.3}>
            <p className="mt-10 text-center text-sm text-muted">
              Prefer a call or email? Reach us at{" "}
              <a href={site.phoneHref} className="font-semibold text-golddark">
                {site.phoneDisplay}
              </a>{" "}
              or{" "}
              <a href={site.emailHref} className="font-semibold text-golddark">
                {site.email}
              </a>
              .
            </p>
          </FadeUp>
        </Container>
      </section>

      {/* Contact info grid */}
      <section className="relative overflow-hidden border-y border-line bg-white py-20 sm:py-24">
        <Container className="relative">
          <FadeUp>
            <p className="mb-3 text-center font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Reach Us
            </p>
          </FadeUp>
          <TextReveal
            as="h2"
            lines={[{ text: "Direct lines to our team" }]}
            className="text-center font-display text-3xl font-semibold uppercase leading-tight text-ink sm:text-4xl"
          />

          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" amount={0.1}>
            <StaggerItem>
              <div className={cardCls}>
                <div className={iconCls}>
                  <Phone size={18} className={iconGlyphCls} aria-hidden />
                </div>
                <div>
                  <h3 className={labelCls}>Phone</h3>
                  <a href={site.phoneHref} className={linkCls}>
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className={cardCls}>
                <div className={iconCls}>
                  <MessageCircle size={18} className={iconGlyphCls} aria-hidden />
                </div>
                <div>
                  <h3 className={labelCls}>WhatsApp</h3>
                  <a
                    href={site.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkCls}
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className={cardCls}>
                <div className={iconCls}>
                  <Mail size={18} className={iconGlyphCls} aria-hidden />
                </div>
                <div>
                  <h3 className={labelCls}>Email</h3>
                  <a href={site.emailHref} className={linkCls}>
                    {site.email}
                  </a>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className={cardCls}>
                <div className={iconCls}>
                  <Building2 size={18} className={iconGlyphCls} aria-hidden />
                </div>
                <div>
                  <h3 className={labelCls}>{site.hq.label}</h3>
                  <div className="mt-1.5 text-sm leading-relaxed text-muted">
                    {site.hq.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className={cardCls}>
                <div className={iconCls}>
                  <Factory size={18} className={iconGlyphCls} aria-hidden />
                </div>
                <div>
                  <h3 className={labelCls}>{site.facility.label}</h3>
                  <div className="mt-1.5 text-sm leading-relaxed text-muted">
                    {site.facility.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className={cardCls}>
                <div className={iconCls}>
                  <Clock size={18} className={iconGlyphCls} aria-hidden />
                </div>
                <div>
                  <h3 className={labelCls}>Working Hours</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    Monday to Saturday, 8:00 AM to 6:00 PM (GST)
                  </p>
                </div>
              </div>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      {/* Maps */}
      <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
        <span
          className="text-ghost pointer-events-none absolute -top-6 left-0 select-none font-display text-[9rem] font-bold leading-none sm:text-[13rem]"
          aria-hidden
        >
          02
        </span>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <FadeUp>
              <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Find Us
              </p>
            </FadeUp>
            <TextReveal
              as="h2"
              lines={[{ text: "Dubai & Sharjah locations" }]}
              className="font-display text-3xl font-semibold uppercase leading-tight text-ink sm:text-4xl"
            />
            <LineDraw className="mx-auto mt-6 w-24" delay={0.25} />
          </div>
          <Stagger className="mt-12 grid gap-7 lg:grid-cols-2" amount={0.1}>
            {[site.hq, site.facility].map((location) => (
              <StaggerItem key={location.label}>
                <div className="group border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_18px_50px_rgba(11,13,16,0.12)]">
                  <div className="flex items-center gap-2.5 border-b border-line p-5">
                    <MapPin size={16} className="shrink-0 text-gold" aria-hidden />
                    <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                      {location.label}
                    </h3>
                  </div>
                  <iframe
                    src={
                      "https://www.google.com/maps?q=" +
                      encodeURIComponent(location.mapQuery) +
                      "&output=embed"
                    }
                    title={
                      "Map showing the TSF " + location.label + " in " + location.lines.join(", ")
                    }
                    className="h-[320px] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Prequalification documents (procurement teams) */}
      <section className="relative overflow-hidden bg-coal py-16 sm:py-20">
        <div className="blueprint absolute inset-0" aria-hidden />
        <span
          className="text-ghost-light pointer-events-none absolute -bottom-6 left-0 select-none whitespace-nowrap font-display text-[22vw] font-bold uppercase leading-none opacity-40 lg:text-[16rem]"
          aria-hidden
        >
          {site.shortName}
        </span>
        <Container className="relative">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <FadeUp>
                <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Prequalification
                </p>
              </FadeUp>
              <TextReveal
                as="h2"
                lines={[{ text: "Tendering or prequalifying" }, { text: "TSF as a vendor?" }]}
                className="font-display text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl"
              />
              <FadeUp delay={0.15}>
                <p className="mt-4 text-base leading-relaxed text-white/70">
                  ISO certificates, trade license, and full prequalification documents are
                  available on request for procurement teams.
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={0.2}>
              <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
                <ButtonLink href={site.emailHref} variant="outline-light">
                  Request Documents
                </ButtonLink>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>
    </>
  );
}
