import type { IconType } from "react-icons";
import { SiZapier, SiN8N, SiClaude } from "react-icons/si";
import { FaHubspot, FaSalesforce, FaSlack } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import { cn } from "@/lib/utils";

type Brand = {
  icon: IconType;
  label: string;
  color: string;
  /** Whether the wordmark is shown next to the glyph. */
  wordmark?: boolean;
};

const brands: Record<string, Brand> = {
  zapier: { icon: SiZapier, label: "zapier", color: "#FF4F00", wordmark: true },
  n8n: { icon: SiN8N, label: "n8n", color: "#EA4B71", wordmark: true },
  openai: { icon: RiOpenaiFill, label: "OpenAI", color: "#111111", wordmark: true },
  claude: { icon: SiClaude, label: "Claude", color: "#D97757", wordmark: true },
  hubspot: { icon: FaHubspot, label: "HubSpot", color: "#FF7A59", wordmark: true },
  salesforce: { icon: FaSalesforce, label: "salesforce", color: "#00A1E0", wordmark: false },
  slack: { icon: FaSlack, label: "slack", color: "#4A154B", wordmark: true },
};

export default function BrandLogo({ name, className }: { name: string; className?: string }) {
  const brand = brands[name];
  if (!brand) return null;

  const Glyph = brand.icon;

  return (
    <span className={cn("inline-flex items-center gap-2 whitespace-nowrap", className)} title={brand.label}>
      <Glyph className="size-6 shrink-0" style={{ color: brand.color }} aria-hidden />
      {brand.wordmark && (
        <span className="text-[19px] font-semibold tracking-tight text-black">{brand.label}</span>
      )}
      <span className="sr-only">{brand.label}</span>
    </span>
  );
}
