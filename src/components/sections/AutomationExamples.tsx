import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { automationExamples } from "@/data/home";

export default function AutomationExamples() {
  return (
    <section id="automation-examples" className="scroll-mt-32 bg-surface-lavender/50 py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Automation examples"
          title="What 'automated' actually looks like in production."
          description="Real patterns from real engagements — not hypothetical use cases."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {automationExamples.map((example) => (
            <StaggerItem key={example.title}>
              <div className="flex h-full flex-col rounded-3xl border border-line-soft bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
                <span className="inline-flex w-fit rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {example.industry}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">{example.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{example.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
