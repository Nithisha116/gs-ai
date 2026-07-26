import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { companyStory } from "@/data/about";

export const metadata: Metadata = {
  title: "Who We Are",
  description: "Our story, mission, and what we believe about automation.",
};

export default function WhoWeArePage() {
  return (
    <>
      <PageHero eyebrow="Who we are" title="We think most headcount growth is a symptom, not a plan." />

      <section className="pb-20 lg:pb-24">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <p className="text-balance text-xl leading-relaxed text-ink sm:text-2xl">{companyStory.mission}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-sm text-ink-faint">
              Founded {companyStory.founded} · {companyStory.hq}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface-lavender/50 py-20 lg:py-28">
        <Container>
          <SectionHeading align="center" eyebrow="What we believe" title="The principles behind every engagement." className="mx-auto" />
          <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {companyStory.values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-2xl border border-line-soft bg-white p-7 shadow-card">
                  <p className="font-display text-lg font-semibold text-ink">{v.title}</p>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="max-w-3xl">
          <SectionHeading align="center" eyebrow="Timeline" title="From two-person studio to enterprise partner." className="mx-auto" />
          <div className="mt-14 space-y-0">
            {companyStory.timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className="flex gap-6 border-l-2 border-line-soft pb-10 pl-8 last:pb-0">
                  <div className="-ml-[41px] flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white">
                    {t.year.slice(2)}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-ink">{t.title}</p>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">{t.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection secondaryLabel="Meet the leadership team" secondaryHref="/about/leadership" />
    </>
  );
}
