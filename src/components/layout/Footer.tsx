import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import { services } from "@/data/services";
import { industryLinks, aboutLinks, resourceLinks } from "@/data/nav";

const footerServices = services.slice(0, 6);

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink">
      <span className="size-1.5 rounded-full bg-accent" />
      {children}
    </p>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors duration-300 hover:text-accent"
    >
      <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-2.5" />
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-16">
      {/* Ambient wash that continues the CTA section's ending gradient — no hard seam */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f9f8ff_10%,#f5f3ff_100%)]" />
        <div className="absolute -left-[10%] top-[-10%] size-[45%] rounded-full bg-[radial-gradient(circle,rgba(109,40,255,0.14),rgba(109,40,255,0)_70%)] blur-3xl" />
        <div className="absolute -right-[10%] top-[5%] size-[40%] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12),rgba(139,92,246,0)_70%)] blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.2] mix-blend-soft-light" aria-hidden>
          <filter id="footer-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#footer-grain)" />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid grid-cols-2 gap-10 pb-16 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-ink-soft">
              AI automation and consulting for enterprises that would rather ship systems than hire around a broken process.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-ink-soft">
              <a href="mailto:nithishareddy113@gmail.com" className="flex items-center gap-2.5 transition-colors hover:text-accent">
                <Mail className="size-4" /> nithishareddy113@gmail.com
              </a>
              <a href="tel:+919490579720" className="flex items-center gap-2.5 transition-colors hover:text-accent">
                <Phone className="size-4" /> +91 94905 79720
              </a>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-full border border-line-soft bg-white text-ink-soft shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent hover:shadow-card"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="flex size-10 items-center justify-center rounded-full border border-line-soft bg-white text-ink-soft shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent hover:shadow-card"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                  <path d="M18.24 3h3.02l-6.6 7.54L22.5 21h-6.08l-4.76-6.24L6.2 21H3.17l7.06-8.07L2.5 3h6.24l4.3 5.7L18.24 3Zm-1.06 16.17h1.67L7.9 4.74H6.1l11.08 14.43Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="mt-5 space-y-3.5">
              {footerServices.map((s) => (
                <li key={s.slug}>
                  <FooterLink href={`/services/${s.slug}`}>{s.name}</FooterLink>
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
            <FooterHeading>Industries</FooterHeading>
            <ul className="mt-5 space-y-3.5">
              {industryLinks.slice(0, 6).map((i) => (
                <li key={i.slug}>
                  <FooterLink href={`/industries/${i.slug}`}>{i.name}</FooterLink>
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
            <FooterHeading>Company</FooterHeading>
            <ul className="mt-5 space-y-3.5">
              {aboutLinks.map((a) => (
                <li key={a.slug}>
                  <FooterLink href={`/about/${a.slug}`}>{a.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Resources</FooterHeading>
            <ul className="mt-5 space-y-3.5">
              {resourceLinks.map((r) => (
                <li key={r.slug}>
                  <FooterLink href={`/resources/${r.slug}`}>{r.name}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line-soft/70 py-8 text-sm text-ink-faint sm:flex-row">
          <p>© {new Date().getFullYear()} GrowSpark. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/resources/faq" className="transition-colors hover:text-accent">
              FAQ
            </Link>
            <Link href="/contact" className="transition-colors hover:text-accent">
              Contact
            </Link>
          </div>
        </div>
      </Container>

      {/* Oversized watermark wordmark for an editorial, premium finish */}
      <div className="pointer-events-none relative select-none overflow-hidden pb-2 text-center" aria-hidden>
        <span className="font-display text-[4.5rem] font-bold leading-none tracking-tight text-ink/[0.04] sm:text-[7rem] lg:text-[9rem]">
          GrowSpark
        </span>
      </div>
    </footer>
  );
}
