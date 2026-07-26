import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={cn("mt-4 text-balance text-[2.25rem] leading-[1.1] font-semibold text-ink sm:text-[2.75rem]", titleClassName)}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
