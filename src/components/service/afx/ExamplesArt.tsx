import { cn } from "@/lib/utils";

/** Blue "glass shard" backdrop behind the automation-example cards. */
export default function ExamplesArt({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden bg-afx-mist", className)}>
      <svg viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        <defs>
          <linearGradient id="afx-shard-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7aa0ff" />
            <stop offset="45%" stopColor="#2b48ee" />
            <stop offset="100%" stopColor="#1226b8" />
          </linearGradient>
          <linearGradient id="afx-shard-b" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4f7bff" />
            <stop offset="60%" stopColor="#1a34d8" />
            <stop offset="100%" stopColor="#6f8dff" />
          </linearGradient>
          <linearGradient id="afx-shard-c" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#b9c6ff" />
            <stop offset="100%" stopColor="#3457f2" />
          </linearGradient>
          <filter id="afx-shard-blur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        <g filter="url(#afx-shard-blur)">
          <polygon points="760,-80 1320,-140 1180,430 700,390" fill="url(#afx-shard-a)" opacity="0.8" />
          <polygon points="1080,90 1520,10 1440,520 1120,570" fill="url(#afx-shard-b)" opacity="0.72" />
          <polygon points="300,340 800,160 940,690 400,820" fill="url(#afx-shard-c)" opacity="0.45" />
          <polygon points="560,460 1000,340 1100,760 520,860" fill="url(#afx-shard-a)" opacity="0.3" />
          <polygon points="860,40 1200,0 1140,380 840,410" fill="#ffffff" opacity="0.22" />
        </g>

        {/* Soften the whole field so the cards stay legible. */}
        <rect width="1440" height="760" fill="#edeaf2" opacity="0.28" />
      </svg>
    </div>
  );
}
