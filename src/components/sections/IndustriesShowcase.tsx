import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((industry) => (
            <StaggerItem key={industry.slug}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group block overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {industry.image ? (
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-surface-lavender to-surface-mist" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                  <span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm backdrop-blur-sm">
                    <Icon name={industry.icon} className="size-4.5" />
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-ink">{industry.name}</h3>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-soft text-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-accent group-hover:text-white">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{industry.tagline}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
