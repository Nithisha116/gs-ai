import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import Icon from "@/components/ui/Icon";
import AfxButton from "@/components/service/afx/AfxButton";
import AfxAccordion from "@/components/service/afx/AfxAccordion";
import AfxContactForm from "@/components/service/afx/AfxContactForm";
import BrandLogo from "@/components/service/afx/BrandLogo";
import ContactArt from "@/components/service/afx/ContactArt";
import ExamplesArt from "@/components/service/afx/ExamplesArt";
import HeroArt from "@/components/service/afx/HeroArt";
import SubNav from "@/components/service/afx/SubNav";
import TestimonialCarousel from "@/components/service/afx/TestimonialCarousel";
import {
  contactSection,
  detailFor,
  examplesSection,
  faqSection,
  processSection,
  stackSection,
  subNav,
  testimonialsSection,
} from "@/data/servicePage";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

/** Page gutter: 1280px of content with a 30px page margin, as in the design. */
function Wrap({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1340px] px-[30px]", className)}>{children}</div>;
}

function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return <p className={cn("afx-eyebrow", className)}>{children}</p>;
}

export default function ServicePage({ service }: { service: Service }) {
  const detail = detailFor(service);

  return (
    <div className="afx bg-white">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-afx-lavender">
        <div className="relative rounded-bl-[40px] bg-white pt-[150px] pb-14 lg:pt-[186px] lg:pb-[70px]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[210px] bg-gradient-to-b from-[#e5e0ff] via-[#f3f1ff] to-white" />
          <Wrap className="relative">
            <p className="flex items-center gap-2 text-[15px]">
              <Sparkles className="size-4" strokeWidth={1.6} />
              {detail.heroEyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl text-[40px] font-normal leading-[1.06] tracking-[-0.02em] sm:text-[52px] lg:text-[60px] lg:leading-[66px] lg:tracking-[-1px]">
              {service.name}
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-[1.5] lg:text-[20px]">{detail.heroLead}</p>
            <div className="mt-9 flex flex-wrap gap-4 lg:mt-11">
              <AfxButton href={detail.primaryCta.href}>{detail.primaryCta.label}</AfxButton>
              <AfxButton href={detail.secondaryCta.href} variant="outline">
                {detail.secondaryCta.label}
              </AfxButton>
            </div>
          </Wrap>
        </div>

        {/* Docked, sticky section nav */}
        <div className="sticky top-[100px] z-30 hidden lg:block">
          <div className="relative">
            <div className="absolute inset-y-0 left-[250px] right-0 rounded-bl-[40px] bg-white" />
            <span
              className="afx-notch afx-notch-tr left-[210px] top-0 bg-white"
              style={{ ["--afx-notch-size" as string]: "40px" }}
            />
            <Wrap className="relative py-6">
              <SubNav items={subNav} />
            </Wrap>
          </div>
        </div>

        {/* Hero artwork + headline stat */}
        <div className="relative h-[440px] overflow-hidden sm:h-[560px] lg:h-[680px]">
          <HeroArt className="absolute -right-[4%] -top-[16%] h-[132%] w-[112%]" />

          <Wrap className="relative flex h-full items-end pb-[86px] lg:pb-[110px]">
            <div className="w-full max-w-[420px] rounded-[20px] bg-white/70 p-8 backdrop-blur-xl">
              <Eyebrow className="text-black/60">{detail.stat.eyebrow}</Eyebrow>
              <div className="mt-4 flex items-center gap-5">
                <span className="whitespace-nowrap text-[34px] font-normal leading-none tracking-tight">
                  {detail.stat.value}
                </span>
                <span className="whitespace-pre-line border-l border-black/15 pl-5 text-[15px] leading-[1.35]">
                  {detail.stat.caption}
                </span>
              </div>
              <Eyebrow className="mt-5 text-black/60">{detail.stat.footnote}</Eyebrow>
            </div>
          </Wrap>

          {/* Stepped corner into the section below */}
          <div className="absolute bottom-0 left-0 h-[70px] w-[230px] rounded-tr-[40px] bg-white" />
        </div>
      </section>

      {/* ── Expertise ────────────────────────────────────────── */}
      <section id="expertise" className="scroll-mt-[120px] bg-white py-[110px] lg:py-[150px]">
        <Wrap className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)] lg:gap-24">
          <div>
            <Eyebrow>{detail.expertise.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-[34px] leading-[1.08] sm:text-[42px] lg:text-[46px] lg:leading-[46px]">
              {detail.expertise.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="mt-8 max-w-[560px] space-y-6">
              {detail.expertise.paragraphs.map((p) => (
                <p key={p} className="text-[18px] leading-[1.6] text-afx-muted">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="self-start rounded-[20px] border border-black/10 p-8 lg:mt-16">
            <Eyebrow className="text-black/60">{detail.expertise.standardTitle}</Eyebrow>
            <div className="mt-6 border-t border-black/10">
              {detail.expertise.standards.map((s) => (
                <div key={s.label} className="flex items-center gap-4 py-[18px]">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-afx-purple/10 text-afx-purple">
                    <Icon name={s.icon} className="size-4" />
                  </span>
                  <span className="text-[17px]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* ── Deliverables ─────────────────────────────────────── */}
      <section id="deliverables" className="relative scroll-mt-[120px] bg-afx-cream">
        <div className="absolute left-0 top-0 h-[70px] w-[270px] rounded-br-[40px] bg-white" />
        <span
          className="afx-notch afx-notch-tl left-[270px] top-0 bg-white"
          style={{ ["--afx-notch-size" as string]: "40px" }}
        />
        <div className="absolute bottom-0 left-0 h-[70px] w-[270px] rounded-tr-[40px] bg-white" />
        <span
          className="afx-notch afx-notch-bl left-[270px] bottom-0 bg-white"
          style={{ ["--afx-notch-size" as string]: "40px" }}
        />

        <Wrap className="relative py-[110px] lg:py-[150px]">
          <Eyebrow>{detail.deliverables.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-[34px] leading-[1.08] sm:text-[42px] lg:text-[46px] lg:leading-[46px]">
            {detail.deliverables.title}
          </h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {detail.deliverables.columns.map((col) => (
              <div key={col.title}>
                <Eyebrow className="text-black/60">{col.no}</Eyebrow>
                <h3 className="mt-3 text-[20px] leading-7">{col.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.55] text-afx-muted">{col.description}</p>
                <div className="mt-6 space-y-3 border-t border-black/10 pt-5">
                  {col.items.map((item) => (
                    <p key={item} className="flex items-center gap-3 text-[15px]">
                      <Check className="size-4 shrink-0 text-afx-purple" strokeWidth={2.4} />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section id="process" className="scroll-mt-[120px] bg-white py-[110px] lg:py-[140px]">
        <Wrap>
          <Eyebrow>{processSection.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-[34px] leading-[1.08] sm:text-[42px] lg:text-[46px] lg:leading-[46px]">
            {processSection.title}
          </h2>
          <p className="mt-4 max-w-3xl text-[16px] leading-[1.6] text-afx-muted">{processSection.description}</p>

          <div className="mt-14 grid divide-y divide-black/10 overflow-hidden rounded-[20px] border border-black/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {processSection.steps.map((step) => (
              <div key={step.step} className="flex flex-col p-8 lg:min-h-[300px]">
                <Eyebrow className="text-black/60">{step.step}</Eyebrow>
                <h3 className="mt-5 border-t border-black/10 pt-6 text-[20px] leading-7">{step.title}</h3>
                <p className="mt-8 text-[15px] leading-[1.55] text-afx-muted lg:mt-auto lg:pt-10">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Wrap>

        {/* Our stack */}
        <Wrap className="mt-12">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-6 rounded-[20px] border border-black/10 px-8 py-6">
            <span className="border-black/10 pr-8 text-[17px] lg:border-r">{stackSection.label}</span>
            {stackSection.brands.map((brand) => (
              <BrandLogo key={brand} name={brand} />
            ))}
          </div>
        </Wrap>
      </section>

      {/* ── Examples ─────────────────────────────────────────── */}
      <section id="examples" className="relative scroll-mt-[120px] overflow-hidden py-[110px] lg:py-[130px]">
        <ExamplesArt />
        <div className="absolute left-0 top-0 h-[80px] w-[270px] rounded-br-[40px] bg-white" />
        <span
          className="afx-notch afx-notch-tl left-[270px] top-0 bg-white"
          style={{ ["--afx-notch-size" as string]: "40px" }}
        />

        <Wrap className="relative">
          <Eyebrow>{examplesSection.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-[34px] leading-[1.08] sm:text-[42px] lg:text-[46px] lg:leading-[46px]">
            {examplesSection.title}
          </h2>
          <p className="mt-3 text-[16px] text-black/70">{examplesSection.description}</p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {examplesSection.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-[20px] bg-white/70 p-7 shadow-[0_20px_60px_-30px_rgba(10,20,80,0.45)] ring-1 ring-white/50 backdrop-blur-xl"
              >
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="afx-eyebrow rounded-full bg-white px-3 py-1.5 text-black/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-6 text-[22px] leading-tight">{card.title}</h3>
                <div className="mt-5 space-y-3 border-t border-black/10 pt-5">
                  <ExampleRow label="Inputs" value={card.inputs} />
                  <ExampleRow label="Auto" value={card.auto.join("  →  ")} />
                  <ExampleRow
                    label="Result"
                    value={
                      <span className="flex items-center gap-2 text-afx-purple">
                        <Sparkles className="size-3.5 shrink-0" strokeWidth={1.8} />
                        {card.result}
                      </span>
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="bg-white py-[110px] lg:py-[130px]">
        <h2 className="text-center text-[34px] leading-[1.08] sm:text-[42px] lg:text-[46px] lg:leading-[46px]">
          {testimonialsSection.title}
        </h2>
        <div className="mt-14">
          <TestimonialCarousel items={testimonialsSection.items} />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-white pb-[40px] lg:pb-[60px]">
        <Wrap className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col">
            <Eyebrow>{faqSection.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[34px] leading-[1.08] sm:text-[42px] lg:text-[46px] lg:leading-[46px]">
              {faqSection.title}
            </h2>
            <p className="mt-3 max-w-md text-[16px] leading-[1.6] text-afx-muted">{faqSection.description}</p>
            <div className="mt-10 lg:mt-auto lg:pt-16">
              <AfxButton href={faqSection.cta.href}>{faqSection.cta.label}</AfxButton>
            </div>
          </div>

          <AfxAccordion items={faqSection.items} />
        </Wrap>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-[70px] pb-[110px] lg:pt-[110px] lg:pb-[130px]">
        <div className="absolute right-0 top-0 hidden h-[calc(100%-60px)] w-[29%] lg:block">
          <ContactArt />
        </div>

        <Wrap className="relative grid items-stretch gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[20px] bg-[#0b0a1e]/45 p-9 text-white backdrop-blur-2xl sm:p-10">
            <div className="absolute inset-0 -z-10">
              <Image src="/discovery-bg.jpg" alt="" fill className="object-cover" />
            </div>
            <Eyebrow className="text-white/70">{contactSection.eyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-md text-[34px] leading-[1.08] sm:text-[42px] lg:text-[46px] lg:leading-[46px]">
              {contactSection.title}
            </h2>
            <div className="mt-5 text-[16px] leading-[1.6]">
              {contactSection.subtitle.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-14 border-t border-white/25 pt-8 lg:mt-24">
              <p className="text-[16px] leading-[1.6]">{contactSection.body}</p>
              <div className="mt-7 space-y-3">
                {contactSection.bullets.map((b) => (
                  <p key={b} className="flex items-center gap-3 text-[16px]">
                    <Check className="size-4 shrink-0 text-[#b79bff]" strokeWidth={2.4} />
                    {b}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[14px] bg-white/15 p-4">
                <Eyebrow className="text-white/70">{contactSection.phoneLabel}</Eyebrow>
                <a href={`tel:${contactSection.phone.replace(/[^\d+]/g, "")}`} className="mt-1.5 block text-[17px]">
                  {contactSection.phone}
                </a>
              </div>
              <div className="rounded-[14px] bg-white/15 p-4">
                <Eyebrow className="text-white/70">{contactSection.emailLabel}</Eyebrow>
                <a href={`mailto:${contactSection.email}`} className="mt-1.5 block break-all text-[17px]">
                  {contactSection.email}
                </a>
              </div>
            </div>
          </div>

          <AfxContactForm />
        </Wrap>
      </section>
    </div>
  );
}

function ExampleRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[74px_1fr] items-baseline gap-4">
      <span className="afx-eyebrow text-black/50">{label}</span>
      <span className="text-[15px]">{value}</span>
    </div>
  );
}
