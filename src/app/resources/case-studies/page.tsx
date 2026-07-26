import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { caseStudies } from "@/data/resources";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real automation projects and their measured results.",
};

export default function CaseStudiesIndexPage() {
  return (
    <>
      <PageHero eyebrow="Case studies" title="Measured results, not vague promises." description="A closer look at the automation and integration projects we've shipped." />

      <section className="pb-24 lg:pb-32">
        <Container>
          <Stagger className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.slug}>
                <Link href={`/resources/case-studies/${cs.slug}`} className="group flex h-full flex-col rounded-3xl border border-line-soft bg-gradient-to-b from-surface-lavender to-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{cs.industry}</span>
                  <span className="mt-4 font-display text-4xl font-bold text-ink">{cs.metric}</span>
                  <span className="text-sm text-ink-soft">{cs.metricLabel}</span>
                  <h3 className="mt-6 flex-1 font-display text-lg font-semibold leading-snug text-ink">{cs.title}</h3>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                    Read the story
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
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
