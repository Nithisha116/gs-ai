import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LiquidGlassBackground from "@/components/backgrounds/LiquidGlassBackground";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 lg:pt-48 lg:pb-20">
      <LiquidGlassBackground className="opacity-70" />
      <Container className="relative">
        <SectionHeading align="center" eyebrow={eyebrow} title={title} description={description} className="mx-auto max-w-3xl" />
      </Container>
    </section>
  );
}
