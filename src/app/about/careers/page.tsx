import type { Metadata } from "next";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import { openRoles, cultureValues } from "@/data/about";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles and what it's like to work at GrowSpark.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build systems that outlast the meeting about them."
        description="We're a small, senior team that ships. If that sounds like your kind of work, we'd like to hear from you."
      />

      <section className="pb-20 lg:pb-24">
        <Container className="max-w-3xl">
          <SectionHeading align="center" eyebrow="How we work" title="Culture, in four sentences." className="mx-auto" />
          <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cultureValues.map((v) => (
              <StaggerItem key={v}>
                <div className="flex items-start gap-3 rounded-2xl border border-line-soft bg-white p-5 shadow-card">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  <p className="text-[0.95rem] leading-relaxed text-ink-soft">{v}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-surface-lavender/50 py-20 lg:py-28">
        <Container className="max-w-3xl">
          <SectionHeading align="center" eyebrow="Open roles" title="Where we're hiring right now." className="mx-auto" />
          <Stagger className="mt-12 divide-y divide-line-soft overflow-hidden rounded-3xl border border-line-soft bg-white">
            {openRoles.map((role) => (
              <StaggerItem key={role.title}>
                <div className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                  <div>
                    <p className="font-display font-semibold text-ink">{role.title}</p>
                    <p className="text-sm text-ink-soft">{role.location}</p>
                  </div>
                  <span className="w-fit rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-faint">
                    {role.type}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1} className="mt-10 flex justify-center">
            <Button href="mailto:nithishareddy113@gmail.com?subject=Application">Email your resume</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
