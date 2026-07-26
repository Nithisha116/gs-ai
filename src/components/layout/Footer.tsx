import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import { services } from "@/data/services";
import { industryLinks, aboutLinks, resourceLinks } from "@/data/nav";

const footerServices = services.slice(0, 6);

export default function Footer() {
  return (
    <footer className="relative border-t border-line-soft bg-surface-lavender/40 pt-20">
      <Container>
        <div className="grid grid-cols-2 gap-10 pb-16 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-ink-soft">
              AI automation and consulting for enterprises that would rather ship systems than hire around a broken process.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-ink-soft">
              <a href="mailto:nithishareddy113@gmail.com" className="flex items-center gap-2.5 hover:text-accent">
                <Mail className="size-4" /> nithishareddy113@gmail.com
              </a>
              <a href="tel:+919490579720" className="flex items-center gap-2.5 hover:text-accent">
                <Phone className="size-4" /> +91 94905 79720
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="flex size-9 items-center justify-center rounded-full bg-white text-ink-soft transition-colors hover:text-accent">
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="flex size-9 items-center justify-center rounded-full bg-white text-ink-soft transition-colors hover:text-accent">
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                  <path d="M18.24 3h3.02l-6.6 7.54L22.5 21h-6.08l-4.76-6.24L6.2 21H3.17l7.06-8.07L2.5 3h6.24l4.3 5.7L18.24 3Zm-1.06 16.17h1.67L7.9 4.74H6.1l11.08 14.43Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Services</p>
            <ul className="mt-4 space-y-3">
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-ink-soft hover:text-accent">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm font-medium text-accent">
                  View all
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Industries</p>
            <ul className="mt-4 space-y-3">
              {industryLinks.slice(0, 6).map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`} className="text-sm text-ink-soft hover:text-accent">
                    {i.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/industries" className="text-sm font-medium text-accent">
                  View all
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Company</p>
            <ul className="mt-4 space-y-3">
              {aboutLinks.map((a) => (
                <li key={a.slug}>
                  <Link href={`/about/${a.slug}`} className="text-sm text-ink-soft hover:text-accent">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Resources</p>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((r) => (
                <li key={r.slug}>
                  <Link href={`/resources/${r.slug}`} className="text-sm text-ink-soft hover:text-accent">
                    {r.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-sm text-ink-soft hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line-soft py-8 text-sm text-ink-faint sm:flex-row">
          <p>© {new Date().getFullYear()} GrowSpark. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/resources/faq" className="hover:text-accent">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-accent">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
