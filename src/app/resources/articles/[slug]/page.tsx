import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";
import LiquidGlassBackground from "@/components/backgrounds/LiquidGlassBackground";
import { articles } from "@/data/resources";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16 lg:pt-48 lg:pb-20">
        <LiquidGlassBackground className="opacity-70" />
        <Container className="relative max-w-3xl">
          <Reveal>
            <Link href="/resources/articles" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-accent">
              <ArrowLeft className="size-4" /> All articles
            </Link>
          </Reveal>
          <Reveal delay={0.05} className="mt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">{article.category}</span>
          </Reveal>
          <Reveal delay={0.08} className="mt-3">
            <h1 className="text-balance font-display text-[2rem] font-semibold leading-tight text-ink sm:text-[2.75rem]">
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12} className="mt-5 flex items-center gap-3 text-sm text-ink-faint">
            <span>{article.readTime} read</span>
            <span>·</span>
            <span>
              {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {article.sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 0.05}>
                <h2 className="font-display text-xl font-semibold text-ink">{s.heading}</h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-soft">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection secondaryLabel="Read more articles" secondaryHref="/resources/articles" />
    </>
  );
}
