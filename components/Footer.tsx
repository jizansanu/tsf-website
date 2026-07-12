import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { services, isoCerts } from "@/lib/data";
import LogoMark from "@/components/LogoMark";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="hazard h-1.5 w-full opacity-80" aria-hidden />
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3.5">
              <LogoMark className="h-9 w-auto text-gold" />
              <span className="flex flex-col border-l border-white/15 pl-3.5 leading-tight">
                <span className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">
                  TAK Steel Fabrication
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
                  L.L.C &middot; Since {site.established}
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed">
              {site.tagline} Complete structural steel and engineering solutions
              across the UAE and international markets.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {isoCerts.map((c) => (
                <span
                  key={c.code}
                  className="border border-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60"
                >
                  {c.code}
                </span>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-gold">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.profilePdf}
                  className="transition-colors hover:text-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Company Profile (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-gold">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="transition-colors hover:text-gold"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.24em] text-gold">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                <span>
                  <span className="block font-medium text-white">{site.hq.label}</span>
                  {site.hq.lines.join(", ")}
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                <span>
                  <span className="block font-medium text-white">{site.facility.label}</span>
                  {site.facility.lines.join(", ")}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                <a href={site.phoneHref} className="transition-colors hover:text-gold">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                <a href={site.emailHref} className="transition-colors hover:text-gold">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="anno hidden text-white/35 md:block">
            DXB 25.20&deg;N 55.27&deg;E &middot; SHJ 25.33&deg;N 55.52&deg;E
          </p>
          <p className="uppercase tracking-[0.2em]">
            Building Strength Through Engineering Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
