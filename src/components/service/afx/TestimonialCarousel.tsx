"use client";

import { useCallback, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Item = { name: string; role: string; initials: string; quote: string };

export default function TestimonialCarousel({ items }: { items: Item[] }) {
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div
        ref={track}
        className="afx-scroll-x no-scrollbar flex snap-x gap-6 overflow-x-auto px-[30px] pb-2 lg:px-[max(30px,calc((100vw-1280px)/2))]"
      >
        {items.map((t) => (
          <figure
            key={t.name}
            className="flex w-[calc(100%-2rem)] shrink-0 flex-col rounded-[20px] bg-afx-cream p-8 sm:w-[400px] lg:w-[440px]"
          >
            <figcaption className="flex items-center gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-black/80 text-sm font-medium text-white">
                {t.initials}
              </span>
              <span>
                <span className="block text-[17px] font-medium text-black">{t.name}</span>
                <span className="afx-eyebrow block text-black/50">{t.role}</span>
              </span>
            </figcaption>
            <blockquote className="mt-6 text-[16px] leading-[1.7] text-afx-muted">{t.quote}</blockquote>
          </figure>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous testimonial"
          className="flex size-11 items-center justify-center rounded-full bg-afx-cream text-black transition-colors duration-200 hover:bg-black hover:text-white"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next testimonial"
          className="flex size-11 items-center justify-center rounded-full bg-afx-cream text-black transition-colors duration-200 hover:bg-black hover:text-white"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
