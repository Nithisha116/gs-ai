import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import CTASection from "@/components/sections/CTASection";
import LiquidGlassBackground from "@/components/backgrounds/LiquidGlassBackground";
import { guides } from "@/data/resources";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.description };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16 lg:pt-48 lg:pb-20">
        <LiquidGlassBackground className="opacity-70" />
        <Container className="relative max-w-3xl">
          <Reveal>
            <Link href="/resources/guides" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-accent">
              <ArrowLeft className="size-4" /> All guides
            </Link>
          </Reveal>
          <Reveal delay={0.05} className="mt-6">
            <h1 className="text-balance font-display text-[2rem] font-semibold leading-tight text-ink sm:text-[2.75rem]">{guide.title}</h1>
          </Reveal>
          <Reveal delay={0.1} className="mt-5 max-w-xl">
            <p className="text-lg leading-relaxed text-ink-soft">{guide.description}</p>
          </Reveal>
          <Reveal delay={0.14} className="mt-4 text-sm text-ink-faint">
            {guide.readTime} read · {guide.chapters.length} chapters
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container className="max-w-3xl">
          <Stagger className="space-y-0">
            {guide.chapters.map((c, i) => (
              <StaggerItem key={c.title}>
                <div className="flex gap-6 border-l-2 border-line-soft pb-10 pl-8 last:pb-0">
                  <div className="-ml-[41px] flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold text-ink">{c.title}</p>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{c.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection title="Want us to walk through this with your team?" secondaryLabel="See more guides" secondaryHref="/resources/guides" />
    </>
  );
}
