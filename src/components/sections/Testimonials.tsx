"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { homeTestimonials } from "@/data/home";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") scrollPrev();
    if (e.key === "ArrowRight") scrollNext();
  }

  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Client voices" title="What operators say after we ship." />
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-line-soft bg-white text-ink transition-all duration-300 hover:border-accent/30 hover:text-accent hover:shadow-card"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-line-soft bg-white text-ink transition-all duration-300 hover:border-accent/30 hover:text-accent hover:shadow-card"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </Container>

      <Reveal delay={0.08} className="mt-12">
        <div
          className="overflow-hidden"
          ref={emblaRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div className="flex gap-6 px-6 lg:px-[max(24px,calc((100vw-1280px)/2+24px))]">
            {homeTestimonials.map((t) => (
              <div
                key={t.author}
                className="flex min-w-0 flex-[0_0_88%] shrink-0 sm:flex-[0_0_48%] lg:flex-[0_0_31.5%]"
              >
                <div className="flex h-full flex-col rounded-3xl border border-line-soft bg-white p-8 shadow-card">
                  <Quote className="size-8 shrink-0 text-accent/40" />
                  <p className="mt-5 flex-1 text-[1.05rem] leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6">
                    <p className="font-medium text-ink">{t.author}</p>
                    <p className="text-sm text-ink-soft">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
