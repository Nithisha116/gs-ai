import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, CalendarDays } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ContactForm from "@/components/sections/ContactForm";
import LiquidGlassBackground from "@/components/backgrounds/LiquidGlassBackground";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a discovery call with McCarthy or send us a message about your automation project.",
};

const contactFaqs = [
  { q: "What happens on a discovery call?", a: "30 minutes. We walk through the workflow you're considering automating, ask about your current systems, and tell you honestly whether it's a good fit — no slide deck." },
  { q: "Is there a minimum project size?", a: "Most engagements start around a single high-friction workflow. We'll tell you upfront if a project is too small to be worth a formal engagement." },
  { q: "Do you sign NDAs before discussing our systems?", a: "Yes, we're glad to sign an NDA before any detailed discussion of your systems or data." },
  { q: "Can you start before a full contract is signed?", a: "For most engagements, a short paid discovery phase can begin quickly, with a full statement of work following once scope is confirmed." },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16 lg:pt-48 lg:pb-20">
        <LiquidGlassBackground className="opacity-70" />
        <Container className="relative">
          <SectionHeading
            align="center"
            eyebrow="Contact"
            title="Let's talk about the workflow costing you the most."
            description="Tell us what's manual today. We'll come back with an honest read on whether — and how — to automate it."
            className="mx-auto max-w-2xl"
          />
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.08} className="flex flex-col gap-6">
              <div className="rounded-3xl border border-line-soft bg-ink p-7 text-white">
                <div className="flex items-center gap-2.5 text-sm font-medium text-white/60">
                  <CalendarDays className="size-4" />
                  Prefer to talk first?
                </div>
                <p className="mt-3 font-display text-lg font-semibold">Book a 30-minute discovery call</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Pick a slot directly on our calendar — no back-and-forth over email required.
                </p>
                <div className="mt-5 flex h-32 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-white/40">
                  Calendly scheduler embeds here
                </div>
              </div>

              <div className="space-y-5 rounded-3xl border border-line-soft bg-white p-7 shadow-card">
                <a href="mailto:nithishareddy113@gmail.com" className="flex items-center gap-3 text-ink-soft transition-colors hover:text-accent">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-soft">
                    <Mail className="size-4" />
                  </span>
                  nithishareddy113@gmail.com
                </a>
                <a href="tel:+919490579720" className="flex items-center gap-3 text-ink-soft transition-colors hover:text-accent">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-soft">
                    <Phone className="size-4" />
                  </span>
                  +91 94905 79720
                </a>
                <div className="flex items-center gap-3 text-ink-soft">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-soft">
                    <MapPin className="size-4" />
                  </span>
                  Remote-first · hubs in the US &amp; India
                </div>
                <div className="flex items-center gap-3 text-ink-soft">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-soft">
                    <Clock className="size-4" />
                  </span>
                  Typical response: 1 business day
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface-lavender/50 py-24 lg:py-32">
        <Container className="max-w-3xl">
          <SectionHeading align="center" eyebrow="FAQ" title="Before you reach out." className="mx-auto" />
          <Reveal delay={0.1} className="mt-14">
            <FaqAccordion items={contactFaqs} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
