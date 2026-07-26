import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

const featured = industries.slice(0, 8);

export default function IndustriesShowcase() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Industries"
            title="Built for the operational reality of your industry."
            description="The right automation looks different in logistics than it does in legal. We design around your constraints, not a generic template."
          />
          <Button href="/industries" variant="secondary" className="shrink-0">
            View all industries
          </Button>
        </div>

        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((industry) => (
            <StaggerItem key={industry.slug}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group flex items-center gap-3 rounded-2xl border border-line-soft bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-soft text-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon name={industry.icon} className="size-4.5" />
                </span>
                <span className="font-medium text-ink">{industry.name}</span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
