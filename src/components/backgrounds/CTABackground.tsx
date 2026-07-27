"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const particles = [
  { top: "18%", left: "12%", size: 5, duration: 7, delay: 0 },
  { top: "28%", left: "82%", size: 4, duration: 8.5, delay: 1.2 },
  { top: "62%", left: "8%", size: 3, duration: 6.5, delay: 0.6 },
  { top: "72%", left: "88%", size: 5, duration: 9, delay: 2 },
  { top: "14%", left: "48%", size: 3, duration: 7.5, delay: 1.6 },
  { top: "85%", left: "40%", size: 4, duration: 8, delay: 0.4 },
  { top: "45%", left: "94%", size: 3, duration: 6.8, delay: 2.4 },
  { top: "52%", left: "4%", size: 4, duration: 7.8, delay: 1 },
];

export default function CTABackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {/* Base wash — fades from white above, through a soft lavender core, back to white below */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8f7ff_16%,#f2eeff_48%,#f8f7ff_82%,#ffffff_100%)]" />

      {/* Wide soft "stage" panel — grounds the content with subtle depth */}
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[4rem] border border-white/60 bg-white/25 shadow-[0_60px_140px_-40px_rgba(109,40,255,0.18)] backdrop-blur-[2px] sm:w-[80%]" />

      {/* Slow ambient drift, shared with the rest of the site's liquid-glass language */}
      <div className="absolute inset-0 animate-drift">
        <div className="absolute left-[-14%] top-[-24%] size-[65%] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(109,40,255,0.3),rgba(109,40,255,0)_70%)] blur-3xl animate-blob-a" />
        <div className="absolute right-[-18%] top-[-4%] size-[68%] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(139,92,246,0.26),rgba(139,92,246,0)_70%)] blur-3xl animate-blob-b" />
        <div className="absolute right-[-10%] bottom-[-26%] size-[60%] rounded-full bg-[radial-gradient(circle_at_45%_55%,rgba(109,40,255,0.24),rgba(109,40,255,0)_70%)] blur-3xl animate-blob-c" />
      </div>

      {/* Top-down light beam for drama */}
      <div className="absolute left-1/2 top-0 h-full w-[60%] -translate-x-1/2 bg-[conic-gradient(from_180deg_at_50%_0%,rgba(109,40,255,0)_0deg,rgba(109,40,255,0.12)_8deg,rgba(109,40,255,0)_20deg)] opacity-80" />

      {/* Breathing blooms — independent, slower pulse for extra depth */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[16%] size-[42%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(236,232,255,0.95),rgba(236,232,255,0)_70%)] blur-3xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0.35, y: 0 }}
        animate={{ opacity: [0.3, 0.55, 0.3], y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute left-[6%] bottom-[8%] size-[30%] rounded-full bg-[radial-gradient(circle,rgba(109,40,255,0.26),rgba(109,40,255,0)_72%)] blur-2xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0.35, y: 0 }}
        animate={{ opacity: [0.35, 0.6, 0.35], y: [0, 16, 0], x: [0, -8, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="absolute right-[8%] top-[10%] size-[26%] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28),rgba(139,92,246,0)_72%)] blur-2xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        className="absolute left-[38%] bottom-[-10%] size-[36%] rounded-full bg-[radial-gradient(circle,rgba(109,40,255,0.2),rgba(109,40,255,0)_72%)] blur-3xl"
      />

      {/* Translucent geometric forms — faint drifting frames for a liquid-glass feel */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.55, rotate: -6, x: 0 }}
        animate={{ rotate: [-6, 3, -6], x: [0, 22, 0], y: [0, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-16 top-1/3 size-72 rounded-[2.5rem] border border-white/60 bg-white/15 blur-[1px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0.45, rotate: 8, x: 0 }}
        animate={{ rotate: [8, -4, 8], x: [0, -18, 0], y: [0, 12, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -right-20 bottom-1/4 size-80 rounded-[3rem] border border-white/50 bg-white/15 blur-[1px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0.3, rotate: 20 }}
        animate={{ rotate: [20, 32, 20] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute left-1/2 top-[8%] size-56 -translate-x-1/2 rounded-full border border-accent/15"
      />

      {/* Tiny floating sparkles for a premium AI-ambient touch */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.9, 0], y: [-6, 6, -6] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          className="absolute rounded-full bg-accent-soft"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
        />
      ))}

      {/* Fine grain for texture, matching the rest of the site's ambient backgrounds */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.3] mix-blend-soft-light" aria-hidden>
        <filter id="cta-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#cta-grain)" />
      </svg>

      {/* Soft glow to keep the headline and button reading clearly above the ambient motion */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_58%_48%_at_50%_46%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_70%)]" />

      {/* Seamless blend into the sections above and below — no hard edges */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent via-white/70 to-white" />
    </div>
  );
}
