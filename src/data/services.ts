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
    name: "AI Agents",
    icon: "bot",
    tagline: "Autonomous agents that execute, not just chat.",
    category: "AI",
    heroDescription:
      "We build AI agents that take real actions inside your systems — reading, deciding, and executing tasks that used to require a person at the keyboard.",
    benefits: [
      { title: "Agents that finish the job", description: "Beyond answering questions, agents complete tasks: update records, send communications, trigger downstream steps." },
      { title: "Grounded in your data", description: "Agents reason over your own documents, databases, and APIs — not generic public knowledge." },
      { title: "Safe by design", description: "Permission scopes, approval gates, and audit trails are built in from day one." },
      { title: "Composable across teams", description: "One agent framework can power support, sales, and operations use cases." },
    ],
    problems: [
      "Skilled staff spend hours on tasks that are mostly pattern-matching.",
      "Knowledge lives in a few people's heads instead of a system anyone can query.",
      "Off-the-shelf chatbots answer questions but can't actually do anything.",
      "Scaling a team linearly with ticket or request volume is unsustainable.",
    ],
    technologies: ["Claude", "GPT-4", "LangGraph", "Vector databases", "MCP", "Python", "TypeScript"],
    caseStudy: {
      client: "A B2B SaaS support org",
      industry: "SaaS",
      metric: "58%",
      metricLabel: "tickets auto-resolved",
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
    slug: "business-process-automation",
    name: "Business Process Automation",
    icon: "git-merge",
    tagline: "Redesign and automate core operating processes.",
    category: "Core",
    heroDescription:
      "We rebuild the operating processes that run your business — onboarding, procurement, compliance — as automated systems instead of tribal knowledge.",
    benefits: [
      { title: "Standardized execution", description: "Every process runs the same way every time, regardless of who initiated it." },
      { title: "Full audit trail", description: "Every step, decision, and exception is logged for compliance and review." },
      { title: "Faster onboarding", description: "New hires follow a system, not a binder of outdated instructions." },
      { title: "Exceptions handled gracefully", description: "Edge cases route to the right person instead of breaking the whole process." },
    ],
    problems: [
      "Core processes exist only as institutional knowledge held by a few veterans.",
      "Compliance reviews take weeks because evidence is scattered across email threads.",
      "Process quality varies wildly depending on who executes it.",
      "Scaling headcount doesn't scale process quality.",
    ],
    technologies: ["Camunda", "n8n", "Retool", "PostgreSQL", "Docusign API", "AWS"],
    caseStudy: {
      client: "A mid-market financial services firm",
      industry: "Finance",
      metric: "4.2x",
      metricLabel: "faster compliance review",
      description:
        "We automated document intake, validation, and routing for a compliance-heavy onboarding process spanning five departments.",
    },
    faqs: [
      { q: "Can this handle processes with a lot of exceptions?", a: "Yes — we design explicit exception paths so edge cases are routed to a human rather than silently mishandled." },
      { q: "Do you document the process as part of this?", a: "Every automated process comes with a living process map, so it's documented by construction." },
      { q: "What's the typical project size?", a: "Most engagements start with one high-friction process and expand once the model proves out." },
    ],
  },
  {
    slug: "crm-automation",
    name: "CRM Automation",
    icon: "users",
    tagline: "Keep your CRM accurate without manual upkeep.",
    category: "Sales",
    heroDescription:
      "We automate the data entry, enrichment, and routing that keeps a CRM valuable — so reps sell instead of updating fields.",
    benefits: [
      { title: "Always-accurate records", description: "Contact, deal, and account data stay current without reps manually updating them." },
      { title: "Smarter lead routing", description: "Leads land with the right rep, with the right context, in seconds." },
      { title: "Enriched automatically", description: "Firmographic and intent data populate records the moment they're created." },
      { title: "Pipeline hygiene at scale", description: "Stale deals, missing fields, and duplicate records get flagged and fixed automatically." },
    ],
    problems: [
      "Reps spend hours a week on manual data entry instead of selling.",
      "Leads sit unassigned while a manager manually triages them.",
      "Forecast accuracy suffers because CRM data is stale or incomplete.",
      "Duplicate and orphaned records erode trust in the CRM.",
    ],
    technologies: ["Salesforce", "HubSpot", "Clay", "Zapier", "Segment", "Snowflake"],
    caseStudy: {
      client: "A high-growth SaaS scale-up",
      industry: "SaaS",
      metric: "22%",
      metricLabel: "faster lead response",
      description:
        "We built automated enrichment and routing that cut lead response time and lifted rep pipeline coverage within a single quarter.",
    },
    faqs: [
      { q: "Which CRMs do you support?", a: "We most commonly work with Salesforce and HubSpot, and integrate with most CRMs that expose an API." },
      { q: "Will this change how reps work day to day?", a: "Reps see less manual entry and better-qualified leads — workflow changes are typically welcomed, not resisted." },
      { q: "Can you fix historical data quality issues too?", a: "Yes, we typically run a one-time cleanup pass alongside the ongoing automation." },
    ],
  },
  {
    slug: "sales-automation",
    name: "Sales Automation",
    icon: "target",
    tagline: "Automate prospecting, outreach, and follow-up.",
    category: "Sales",
    heroDescription:
      "We automate the repetitive parts of the sales cycle — prospecting, sequencing, follow-up — so your team spends time where it actually closes deals.",
    benefits: [
      { title: "Consistent pipeline generation", description: "Prospecting and sequencing run continuously, independent of rep bandwidth." },
      { title: "Personalized at scale", description: "AI-assisted personalization replaces generic mail-merge outreach." },
      { title: "No follow-up falls through", description: "Every prospect gets a timely, tracked follow-up sequence." },
      { title: "Reps focus on conversations", description: "Automation handles logistics; people handle persuasion." },
    ],
    problems: [
      "Reps spend more time prospecting than talking to qualified buyers.",
      "Follow-up is inconsistent and depends on individual rep discipline.",
      "Outreach is generic because personalization doesn't scale manually.",
      "Pipeline generation stalls whenever headcount is flat.",
    ],
    technologies: ["Outreach", "Apollo", "Clay", "HubSpot", "GPT-4", "Zapier"],
    caseStudy: {
      client: "An enterprise software vendor",
      industry: "SaaS",
      metric: "2.1x",
      metricLabel: "more qualified meetings",
      description:
        "We automated prospecting research and personalized sequencing, more than doubling qualified meeting volume without adding headcount.",
    },
    faqs: [
      { q: "Does automated outreach feel generic?", a: "We use enrichment and AI-assisted drafting to personalize each message, then have reps review before send." },
      { q: "Will this replace our SDR team?", a: "No — it removes the repetitive research and sequencing work so SDRs spend more time on live conversations." },
      { q: "Can it integrate with our existing sequences?", a: "Yes, we typically build on top of your existing sales engagement platform." },
    ],
  },
  {
    slug: "support-automation",
    name: "Support Automation",
    icon: "life-buoy",
    tagline: "Resolve routine tickets before they reach an agent.",
    category: "Ops",
    heroDescription:
      "We automate triage, routing, and resolution for support so your team handles the complex cases while routine ones resolve instantly.",
    benefits: [
      { title: "Faster first response", description: "Tickets are triaged and routed the moment they arrive, 24/7." },
      { title: "Routine cases self-resolve", description: "Password resets, status checks, and FAQs are handled without an agent." },
      { title: "Consistent quality", description: "Every response follows the same knowledge base, every time." },
      { title: "Agents handle what matters", description: "Complex, high-value cases get a human's full attention instead of triage time." },
    ],
    problems: [
      "Support volume grows faster than the team can be hired.",
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
    tagline: "Keep data flowing accurately between every system.",
    category: "Data",
    heroDescription:
      "We build the pipelines that move, clean, and sync data between your systems, so every team works from the same accurate source of truth.",
    benefits: [
      { title: "One source of truth", description: "Systems stay in sync automatically instead of drifting apart over time." },
      { title: "Clean data by default", description: "Validation and deduplication run before bad data ever reaches a report." },
      { title: "Real-time or scheduled", description: "Pipelines run on whatever cadence the use case actually needs." },
      { title: "Built to scale", description: "Architecture handles growth in data volume without a rebuild." },
    ],
    problems: [
      "Different teams report different numbers for the same metric.",
      "Manual exports and imports introduce errors and delays.",
      "Systems fall out of sync, and no one notices until it causes a problem.",
      "Engineering time is consumed maintaining brittle, ad-hoc scripts.",
    ],
    technologies: ["Airbyte", "dbt", "Snowflake", "BigQuery", "Fivetran", "Python", "Airflow"],
    caseStudy: {
      client: "A multi-brand retail group",
      industry: "Retail",
      metric: "99.8%",
      metricLabel: "data sync accuracy",
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
    slug: "document-processing",
    name: "Document Processing",
    icon: "file-text",
    tagline: "Extract, classify, and route documents automatically.",
    category: "Data",
    heroDescription:
      "We automate the reading, extraction, and routing of documents — contracts, invoices, forms — so no one manually retypes what a system can read.",
    benefits: [
      { title: "No manual re-keying", description: "Data is extracted directly from documents into your systems of record." },
      { title: "Handles messy formats", description: "Scanned PDFs, handwritten forms, and varied templates are all supported." },
      { title: "Automatic classification", description: "Documents route to the right workflow the moment they arrive." },
      { title: "Accuracy you can audit", description: "Every extraction is confidence-scored, with low-confidence cases flagged for review." },
    ],
    problems: [
      "Staff spend hours manually transcribing invoices, contracts, or forms.",
      "Inconsistent document formats break simple template-based extraction.",
      "Errors introduced during manual entry cascade into downstream systems.",
      "Document backlogs build up during high-volume periods.",
    ],
    technologies: ["AWS Textract", "Azure Document Intelligence", "GPT-4 Vision", "Python", "OCR pipelines"],
    caseStudy: {
      client: "A commercial real estate firm",
      industry: "Real Estate",
      metric: "94%",
      metricLabel: "extraction accuracy",
      description:
        "We automated lease abstraction across thousands of legacy contracts, cutting a multi-week manual review process to days.",
    },
    faqs: [
      { q: "Does this work with scanned or handwritten documents?", a: "Yes — modern OCR and vision models handle scanned, handwritten, and inconsistent formats well." },
      { q: "What accuracy should we expect?", a: "Accuracy varies by document type; low-confidence extractions are flagged for human review rather than guessed." },
      { q: "Can it plug into our document management system?", a: "Yes, output routes directly into your DMS, ERP, or CRM of choice." },
    ],
  },
  {
    slug: "erp-integration",
    name: "ERP Integration",
    icon: "layers",
    tagline: "Connect your ERP to everything around it.",
    category: "Ops",
    heroDescription:
      "We integrate your ERP with the sales, support, and data tools around it, so information flows without manual exports or duplicate entry.",
    benefits: [
      { title: "Single operational view", description: "Orders, inventory, and financials stay synchronized across every connected system." },
      { title: "No duplicate entry", description: "Data entered once flows everywhere it's needed." },
      { title: "Faster reporting", description: "Financial and operational reports pull from live, synced data." },
      { title: "Vendor-agnostic", description: "Works with the ERP you already run — no forced migration." },
    ],
    problems: [
      "Order and inventory data has to be manually re-entered into the ERP.",
      "Finance and operations work from different, disconnected numbers.",
      "ERP customization backlogs stall simple integration requests for months.",
      "Legacy ERP systems lack modern APIs, requiring custom connectors.",
    ],
    technologies: ["SAP", "NetSuite", "Microsoft Dynamics", "Odoo", "MuleSoft", "REST/SOAP APIs"],
    caseStudy: {
      client: "A national manufacturing company",
      industry: "Manufacturing",
      metric: "6 systems",
      metricLabel: "unified with ERP",
      description:
        "We connected legacy SAP infrastructure to modern CRM, e-commerce, and reporting tools, eliminating three full-time data entry roles.",
    },
    faqs: [
      { q: "Which ERPs do you integrate with?", a: "We've worked with SAP, NetSuite, Dynamics, Odoo, and most systems exposing a modern or legacy API." },
      { q: "What if our ERP is heavily customized?", a: "We build integrations around your specific configuration rather than assuming a standard setup." },
      { q: "Is downtime required during integration?", a: "We design phased rollouts specifically to avoid disruption to live operations." },
    ],
  },
  {
    slug: "api-integrations",
    name: "API Integrations",
    icon: "plug",
    tagline: "Connect any tool to any other tool, reliably.",
    category: "Ops",
    heroDescription:
      "We build robust, monitored integrations between the tools your business runs on, so data and actions flow automatically instead of through manual bridges.",
    benefits: [
      { title: "Reliable, monitored connections", description: "Integrations are built with retries, alerting, and error handling, not brittle one-off scripts." },
      { title: "Any tool, any tool", description: "If it has an API — or even just a spreadsheet export — we can connect it." },
      { title: "Faster than platform migration", description: "Get systems talking without ripping and replacing what already works." },
      { title: "Documented and maintainable", description: "Every integration ships with documentation your team can actually use." },
    ],
    problems: [
      "Two critical tools don't talk to each other, forcing manual bridging.",
      "Existing integrations break silently and no one notices for days.",
      "Point solutions were each chosen well, but they don't work together.",
      "In-house scripts maintaining integrations lack monitoring or documentation.",
    ],
    technologies: ["REST", "GraphQL", "Webhooks", "n8n", "AWS Lambda", "Postman", "TypeScript"],
    caseStudy: {
      client: "A DTC e-commerce brand",
      industry: "eCommerce",
      metric: "12",
      metricLabel: "systems connected",
      description:
        "We integrated storefront, fulfillment, accounting, and marketing platforms into one connected operational layer.",
    },
    faqs: [
      { q: "What if a tool doesn't have a public API?", a: "We evaluate alternatives — webhooks, partner APIs, or scheduled exports — to bridge the gap reliably." },
      { q: "How do you handle integration failures?", a: "Every integration includes monitoring and alerting so failures are caught immediately, not discovered downstream." },
      { q: "Can you maintain integrations long-term?", a: "Yes, ongoing support plans are available for monitoring and evolving integrations as your stack changes." },
    ],
  },
  {
    slug: "system-integrations",
    name: "System Integrations",
    icon: "network",
    tagline: "Unify fragmented systems into one operating layer.",
    category: "Ops",
    heroDescription:
      "We connect the fragmented systems behind your operations — legacy and modern — into a single, coherent layer that your team and your automations can rely on.",
    benefits: [
      { title: "One operating layer", description: "Disparate systems act as one, without a costly full platform migration." },
      { title: "Legacy-friendly", description: "We work with older, on-premise, or heavily customized systems, not just modern SaaS." },
      { title: "Future-proof architecture", description: "Integration layers are designed to absorb new tools without a rebuild." },
      { title: "Reduced operational risk", description: "Fewer manual hand-offs mean fewer opportunities for costly errors." },
    ],
    problems: [
      "Years of tool adoption left systems that don't talk to each other.",
      "Critical business logic is trapped in a legacy system nobody wants to touch.",
      "IT teams are stretched thin maintaining fragile point-to-point connections.",
      "New tools can't be adopted because integrating them looks too risky.",
    ],
    technologies: ["Enterprise service bus", "MuleSoft", "Kafka", "AWS", "Azure", "On-prem connectors"],
    caseStudy: {
      client: "A regional healthcare network",
      industry: "Healthcare",
      metric: "9 systems",
      metricLabel: "unified into one layer",
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
    name: "Reporting Automation",
    icon: "bar-chart-3",
    tagline: "Turn scattered data into reports that build themselves.",
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
      industry: "Finance",
      metric: "40 hrs/mo",
      metricLabel: "of manual reporting removed",
      description:
        "We automated portfolio-company reporting roll-ups that previously took a two-person team most of a week each month.",
    },
    faqs: [
      { q: "Can reports pull from multiple systems?", a: "Yes, we commonly aggregate data from several source systems into one unified report." },
      { q: "What if our metrics definitions change?", a: "Metric logic is centralized and version-controlled, so updates propagate everywhere at once." },
      { q: "Can non-technical stakeholders request changes?", a: "Yes, we typically build a lightweight layer that lets business teams adjust filters and views themselves." },
    ],
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots",
    icon: "message-circle",
    tagline: "Conversational AI grounded in your business.",
    category: "AI",
    heroDescription:
      "We build conversational AI that actually knows your business — trained on your documentation, policies, and systems — for support, sales, and internal use.",
    benefits: [
      { title: "Grounded, not generic", description: "Responses are based on your actual documentation and data, not general web knowledge." },
      { title: "Available everywhere", description: "Deploy across your website, product, Slack, or WhatsApp from one underlying system." },
      { title: "Escalates intelligently", description: "Complex or sensitive conversations hand off to a human with full context." },
      { title: "Improves over time", description: "Conversation data feeds back into improving accuracy and coverage." },
    ],
    problems: [
      "Customers get inconsistent answers depending on which article they find.",
      "Support and sales teams answer the same questions dozens of times a day.",
      "Off-the-shelf chatbot widgets give generic, unhelpful answers.",
      "Internal teams can't quickly find answers buried in internal docs.",
    ],
    technologies: ["Claude", "GPT-4", "RAG pipelines", "Pinecone", "Vector search", "Next.js"],
    caseStudy: {
      client: "An enterprise HR software company",
      industry: "SaaS",
      metric: "71%",
      metricLabel: "of questions self-served",
      description:
        "We deployed a chatbot grounded in product documentation and account data that now handles the majority of pre-sales and support questions.",
    },
    faqs: [
      { q: "How does the chatbot stay accurate?", a: "It retrieves answers from your live documentation and data rather than relying on memorized, static content." },
      { q: "Can it take actions, not just answer questions?", a: "Yes — chatbots can be extended with tool access to check order status, update records, or trigger workflows." },
      { q: "Where can it be deployed?", a: "Website, in-product widget, Slack, WhatsApp, or an internal tool — from a single underlying system." },
    ],
  },
  {
    slug: "custom-ai-solutions",
    name: "Custom AI Solutions",
    icon: "sparkles",
    tagline: "Purpose-built AI for problems off the shelf.",
    category: "AI",
    heroDescription:
      "When your problem doesn't fit a template, we design and build a custom AI solution around your exact workflow, data, and constraints.",
    benefits: [
      { title: "Built around your problem", description: "No forcing a generic tool to approximate what you actually need." },
      { title: "Full ownership", description: "You own the resulting system outright — no lock-in to a vendor platform." },
      { title: "Scoped and de-risked", description: "We prototype fast to validate feasibility before committing to full build." },
      { title: "Production-grade from day one", description: "Solutions are engineered for reliability, not just demoed." },
    ],
    problems: [
      "No existing product or platform addresses your specific problem well.",
      "A previous vendor's off-the-shelf AI tool over-promised and under-delivered.",
      "Your data or workflow has constraints that generic tools can't accommodate.",
      "Leadership wants a real AI capability, not a proof-of-concept demo.",
    ],
    technologies: ["Claude", "GPT-4", "Custom ML pipelines", "AWS", "Python", "TypeScript", "PyTorch"],
    caseStudy: {
      client: "An industrial equipment manufacturer",
      industry: "Manufacturing",
      metric: "3 months",
      metricLabel: "from concept to production",
      description:
        "We designed a custom predictive-maintenance model and operator-facing interface tailored to equipment data no off-the-shelf tool could parse.",
    },
    faqs: [
      { q: "How do you scope a custom project?", a: "We start with a short, fixed-scope discovery and prototype phase to validate feasibility before a full build." },
      { q: "Who owns the resulting system?", a: "You do — full source code and model ownership transfer to you at completion." },
      { q: "What if the initial approach doesn't work?", a: "The prototype phase exists precisely to catch that early, before significant investment." },
    ],
  },
] as Omit<Service, "process">[]).map((service) => ({
  ...service,
  process: processFor(service.name),
}));

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
