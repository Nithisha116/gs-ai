import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowRight, ArrowUp } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import { services } from "@/data/services";
import { aboutLinks } from "@/data/nav";

const footerServices = services.slice(0, 5);
const footerCompanyLinks = [
  ...aboutLinks.map((a) => ({ name: a.name, href: `/about/${a.slug}` })),
  { name: "Case Studies", href: "/resources/case-studies" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
      <span className="size-1.5 rounded-full bg-accent-soft" />
      {children}
    </p>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors duration-300 hover:text-white"
    >
      <span className="h-px w-0 bg-accent-soft transition-all duration-300 group-hover:w-2.5" />
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/footer-bg.jpg"
          alt=""
          fill
          unoptimized
          className="object-contain object-left"
        />
      </div>

      <Container className="relative pt-16 lg:pt-20">
        <div className="flex justify-end">
          <div className="max-w-xl sm:mt-6 lg:mt-10">
            <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Built to ship. Engineered to keep running.
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-white/60">
              We design, ship, and operate the automation your team runs on every day.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Book a discovery call
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:+919490579720"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white/50"
              >
                <Phone className="size-4" />
                +91 94905 79720
              </a>
              <a
                href="mailto:nithishareddy113@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white/50"
              >
                <Mail className="size-4" />
                nithishareddy113@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-28">
          <Logo variant="light" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-10 border-t border-white/10 py-12 sm:grid-cols-3 sm:ml-auto sm:max-w-2xl">
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="mt-5 space-y-3.5">
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <FooterLink href={`/services/${s.slug}`}>{s.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Company</FooterHeading>
            <ul className="mt-5 space-y-3.5">
              {footerCompanyLinks.map((a) => (
                <li key={a.name}>
                  <FooterLink href={a.href}>{a.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Social</FooterHeading>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                  <path d="M18.24 3h3.02l-6.6 7.54L22.5 21h-6.08l-4.76-6.24L6.2 21H3.17l7.06-8.07L2.5 3h6.24l4.3 5.7L18.24 3Zm-1.06 16.17h1.67L7.9 4.74H6.1l11.08 14.43Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} McCarthy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/resources/faq" className="transition-colors hover:text-white">
              FAQ
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </div>
          <a
            href="#"
            aria-label="Back to top"
            className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
