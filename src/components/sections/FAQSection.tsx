import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";

export default function FAQSection({
  eyebrow = "FAQ",
  title = "Questions we hear before every engagement.",
  description,
  items,
  ctaLabel = "Book a discovery call",
  ctaHref = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: { q: string; a: string }[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                <span className="size-1.5 rounded-full bg-accent" />
                {eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-[2.25rem] leading-[1.1] font-semibold text-ink sm:text-[2.75rem]">
                {title}
              </h2>
            </Reveal>
            {description && (
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">{description}</p>
              </Reveal>
            )}
            <Reveal delay={0.15} className="mt-10 lg:mt-auto lg:pt-16">
              <Button href={ctaHref} size="lg">
                {ctaLabel}
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <FaqAccordion items={items} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
