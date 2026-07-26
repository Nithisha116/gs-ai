import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { articles, caseStudies, guides, downloads } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description: "Articles, case studies, guides, FAQs, and downloads on AI automation and consulting.",
};

export default function ResourcesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Everything we've learned building automation, in one place."
        description="Articles, guides, case studies, and templates — written by the team that ships the work."
      />

      <section className="pb-24 lg:pb-32">
        <Container className="space-y-20">
          <div>
            <div className="flex items-end justify-between gap-6">
              <SectionHeading eyebrow="Articles" title="Perspectives on automation and AI." />
              <Link href="/resources/articles" className="hidden shrink-0 text-sm font-medium text-accent sm:block">
                View all articles
              </Link>
            </div>
            <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {articles.slice(0, 3).map((a) => (
                <StaggerItem key={a.slug}>
                  <Link href={`/resources/articles/${a.slug}`} className="group flex h-full flex-col rounded-3xl border border-line-soft bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">{a.category}</span>
                    <h3 className="mt-3 flex-1 font-display text-lg font-semibold leading-snug text-ink">{a.title}</h3>
                    <span className="mt-4 flex items-center justify-between text-sm text-ink-faint">
                      {a.readTime} read
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <div className="flex items-end justify-between gap-6">
              <SectionHeading eyebrow="Case studies" title="Real projects, measured results." />
              <Link href="/resources/case-studies" className="hidden shrink-0 text-sm font-medium text-accent sm:block">
                View all case studies
              </Link>
            </div>
            <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.slice(0, 3).map((cs) => (
                <StaggerItem key={cs.slug}>
                  <Link href={`/resources/case-studies/${cs.slug}`} className="group flex h-full flex-col rounded-3xl border border-line-soft bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">{cs.industry}</span>
                    <span className="mt-3 font-display text-2xl font-bold text-ink">{cs.metric}</span>
                    <span className="text-sm text-ink-soft">{cs.metricLabel}</span>
                    <h3 className="mt-3 flex-1 font-display text-base font-semibold leading-snug text-ink">{cs.title}</h3>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <div className="flex items-end justify-between gap-6">
              <SectionHeading eyebrow="Guides" title="In-depth guides for planning automation." />
              <Link href="/resources/guides" className="hidden shrink-0 text-sm font-medium text-accent sm:block">
                View all guides
              </Link>
            </div>
            <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {guides.slice(0, 2).map((g) => (
                <StaggerItem key={g.slug}>
                  <Link href={`/resources/guides/${g.slug}`} className="group flex h-full flex-col rounded-3xl border border-line-soft bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">{g.title}</h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">{g.description}</p>
                    <span className="mt-4 text-sm text-ink-faint">{g.readTime} read · {g.chapters.length} chapters</span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Link href="/resources/faq" className="flex flex-col justify-between rounded-3xl bg-ink p-8 text-white transition-transform duration-300 hover:-translate-y-1">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50">FAQ</span>
                <h3 className="mt-3 font-display text-xl font-semibold">Answers to what we hear most often.</h3>
              </div>
              <ArrowUpRight className="mt-6 size-5" />
            </Link>
            <Link href="/resources/downloads" className="flex flex-col justify-between rounded-3xl border border-line-soft bg-white p-8 shadow-card transition-transform duration-300 hover:-translate-y-1">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">Downloads</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{downloads.length} templates and frameworks, ready to use.</h3>
              </div>
              <ArrowUpRight className="mt-6 size-5 text-ink-faint" />
            </Link>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
