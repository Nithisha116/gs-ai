"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const CONTACT_EMAIL = "nithishareddy113@gmail.com";
const CONTACT_PHONE_DISPLAY = "+91 94905 79720";
const CONTACT_PHONE_HREF = "+919490579720";

const checklist = [
  "Pinpoint the highest-impact workflow to automate first",
  "Walk through your current tools and tech stack",
  "Leave with a rough timeline and approach",
];

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink-soft">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white px-4 py-3.5 text-ink outline-none transition-colors focus:border-accent"
      />
    </label>
  );
}

export default function DiscoveryCallSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const company = String(data.get("company") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    const mailSubject = `Discovery call request — ${company || name}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Business email: ${email}`,
      `Phone: ${phone}`,
      `Subject: ${subject}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left — dark artwork panel */}
        <div className="relative flex flex-col justify-between gap-14 overflow-hidden px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-20">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.06 }}
            animate={{ scale: [1.06, 1.16, 1.06], x: [0, -18, 0], y: [0, 12, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/discovery-bg.jpg" alt="" fill priority={false} sizes="50vw" className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c0b52]/30 via-[#2c0f6b]/10 to-black/35" aria-hidden />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/55 to-transparent" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/65 to-transparent" aria-hidden />

          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Get started</span>
            <h2 className="mt-4 max-w-md text-balance font-display text-4xl font-semibold leading-[1.1] text-white sm:text-[2.75rem]">
              Let&apos;s talk about your workflow.
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-white/70">
              Book a discovery call or send us a message. We&apos;ll get back to you within one business day.
            </p>
          </div>

          <div className="relative">
            <div className="h-px w-full bg-white/15" />
            <p className="mt-8 max-w-sm leading-relaxed text-white/80">
              30 minutes, no pitch. Just a focused conversation about where automation could help.
            </p>
            <ul className="mt-6 space-y-3.5">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-white/85">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-soft/25 text-accent-soft">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-sm">
              <span className="text-xs font-medium uppercase tracking-wide text-white/50">Call us at</span>
              <a href={`tel:${CONTACT_PHONE_HREF}`} className="mt-1 block font-medium text-white transition-colors hover:text-accent-soft">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-sm">
              <span className="text-xs font-medium uppercase tracking-wide text-white/50">Email us</span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-1 block truncate font-medium text-white transition-colors hover:text-accent-soft"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Right — form panel */}
        <div className="flex items-center justify-center bg-[#faf9f7] px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <div className="w-full max-w-lg">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center py-12 text-center"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <CheckCircle2 className="size-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">Your email client should be open</h3>
                <p className="mt-2.5 max-w-sm text-ink-soft">
                  Send that message through and we&apos;ll get back to you within one business day.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="flex flex-col items-center text-center">
                  <span className="flex size-16 items-center justify-center rounded-full border border-line-soft bg-white text-ink shadow-sm">
                    <Phone className="size-6" />
                  </span>
                  <h3 className="mt-6 text-balance font-display text-2xl font-semibold text-ink sm:text-[1.75rem]">
                    Schedule a discovery call
                  </h3>
                  <p className="mt-3 max-w-sm leading-relaxed text-ink-soft">
                    Tell us about your goals, and we&apos;ll tailor our expertise to fit your needs. Fill out the form below, and we&apos;ll get back to you soon.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                  <Field label="Name" name="name" required placeholder="Your name" />
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Phone" name="phone" placeholder="+1 555 000 0000" />
                    <Field label="Business email" name="email" type="email" required placeholder="you@company.com" />
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field label="Company name" name="company" placeholder="Company name" />
                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink-soft">Subject</span>
                      <select
                        name="subject"
                        defaultValue=""
                        className="w-full rounded-xl border border-line bg-white px-4 py-3.5 text-ink outline-none transition-colors focus:border-accent"
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink-soft">Message</span>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about what you want to automate…"
                      className="w-full resize-none rounded-xl border border-line bg-white px-4 py-3.5 text-ink outline-none transition-colors focus:border-accent"
                    />
                  </label>

                  <p className="text-xs text-ink-faint">We&apos;ll only use your info to respond to your inquiry.</p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-medium text-white transition-colors hover:bg-accent"
                  >
                    Send message
                    <ArrowRight className="size-4" />
                  </motion.button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
