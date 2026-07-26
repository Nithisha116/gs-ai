import Container from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { homeStats } from "@/data/home";

export default function Stats() {
  return (
    <section className="py-20">
      <Container>
        <Stagger className="grid grid-cols-2 gap-8 rounded-[32px] bg-ink px-8 py-14 sm:px-14 lg:grid-cols-4">
          {homeStats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center lg:text-left">
              <p className="font-display text-4xl font-bold text-white sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm leading-snug text-white/60">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
