import Image from "next/image";
import { Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const examples = [
  {
    tags: ["Sales", "CRM"],
    title: "Lead Intake & Enrichment",
    inputs: "Lead Form / Email",
    auto: "Enrich → Route → CRM",
    result: "Cleaner leads. Faster handoff.",
  },
  {
    tags: ["Support", "AI"],
    title: "Support Triage",
    inputs: "Support Ticket / Chat",
    auto: "Analyze → Tag → Draft",
    result: "Faster triage. Cleaner queues.",
  },
  {
    tags: ["Finance", "Ops"],
    title: "Invoice Processing",
    inputs: "Invoice PDF / Email",
    auto: "Extract → Match → ERP",
    result: "Fewer errors. Faster close.",
  },
  {
    tags: ["Growth", "Email"],
    title: "Sales Follow-up",
    inputs: "Call Notes / CRM",
    auto: "Summarize → Task → Email",
    result: "Next steps. Follow-up ready.",
  },
  {
    tags: ["HR", "Hiring"],
    title: "Recruiting Screening",
    inputs: "Resume / Application",
    auto: "Screen → Score → Schedule",
    result: "Better shortlists. Fast booking.",
  },
  {
    tags: ["Internal", "Docs"],
    title: "Knowledge Base Bot",
    inputs: "Docs / Wiki",
    auto: "Search → Synthesize → Answer",
    result: "Fast answers. Fewer interrupts.",
  },
];

export default function AutomationExamples() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/automation-examples-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/55 to-white" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Automation examples"
          title="See what's possible."
          description="Real scenarios we've automated for teams like yours."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {examples.map((ex) => (
            <StaggerItem key={ex.title}>
              <div className="flex h-full flex-col rounded-3xl border border-line-soft bg-white/90 p-7 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="flex flex-wrap items-center gap-2">
                  {ex.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-ink">{ex.title}</h3>

                <div className="mt-5 border-t border-line-soft pt-5">
                  <dl className="space-y-3.5 text-sm">
                    <div className="flex items-start gap-4">
                      <dt className="w-16 shrink-0 font-medium uppercase tracking-wide text-ink-faint">Inputs</dt>
                      <dd className="text-ink">{ex.inputs}</dd>
                    </div>
                    <div className="flex items-start gap-4">
                      <dt className="w-16 shrink-0 font-medium uppercase tracking-wide text-ink-faint">Auto</dt>
                      <dd className="text-ink">{ex.auto}</dd>
                    </div>
                    <div className="flex items-start gap-4">
                      <dt className="w-16 shrink-0 font-medium uppercase tracking-wide text-ink-faint">Result</dt>
                      <dd className="flex items-center gap-1.5 font-medium text-accent">
                        <Sparkles className="size-3.5 shrink-0" />
                        {ex.result}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
