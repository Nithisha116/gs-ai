import type { Metadata } from "next";
import { Download as DownloadIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { downloads } from "@/data/resources";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Templates and frameworks you can use right away.",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero eyebrow="Downloads" title="Templates and frameworks, ready to use." description="The same tools we use internally to scope and evaluate automation projects." />

      <section className="pb-24 lg:pb-32">
        <Container>
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {downloads.map((d) => (
              <StaggerItem key={d.title}>
                <a
                  href={`mailto:nithishareddy113@gmail.com?subject=${encodeURIComponent("Download request: " + d.title)}`}
                  className="group flex h-full flex-col rounded-3xl border border-line-soft bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
                >
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-surface-soft text-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <DownloadIcon className="size-4.5" />
                  </span>
                  <span className="mt-5 w-fit rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-faint">
                    {d.type}
                  </span>
                  <h3 className="mt-4 flex-1 font-display text-lg font-semibold leading-snug text-ink">{d.title}</h3>
                  <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-soft">{d.description}</p>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
