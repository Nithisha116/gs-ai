import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";
import LiquidGlassBackground from "@/components/backgrounds/LiquidGlassBackground";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description: "AI automation and consulting for the operational reality of your industry.",
};

export default function IndustriesIndexPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16 lg:pt-48 lg:pb-20">
        <LiquidGlassBackground className="opacity-70" />
        <Container className="relative">
          <SectionHeading
            align="center"
            eyebrow="Industries"
            title="Eight industries. One disciplined approach."
            description="Automation looks different in a hospital than it does in a warehouse. We design around your constraints, not a generic template."
            className="mx-auto max-w-3xl"
          />
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <StaggerItem key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  draggable={false}
                  className="group block overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-card-hover"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={industry.heroImage}
                      alt={industry.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/0" />
                    <span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm backdrop-blur-sm">
                      <Icon name={industry.icon} className="size-4.5" />
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-display text-lg font-semibold text-ink">{industry.name}</span>
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-soft text-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-accent group-hover:text-white">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                    <span className="mt-2.5 block text-[0.95rem] leading-relaxed text-ink-soft">{industry.tagline}</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
