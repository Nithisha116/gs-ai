import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { aboutLinks } from "@/data/nav";

export const metadata: Metadata = {
  title: "About",
  description: "Who GrowSpark is, how we work, and who we work with.",
};

export default function AboutIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A team built to ship automation, not slides."
        description="Get to know GrowSpark — our story, our leadership, our process, and how we work."
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {aboutLinks.map((item) => (
              <StaggerItem key={item.slug}>
                <Link
                  href={`/about/${item.slug}`}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-line-soft bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
                >
                  <div>
                    <span className="font-display text-xl font-semibold text-ink">{item.name}</span>
                    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">{item.description}</p>
                  </div>
                  <ArrowUpRight className="mt-6 size-5 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
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
