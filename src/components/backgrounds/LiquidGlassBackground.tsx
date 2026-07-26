import { cn } from "@/lib/utils";

export default function LiquidGlassBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbfaff_0%,#f5f4ff_45%,#ffffff_100%)]" />

      <div className="absolute inset-0 animate-drift opacity-90">
        <div className="absolute -left-[10%] top-[-15%] size-[55%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(109,40,255,0.35),rgba(109,40,255,0)_70%)] blur-3xl animate-blob-a" />
        <div className="absolute right-[-15%] top-[5%] size-[60%] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(139,92,246,0.28),rgba(139,92,246,0)_70%)] blur-3xl animate-blob-b" />
        <div className="absolute left-[20%] top-[30%] size-[70%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(236,232,255,0.9),rgba(236,232,255,0)_70%)] blur-3xl animate-blob-c" />
        <div className="absolute right-[5%] bottom-[-20%] size-[50%] rounded-full bg-[radial-gradient(circle_at_40%_60%,rgba(109,40,255,0.22),rgba(109,40,255,0)_70%)] blur-3xl animate-blob-b" />
      </div>

      <svg className="absolute inset-0 h-full w-full opacity-[0.35] mix-blend-soft-light" aria-hidden>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(255,255,255,0.6)_85%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}
