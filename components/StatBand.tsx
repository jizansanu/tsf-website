import Container from "@/components/Container";
import CountUp from "@/components/motion/CountUp";
import { Stagger, StaggerItem } from "@/components/motion/Animate";
import { stats } from "@/lib/data";

export default function StatBand() {
  return (
    <section className="relative overflow-hidden bg-coal py-16">
      <div className="blueprint absolute inset-0" aria-hidden />
      <div className="treadplate absolute inset-x-0 top-0 h-3 opacity-70" aria-hidden />
      <Container className="relative">
        <Stagger className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="border-l-2 border-gold pl-5">
                <p className="stamped font-display text-4xl font-semibold text-gold sm:text-5xl">
                  <CountUp value={s.value} />
                </p>
                <p className="anno mt-2 text-white/60">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
