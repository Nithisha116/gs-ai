import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { homeTestimonials } from "@/data/home";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading align="center" eyebrow="Client voices" title="What operators say after we ship." />

        <Stagger className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {homeTestimonials.map((t) => (
            <StaggerItem key={t.author}>
              <div className="flex h-full flex-col rounded-3xl border border-line-soft bg-white p-8 shadow-card">
                <Quote className="size-7 text-accent/40" />
                <p className="mt-5 flex-1 text-lg leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="font-medium text-ink">{t.author}</p>
                  <p className="text-sm text-ink-soft">{t.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
