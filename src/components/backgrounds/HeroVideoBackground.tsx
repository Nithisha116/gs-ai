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
        <source src="/enhanced_glass-bg.mp4" type="video/mp4" />
      </video>

      {/* Soft white wash — knocks the footage down to roughly 60–70% visual weight */}
      <div className="absolute inset-0 bg-white/15" />

      {/* Lavender gradient tint, matching the site palette */}
      <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(245,244,255,0.45)_0%,rgba(255,255,255,0.12)_45%,rgba(236,232,255,0.4)_100%)]" />

      {/* Radial glow centered behind the headline for guaranteed contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.18)_55%,rgba(255,255,255,0)_80%)]" />

      {/* Gentle haze so the motion reads as atmosphere, not footage */}
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />

      {/* Soften the seam under the floating navbar */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/40 to-transparent" />

      {/* Fade the hero out into the page background — no hard edge */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}
