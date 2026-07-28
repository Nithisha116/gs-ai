import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "light";

const variants: Record<Variant, string> = {
  solid: "bg-black text-white shadow-[0_1px_4px_rgba(0,0,0,0.2)] hover:bg-afx-purple",
  outline: "bg-white text-black ring-1 ring-black/10 hover:ring-black/30",
  light: "bg-white/15 text-white ring-1 ring-white/25 hover:bg-white/25",
};

export default function AfxButton({
  href,
  children,
  variant = "solid",
  className,
  type,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
}) {
  const classes = cn(
    "group inline-flex items-center justify-between gap-6 rounded-full pl-7 pr-6 py-4 text-[15px] font-medium leading-none transition-colors duration-300",
    variants[variant],
    className
  );

  const inner = (
    <>
      <span>{children}</span>
      <ArrowRight className="size-[18px] shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {inner}
    </button>
  );
}
