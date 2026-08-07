"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { caseStudies } from "@/data/resources";

const featured = caseStudies.slice(0, 4);

const cardThemes = [
  { bg: "#D8C6FB", chip: "bg-white/60", stat: "bg-white/45" },
  { bg: "#AFDBFE", chip: "bg-white/55", stat: "bg-white/40" },
  { bg: "#93F2AC", chip: "bg-white/60", stat: "bg-white/45" },
  { bg: "#FBB4D8", chip: "bg-white/55", stat: "bg-white/40" },
];

const TOP_BASE = 6.5; // rem — clears the floating navbar
const TOP_STEP = 5.75; // rem — height of the "peek" band left exposed per card

function LogoMark({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink font-display text-sm font-bold text-white">
        {name.charAt(0)}
      </span>
      <span className="font-display text-sm font-semibold text-ink sm:text-base">{name}</span>
    </div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Proof &amp; credibility"
          title="Proven results."
          description="Real outcomes from live McCarthy engagements — we measure impact, not activity."
          className="mx-auto"
        />

        <div className="relative mt-16 pb-16 lg:mt-20">
          {featured.map((cs, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <div
                key={cs.slug}
                className="sticky"
                style={{ top: `${TOP_BASE + index * TOP_STEP}rem`, zIndex: index + 1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-8 overflow-hidden rounded-4xl border border-black/3 p-7 shadow-card-hover sm:p-9 lg:rounded-[2.5rem] lg:p-12"
                  style={{ backgroundColor: theme.bg }}
                >
                  {/* Header: index, title, client mark */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="font-display text-lg font-semibold text-ink/35 sm:text-xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="max-w-md font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
                        {cs.title}
                      </h3>
                    </div>
                    <LogoMark name={cs.logoName} />
                  </div>

                  {/* Badges */}
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className={`rounded-full ${theme.chip} px-3.5 py-1.5 text-xs font-medium uppercase tracking-wide text-ink-soft backdrop-blur-sm`}>
                      Case study
                    </span>
                    <span className={`rounded-full ${theme.chip} px-3.5 py-1.5 text-xs font-medium uppercase tracking-wide text-ink-soft backdrop-blur-sm`}>
                      {cs.industry}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="mt-8 grid grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-[260px_1fr] lg:gap-12">
                    <div className={`flex flex-col items-start justify-center rounded-2xl ${theme.stat} p-7 lg:p-8`}>
                      <ArrowUp className="size-9 text-ink/70" strokeWidth={1.5} />
                      <span className="mt-5 font-display text-4xl font-bold leading-none text-ink sm:text-[2.75rem]">
                        {cs.metric}
                      </span>
                      <span className="mt-2 text-sm leading-snug text-ink-soft">{cs.metricLabel}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
                      <div className="border-l-2 border-ink/15 pl-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Problem</span>
                        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{cs.challenge}</p>
                      </div>
                      <div className="border-l-2 border-ink/15 pl-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Approach</span>
                        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{cs.solution}</p>
                      </div>
                      <div className="border-l-2 border-ink/15 pl-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Outcome</span>
                        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{cs.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex justify-end lg:mt-10">
                    <Link
                      href={`/resources/case-studies/${cs.slug}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
                    >
                      Read full case
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
