import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="relative flex size-8 items-center justify-center">
        <span className="absolute left-0 top-1 size-3.5 rounded-full bg-accent" />
        <span className="absolute right-0 top-1 size-3.5 rounded-full bg-accent-soft" />
        <span className="absolute bottom-0 left-1/2 size-3.5 -translate-x-1/2 rounded-full bg-ink" />
      </span>
      <span className="font-display text-[1.15rem] font-bold tracking-tight text-ink">
        GrowSpark
      </span>
    </Link>
  );
}
