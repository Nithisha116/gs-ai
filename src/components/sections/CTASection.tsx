import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import LiquidGlassBackground from "@/components/backgrounds/LiquidGlassBackground";

export default function CTASection({
  title = "Ready to see where automation pays off first?",
  description = "Book a discovery call. We'll map your highest-friction workflow and tell you honestly whether automation is the right move.",
  primaryLabel = "Book a discovery call",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <LiquidGlassBackground className="opacity-70" />
      <Container className="relative max-w-2xl text-center">
        <Reveal>
          <h2 className="text-balance font-display text-[2.25rem] font-semibold leading-[1.1] text-ink sm:text-[2.75rem]">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{description}</p>
        </Reveal>
        <Reveal delay={0.16} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={primaryHref} size="lg">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} size="lg" variant="secondary" icon={false}>
              {secondaryLabel}
            </Button>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
