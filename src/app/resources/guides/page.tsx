import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { guides } from "@/data/resources";

export const metadata: Metadata = {
  title: "Guides",
  description: "Practical, in-depth guides to planning automation.",
};

export default function GuidesIndexPage() {
  return (
    <>
      <PageHero eyebrow="Guides" title="Practical guides for planning automation." description="Longer-form guides for the decisions that come before a build starts." />

      <section className="pb-24 lg:pb-32">
        <Container>
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {guides.map((g) => (
              <StaggerItem key={g.slug}>
                <Link href={`/resources/guides/${g.slug}`} className="group flex h-full flex-col rounded-3xl border border-line-soft bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                  <h3 className="font-display text-xl font-semibold leading-snug text-ink">{g.title}</h3>
                  <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{g.description}</p>
                  <span className="mt-5 flex items-center justify-between text-sm text-ink-faint">
                    {g.readTime} read · {g.chapters.length} chapters
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
