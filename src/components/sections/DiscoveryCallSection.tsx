import Image from "next/image";
import { Check } from "lucide-react";
import AfxContactForm from "@/components/service/afx/AfxContactForm";
import ContactArt from "@/components/service/afx/ContactArt";
import { contactSection } from "@/data/servicePage";

export default function DiscoveryCallSection() {
  return (
    <div className="afx bg-white">
      <section className="relative overflow-hidden bg-white pt-[70px] pb-[110px] lg:pt-[110px] lg:pb-[130px]">
        <div className="absolute right-0 top-0 hidden h-[calc(100%-60px)] w-[29%] lg:block">
          <ContactArt />
        </div>

        <div className="relative mx-auto grid w-full max-w-[1340px] items-stretch gap-8 px-[30px] lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[20px] bg-[#0b0a1e]/45 p-9 text-white backdrop-blur-2xl sm:p-10">
            <div className="absolute inset-0 -z-10">
              <Image src="/discovery-bg.jpg" alt="" fill className="object-cover" />
            </div>

            <p className="afx-eyebrow text-white/70">{contactSection.eyebrow}</p>
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
                <p className="afx-eyebrow text-white/70">{contactSection.phoneLabel}</p>
                <a href={`tel:${contactSection.phone.replace(/[^\d+]/g, "")}`} className="mt-1.5 block text-[17px]">
                  {contactSection.phone}
                </a>
              </div>
              <div className="rounded-[14px] bg-white/15 p-4">
                <p className="afx-eyebrow text-white/70">{contactSection.emailLabel}</p>
                <a href={`mailto:${contactSection.email}`} className="mt-1.5 block break-all text-[17px]">
                  {contactSection.email}
                </a>
              </div>
            </div>
          </div>

          <AfxContactForm />
        </div>
      </section>
    </div>
  );
}
