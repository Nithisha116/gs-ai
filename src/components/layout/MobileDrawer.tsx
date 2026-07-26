"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { industryLinks, aboutLinks, resourceLinks } from "@/data/nav";

const groups = [
  { id: "services", label: "Services", items: services.map((s) => ({ name: s.name, slug: s.slug })), base: "/services" },
  { id: "industries", label: "Industries", items: industryLinks, base: "/industries" },
  { id: "about", label: "About", items: aboutLinks, base: "/about" },
  { id: "resources", label: "Resources", items: resourceLinks, base: "/resources" },
];

export default function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-ink/30 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="ml-auto flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-bold text-ink">Menu</span>
              <button onClick={onClose} className="flex size-9 items-center justify-center rounded-full bg-surface-soft" aria-label="Close menu">
                <X className="size-4" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-1">
              <Link href="/" onClick={onClose} className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-surface-lavender">
                Home
              </Link>
              {groups.map((group) => (
                <div key={group.id}>
                  <button
                    onClick={() => setExpanded(expanded === group.id ? null : group.id)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-surface-lavender"
                  >
                    {group.label}
                    <ChevronDown className={`size-4 transition-transform ${expanded === group.id ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {expanded === group.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pl-3"
                      >
                        {group.items.map((item) => (
                          <Link
                            key={item.slug}
                            href={`${group.base}/${item.slug}`}
                            onClick={onClose}
                            className="block rounded-lg px-3 py-2.5 text-[0.95rem] text-ink-soft hover:bg-surface-lavender hover:text-accent"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link href="/contact" onClick={onClose} className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-surface-lavender">
                Contact
              </Link>
            </nav>

            <div className="mt-auto pt-8">
              <Button href="/contact" onClick={onClose} className="w-full justify-center">
                Book a discovery call
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
