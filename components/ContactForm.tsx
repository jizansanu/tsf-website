"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/data";

const inputCls =
  "w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

/**
 * Enquiry form. Until the client's domain + mailbox exist, submissions are
 * routed to WhatsApp with a structured, prefilled message (the channel most
 * UAE construction enquiries actually use). Swap to an email API later.
 */
export default function ContactForm() {
  // Holds the composed wa.me URL after submit. The form stays mounted so the
  // visitor's input is never lost, and the link below guarantees the enquiry
  // can be completed even when window.open is blocked (in-app browsers etc.).
  const [waUrl, setWaUrl] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines = [
      "New website enquiry (TSF)",
      `Name: ${fd.get("name")}`,
      `Company: ${fd.get("company") || "-"}`,
      `Phone: ${fd.get("phone")}`,
      `Email: ${fd.get("email") || "-"}`,
      `Service: ${fd.get("service")}`,
      `Message: ${fd.get("message")}`,
    ];
    const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    setWaUrl(url);
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-white p-7 sm:p-9">
      {waUrl && (
        <div className="mb-7 border border-gold/50 bg-gold/10 p-5" role="status">
          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-golddark" aria-hidden />
            <div className="text-sm leading-relaxed text-ink">
              <p className="font-semibold">Your enquiry is ready in WhatsApp.</p>
              <p className="mt-1 text-muted">
                Press send there to deliver it. If WhatsApp did not open,{" "}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-golddark underline underline-offset-2"
                >
                  tap here to send your enquiry
                </a>
                , or reach us at{" "}
                <a href={site.phoneHref} className="font-semibold text-golddark">
                  {site.phoneDisplay}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            Name *
          </label>
          <input id="cf-name" name="name" required placeholder="Your full name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="cf-company" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            Company
          </label>
          <input id="cf-company" name="company" placeholder="Company name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            Phone / WhatsApp *
          </label>
          <input id="cf-phone" name="phone" required type="tel" placeholder="+971 5X XXX XXXX" className={inputCls} />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            Email
          </label>
          <input id="cf-email" name="email" type="email" placeholder="you@company.com" className={inputCls} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-service" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            Service required *
          </label>
          <select id="cf-service" name="service" required defaultValue="" className={inputCls}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other / General Enquiry">Other / General Enquiry</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em] text-ink">
            Project details *
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project: scope, location, timeline"
            className={inputCls}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-7 inline-flex items-center gap-2 bg-gold px-8 py-4 font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-golddark hover:text-white"
      >
        <Send size={15} aria-hidden /> Send Enquiry via WhatsApp
      </button>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        Your enquiry opens in WhatsApp for instant delivery. Prefer email? Write to{" "}
        <a href={site.emailHref} className="font-semibold text-golddark">
          {site.email}
        </a>
      </p>
    </form>
  );
}
