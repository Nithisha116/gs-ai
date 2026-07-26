import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { techStack } from "@/data/home";

export default function TechStack() {
  return (
    <section className="bg-surface-lavender/50 py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Technology"
          title="Built on the platforms your team already trusts."
          description="We're vendor-agnostic — the right tool depends on your stack, not ours."
        />

        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {techStack.map((tech) => (
            <StaggerItem key={tech}>
              <div className="flex h-20 items-center justify-center rounded-2xl border border-line-soft bg-white px-4 text-center text-sm font-medium text-ink-soft shadow-sm transition-colors hover:text-accent">
                {tech}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
