export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  sections: { heading: string; body: string }[];
};

export const articles: Article[] = [
  {
    slug: "when-to-automate-vs-hire",
    title: "When to automate a process instead of hiring for it",
    excerpt: "A practical framework for deciding where headcount is the right answer and where it's a symptom of unautomated process.",
    category: "Strategy",
    readTime: "6 min",
    date: "2026-05-04",
    sections: [
      { heading: "The default is backwards", body: "Most teams default to hiring when a process becomes a bottleneck. But hiring adds a person to a broken process rather than fixing it — the bottleneck usually reappears at the next growth stage." },
      { heading: "Three questions to ask first", body: "Is the process well-defined enough to automate today? Does volume justify the build cost within two quarters? Does the work require judgment, or just pattern recognition executed repeatedly?" },
      { heading: "Where hiring is still right", body: "Automation isn't always the answer. Roles built on relationship, negotiation, or genuinely novel judgment calls should stay human — automate the scaffolding around them instead." },
    ],
  },
  {
    slug: "ai-agents-vs-chatbots",
    title: "AI agents vs. chatbots: a distinction that actually matters",
    excerpt: "Most 'AI chatbot' vendors are selling a search box. Agents that can take action are a different category of tool entirely.",
    category: "AI",
    readTime: "5 min",
    date: "2026-04-18",
    sections: [
      { heading: "A chatbot answers; an agent acts", body: "A chatbot retrieves and summarizes information. An agent reads state, makes a decision, and executes a change — updating a record, sending a message, triggering a workflow." },
      { heading: "Why this distinction gets lost", body: "Vendors market both under 'AI assistant,' which obscures the real question: can this system take an action on my behalf, safely, and can I audit what it did?" },
      { heading: "What to evaluate instead", body: "Ask what tools the system has access to, what happens when it's uncertain, and how actions are logged. That tells you more than any demo." },
    ],
  },
  {
    slug: "integration-debt-explained",
    title: "Integration debt: the hidden tax on every growing operation",
    excerpt: "Every point-to-point integration you skip today becomes a manual process someone runs forever. Here's how that debt compounds.",
    category: "Operations",
    readTime: "7 min",
    date: "2026-03-22",
    sections: [
      { heading: "It starts small", body: "One export-import between two tools seems harmless. Multiply that by every tool adopted over three years, and you have a web of manual bridges nobody fully understands." },
      { heading: "The compounding cost", body: "Each manual bridge is a place data can silently drift, a task someone has to remember, and a single point of failure when that person is out." },
      { heading: "Paying it down", body: "Integration debt is paid down incrementally — start with the highest-volume, highest-error bridge, not with a full platform rebuild." },
    ],
  },
  {
    slug: "roi-model-for-automation",
    title: "A simple ROI model for evaluating automation projects",
    excerpt: "You don't need a complex model to justify automation spend. Three inputs get you most of the way there.",
    category: "Strategy",
    readTime: "4 min",
    date: "2026-03-02",
    sections: [
      { heading: "Time saved × frequency × cost", body: "Start with hours saved per instance, multiply by how often the process runs, multiply by fully-loaded hourly cost. That's your baseline annual return." },
      { heading: "Don't ignore error cost", body: "Manual processes carry an error rate. Estimate the cost of those errors downstream — it's often larger than the time savings alone." },
      { heading: "Discount for adoption risk", body: "Apply a conservative adoption discount in year one. Most automations under-deliver initially and compound in value after that." },
    ],
  },
  {
    slug: "data-quality-before-ai",
    title: "Fix your data before you deploy AI on top of it",
    excerpt: "AI systems amplify whatever data discipline already exists in your organization — good or bad.",
    category: "Data",
    readTime: "6 min",
    date: "2026-02-14",
    sections: [
      { heading: "Garbage in, confidently wrong out", body: "An AI agent reasoning over inconsistent, duplicate, or stale data doesn't fail loudly — it produces confident, wrong answers." },
      { heading: "The 80/20 of data readiness", body: "You don't need perfect data. You need consistent schemas, deduplication, and a clear source of truth for the fields the AI will actually touch." },
      { heading: "Sequence matters", body: "Run a data orchestration pass before or alongside an AI deployment, not after problems surface in production." },
    ],
  },
  {
    slug: "change-management-for-automation",
    title: "The change management problem nobody plans for",
    excerpt: "The technical build is rarely what determines whether an automation project succeeds. Adoption is.",
    category: "Operations",
    readTime: "5 min",
    date: "2026-01-27",
    sections: [
      { heading: "Automation changes jobs, not just tasks", body: "When a workflow is automated, the person who used to run it manually needs a new relationship to that process — reviewer, exception handler, or something else entirely." },
      { heading: "Involve the team early", body: "Teams that helped design the automation adopt it faster and flag edge cases the build team would have missed." },
      { heading: "Measure adoption, not just uptime", body: "A technically working automation that people route around isn't a success. Track usage, not just system health." },
    ],
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  logoName: string;
  industry: string;
  serviceSlug: string;
  title: string;
  summary: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  outcome: string;
  results: string[];
  quote: { text: string; author: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "regional-logistics-dispatch-automation",
    client: "A regional logistics operator",
    logoName: "RouteOne",
    industry: "Logistics",
    serviceSlug: "ai-workflow-automation",
    title: "Cutting a five-step dispatch process down to one review step",
    summary: "We automated the dispatch-to-invoice workflow across four systems for a 300-truck logistics operator.",
    metric: "31 hrs",
    metricLabel: "saved per week",
    challenge:
      "Dispatch coordination ran across phone calls, a TMS, a spreadsheet, and email. Invoicing lagged deliveries by up to two weeks, and errors compounded across every manual hand-off.",
    solution:
      "We built an automated pipeline connecting the TMS, accounting system, and driver communication tool, with a single human review checkpoint before invoices were sent.",
    results: [
      "31 hours per week returned to the dispatch team.",
      "Invoicing cycle time cut from two weeks to two days.",
      "Manual data entry errors eliminated from the dispatch-to-invoice path.",
    ],
    outcome:
      "Dispatch and invoicing now run as one connected workflow, with a single review step instead of five manual hand-offs.",
    quote: {
      text: "We didn't need more dispatchers. We needed the five tools we already had to talk to each other.",
      author: "Operations Director",
      role: "Regional Logistics Operator",
    },
  },
  {
    slug: "saas-support-agent-deployment",
    client: "A B2B SaaS support organization",
    logoName: "CloudFrame",
    industry: "SaaS",
    serviceSlug: "ai-agents",
    title: "An agent that resolves 58% of tickets without a human touch",
    summary: "We deployed an AI agent grounded in product and billing data to autonomously resolve routine support tickets.",
    metric: "58%",
    metricLabel: "tickets auto-resolved",
    challenge:
      "Support volume was growing faster than the team could scale, and the majority of tickets were routine — billing questions, status checks, common product issues.",
    solution:
      "We built an agent with read/write access to the billing system and product database, able to resolve common cases end-to-end and escalate the rest with full context.",
    results: [
      "58% of inbound tickets resolved without a human agent.",
      "First response time dropped from hours to seconds.",
      "Remaining tickets arrive at agents pre-triaged with a suggested resolution.",
    ],
    outcome:
      "Support scales sub-linearly now — the agent resolves most tickets end-to-end and hands off the rest with full context attached.",
    quote: {
      text: "The agent doesn't just answer questions — it actually finishes the job. That was the difference versus every chatbot we'd tried before.",
      author: "VP of Customer Experience",
      role: "B2B SaaS Company",
    },
  },
  {
    slug: "financial-services-kyc-automation",
    client: "A mid-market wealth management firm",
    logoName: "Finstack Group",
    industry: "Finance",
    serviceSlug: "ai-workflow-automation",
    title: "4.2x faster client onboarding without cutting compliance corners",
    summary: "We automated document intake, validation, and routing for a compliance-heavy client onboarding process.",
    metric: "4.2x",
    metricLabel: "faster compliance review",
    challenge:
      "Onboarding required document review across five departments, with compliance evidence scattered across email threads and shared drives, taking weeks per client.",
    solution:
      "We automated document intake and validation with a full audit trail, routing exceptions to the right reviewer automatically instead of a manual queue.",
    results: [
      "Compliance review cycle time reduced 4.2x.",
      "100% of onboarding decisions now carry a complete audit trail.",
      "Reviewer time reallocated from document chasing to actual review.",
    ],
    outcome:
      "Onboarding is faster and fully auditable at the same time, with every decision logged for compliance review.",
    quote: {
      text: "Compliance got faster and more defensible at the same time. We weren't expecting both.",
      author: "Head of Compliance",
      role: "Wealth Management Firm",
    },
  },
  {
    slug: "retail-inventory-sync",
    client: "A multi-brand retail group",
    logoName: "NorthBridge",
    industry: "eCommerce",
    serviceSlug: "data-orchestration",
    title: "Six systems, one accurate inventory number",
    summary: "We replaced a patchwork of manual exports with automated pipelines syncing inventory across six systems.",
    metric: "99.8%",
    metricLabel: "data sync accuracy",
    challenge:
      "Storefront, warehouse, and e-commerce inventory counts drifted apart constantly, causing overselling and manual reconciliation work every week.",
    solution:
      "We built automated, near real-time pipelines syncing inventory data across all six systems, with validation and alerting on discrepancies.",
    results: [
      "99.8% inventory sync accuracy across all connected systems.",
      "Manual reconciliation work eliminated from the weekly operating cycle.",
      "Overselling incidents dropped to near zero.",
    ],
    outcome:
      "Every team now works from the same real-time inventory number, with reconciliation work removed from the weekly cycle.",
    quote: {
      text: "For the first time, every team is looking at the same number.",
      author: "COO",
      role: "Multi-brand Retail Group",
    },
  },
  {
    slug: "real-estate-lease-abstraction",
    client: "A commercial real estate firm",
    logoName: "Atlas Property",
    industry: "Real Estate",
    serviceSlug: "data-orchestration",
    title: "Lease abstraction from three weeks to three days",
    summary: "We automated lease abstraction across thousands of legacy contracts using document AI.",
    metric: "94%",
    metricLabel: "extraction accuracy",
    challenge:
      "Lease terms across a large legacy portfolio existed only as scanned PDFs, requiring weeks of manual abstraction whenever the portfolio needed review.",
    solution:
      "We built a document processing pipeline that extracts key clauses, dates, and obligations directly into the portfolio management system, flagging low-confidence extractions for review.",
    results: [
      "94% extraction accuracy on legacy scanned documents.",
      "Abstraction turnaround cut from three weeks to three days.",
      "Portfolio team redeployed from manual review to lease strategy.",
    ],
    outcome:
      "A portfolio that existed only as scanned PDFs is now structured, searchable data the team can act on directly.",
    quote: {
      text: "We finally have structured data on a portfolio that existed only as filing cabinets full of PDFs.",
      author: "VP of Asset Management",
      role: "Commercial Real Estate Firm",
    },
  },
  {
    slug: "manufacturing-erp-integration",
    client: "A national manufacturing company",
    logoName: "Solstice Industrial",
    industry: "Manufacturing",
    serviceSlug: "system-integrations",
    title: "Connecting a legacy ERP to a modern operating stack",
    summary: "We integrated legacy SAP infrastructure with modern CRM, e-commerce, and reporting tools.",
    metric: "6 systems",
    metricLabel: "unified with ERP",
    challenge:
      "Order and inventory data had to be manually re-entered into an aging SAP instance, consuming three full-time roles and introducing frequent errors.",
    solution:
      "We built a middleware integration layer connecting SAP to the company's CRM, e-commerce platform, and reporting stack, with monitoring on every data flow.",
    results: [
      "Three full-time manual data-entry roles eliminated.",
      "Order-to-fulfillment cycle time reduced significantly.",
      "Finance and operations now report from the same live data.",
    ],
    outcome:
      "Three manual data-entry roles were eliminated, with finance and operations finally reporting from the same live numbers.",
    quote: {
      text: "We assumed our ERP was too old to integrate with anything modern. That assumption cost us years.",
      author: "VP of Operations",
      role: "National Manufacturing Company",
    },
  },
];

export const resourceFaqs = [
  { q: "Are your case studies based on real clients?", a: "Yes — details are generalized where clients request confidentiality, but every metric reflects an actual engagement." },
  { q: "Can I request an article on a specific topic?", a: "Yes, reach out through the contact page and we'll consider it for the article library." },
  { q: "Do you offer these resources under NDA for deeper detail?", a: "For active engagements, we can share more detailed benchmarks and architecture under NDA." },
];
