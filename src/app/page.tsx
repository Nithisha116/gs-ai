import Hero from "@/components/sections/Hero";
import TrustedCompanies from "@/components/sections/TrustedCompanies";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WorkflowProcess from "@/components/sections/WorkflowProcess";
import IndustriesShowcase from "@/components/sections/IndustriesShowcase";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import AutomationExamples from "@/components/sections/AutomationExamples";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import TechStack from "@/components/sections/TechStack";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { homeFaqs } from "@/data/home";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <ServicesGrid />
      <WorkflowProcess />
      <IndustriesShowcase />
      <CaseStudiesSection />
      <AutomationExamples />
      <Stats />
      <Testimonials />
      <TechStack />
      <FAQSection
        description="Straight answers to what enterprises ask before their first engagement."
        items={homeFaqs}
      />
      <CTASection />
    </>
  );
}
