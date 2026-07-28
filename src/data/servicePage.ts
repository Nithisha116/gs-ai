import type { Service } from "./services";

/**
 * Content for the service detail page.
 *
 * The sections below the fold (process, stack, examples, testimonials, FAQ,
 * contact) are shared by every service; only the hero, headline stat,
 * "expertise" block and deliverables change per service. Anything not spelled
 * out in `serviceDetails` falls back to `detailFor()`, which derives a
 * reasonable version from the service's existing copy.
 */

export type ServiceDetail = {
  heroEyebrow: string;
  heroLead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stat: {
    eyebrow: string;
    value: string;
    caption: string;
    footnote: string;
  };
  expertise: {
    eyebrow: string;
    title: string[];
    paragraphs: string[];
    standardTitle: string;
    standards: { icon: string; label: string }[];
  };
  deliverables: {
    eyebrow: string;
    title: string;
    columns: { no: string; title: string; description: string; items: string[] }[];
  };
};

export const subNav = [
  { id: "expertise", label: "Expertise" },
  { id: "deliverables", label: "Deliverables" },
  { id: "process", label: "Process" },
  { id: "examples", label: "Examples" },
];

export const processSection = {
  eyebrow: "How we work",
  title: "A process built for results",
  description:
    "Clear milestones, constant communication, and zero hand-waving. Here's how we get from idea to impact.",
  steps: [
    {
      step: "Step 01",
      title: "Discovery & Success Criteria",
      description:
        "We map your current workflows, identify bottlenecks, and define clear metrics for success.",
    },
    {
      step: "Step 02",
      title: "Map Workflows + Data Access",
      description:
        "We document every step, identify bottlenecks, and determine what data and systems need to connect. No surprises down the road.",
    },
    {
      step: "Step 03",
      title: "Build + Test + Security Review",
      description:
        "We build incrementally, test thoroughly, and review security at every stage. You see progress weekly and can give feedback early.",
    },
    {
      step: "Step 04",
      title: "Launch + Monitor + Iterate",
      description:
        "Go live confidently. We monitor performance, catch issues, and optimize based on data.",
    },
  ],
};

export const stackSection = {
  label: "Our stack",
  brands: ["zapier", "n8n", "openai", "claude", "hubspot", "salesforce", "slack"] as const,
};

export const examplesSection = {
  eyebrow: "AI agents & internal tools examples",
  title: "See what's possible",
  description: "Real scenarios we've automated for teams like yours",
  cards: [
    {
      tags: ["Sales", "CRM"],
      title: "Lead Intake & Enrichment",
      inputs: "Lead Form / Email",
      auto: ["Enrich", "Route", "CRM"],
      result: "Cleaner leads. Faster handoff.",
    },
    {
      tags: ["Support", "AI"],
      title: "Support Triage",
      inputs: "Lead Form / Email",
      auto: ["Analyze", "Tag", "Draft"],
      result: "Faster triage. Cleaner queues.",
    },
    {
      tags: ["Finance", "OPS"],
      title: "Invoice Processing",
      inputs: "Lead Form / Email",
      auto: ["Extract", "Match", "ERP"],
      result: "Fewer errors. Faster close.",
    },
  ],
};

export const testimonialsSection = {
  title: "What clients say",
  items: [
    {
      name: "Alex Rivera",
      role: "COO, Haus",
      initials: "AR",
      quote:
        "The team didn't just build an automation; they re-engineered our entire operations workflow. We're moving twice as fast now.",
    },
    {
      name: "Sarah Jenkins",
      role: "VP Engineering, DataCorp",
      initials: "SJ",
      quote:
        "Finally, an automation partner who actually understands enterprise security requirements. No hand-waving, just solid execution.",
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Sales, GrowthLabs",
      initials: "MR",
      quote:
        "The team understood our complex integration requirements and built something that just works. Worth every penny.",
    },
    {
      name: "Marcia Solis",
      role: "VP Engineering, Hous",
      initials: "MS",
      quote:
        "They made sense of our complex requirements and produced a solution that just works. Couldn't be happier with the value.",
    },
    {
      name: "Adam Smith",
      role: "CEO, TechSpace",
      initials: "AS",
      quote:
        "They quickly grasped our complicated integration needs and delivered a solution that works flawlessly. Absolutely worth the investment.",
    },
  ],
};

export const faqSection = {
  eyebrow: "FAQ",
  title: "Common questions",
  description: "Everything you need to know before we start working together.",
  cta: { label: "Book a discovery call", href: "/contact" },
  items: [
    {
      q: "How long does a typical automation project take?",
      a: "It depends on complexity. A single workflow can be live in a few weeks. Multi-system projects with AI components typically take longer. We'll give you a realistic timeline after our discovery call—no surprises.",
    },
    {
      q: "What access do you need to our systems?",
      a: "We request only the minimum access required for each integration. For most projects, this means API keys or OAuth connections. We document all access and follow least-privilege principles.",
    },
    {
      q: "Who owns the automations you build?",
      a: "You do. Everything we build belongs to you. We provide full documentation, and you can maintain or modify the workflows yourself. We're also happy to provide ongoing support if you prefer.",
    },
    {
      q: "What happens if something breaks after launch?",
      a: "We don't disappear after launch. If something breaks or needs adjustment, our team is available to quickly diagnose and resolve the issue. We also offer ongoing support and optimization to ensure everything continues to run smoothly as your business evolves.",
    },
    {
      q: "How do you handle data security?",
      a: "Least-privilege access, encrypted credentials, and an audit trail on every automated action. We review the security posture of each integration before it goes live and document exactly what touches what.",
    },
    {
      q: "Can you work with our existing tools and vendors?",
      a: "Absolutely. We're platform-agnostic and work with whatever tools you already use. If you have preferred vendors or existing technical teams, we collaborate seamlessly.",
    },
    {
      q: "Do you offer ongoing maintenance?",
      a: "Yes. Ongoing maintenance is a key part of our approach. We provide continuous support, updates, monitoring, and optimization to ensure long-term stability, performance, and scalability.",
    },
    {
      q: "What if we're not sure what to automate first?",
      a: "That's exactly what our discovery process is for. We'll help you identify the highest-impact opportunities based on time savings, error reduction, and strategic value.",
    },
  ],
};

