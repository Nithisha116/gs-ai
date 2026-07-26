"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import Logo from "./Logo";
import MegaMenuServices from "./MegaMenuServices";
import SimpleDropdown from "./SimpleDropdown";
import MobileDrawer from "./MobileDrawer";
import Button from "@/components/ui/Button";
import { industryLinks, aboutLinks, resourceLinks } from "@/data/nav";

type MenuKey = "services" | "industries" | "about" | "resources";

const navItems: { key: MenuKey; label: string }[] = [
  { key: "services", label: "Services" },
  { key: "industries", label: "Industries" },
  { key: "about", label: "About" },
  { key: "resources", label: "Resources" },
];

export default function Navbar() {
  const [active, setActive] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(key);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActive(null), 120);
  };

  const close = () => setActive(null);

  return (
    <>
      <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
        <motion.div
          layout
          onMouseLeave={scheduleClose}
          animate={{ borderRadius: active ? 28 : 999 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1160px] overflow-hidden border border-line-soft bg-white/95 shadow-nav backdrop-blur-md"
        >
          <div className="flex h-[68px] items-center justify-between gap-4 px-5 lg:px-7">
            <Logo />

            <nav className="hidden items-center gap-1 lg:flex">
              <Link
                href="/"
                onMouseEnter={close}
                className="rounded-full px-4 py-2 text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                Home
              </Link>
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onMouseEnter={() => open(item.key)}
                  onClick={() => (active === item.key ? close() : open(item.key))}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                    active === item.key ? "text-accent" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`size-3.5 transition-transform duration-300 ${active === item.key ? "rotate-180" : ""}`} />
                </button>
              ))}
              <Link
                href="/contact"
                onMouseEnter={close}
                className="rounded-full px-4 py-2 text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                Contact
              </Link>
            </nav>

            <div className="hidden lg:block">
              <Button href="/contact">Book a discovery call</Button>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="flex size-10 items-center justify-center rounded-full bg-surface-soft lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-line-soft"
              >
                {active === "services" && <MegaMenuServices onNavigate={close} />}
                {active === "industries" && (
                  <div className="flex justify-center">
                    <SimpleDropdown
                      items={industryLinks}
                      basePath="/industries"
                      viewAllLabel="All industries"
                      viewAllHref="/industries"
                      onNavigate={close}
                    />
                  </div>
                )}
                {active === "about" && (
                  <div className="flex justify-center">
                    <SimpleDropdown items={aboutLinks} basePath="/about" onNavigate={close} />
                  </div>
                )}
                {active === "resources" && (
                  <div className="flex justify-center">
                    <SimpleDropdown
                      items={resourceLinks}
                      basePath="/resources"
                      viewAllLabel="All resources"
                      viewAllHref="/resources"
                      onNavigate={close}
                    />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
