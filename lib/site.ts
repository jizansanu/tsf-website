/**
 * Global site configuration.
 * NOTE: Email/domain are placeholders until the client's final domain is
 * purchased (tsfone.com / tsfme.com shortlist). Swap EMAIL + BASE_URL then.
 */
const rawBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

// Fail the production build loudly rather than shipping a localhost
// sitemap/robots/canonical to search engines.
if (!rawBaseUrl && process.env.NODE_ENV === "production") {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL must be set for production builds (e.g. https://tsfone.com)"
  );
}

export const site = {
  name: "TAK Steel Fabrication LLC",
  shortName: "TSF",
  tagline: "Engineering Excellence. Precision Fabrication. Trusted Performance.",
  description:
    "TAK Steel Fabrication LLC (TSF) is a premier structural steel fabrication and engineering company in the UAE, delivering steel construction and industrial engineering solutions across industrial, commercial, infrastructure, energy, oil & gas, petrochemical, and marine sectors.",
  baseUrl: rawBaseUrl ?? "http://localhost:3000",

  phoneDisplay: "+971 58 542 8006",
  phoneHref: "tel:+971585428006",
  whatsappNumber: "971585428006",
  whatsappHref:
    "https://wa.me/971585428006?text=Hello%20TSF%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  email: "taksteelllc@gmail.com", // TODO: switch to info@<final-domain>
  emailHref: "mailto:taksteelllc@gmail.com",

  hq: {
    label: "Corporate Office",
    lines: ["Dubai", "United Arab Emirates"],
    mapQuery: "Business Village Block B, Port Saeed, Dubai",
  },
  facility: {
    label: "Fabrication Facility",
    lines: ["Sajja Industrial Area", "Sharjah, United Arab Emirates"],
    mapQuery: "Sajja Industrial Area, Sharjah",
  },

  established: "1997",
  profilePdf: "/docs/tsf-company-profile.pdf",

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
