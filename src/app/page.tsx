import Hero from "@/components/sections/Hero";
import TrustedCompanies from "@/components/sections/TrustedCompanies";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AutomationExamples from "@/components/sections/AutomationExamples";
import WorkflowProcess from "@/components/sections/WorkflowProcess";
import IndustriesShowcase from "@/components/sections/IndustriesShowcase";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import Testimonials from "@/components/sections/Testimonials";
import TechStack from "@/components/sections/TechStack";
import DiscoveryCallSection from "@/components/sections/DiscoveryCallSection";
import FAQSection from "@/components/sections/FAQSection";
import { homeFaqs } from "@/data/home";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <ServicesGrid />
      <AutomationExamples />
      <WorkflowProcess />
      <IndustriesShowcase />
      <CaseStudiesSection />
      <Testimonials />
      <TechStack />
      <DiscoveryCallSection />
      <FAQSection
        description="Straight answers to what enterprises ask before their first engagement."
        items={homeFaqs}
      />
    </>
  );
}
