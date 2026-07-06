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
import ContactForm from "@/components/ContactForm";
import TextReveal from "@/components/motion/TextReveal";
import Magnetic from "@/components/motion/Magnetic";
import { FadeUp, LineDraw, Stagger, StaggerItem } from "@/components/motion/Animate";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TAK Steel Fabrication LLC for structural steel fabrication in Dubai and Sharjah, UAE. Send drawings or BOQs for a fast, competitive proposal.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | TAK Steel Fabrication LLC",
    description:
      "Contact TAK Steel Fabrication LLC for structural steel fabrication in Dubai and Sharjah, UAE. Send drawings or BOQs for a fast, competitive proposal.",
    url: "/contact",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
  },
};

const cardCls =
  "plate heat group flex gap-4 border border-line bg-white p-6 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_50px_rgba(11,13,16,0.12)]";
const iconCls =
  "flex h-11 w-11 shrink-0 items-center justify-center bg-ink transition-colors duration-300 group-hover:bg-gold";
const iconGlyphCls = "text-gold transition-colors duration-300 group-hover:text-ink";
const labelCls =
  "font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink";
const linkCls =
  "mt-1.5 block text-sm text-muted transition-colors hover:text-golddark";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let&apos;s Discuss Your Project"
        lead="Send us your drawings, BOQs, or project requirements and our engineering team will respond quickly with a competitive proposal."
        image="/images/hero-contact.jpg"
        crumb="Contact"
      />

      {/* Contact grid */}
      <section className="relative overflow-hidden bg-paper py-20 sm:py-24">
        <span
          className="text-ghost pointer-events-none absolute -top-8 right-0 select-none font-display text-[9rem] font-bold leading-none sm:text-[13rem]"
          aria-hidden
        >
          01
        </span>
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Info stack */}
            <div className="lg:col-span-2">
              <FadeUp>
                <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Reach Us
                </p>
              </FadeUp>
              <TextReveal
                as="h2"
                lines={[{ text: "Direct lines" }, { text: "to our team" }]}
                className="font-display text-3xl font-semibold uppercase leading-tight text-ink sm:text-4xl"
              />
              <LineDraw className="mt-6 w-24" delay={0.3} />

              <Stagger className="mt-8 space-y-4">
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
            </div>

            {/* Enquiry form */}
            <div className="lg:col-span-3">
              <FadeUp delay={0.15}>
                <div className="border-t-2 border-t-gold">
                  <ContactForm />
                </div>
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      {/* Maps */}
      <section className="relative overflow-hidden border-y border-line bg-white py-20 sm:py-24">
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
                      "Map showing the TSF " +
                      location.label +
                      " in " +
                      location.lines.join(", ")
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

      {/* Documents */}
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
                lines={[{ text: "Company documents" }, { text: "on request" }]}
                className="font-display text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl"
              />
              <FadeUp delay={0.15}>
                <p className="mt-4 text-base leading-relaxed text-white/70">
                  ISO certificates, trade license, and prequalification documents are available for procurement teams.
                </p>
              </FadeUp>
            </div>
            <FadeUp delay={0.2}>
              <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
                <Magnetic>
                  <ButtonLink href={site.profilePdf} external>
                    <FileDown size={15} aria-hidden /> Download Company Profile
                  </ButtonLink>
                </Magnetic>
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
