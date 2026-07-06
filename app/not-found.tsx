import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink py-32">
      <div className="blueprint absolute inset-0" aria-hidden />
      <Container className="relative text-center">
        <p className="font-display text-7xl font-bold text-gold">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold uppercase text-white">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">Back to Home</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
