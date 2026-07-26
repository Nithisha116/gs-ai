import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { services } from "@/data/services";

const featured = services.slice(0, 8);

export default function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Everything it takes to automate the enterprise."
            description="From a single automated workflow to a full integration layer — we scope, build, and operate it."
          />
          <Button href="/services" variant="secondary" className="shrink-0">
            View all services
          </Button>
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-line-soft bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-surface-soft text-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon name={service.icon} className="size-5" />
                </span>
                <span className="mt-6 flex items-center justify-between gap-2">
                  <span className="font-display text-lg font-semibold text-ink">{service.name}</span>
                  <ArrowUpRight className="size-4 shrink-0 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </span>
                <span className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">{service.tagline}</span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
