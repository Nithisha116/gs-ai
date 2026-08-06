import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";

  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="relative flex size-8 items-center justify-center">
        <span className="absolute left-0 top-1 size-3.5 rounded-full bg-accent" />
        <span className="absolute right-0 top-1 size-3.5 rounded-full bg-accent-soft" />
        <span className={cn("absolute bottom-0 left-1/2 size-3.5 -translate-x-1/2 rounded-full", isLight ? "bg-white" : "bg-ink")} />
      </span>
      <span className={cn("font-display text-[1.15rem] font-bold tracking-tight", isLight ? "text-white" : "text-ink")}>
        McCarthy
      </span>
    </Link>
  );
}
