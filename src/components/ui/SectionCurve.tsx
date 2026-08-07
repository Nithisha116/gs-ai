import { cn } from "@/lib/utils";

export function CornerBlob({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 400 340"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute", className)}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden
    >
      <path
        d="M0,0 H250 C185,55 205,125 270,155 C335,185 300,265 215,295 C150,320 165,340 115,340 L0,340 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WaveDivider({
  color,
  flip = false,
  className,
}: {
  color: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("relative -mb-px h-14 w-full overflow-hidden sm:h-20 lg:h-24", className)}
      aria-hidden
    >
      <svg
        viewBox="0 0 1600 200"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
      >
        <path
          d="M0,90 C260,175 480,10 760,70 C1040,130 1260,20 1600,100 L1600,200 L0,200 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
