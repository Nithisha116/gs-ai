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
          className="mx-auto"
        />

        <Stagger className="mt-16 overflow-hidden rounded-3xl border border-line-soft bg-white lg:grid lg:grid-cols-5">
          {workflowProcess.map((step, i) => (
            <StaggerItem
              key={step.title}
              className="relative flex flex-col border-b border-line-soft p-8 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-ink-faint">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-4 h-px w-full bg-line-soft" />
              <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-ink">{step.title}</h3>
              <p className="mt-auto pt-10 text-[0.95rem] leading-relaxed text-ink-soft">{step.description}</p>
              {i === 1 && <span className="absolute inset-x-0 bottom-0 h-1 bg-accent" />}
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-10 text-center text-ink-soft">
          Prefer to talk first?{" "}
          <a href="tel:+919490579720" className="font-medium text-accent underline underline-offset-4">
            +91 94905 79720
          </a>
        </p>
      </Container>
    </section>
  );
}
