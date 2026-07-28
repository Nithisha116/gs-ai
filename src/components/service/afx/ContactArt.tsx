import { cn } from "@/lib/utils";

/** Dark, silk-like backdrop behind the closing contact block. */
export default function ContactArt({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden bg-[#0b0a1e]", className)}>
      <svg viewBox="0 0 900 900" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        <defs>
          <linearGradient id="afx-silk-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2a1b6e" />
            <stop offset="55%" stopColor="#3f2fd6" />
            <stop offset="100%" stopColor="#120c3a" />
          </linearGradient>
          <linearGradient id="afx-silk-b" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6d4bff" />
            <stop offset="50%" stopColor="#2438f0" />
            <stop offset="100%" stopColor="#0d0a28" />
          </linearGradient>
          <filter id="afx-silk-blur" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="42" />
          </filter>
        </defs>

        <rect width="900" height="900" fill="url(#afx-silk-a)" />
        <g filter="url(#afx-silk-blur)">
          <ellipse cx="620" cy="240" rx="330" ry="190" fill="url(#afx-silk-b)" opacity="0.9" transform="rotate(-28 620 240)" />
          <ellipse cx="330" cy="640" rx="300" ry="150" fill="#4b3bff" opacity="0.55" transform="rotate(24 330 640)" />
          <ellipse cx="760" cy="760" rx="260" ry="130" fill="#7a5cff" opacity="0.4" transform="rotate(-14 760 760)" />
          <ellipse cx="120" cy="120" rx="220" ry="120" fill="#1b1550" opacity="0.85" />
        </g>
      </svg>
    </div>
  );
}
