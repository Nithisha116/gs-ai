import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { articles } from "@/data/resources";

export const metadata: Metadata = {
  title: "Articles",
  description: "Perspectives on AI, automation, and enterprise operations.",
};

export default function ArticlesIndexPage() {
  return (
    <>
      <PageHero eyebrow="Articles" title="Perspectives on AI and automation." description="Short, opinionated reads for operators planning their next automation move." />

      <section className="pb-24 lg:pb-32">
        <Container>
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <StaggerItem key={a.slug}>
                <Link href={`/resources/articles/${a.slug}`} className="group flex h-full flex-col rounded-3xl border border-line-soft bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{a.category}</span>
                  <h3 className="mt-4 flex-1 font-display text-lg font-semibold leading-snug text-ink">{a.title}</h3>
                  <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-soft">{a.excerpt}</p>
                  <span className="mt-5 flex items-center justify-between text-sm text-ink-faint">
                    {a.readTime} read
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
