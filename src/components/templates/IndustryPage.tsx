import Image from "next/image";
import { Check, ArrowUp, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CTASection from "@/components/sections/CTASection";
import SubNav from "@/components/service/afx/SubNav";
import LiquidGlassBackground from "@/components/backgrounds/LiquidGlassBackground";
import { CornerBlob, WaveDivider } from "@/components/ui/SectionCurve";
import type { Industry } from "@/data/industries";

const subNavItems = [
  { id: "challenges", label: "Challenges" },
  { id: "solutions", label: "Solutions" },
  { id: "use-cases", label: "Use Cases" },
  { id: "impact", label: "Impact" },
];

const categoryLabels = ["Efficiency", "Operations", "Future readiness"];

export default function IndustryPage({ industry }: { industry: Industry }) {
  return (
    <>
      <section className="relative flex min-h-[680px] flex-col overflow-hidden pt-24 lg:h-[88vh] lg:min-h-[720px] lg:pt-28">
        <LiquidGlassBackground className="opacity-70" />
        <Container className="relative shrink-0">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-medium text-accent shadow-sm ring-1 ring-accent/10">
              <Icon name={industry.icon} className="size-3.5" />
              Industry
            </span>
          </Reveal>
          <Reveal delay={0.05} className="mt-4 max-w-3xl">
            <h1 className="text-balance font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.5rem]">
              AI &amp; Automation for {industry.name} Teams
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-4 max-w-2xl">
            <p className="text-balance text-lg leading-relaxed text-ink-soft sm:text-xl">{industry.heroDescription}</p>
          </Reveal>
          <Reveal delay={0.16} className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Book a discovery call
            </Button>
            <Button href="/industries" size="lg" variant="secondary" icon={false}>
              Browse all industries
            </Button>
          </Reveal>

          <div className="sticky top-24 z-30 mt-6 hidden justify-end lg:flex">
            <SubNav items={subNavItems} />
          </div>
        </Container>

        <div className="relative mt-6 min-h-[200px] flex-1 lg:mt-8">
          <CornerBlob className="-top-8 left-0 z-0 h-24 w-28 text-ink sm:-top-10 sm:h-32 sm:w-36 lg:-top-12 lg:h-40 lg:w-48" />
          <div className="absolute inset-0 z-10 overflow-hidden">
            <Image src={industry.heroImage} alt={industry.name} fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/10" />
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section id="challenges" className="scroll-mt-32 py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="The challenge" title="Where teams get stuck" />
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">{industry.tagline}</p>
              </Reveal>
            </div>
            <Stagger className="space-y-6 lg:pt-2">
              {industry.painPoints.map((p) => (
                <StaggerItem key={p}>
                  <div className="flex items-center gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon name="alert-triangle" className="size-4" />
                    </span>
                    <p className="text-[0.95rem] leading-relaxed text-ink-soft">{p}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div className="mt-16 border-t border-line-soft lg:mt-20" />
        </Container>
      </section>

      {/* Solutions */}
      <section id="solutions" className="scroll-mt-32 py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Our deliverables" title="What we help automate" align="center" className="mx-auto" />
          <Stagger className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {industry.solutions.map((s, i) => {
              const checklist = industry.workflows.filter((_, wi) => wi % industry.solutions.length === i);
              return (
                <StaggerItem key={s.title}>
                  <div className="h-full">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {categoryLabels[i % categoryLabels.length]}
                    </span>
                    <p className="mt-3 font-display text-xl font-semibold text-ink">{s.title}</p>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{s.description}</p>
                    {checklist.length > 0 && (
                      <div className="mt-6 space-y-3 border-t border-line-soft pt-5">
                        {checklist.map((w) => (
                          <p key={w} className="flex items-center gap-2.5 text-sm text-ink-soft">
                            <Check className="size-4 shrink-0 text-accent" strokeWidth={2.4} />
                            {w}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <WaveDivider color="#F5F4FF" />

      {/* Use Cases */}
      <section id="use-cases" className="scroll-mt-32 relative overflow-hidden py-20 lg:py-28" style={{ backgroundColor: "#F5F4FF" }}>
        <LiquidGlassBackground className="opacity-80" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Automation examples"
            title="See what's possible"
            description={`Real scenarios we'd automate for ${industry.name} teams like yours.`}
            align="center"
            className="mx-auto"
          />
          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {industry.automationExamples.map((ex) => (
              <StaggerItem key={ex.title}>
                <div className="flex h-full flex-col rounded-3xl bg-white/70 p-7 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="w-fit rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    {industry.name}
                  </span>
                  <p className="mt-5 font-display text-lg font-semibold text-ink">{ex.title}</p>
                  <div className="mt-4 border-t border-line-soft pt-4">
                    <p className="text-[0.95rem] leading-relaxed text-ink-soft">{ex.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <WaveDivider color="#FFFFFF" />

      {/* Impact */}
      <section id="impact" className="scroll-mt-32 py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Typical outcomes"
            title="The impact of automation"
            description={industry.caseStudy.result}
            align="center"
            className="mx-auto"
          />
          <Stagger className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {industry.roi.map((r) => (
              <StaggerItem key={r.label}>
                <div className="h-full rounded-3xl bg-surface-soft p-8">
                  <ArrowUp className="size-8 text-accent" strokeWidth={1.5} />
                  <p className="mt-5 font-display text-4xl font-bold text-ink">{r.metric}</p>
                  <p className="mt-2 text-sm text-ink-soft">{r.label}</p>
                </div>
              </StaggerItem>
            ))}
            <StaggerItem>
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-ink p-8 pb-12 text-white">
                <Quote className="size-7 text-white/40" />
                <div>
                  <p className="mt-4 font-display text-lg leading-snug">{industry.caseStudy.description}</p>
                  <p className="mt-6 text-sm text-white/60">— {industry.caseStudy.client}</p>
                </div>
                <div
                  className="absolute inset-x-0 bottom-0 h-3"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1.5px)",
                    backgroundSize: "8px 8px",
                  }}
                  aria-hidden
                />
              </div>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title={`Questions about automating ${industry.name}.`} align="center" className="mx-auto" />
          <Reveal delay={0.1} className="mt-14">
            <FaqAccordion items={industry.faqs} />
          </Reveal>
        </Container>
      </section>

      <CTASection
        title={`Ready to automate ${industry.name} operations?`}
        secondaryLabel="Browse all industries"
        secondaryHref="/industries"
      />

      <div className="relative h-12 overflow-visible bg-ink sm:h-16" aria-hidden>
        <CornerBlob flip className="-top-24 left-0 h-32 w-40 text-ink sm:-top-36 sm:h-44 sm:w-52" />
      </div>
    </>
  );
}
