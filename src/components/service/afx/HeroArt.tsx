import { cn } from "@/lib/utils";

/**
 * The hero artwork: a dense diagonal field of hatched blue brush strokes
 * dissolving into the lavender band. Built entirely from SVG so the page
 * ships without external imagery.
 */

const BLUES = [
  "#0b1f9e",
  "#0f2bb8",
  "#1231c4",
  "#1a3ad6",
  "#2650ea",
  "#1c3fd0",
  "#3566f2",
  "#2b4fe0",
  "#4a7ef7",
  "#6b9afa",
  "#8fb5fc",
  "#16277f",
  "#0d1f74",
  "#2f5be8",
  "#5589f8",
];

// Deterministic PRNG so server and client render identical markup.
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function strokes() {
  const rand = rng(20260728);
  const out: { x: number; y: number; w: number; h: number; fill: string; o: number }[] = [];

  for (let i = 0; i < 1500; i++) {
    // Cluster toward the middle of the band (sum of two uniforms ≈ triangular).
    const t = (rand() + rand() + rand()) / 3;
    const y = 60 + t * 580;
    const x = -40 + rand() * 1080;
    const centre = 1 - Math.abs(y - 350) / 300;

    out.push({
      x,
      y,
      w: 12 + rand() * rand() * 150,
      h: 5 + rand() * 22,
      fill: BLUES[Math.floor(rand() * BLUES.length)],
      o: 0.55 + Math.max(centre, 0) * 0.45 * (0.35 + rand() * 0.65),
    });
  }
  return out;
}

export default function HeroArt({ className }: { className?: string }) {
  const items = strokes();

  return (
    <svg
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      className={cn("h-full w-full", className)}
    >
      <defs>
        <filter id="afx-hero-brush" x="-25%" y="-25%" width="150%" height="150%">
          <feTurbulence type="fractalNoise" baseFrequency="0.004 0.03" numOctaves="5" seed="11" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="78" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Fine diagonal hatching, the signature texture of the original art. */}
        <pattern id="afx-hero-hatch" width="3.4" height="3.4" patternUnits="userSpaceOnUse" patternTransform="rotate(-24)">
          <rect width="3.4" height="3.4" fill="#000" />
          <rect width="3.4" height="2.15" fill="#fff" />
        </pattern>

        <mask id="afx-hero-hatch-mask">
          <rect x="-200" y="-200" width="1400" height="1100" fill="url(#afx-hero-hatch)" />
        </mask>

        <radialGradient id="afx-hero-fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="46%" stopColor="#fff" stopOpacity="0.96" />
          <stop offset="78%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>

        <mask id="afx-hero-fade-mask">
          <ellipse cx="510" cy="350" rx="500" ry="268" fill="url(#afx-hero-fade)" transform="rotate(-24 510 350)" />
        </mask>
      </defs>

      <g mask="url(#afx-hero-fade-mask)">
        <g mask="url(#afx-hero-hatch-mask)">
          <g filter="url(#afx-hero-brush)" transform="rotate(-24 500 350)">
            {items.map((s, i) => (
              <rect
                key={i}
                x={s.x}
                y={s.y}
                width={s.w}
                height={s.h}
                rx={s.h / 2}
                fill={s.fill}
                opacity={Math.min(s.o, 0.96)}
              />
            ))}
          </g>
        </g>
      </g>
    </svg>
  );
}