export const contactSection = {
  eyebrow: "Get started",
  title: "Let's talk about your workflows",
  subtitle: ["Book a discovery call or send us a message.", "We'll get back to you within one business day."],
  body: "30 minutes to explore your automation opportunities. No pitch, no pressure—just a focused conversation about your workflow challenges.",
  bullets: [
    "Identify high-impact automation opportunities",
    "Discuss your current tech stack",
    "Get a ballpark timeline and approach",
  ],
  phoneLabel: "Call us at:",
  phone: "1-800-356-8933",
  emailLabel: "Email us:",
  email: "hello@growspark.com",
  form: {
    title: "Schedule a discovery call",
    description:
      "Tell us about your goals, and we'll tailor our expertise to fit your needs. Fill out the form below, and we'll get back to you soon.",
    subjects: [
      "Intelligent Automation & AI",
      "System Integrations",
      "AI Agents & Internal Tools",
      "Data Orchestration",
      "Support & Monitoring",
    ],
    note: "We'll only use your info to respond to your inquiry.",
    submit: "Send message",
  },
};

/** Hand-written detail content, keyed by service slug. */
export const serviceDetails: Record<string, ServiceDetail> = {
  "ai-workflow-automation": {
    heroEyebrow: "Services",
    heroLead: "Transform repetitive processes into intelligent, self-running workflows.",
    primaryCta: { label: "Book a discovery call", href: "/contact" },
    secondaryCta: { label: "See example workflow", href: "#examples" },
    stat: {
      eyebrow: "What's included",
      value: "20–40%",
      caption: "Reduction in\nmanual workflow load",
      footnote: "Mid-market SaaS · 6–8 week deployment",
    },
    expertise: {
      eyebrow: "What's included",
      title: ["The problem with", '"messy" internal tools'],
      paragraphs: [
        "Most teams start with simple zaps that quickly spiral into unmanageable spaghetti code. When an API changes or a token expires, business-critical processes break silently.",
        "We treat automation as software engineering. Every workflow is mapped, error-handled, and documented so your team isn't dependent on a black box.",
      ],
      standardTitle: "Our standard",
      standards: [
        { icon: "network", label: "Mapped from current processes" },
        { icon: "file-text", label: "Integration points documented" },
        { icon: "alert-triangle", label: "Monitoring + error handling" },
        { icon: "user-check", label: "Ownership + handoff plan" },
      ],
    },
    deliverables: {
      eyebrow: "Deliverables",
      title: "What's included",
      columns: [
        {
          no: "01",
          title: "Strategy",
          description: "Architectural alignment before implementation.",
          items: ["Workflow mapping", "Success criteria definition", "Risk & dependency review"],
        },
        {
          no: "02",
          title: "Build",
          description: "Controlled deployment of automation infrastructure.",
          items: ["Automation flows", "System integrations", "QA & testing checklist"],
        },
        {
          no: "03",
          title: "Handoff",
          description: "Operational enablement and system ownership transfer.",
          items: ["Technical documentation", "Team training", "Operational runbook"],
        },
        {
          no: "04",
          title: "Support",
          description: "Ongoing performance governance and system optimization.",
          items: ["System monitoring", "Iteration cycles", "Performance adjustments"],
        },
      ],
    },
  },
};

/** Fallback detail derived from a service's existing copy. */
export function detailFor(service: Service): ServiceDetail {
  const existing = serviceDetails[service.slug];
  if (existing) return existing;

  return {
    heroEyebrow: "Services",
    heroLead: service.tagline,
    primaryCta: { label: "Book a discovery call", href: "/contact" },
    secondaryCta: { label: "See example workflow", href: "#examples" },
    stat: {
      eyebrow: "What's included",
      value: service.caseStudy.metric,
      caption: service.caseStudy.metricLabel,
      footnote: `${service.caseStudy.industry} · 6–8 week deployment`,
    },
    expertise: {
      eyebrow: "What's included",
      title: ["What we typically", "walk into"],
      paragraphs: [service.heroDescription, service.problems[0]],
      standardTitle: "Our standard",
      standards: [
        { icon: "network", label: "Mapped from current processes" },
        { icon: "file-text", label: "Integration points documented" },
        { icon: "alert-triangle", label: "Monitoring + error handling" },
        { icon: "user-check", label: "Ownership + handoff plan" },
      ],
    },
    deliverables: {
      eyebrow: "Deliverables",
      title: "What's included",
      columns: service.benefits.slice(0, 4).map((b, i) => ({
        no: String(i + 1).padStart(2, "0"),
        title: b.title,
        description: b.description,
        items: service.technologies.slice(i * 2, i * 2 + 3),
      })),
    },
  };
}
