import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/templates/IndustryPage";
import { industries, getIndustryBySlug } from "@/data/industries";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} Automation`,
    description: industry.heroDescription,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  return <IndustryPage industry={industry} />;
}
