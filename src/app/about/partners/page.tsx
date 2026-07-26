import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { partners } from "@/data/about";

export const metadata: Metadata = {
  title: "Partners",
  description: "The platforms and technology partners we build on.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="We're vendor-agnostic, by design."
        description="We build on the platforms your team already trusts — these are the ones we work with most often."
      />

      <section className="pb-24 lg:pb-32">
        <Container>
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {partners.map((p) => (
              <StaggerItem key={p.name}>
                <div className="flex h-28 flex-col items-center justify-center gap-1.5 rounded-2xl border border-line-soft bg-white text-center shadow-sm">
                  <span className="font-display font-semibold text-ink">{p.name}</span>
                  <span className="text-xs text-ink-faint">{p.category}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection secondaryLabel="View our services" secondaryHref="/services" />
    </>
  );
}
