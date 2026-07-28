"use client";

import { useState } from "react";
import { CheckCircle2, PhoneCall } from "lucide-react";
import AfxButton from "./AfxButton";
import { contactSection } from "@/data/servicePage";

const CONTACT_EMAIL = "nithishareddy113@gmail.com";

const labelClass = "afx-eyebrow block text-black/55";
const inputClass =
  "mt-2 w-full rounded-[10px] border border-black/10 bg-white px-4 py-3 text-[15px] text-black outline-none transition-colors duration-200 placeholder:text-black/35 focus:border-black/40";

export default function AfxContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { form } = contactSection;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "");

    const subject = `Discovery call request — ${get("company") || get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Business email: ${get("email")}`,
      `Company: ${get("company")}`,
      `Subject: ${get("subject")}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <div className="rounded-[20px] bg-afx-cream p-8 sm:p-10">
      <div className="flex flex-col items-center text-center">
        <PhoneCall className="size-8 text-black" strokeWidth={1.2} />
        <h3 className="mt-5 text-[28px] leading-tight text-black">{form.title}</h3>
        <p className="mt-4 max-w-md text-[15px] leading-[1.65] text-afx-muted">{form.description}</p>
      </div>

      {submitted ? (
        <div className="mt-10 flex flex-col items-center rounded-[14px] border border-black/10 bg-white p-10 text-center">
          <CheckCircle2 className="size-8 text-afx-purple" strokeWidth={1.4} />
          <p className="mt-5 text-[19px] text-black">Your email client should be open</p>
          <p className="mt-2 max-w-sm text-[15px] leading-[1.65] text-afx-muted">
            Send that message through and we&apos;ll get back to you within one business day.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-9 space-y-5">
          <div>
            <label className={labelClass} htmlFor="afx-name">
              Name
            </label>
            <input id="afx-name" name="name" required className={inputClass} />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="afx-phone">
                Phone
              </label>
              <input id="afx-phone" name="phone" type="tel" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="afx-email">
                Business Email
              </label>
              <input id="afx-email" name="email" type="email" required className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="afx-company">
                Company name
              </label>
              <input id="afx-company" name="company" className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="afx-subject">
                Subject
              </label>
              <select id="afx-subject" name="subject" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select
                </option>
                {form.subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass} htmlFor="afx-message">
              Message
            </label>
            <textarea
              id="afx-message"
              name="message"
              rows={4}
              placeholder="Tell us about what you want to automate..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <p className="text-[14px] text-afx-muted">{form.note}</p>

          <AfxButton type="submit">{form.submit}</AfxButton>
        </form>
      )}
    </div>
  );
}
