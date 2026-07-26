import type { Metadata } from "next";
import Link from "next/link";
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
            title="Twelve industries. One disciplined approach."
            description="Automation looks different in a hospital than it does in a warehouse. We design around your constraints, not a generic template."
            className="mx-auto max-w-3xl"
          />
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <StaggerItem key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-line-soft bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-surface-soft text-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon name={industry.icon} />
                  </span>
                  <span className="mt-6 flex items-center justify-between gap-2">
                    <span className="font-display text-lg font-semibold text-ink">{industry.name}</span>
                    <ArrowUpRight className="size-4 shrink-0 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </span>
                  <span className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">{industry.tagline}</span>
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
