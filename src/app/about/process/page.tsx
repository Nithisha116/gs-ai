import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { processSteps } from "@/data/about";

export const metadata: Metadata = {
  title: "Our Process",
  description: "How we take a workflow from idea to production.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title="Five stages. No surprises."
        description="Every engagement — a single automation or a full integration layer — moves through the same disciplined process."
      />

      <section className="pb-24 lg:pb-32">
        <Container className="max-w-3xl">
          <Stagger className="space-y-0">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="flex gap-6 border-l-2 border-line-soft pb-12 pl-8 last:pb-0">
                  <div className="-ml-[45px] flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <p className="font-display text-xl font-semibold text-ink">{step.title}</p>
                      <span className="text-sm font-medium text-accent">{step.duration}</span>
                    </div>
                    <p className="mt-2.5 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
