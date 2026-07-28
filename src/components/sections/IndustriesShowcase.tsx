"use client";

import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

const featured = industries.slice(0, 8);

export default function IndustriesShowcase() {
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
    <section className="overflow-hidden bg-ink py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-soft">
                <span className="size-1.5 rounded-full bg-accent-soft" />
                Industries
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-[2.25rem] leading-[1.1] font-semibold text-white sm:text-[2.75rem]">
                Built for the operational reality of <span className="text-accent-soft">your industry</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                The right automation looks different in logistics than it does in legal. We design around your constraints, not a generic template.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="shrink-0">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:border-white/50"
            >
              View all industries
            </Link>
          </Reveal>
        </div>
      </Container>

      <Reveal delay={0.15} className="mt-14">
        <div
          className="overflow-hidden"
          ref={emblaRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Industries"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div className="flex gap-6 px-6 lg:px-[max(24px,calc((100vw-1280px)/2+24px))]">
            {featured.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className="group relative block h-[420px] w-[280px] shrink-0 select-none overflow-hidden rounded-[1.75rem] shadow-2xl transition-transform duration-500 ease-out hover:-translate-y-1.5 sm:h-[500px] sm:w-[340px] lg:h-[560px] lg:w-[360px]"
              >
                {industry.image ? (
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    draggable={false}
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 340px, 280px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-surface-lavender to-surface-mist" />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/75" />

                <div className="absolute inset-x-0 top-0 p-6">
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{industry.name}</h3>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="line-clamp-2 text-sm leading-relaxed text-white/80">{industry.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/90">
                    Learn more
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <Container>
        <div className="mt-8 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous industry"
            className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next industry"
            className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
