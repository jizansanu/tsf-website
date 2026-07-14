"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileDown, Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import Logo from "@/components/Logo";

function BrandLink() {
  return (
    <Link href="/" className="flex items-center" aria-label={`${site.name}, Home`}>
      <Logo variant="light" className="h-11 sm:h-12" />
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      // Hide on scroll down (past the hero), reveal on scroll up.
      setHidden(y > 480 && y > lastY);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    // Sticky with a negative top on lg: the 36px utility strip slides away
    // while the 72px main bar stays pinned. The whole header glides out of
    // view on scroll down and returns on scroll up.
    <header
      className={cn(
        "sticky top-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:-top-9",
        hidden && !open && "-translate-y-full"
      )}
    >
      {/* Utility strip (scrolls away) */}
      <div className="hidden bg-ink text-white/80 lg:block">
        <div className="mx-auto flex h-9 w-full max-w-7xl items-center justify-between px-5 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-gold">
              <Phone size={12} aria-hidden />
              {site.phoneDisplay}
            </a>
            <a href={site.emailHref} className="transition-colors hover:text-gold">
              {site.email}
            </a>
          </div>
          <p className="font-medium uppercase tracking-[0.2em] text-white/60">
            ISO 9001 &middot; ISO 14001 &middot; ISO 45001 Certified &middot; Dubai &amp; Sharjah, UAE
          </p>
        </div>
      </div>

      {/* Main bar (glass when scrolled) */}
      <div
        className={cn(
          "border-b border-line transition-[background-color,box-shadow] duration-300",
          scrolled
            ? "bg-white/85 shadow-[0_2px_24px_rgba(11,13,16,0.1)] backdrop-blur-md"
            : "bg-white"
        )}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <BrandLink />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {site.nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "link-underline font-display text-[13px] font-medium uppercase tracking-[0.18em] transition-colors",
                    active ? "is-active text-golddark" : "text-ink hover:text-golddark"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold px-6 py-3 font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-golddark hover:text-white"
            >
              Contact Us
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="border-t border-line bg-white lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-3 sm:px-6">
              {site.nav.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "border-b border-line py-3.5 font-display text-sm font-medium uppercase tracking-[0.18em]",
                      active ? "text-golddark" : "text-ink"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-3 py-4">
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="bg-gold px-6 py-3.5 text-center font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-ink"
                >
                  Contact Us
                </a>
                <a
                  href={site.profilePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 border border-ink/25 px-6 py-3.5 font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-ink"
                >
                  <FileDown size={14} aria-hidden /> Download Brochure
                </a>
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 border border-line px-6 py-3.5 font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-ink"
                >
                  <Phone size={14} aria-hidden /> {site.phoneDisplay}
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
