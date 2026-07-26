import Container from "@/components/ui/Container";
import { trustedCompanies } from "@/data/home";

export default function TrustedCompanies() {
  const loop = [...trustedCompanies, ...trustedCompanies];

  return (
    <section className="border-y border-line-soft bg-white py-10">
      <Container>
        <p className="text-center text-sm font-medium uppercase tracking-wider text-ink-faint">
          Trusted by operations teams at
        </p>
      </Container>
      <div className="relative mt-7 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee gap-16">
          {loop.map((name, i) => (
            <span key={i} className="whitespace-nowrap text-xl font-semibold text-ink-faint/70">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
