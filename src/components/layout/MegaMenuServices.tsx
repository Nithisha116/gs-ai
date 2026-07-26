import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "@/components/ui/Icon";
import { services } from "@/data/services";
import { commonWorkflows } from "@/data/nav";

const primary = services.filter((s) =>
  ["ai-workflow-automation", "data-orchestration", "support-automation", "ai-agents", "system-integrations", "crm-automation", "reporting-automation", "ai-chatbots"].includes(s.slug)
);

export default function MegaMenuServices({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px]">
      <div className="p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Core services</p>
        <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
          {primary.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              onClick={onNavigate}
              className="group flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-surface-lavender"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface-soft text-ink transition-colors group-hover:bg-accent group-hover:text-white">
                <Icon name={service.icon} />
              </span>
              <span>
                <span className="block font-medium text-ink">{service.name}</span>
                <span className="mt-0.5 block text-sm text-ink-soft">{service.tagline}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-line-soft bg-surface-lavender/60 p-8 lg:border-t-0 lg:border-l lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Common workflows</p>
        <ul className="mt-5 space-y-3.5">
          {commonWorkflows.map((flow) => (
            <li key={flow} className="flex items-center gap-2.5 text-[0.95rem] text-ink-soft">
              <span className="text-accent">✦</span>
              {flow}
            </li>
          ))}
        </ul>
        <Link
          href="/services"
          onClick={onNavigate}
          className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          View all services <ArrowRight className="size-3.5" />
        </Link>
      </div>

      <div className="col-span-1 flex flex-col gap-4 border-t border-line-soft p-8 sm:flex-row sm:items-center sm:justify-between lg:col-span-2 lg:p-10">
        <div>
          <p className="font-medium text-ink">Not sure where to start?</p>
          <p className="mt-1 text-sm text-ink-soft">We&apos;ll map your workflows and suggest the right automation approach.</p>
        </div>
        <Link
          href="/contact"
          onClick={onNavigate}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent"
        >
          Book a discovery call <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
