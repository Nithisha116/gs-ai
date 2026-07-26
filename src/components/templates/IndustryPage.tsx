import { X as XIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CTASection from "@/components/sections/CTASection";
import LiquidGlassBackground from "@/components/backgrounds/LiquidGlassBackground";
import type { Industry } from "@/data/industries";

export default function IndustryPage({ industry }: { industry: Industry }) {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-28">
        <LiquidGlassBackground className="opacity-70" />
        <Container className="relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-medium text-accent shadow-sm ring-1 ring-accent/10">
              <Icon name={industry.icon} className="size-3.5" />
              Industry
            </span>
          </Reveal>
          <Reveal delay={0.05} className="mt-6 max-w-3xl">
            <h1 className="text-balance font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.5rem]">
              Automation for {industry.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 max-w-2xl">
            <p className="text-balance text-lg leading-relaxed text-ink-soft sm:text-xl">{industry.heroDescription}</p>
          </Reveal>
          <Reveal delay={0.16} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Book a discovery call
            </Button>
            <Button href="/industries" size="lg" variant="secondary" icon={false}>
              Browse all industries
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Pain points" title="What we typically hear first." align="center" className="mx-auto" />
          <Stagger className="mx-auto mt-14 max-w-3xl space-y-4">
            {industry.painPoints.map((p) => (
              <StaggerItem key={p}>
                <div className="flex items-start gap-4 rounded-2xl border border-line-soft bg-white p-5 shadow-card">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-ink-faint/10 text-ink-faint">
                    <XIcon className="size-3.5" />
                  </span>
                  <p className="text-[0.95rem] leading-relaxed text-ink-soft">{p}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-surface-lavender/50 py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Solutions" title="What we build instead." align="center" className="mx-auto" />
          <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {industry.solutions.map((s) => (
              <StaggerItem key={s.title}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-card">
                  <p className="font-display font-semibold text-ink">{s.title}</p>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">{s.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Workflows" title="Where automation shows up first." />
              <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
                {industry.workflows.map((w) => (
                  <span key={w} className="rounded-full border border-line-soft bg-white px-4 py-2 text-sm font-medium text-ink-soft">
                    {w}
                  </span>
                ))}
              </Reveal>
            </div>
            <div>
              <SectionHeading eyebrow="Automation examples" title="What it looks like in production." />
              <Stagger className="mt-8 space-y-4">
                {industry.automationExamples.map((ex) => (
                  <StaggerItem key={ex.title}>
                    <div className="rounded-2xl border border-line-soft bg-white p-5 shadow-card">
                      <p className="font-medium text-ink">{ex.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{ex.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="max-w-4xl">
          <Reveal>
            <div className="overflow-hidden rounded-[32px] bg-ink p-10 text-white sm:p-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50">ROI &amp; case study — {industry.caseStudy.client}</span>
              <p className="mt-5 font-display text-3xl font-semibold leading-snug sm:text-4xl">{industry.caseStudy.result}</p>
              <p className="mt-5 max-w-xl text-white/70">{industry.caseStudy.description}</p>
              <div className="mt-9 flex flex-wrap gap-10">
                {industry.roi.map((r) => (
                  <div key={r.label}>
                    <p className="font-display text-3xl font-bold text-accent-soft">{r.metric}</p>
                    <p className="mt-1 text-sm text-white/60">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title={`Questions about automating ${industry.name.toLowerCase()}.`} align="center" className="mx-auto" />
          <Reveal delay={0.1} className="mt-14">
            <FaqAccordion items={industry.faqs} />
          </Reveal>
        </Container>
      </section>

      <CTASection
        title={`Ready to automate ${industry.name.toLowerCase()} operations?`}
        secondaryLabel="Browse all industries"
        secondaryHref="/industries"
      />
    </>
  );
}
