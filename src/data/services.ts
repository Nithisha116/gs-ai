export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  icon:
    | "workflow"
    | "bot"
    | "git-merge"
    | "users"
    | "target"
    | "life-buoy"
    | "database"
    | "file-text"
    | "layers"
    | "plug"
    | "network"
    | "bar-chart-3"
    | "message-circle"
    | "sparkles";
  tagline: string;
  category: string;
  heroDescription: string;
  benefits: { title: string; description: string }[];
  problems: string[];
  technologies: string[];
  caseStudy: {
    client: string;
    industry: string;
    metric: string;
    metricLabel: string;
    description: string;
  };
  faqs: ServiceFaq[];
  process: { title: string; description: string }[];
};

function processFor(name: string) {
  return [
    {
      title: "Discover",
      description: `We map the workflows behind ${name.toLowerCase()} and find where time and accuracy leak out.`,
    },
    {
      title: "Design",
      description: "We architect the automation, agent, or integration around your existing stack — not around ours.",
    },
    {
      title: "Build",
      description: "Our engineers ship in weekly increments so you see working software, not slide decks.",
    },
    {
      title: "Deploy",
      description: "We roll out with guardrails, monitoring, and a rollback plan, then train your team to run it.",
    },
    {
      title: "Optimize",
      description: "We keep tuning after launch — every automation gets faster and safer the longer it runs.",
    },
  ];
}

