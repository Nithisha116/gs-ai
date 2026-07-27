import { Cloud, Sparkle } from "lucide-react";
import { SiZapier, SiN8N, SiHubspot, SiClaude } from "react-icons/si";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

function SlackMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 shrink-0" aria-hidden>
      <rect x="2" y="9" width="6" height="6" rx="2" fill="#36C5F0" />
      <rect x="9" y="2" width="6" height="6" rx="2" fill="#2EB67D" />
      <rect x="16" y="9" width="6" height="6" rx="2" fill="#ECB22E" />
      <rect x="9" y="16" width="6" height="6" rx="2" fill="#E01E5A" />
    </svg>
  );
}

const stack = [
  { name: "zapier", Icon: SiZapier, color: "#FF4F00", textClass: "font-bold lowercase text-[#FF4F00]" },
  { name: "n8n", Icon: SiN8N, color: "#EA4B71", textClass: "font-bold lowercase text-ink" },
  { name: "OpenAI", Icon: Sparkle, color: "#0F0F0F", textClass: "font-semibold text-ink" },
  { name: "Claude", Icon: SiClaude, color: "#D97757", textClass: "font-semibold font-serif text-ink" },
  { name: "HubSpot", Icon: SiHubspot, color: "#FF7A59", textClass: "font-bold text-[#33475B]" },
  { name: "Salesforce", Icon: Cloud, color: "#00A1E0", textClass: "font-bold italic text-[#00A1E0]" },
  { name: "slack", Icon: SlackMark, color: undefined, textClass: "font-bold lowercase text-ink" },
];

export default function TechStack() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto flex max-w-[1160px] items-center gap-6 overflow-x-auto rounded-[28px] border border-line-soft bg-white px-7 py-5 shadow-nav no-scrollbar sm:gap-8 lg:px-10">
            <span className="shrink-0 whitespace-nowrap text-base font-medium text-ink">Our stack</span>
            <span className="h-8 w-px shrink-0 bg-line" />
            <div className="flex items-center gap-8 sm:gap-10 lg:flex-1 lg:justify-between lg:gap-6">
              {stack.map(({ name, Icon, color, textClass }) => (
                <div key={name} className="flex shrink-0 items-center gap-2.5">
                  <Icon className="size-6 shrink-0" style={color ? { color } : undefined} />
                  <span className={`whitespace-nowrap text-lg ${textClass}`}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
