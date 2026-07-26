import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = { name: string; slug: string; description?: string };

export default function SimpleDropdown({
  items,
  basePath,
  viewAllLabel,
  viewAllHref,
  onNavigate,
  descriptions = false,
}: {
  items: Item[];
  basePath: string;
  viewAllLabel?: string;
  viewAllHref?: string;
  onNavigate?: () => void;
  descriptions?: boolean;
}) {
  return (
    <div className="w-[280px] p-3 sm:w-[320px]">
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={`${basePath}/${item.slug}`}
              onClick={onNavigate}
              className={cn(
                "block rounded-xl px-4 py-3 text-[0.95rem] font-medium text-ink transition-colors hover:bg-surface-lavender hover:text-accent"
              )}
            >
              {item.name}
              {descriptions && item.description && (
                <span className="mt-0.5 block text-xs font-normal text-ink-soft">{item.description}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
      {viewAllHref && (
        <>
          <div className="my-2 h-px bg-line-soft" />
          <Link
            href={viewAllHref}
            onClick={onNavigate}
            className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface-lavender hover:text-accent"
          >
            {viewAllLabel}
            <ArrowRight className="size-4" />
          </Link>
        </>
      )}
    </div>
  );
}
