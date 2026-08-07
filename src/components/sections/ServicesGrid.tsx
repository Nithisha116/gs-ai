"use client";

import { useCallback } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

const featured = services.slice(0, 8);

export default function ServicesGrid() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") scrollPrev();
    if (e.key === "ArrowRight") scrollNext();
  }

  return (
    <section className="overflow-hidden py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Everything it takes to automate the enterprise."
            description="From a single automated workflow to a full integration layer — we scope, build, and operate it."
          />
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-accent/40 hover:text-accent"
          >
            View all services
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Container>

      <Reveal delay={0.1} className="mt-14">
        <Container>
          <div
            className="overflow-hidden"
            ref={emblaRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Services"
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            <div className="flex gap-6">
              {featured.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className="group flex min-w-0 flex-[0_0_100%] shrink-0 select-none flex-col overflow-hidden rounded-3xl border border-line-soft bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover lg:flex-[0_0_calc(25%-18px)]"
                >
                  <span className="relative flex aspect-square items-center justify-center overflow-hidden bg-[linear-gradient(160deg,#f7f6ff_0%,#ece8ff_100%)]">
                    <Icon
                      name={service.icon}
                      className="size-16 text-ink/70 transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </span>

                  <span className="flex flex-1 flex-col p-7">
                    <span className="font-display text-lg font-semibold text-ink">{service.name}</span>
                    <span className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{service.tagline}</span>
                    <span className="mt-6 flex size-9 items-center justify-center rounded-full bg-surface-soft text-ink transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Reveal>

      <Container>
        <div className="mt-8 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous services"
            className="flex size-12 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 hover:border-accent/40 hover:text-accent"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next services"
            className="flex size-12 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 hover:border-accent/40 hover:text-accent"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
