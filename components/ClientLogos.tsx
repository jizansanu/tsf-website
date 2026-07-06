import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { clients } from "@/lib/data";

/** Text-based client marquee (logo artwork to be supplied by client). */
export default function ClientLogos() {
  const row = [...clients, ...clients]; // duplicated for seamless loop
  return (
    <section className="border-y border-line bg-white py-16">
      <Container>
        <SectionHeading
          eyebrow="Client References"
          title="Trusted by leading contractors & developers"
          align="center"
        />
      </Container>
      <div className="relative mt-10 overflow-hidden" aria-label="Our clients">
        <div className="marquee-track flex w-max items-center gap-14 px-7">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              aria-hidden={i >= clients.length}
              className="whitespace-nowrap font-display text-xl font-medium uppercase tracking-[0.18em] text-steel/60 transition-colors hover:text-golddark"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" aria-hidden />
      </div>
    </section>
  );
}
