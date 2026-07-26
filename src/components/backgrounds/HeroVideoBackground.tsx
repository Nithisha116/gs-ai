import { cn } from "@/lib/utils";

export default function HeroVideoBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full scale-110 object-cover"
      >
        <source src="/79765-570718546_medium.mp4" type="video/mp4" />
      </video>

      {/* Soft white wash — knocks the footage down to roughly 60–70% visual weight */}
      <div className="absolute inset-0 bg-white/50" />

      {/* Lavender gradient tint, matching the site palette */}
      <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(245,244,255,0.8)_0%,rgba(255,255,255,0.3)_45%,rgba(236,232,255,0.75)_100%)]" />

      {/* Radial glow centered behind the headline for guaranteed contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_38%,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.55)_55%,rgba(255,255,255,0)_80%)]" />

      {/* Gentle haze so the motion reads as atmosphere, not footage */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

      {/* Soften the seam under the floating navbar */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/80 to-transparent" />

      {/* Fade the hero out into the page background — no hard edge */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}
