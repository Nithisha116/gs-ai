"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";

const CONTACT_EMAIL = "nithishareddy113@gmail.com";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Discovery call request — ${company || name}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Service of interest: ${service}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-line-soft bg-white p-12 text-center shadow-card"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-6 font-display text-xl font-semibold text-ink">Your email client should be open</h3>
        <p className="mt-2.5 max-w-sm text-ink-soft">
          Send that message through and we&apos;ll get back to you within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-line-soft bg-white p-7 shadow-card sm:p-9">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required placeholder="Alex Morgan" />
        <Field label="Work email" name="email" type="email" required placeholder="alex@company.com" />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" required placeholder="Company name" />
        <Field label="Phone (optional)" name="phone" placeholder="+1 555 000 0000" />
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">What are you looking to automate?</span>
        <select
          name="service"
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">Tell us about the workflow</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What's manual today, and roughly how much time does it cost your team?"
          className="w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
        />
      </label>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full rounded-full bg-ink px-6 py-3.5 font-medium text-white transition-colors hover:bg-accent"
      >
        Send message
      </motion.button>
      <p className="text-center text-xs text-ink-faint">Typical response: 1 business day.</p>
    </form>
  );
}

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
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
      />
    </label>
  );
}
