import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import LiquidGlassBackground from "@/components/backgrounds/LiquidGlassBackground";
import CTABackground from "@/components/backgrounds/CTABackground";

export default function CTASection({
  title = "Ready to see where automation pays off first?",
  description = "Book a discovery call. We'll map your highest-friction workflow and tell you honestly whether automation is the right move.",
  primaryLabel = "Book a discovery call",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  variant = "default",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "default" | "premium";
}) {
  const isPremium = variant === "premium";

  return (
    <section className={isPremium ? "relative overflow-hidden py-32 lg:py-44" : "relative overflow-hidden py-24 lg:py-32"}>
      {isPremium ? <CTABackground /> : <LiquidGlassBackground className="opacity-70" />}
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
          {isPremium ? (
            <div className="group relative inline-block">
              <div className="absolute inset-0 -z-10 rounded-full bg-accent/35 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <Button href={primaryHref} size="lg">
                {primaryLabel}
              </Button>
            </div>
          ) : (
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
          )}
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
