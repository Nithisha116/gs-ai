import { Check, X as XIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CTASection from "@/components/sections/CTASection";
import LiquidGlassBackground from "@/components/backgrounds/LiquidGlassBackground";
import type { Service } from "@/data/services";

export default function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-28">
        <LiquidGlassBackground className="opacity-70" />
        <Container className="relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-medium text-accent shadow-sm ring-1 ring-accent/10">
              <Icon name={service.icon} className="size-3.5" />
              {service.category} service
            </span>
          </Reveal>
          <Reveal delay={0.05} className="mt-6 max-w-3xl">
            <h1 className="text-balance font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.5rem]">
              {service.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 max-w-2xl">
            <p className="text-balance text-lg leading-relaxed text-ink-soft sm:text-xl">{service.heroDescription}</p>
          </Reveal>
          <Reveal delay={0.16} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Book a discovery call
            </Button>
            <Button href="/services" size="lg" variant="secondary" icon={false}>
              Browse all services
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Benefits"
            title="What changes once this is live."
            align="center"
            className="mx-auto"
          />
          <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {service.benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="flex h-full gap-4 rounded-2xl border border-line-soft bg-white p-6 shadow-card">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="size-4" />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-ink">{b.title}</p>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">{b.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-surface-lavender/50 py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="The problem" title="What we typically walk into." align="center" className="mx-auto" />
          <Stagger className="mx-auto mt-14 max-w-3xl space-y-4">
            {service.problems.map((p) => (
              <StaggerItem key={p}>
                <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card">
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

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Process" title="How we get it into production." align="center" className="mx-auto" />
          <Stagger className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-line lg:block" />
            {service.process.map((step, i) => (
              <StaggerItem key={step.title} className="relative">
                <span className="relative z-10 flex size-12 items-center justify-center rounded-full bg-white text-base font-semibold text-accent shadow-card ring-4 ring-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-soft">{step.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-surface-lavender/50 py-20 lg:py-28">
        <Container>
          <SectionHeading eyebrow="Technology" title="Tools we commonly build with." align="center" className="mx-auto" />
          <Reveal delay={0.1} className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {service.technologies.map((t) => (
              <span key={t} className="rounded-full border border-line-soft bg-white px-4 py-2 text-sm font-medium text-ink-soft">
                {t}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="max-w-4xl">
          <Reveal>
            <div className="overflow-hidden rounded-[32px] bg-ink p-10 text-white sm:p-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50">Case study — {service.caseStudy.industry}</span>
              <p className="mt-5 font-display text-3xl font-semibold leading-snug sm:text-4xl">
                {service.caseStudy.client}
              </p>
              <p className="mt-5 max-w-xl text-white/70">{service.caseStudy.description}</p>
              <div className="mt-8 flex items-baseline gap-3">
                <span className="font-display text-4xl font-bold text-accent-soft">{service.caseStudy.metric}</span>
                <span className="text-white/60">{service.caseStudy.metricLabel}</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions about this service." align="center" className="mx-auto" />
          <Reveal delay={0.1} className="mt-14">
            <FaqAccordion items={service.faqs} />
          </Reveal>
        </Container>
      </section>

      <CTASection
        title={`Ready to put ${service.name.toLowerCase()} to work?`}
        secondaryLabel="Browse all services"
        secondaryHref="/services"
      />
    </>
  );
}
