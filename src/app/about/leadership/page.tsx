import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { leadership } from "@/data/about";

export const metadata: Metadata = {
  title: "Leadership",
  description: "The people setting the direction for McCarthy.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Operators first. Engineers always."
        description="Our leadership team has run the processes we now automate — inside logistics, SaaS, and enterprise operations."
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {leadership.map((person) => (
              <StaggerItem key={person.name}>
                <div className="flex h-full gap-5 rounded-3xl border border-line-soft bg-white p-7 shadow-card">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-surface-soft font-display text-lg font-semibold text-accent">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-ink">{person.name}</p>
                    <p className="text-sm font-medium text-accent">{person.role}</p>
                    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">{person.bio}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection secondaryLabel="See our process" secondaryHref="/about/process" />
    </>
  );
}
