import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";
import LiquidGlassBackground from "@/components/backgrounds/LiquidGlassBackground";
import { caseStudies } from "@/data/resources";
import { getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.summary };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();
  const relatedService = getServiceBySlug(cs.serviceSlug);

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16 lg:pt-48 lg:pb-20">
        <LiquidGlassBackground className="opacity-70" />
        <Container className="relative max-w-3xl">
          <Reveal>
            <Link href="/resources/case-studies" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-accent">
              <ArrowLeft className="size-4" /> All case studies
            </Link>
          </Reveal>
          <Reveal delay={0.05} className="mt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">{cs.industry}</span>
          </Reveal>
          <Reveal delay={0.08} className="mt-3">
            <h1 className="text-balance font-display text-[2rem] font-semibold leading-tight text-ink sm:text-[2.75rem]">{cs.title}</h1>
          </Reveal>
          <Reveal delay={0.12} className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-4xl font-bold text-accent">{cs.metric}</span>
            <span className="text-ink-soft">{cs.metricLabel}</span>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            <Reveal>
              <h2 className="font-display text-xl font-semibold text-ink">The challenge</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">{cs.challenge}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-xl font-semibold text-ink">The solution</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">{cs.solution}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-xl font-semibold text-ink">The results</h2>
              <ul className="mt-4 space-y-3">
                {cs.results.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-lg leading-relaxed text-ink-soft">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl bg-surface-lavender/60 p-8">
                <Quote className="size-7 text-accent/40" />
                <p className="mt-4 text-xl leading-relaxed text-ink">&ldquo;{cs.quote.text}&rdquo;</p>
                <p className="mt-4 font-medium text-ink">{cs.quote.author}</p>
                <p className="text-sm text-ink-soft">{cs.quote.role}</p>
              </div>
            </Reveal>

            {relatedService && (
              <Reveal delay={0.2} className="flex flex-col items-start gap-4 rounded-3xl border border-line-soft p-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-ink-soft">
                  This engagement centered on <span className="font-medium text-ink">{relatedService.name}</span>.
                </p>
                <Button href={`/services/${relatedService.slug}`} variant="secondary">
                  Explore the service
                </Button>
              </Reveal>
            )}
          </div>
        </Container>
      </section>

      <CTASection secondaryLabel="See more case studies" secondaryHref="/resources/case-studies" />
    </>
  );
}
