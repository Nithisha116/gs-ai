import { Gem, Flower2, Triangle, Rabbit, Bird } from "lucide-react";
import Container from "@/components/ui/Container";

const trustedCompanies = [
  { name: "CloudFrame", icon: Gem },
  { name: "Atlas Property", icon: Flower2 },
  { name: "Finstack Group", icon: Triangle },
  { name: "RouteOne", icon: Rabbit },
  { name: "NorthBridge", icon: Bird },
];

export default function TrustedCompanies() {
  return (
    <section className="border-y border-line-soft bg-white py-14 lg:py-16">
      <Container>
        <p className="text-center text-sm font-medium uppercase tracking-wider text-ink-faint">
          Teams choose us for reliable delivery
        </p>

        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-5 lg:items-center lg:gap-6">
          {trustedCompanies.map(({ name, icon: LogoIcon }) => (
            <div key={name} className="flex items-center gap-3">
              <LogoIcon className="size-9 shrink-0 text-ink/70" strokeWidth={1.6} />
              <span className="font-display text-lg font-semibold text-ink/80 sm:text-xl">{name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