export const services: Service[] = ([
  {
    slug: "ai-workflow-automation",
    name: "AI Workflow Automation",
    icon: "workflow",
    tagline: "Automate repetitive, multi-step work end to end.",
    category: "Core",
    heroDescription:
      "We turn manual, multi-step processes into automated workflows that run themselves — from trigger to completion, with humans only where judgment is required.",
    benefits: [
      { title: "Hours back every week", description: "Repetitive approval chains, data entry, and hand-offs run without a person watching them." },
      { title: "Fewer dropped tasks", description: "Every step is logged and enforced, so nothing sits in someone's inbox for a week." },
      { title: "Built on what you already use", description: "Workflows sit on top of your existing tools instead of forcing a platform migration." },
      { title: "Human-in-the-loop where it matters", description: "Sensitive decisions still route to a person, with full context attached." },
    ],
    problems: [
      "Teams re-key the same data across three or four different tools every day.",
      "Approvals stall because no one owns the follow-up.",
      "Growth is capped by how many people you can hire into repetitive roles.",
      "Errors from manual handling surface downstream, far from where they started.",
    ],
    technologies: ["n8n", "Zapier", "Make", "Temporal", "AWS Step Functions", "Python", "PostgreSQL"],
    caseStudy: {
      client: "A regional logistics operator",
      industry: "Logistics",
      metric: "31 hrs",
      metricLabel: "saved per week",
      description:
        "We automated the dispatch-to-invoice workflow across four systems, cutting a five-step manual process down to one review step.",
    },
    faqs: [
      { q: "Do we need to replace our current software?", a: "No. We build automation on top of the tools you already run — CRM, ERP, spreadsheets, inboxes — and connect them." },
      { q: "What happens when something goes wrong mid-workflow?", a: "Every workflow ships with monitoring and alerting, so failures are caught and routed to a person immediately, not silently dropped." },
      { q: "How long until we see results?", a: "Most first workflows go live within 3–5 weeks, with measurable time savings from week one." },
    ],
  },
  {
    slug: "ai-agents",
    name: "AI Tools & Agents",
    icon: "bot",
    tagline: "Build custom interfaces and AI assistants tailored to your specific workflows.",
    category: "AI",
    heroDescription:
      "Most teams start with simple zaps that quickly spiral into unmanageable spaghetti code. When an API changes or a token expires, business-critical processes break silently.",
    benefits: [
      { title: "Strategy", description: "Architectural alignment before implementation." },
      { title: "Build", description: "Controlled deployment of automation infrastructure." },
      { title: "Handoff", description: "Operational enablement and system ownership transfer." },
      { title: "Support", description: "Ongoing performance governance and system optimization." },
    ],
    problems: [
      "We treat automation as software engineering. Every workflow is mapped, error-handled, and documented so your team isn’t dependent on a black box.",
      "Knowledge lives in a few people's heads instead of a system anyone can query.",
      "Off-the-shelf chatbots answer questions but can't actually do anything.",
      "Scaling a team linearly with ticket or request volume is unsustainable.",
    ],
    technologies: ["Claude", "GPT-4", "LangGraph", "Vector databases", "MCP", "Python", "TypeScript"],
    caseStudy: {
      client: "A B2B SaaS support org",
      industry: "SaaS",
      metric: "20–40%",
      metricLabel: "Reduction in manual workflow load",
      description:
        "We deployed an agent that reads tickets, queries billing and product data, and resolves common cases end-to-end without a human touch.",
    },
    faqs: [
      { q: "Will an agent make irreversible mistakes?", a: "High-risk actions route through approval gates until confidence and track record justify full autonomy." },
      { q: "Can agents work across multiple tools?", a: "Yes — agents are built with tool access to your CRM, helpdesk, database, and internal APIs as needed." },
      { q: "How is accuracy monitored?", a: "We instrument every agent decision so you can audit, review, and continuously improve accuracy over time." },
    ],
  },
  {
    slug: "support-automation",
    name: "Support Triage & Ticketing",
    icon: "life-buoy",
    tagline: "Connect disconnected tools so data flows where you need it, when needed.",
    category: "Ops",
    heroDescription:
      "Most teams start with simple zaps that quickly spiral into unmanageable spaghetti code. When an API changes or a token expires, business-critical processes break silently.",
    benefits: [
      { title: "Faster first response", description: "Tickets are triaged and routed the moment they arrive, 24/7." },
      { title: "Routine cases self-resolve", description: "Password resets, status checks, and FAQs are handled without an agent." },
      { title: "Consistent quality", description: "Every response follows the same knowledge base, every time." },
      { title: "Agents handle what matters", description: "Complex, high-value cases get a human's full attention instead of triage time." },
    ],
    problems: [
      "We treat automation as software engineering. Every workflow is mapped, error-handled, and documented so your team isn’t dependent on a black box.",
      "The same routine questions get answered manually, over and over.",
      "Response times slip during peak hours or after-hours.",
      "Agent time is consumed by triage instead of resolution.",
    ],
    technologies: ["Zendesk", "Intercom", "Claude", "Vector search", "Retrieval-augmented generation"],
    caseStudy: {
      client: "A consumer fintech platform",
      industry: "Finance",
      metric: "3.4x",
      metricLabel: "faster resolution time",
      description:
        "We built a triage and auto-resolution layer that handles routine tickets end-to-end and routes everything else with full context attached.",
    },
    faqs: [
      { q: "What happens to tickets it can't resolve?", a: "They route to the right agent with full context, prior conversation, and a suggested resolution attached." },
      { q: "Does this replace our support team?", a: "It removes the routine volume so your existing team can focus on complex, relationship-driving cases." },
      { q: "How is quality maintained?", a: "Responses are grounded in your own knowledge base and monitored for accuracy on an ongoing basis." },
    ],
  },
  {
    slug: "data-orchestration",
    name: "Data Orchestration",
    icon: "database",
    tagline: "Automate data collection, transformation and enrichment for better insights.",
    category: "Data",
    heroDescription:
      "Most teams start with simple zaps that quickly spiral into unmanageable spaghetti code. When an API changes or a token expires, business-critical processes break silently.",
    benefits: [
      { title: "One source of truth", description: "Systems stay in sync automatically instead of drifting apart over time." },
      { title: "Clean data by default", description: "Validation and deduplication run before bad data ever reaches a report." },
      { title: "Real-time or scheduled", description: "Pipelines run on whatever cadence the use case actually needs." },
      { title: "Built to scale", description: "Architecture handles growth in data volume without a rebuild." },
    ],
    problems: [
      "We treat automation as software engineering. Every workflow is mapped, error-handled, and documented so your team isn’t dependent on a black box.",
      "Manual exports and imports introduce errors and delays.",
      "Systems fall out of sync, and no one notices until it causes a problem.",
      "Engineering time is consumed maintaining brittle, ad-hoc scripts.",
    ],
    technologies: ["Airbyte", "dbt", "Snowflake", "BigQuery", "Fivetran", "Python", "Airflow"],
    caseStudy: {
      client: "A multi-brand retail group",
      industry: "eCommerce",
      metric: "20–40%",
      metricLabel: "Reduction in manual workflow load",
      description:
        "We replaced a patchwork of manual exports with automated pipelines syncing inventory and sales data across six systems in near real time.",
    },
    faqs: [
      { q: "Can you work with our existing data warehouse?", a: "Yes, we build on top of Snowflake, BigQuery, Redshift, or whatever warehouse you already run." },
      { q: "What if our data sources change over time?", a: "Pipelines are built with monitoring and schema-change alerts, so shifts get caught early." },
      { q: "Do you handle historical data migration too?", a: "Yes, backfills and historical migrations are typically part of the initial build." },
    ],
  },
  {
    slug: "system-integrations",
    name: "Systems Integration",
    icon: "network",
    tagline: "We connect CRM, ERP, support, and internal tools into a single automated workflow layer.",
    category: "Ops",
    heroDescription:
      "Most teams start with simple zaps that quickly spiral into unmanageable spaghetti code. When an API changes or a token expires, business-critical processes break silently.",
    benefits: [
      { title: "One operating layer", description: "Disparate systems act as one, without a costly full platform migration." },
      { title: "Legacy-friendly", description: "We work with older, on-premise, or heavily customized systems, not just modern SaaS." },
      { title: "Future-proof architecture", description: "Integration layers are designed to absorb new tools without a rebuild." },
      { title: "Reduced operational risk", description: "Fewer manual hand-offs mean fewer opportunities for costly errors." },
    ],
    problems: [
      "We treat automation as software engineering. Every workflow is mapped, error-handled, and documented so your team isn’t dependent on a black box.",
      "Critical business logic is trapped in a legacy system nobody wants to touch.",
      "IT teams are stretched thin maintaining fragile point-to-point connections.",
      "New tools can't be adopted because integrating them looks too risky.",
    ],
    technologies: ["Enterprise service bus", "MuleSoft", "Kafka", "AWS", "Azure", "On-prem connectors"],
    caseStudy: {
      client: "A regional healthcare network",
      industry: "Mid-market SaaS",
      metric: "20–40%",
      metricLabel: "Reduction in manual workflow load",
      description:
        "We integrated scheduling, billing, and records systems spanning two decades of tooling into a single coherent operating layer.",
    },
    faqs: [
      { q: "Can you work with legacy, on-premise systems?", a: "Yes — much of our integration work involves connecting legacy systems that lack modern APIs." },
      { q: "How disruptive is this to daily operations?", a: "We design phased, reversible rollouts so operations continue uninterrupted throughout." },
      { q: "Do you replace our core systems?", a: "No — we connect what you have. Replacement is only recommended when it's genuinely the better path." },
    ],
  },
  {
    slug: "reporting-automation",
    name: "Support & Monitoring",
    icon: "bar-chart-3",
    tagline: "Ongoing maintenance, optimization, and proactive monitoring for peace of mind.",
    category: "Data",
    heroDescription:
      "We automate the collection, calculation, and distribution of reports, so decision-makers get accurate numbers on schedule, without a manual pull-and-format process.",
    benefits: [
      { title: "Reports that build themselves", description: "Dashboards and reports refresh automatically instead of requiring a manual pull." },
      { title: "Consistent, trusted numbers", description: "Every stakeholder sees the same figures, calculated the same way." },
      { title: "Delivered where people work", description: "Reports land in Slack, email, or a dashboard — wherever your team already looks." },
      { title: "Time back for analysis", description: "Analysts spend time interpreting data, not assembling it." },
    ],
    problems: [
      "Analysts spend days each month assembling recurring reports manually.",
      "Different teams report different numbers for the same metric.",
      "Executives wait days for figures that should be available in real time.",
      "Report formatting breaks every time a source system changes.",
    ],
    technologies: ["Looker", "Power BI", "Tableau", "dbt", "Snowflake", "Python", "Slack API"],
    caseStudy: {
      client: "A private equity-backed services group",
      industry: "MID-MARKET SAAS",
      metric: "20-40%",
      metricLabel: "Reduction in manual workflow load",
      description:
        "We automated portfolio-company reporting roll-ups that previously took a two-person team most of a week each month.",
    },
    faqs: [
      { q: "Can reports pull from multiple systems?", a: "Yes, we commonly aggregate data from several source systems into one unified report." },
      { q: "What if our metrics definitions change?", a: "Metric logic is centralized and version-controlled, so updates propagate everywhere at once." },
      { q: "Can non-technical stakeholders request changes?", a: "Yes, we typically build a lightweight layer that lets business teams adjust filters and views themselves." },
    ],
  },
] as Omit<Service, "process">[]).map((service) => ({
  ...service,
  process: processFor(service.name),
}));

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
