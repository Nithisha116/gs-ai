import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/FaqAccordion";

export default function FAQSection({
  eyebrow = "FAQ",
  title = "Questions we hear before every engagement.",
  description,
  items,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section className="py-24 lg:py-32">
      <Container className="max-w-3xl">
        <SectionHeading align="center" eyebrow={eyebrow} title={title} description={description} />
        <Reveal delay={0.1} className="mt-14">
          <FaqAccordion items={items} />
        </Reveal>
      </Container>
    </section>
  );
}
