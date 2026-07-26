import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { homeFaqs } from "@/data/home";
import { resourceFaqs } from "@/data/resources";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to the questions we hear most often.",
};

const allFaqs = [...homeFaqs, ...resourceFaqs];

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions we hear most often." description="If your question isn't here, our team will answer it directly on a discovery call." />

      <section className="pb-24 lg:pb-32">
        <Container className="max-w-3xl">
          <Reveal>
            <FaqAccordion items={allFaqs} />
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
