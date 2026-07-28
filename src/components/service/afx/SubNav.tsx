"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function SubNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="flex items-center justify-end gap-10 text-[15px]">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={cn(
            "relative py-1 transition-colors duration-200 hover:text-black",
            active === item.id ? "text-black" : "text-black/70"
          )}
        >
          {item.label}
          <span
            className={cn(
              "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-black transition-transform duration-300",
              active === item.id && "scale-x-100"
            )}
          />
        </a>
      ))}
    </nav>
  );
}
