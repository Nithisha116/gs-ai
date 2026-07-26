import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { workflowProcess } from "@/data/home";

export default function WorkflowProcess() {
  return (
    <section className="bg-surface-lavender/50 py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title="A disciplined process, not an open-ended experiment."
          description="Every engagement follows the same five stages — so you always know what's next and when you'll see it."
        />

        <Stagger className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-line lg:block" />
          {workflowProcess.map((step, i) => (
            <StaggerItem key={step.title} className="relative">
              <div className="flex items-center gap-3 lg:block">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-base font-semibold text-accent shadow-card ring-4 ring-surface-lavender/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold text-ink lg:mt-5">{step.title}</h3>
              </div>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{step.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
