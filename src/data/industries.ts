export type Industry = {
  slug: string;
  name: string;
  icon:
    | "cloud"
    | "heart-pulse"
    | "landmark"
    | "building-2"
    | "truck"
    | "factory"
    | "megaphone"
    | "graduation-cap"
    | "shopping-bag"
    | "scale"
    | "hard-hat"
    | "concierge-bell";
  image?: string;
  heroImage: string;
  tagline: string;
  heroDescription: string;
  painPoints: string[];
  solutions: { title: string; description: string }[];
  workflows: string[];
  automationExamples: { title: string; description: string }[];
  roi: { metric: string; label: string }[];
  caseStudy: {
    client: string;
    result: string;
    description: string;
  };
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "saas",
    name: "SaaS",
    icon: "cloud",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
    heroImage: "/ind-saas.png",
    tagline: "Automate the operations behind growth.",
    heroDescription:
      "From lead routing to churn signals, we automate the operational layer that lets a SaaS company scale revenue without scaling headcount linearly.",
    painPoints: [
      "Support and success teams can't keep pace with user growth.",
      "Product usage data isn't reaching sales and success in time to act on it.",
      "Onboarding is manual and inconsistent across new accounts.",
      "Churn signals are noticed too late to intervene.",
    ],
    solutions: [
      { title: "Usage-triggered workflows", description: "Product signals automatically trigger the right sales, success, or support action." },
      { title: "Automated onboarding", description: "New accounts move through a consistent, monitored onboarding sequence." },
      { title: "AI-assisted support", description: "Routine product questions resolve instantly, freeing the team for complex cases." },
    ],
    workflows: ["Lead routing & enrichment", "Trial-to-paid nurture", "Churn-risk alerting", "Renewal & upsell triggers"],
    automationExamples: [
      { title: "Product-qualified lead routing", description: "Usage thresholds automatically notify sales with full account context." },
      { title: "Churn-risk detection", description: "Declining usage patterns trigger a proactive success outreach automatically." },
    ],
    roi: [
      { metric: "31%", label: "faster time-to-value" },
      { metric: "18%", label: "reduction in churn signals missed" },
    ],
    caseStudy: {
      client: "A Series B vertical SaaS company",
      result: "22% faster lead response, 4 hrs/week saved per rep",
      description:
        "We connected product usage data to the CRM and automated lead routing and churn alerting across the customer lifecycle.",
    },
    faqs: [
      { q: "Do you integrate with our product analytics tool?", a: "Yes, we commonly connect Amplitude, Mixpanel, or Segment to trigger downstream workflows." },
      { q: "Can this work alongside our existing CS platform?", a: "Yes, automation is built to complement tools like Gainsight or Vitally, not replace them." },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "heart-pulse",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1400&auto=format&fit=crop",
    heroImage: "/healll.jpeg",
    tagline: "Automate administration, protect the patient experience.",
    heroDescription:
      "We automate the administrative burden in healthcare operations — scheduling, intake, billing — so clinical teams spend time on patients, not paperwork.",
    painPoints: [
      "Administrative staff are overwhelmed by scheduling and intake volume.",
      "Billing and claims processes are manual and error-prone.",
      "Patient records are fragmented across multiple legacy systems.",
      "Compliance requirements add friction to every process change.",
    ],
    solutions: [
      { title: "Automated intake & scheduling", description: "Patient intake and scheduling run with minimal staff intervention, built to compliance standards." },
      { title: "Claims automation", description: "Claims are validated and submitted automatically, reducing denial rates." },
      { title: "Unified records layer", description: "Fragmented systems are integrated into one coherent, compliant data layer." },
    ],
    workflows: ["Patient intake & scheduling", "Claims submission & follow-up", "Records synchronization", "Compliance documentation"],
    automationExamples: [
      { title: "Automated claims validation", description: "Claims are checked against payer rules before submission, cutting denial rates." },
      { title: "Intake form processing", description: "Patient intake forms are extracted and routed directly into the EHR." },
    ],
    roi: [
      { metric: "27%", label: "fewer claim denials" },
      { metric: "12 hrs/wk", label: "admin time recovered" },
    ],
    caseStudy: {
      client: "A multi-site outpatient network",
      result: "27% reduction in claim denials within two quarters",
      description:
        "We automated claims validation and intake processing across a five-clinic network, built to HIPAA compliance standards throughout.",
    },
    faqs: [
      { q: "Is this HIPAA compliant?", a: "Yes, every healthcare engagement is architected with HIPAA compliance and data handling requirements as a baseline, not an afterthought." },
      { q: "Can you integrate with our EHR?", a: "We've integrated with Epic, Cerner, and several regional EHR platforms." },
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    icon: "landmark",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1400&auto=format&fit=crop",
    heroImage: "/ind-finance.jpg",
    tagline: "Automate compliance-heavy operations, safely.",
    heroDescription:
      "We automate the reconciliation, reporting, and compliance workflows that consume financial teams' time — with the audit trail regulators expect.",
    painPoints: [
      "Reconciliation and reporting consume days of manual effort each month.",
      "Compliance documentation is scattered and hard to audit.",
      "Fraud and risk signals are detected too late.",
      "Legacy core systems resist modern integration.",
    ],
    solutions: [
      { title: "Automated reconciliation", description: "Transactions reconcile automatically across systems, with exceptions flagged for review." },
      { title: "Compliance-ready audit trails", description: "Every automated decision is logged for regulatory review by default." },
      { title: "Risk signal automation", description: "Anomalies are flagged in real time instead of during a periodic review." },
    ],
    workflows: ["Transaction reconciliation", "Regulatory reporting", "Risk & fraud flagging", "Client onboarding (KYC)"],
    automationExamples: [
      { title: "Automated KYC document review", description: "Identity and compliance documents are extracted, verified, and routed automatically." },
      { title: "Real-time reconciliation", description: "Multi-system transaction matching runs continuously instead of at month-end." },
    ],
    roi: [
      { metric: "4.2x", label: "faster compliance review" },
      { metric: "99.7%", label: "reconciliation accuracy" },
    ],
    caseStudy: {
      client: "A mid-market wealth management firm",
      result: "4.2x faster onboarding review cycle",
      description:
        "We automated KYC document processing and reconciliation workflows across five departments, with full audit trails built in.",
    },
    faqs: [
      { q: "How do you handle regulatory requirements?", a: "We design every workflow with audit logging and reviewer sign-off built in from the start." },
      { q: "Can this integrate with our core banking system?", a: "We've integrated with major core banking and portfolio management platforms, including legacy systems." },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "building-2",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
    heroImage: "/reales.jpeg",
    tagline: "Automate leasing, documents, and portfolio operations.",
    heroDescription:
      "We automate lease administration, document processing, and portfolio reporting so real estate teams manage more assets without more headcount.",
    painPoints: [
      "Lease abstraction is manual and takes weeks per portfolio.",
      "Tenant communications and renewals are tracked in spreadsheets.",
      "Portfolio reporting takes days to assemble across properties.",
      "Document-heavy transactions slow down deal velocity.",
    ],
    solutions: [
      { title: "Automated lease abstraction", description: "Lease terms are extracted directly from documents into your management system." },
      { title: "Renewal & compliance tracking", description: "Key dates and obligations are tracked and surfaced automatically." },
      { title: "Portfolio reporting automation", description: "Cross-property reports assemble on schedule without manual pulls." },
    ],
    workflows: ["Lease abstraction & administration", "Tenant renewal tracking", "Portfolio reporting", "Deal document processing"],
    automationExamples: [
      { title: "Lease term extraction", description: "Key clauses, dates, and obligations are extracted from lease PDFs automatically." },
      { title: "Renewal alerting", description: "Upcoming lease expirations trigger outreach workflows automatically." },
    ],
    roi: [
      { metric: "94%", label: "lease extraction accuracy" },
      { metric: "3 wks → 3 days", label: "abstraction turnaround" },
    ],
    caseStudy: {
      client: "A commercial real estate firm",
      result: "Multi-week abstraction process cut to days",
      description:
        "We automated lease abstraction across thousands of legacy contracts, feeding structured data directly into their portfolio system.",
    },
    faqs: [
      { q: "Can you process older, scanned lease documents?", a: "Yes, our document processing handles scanned and inconsistently formatted historical documents." },
      { q: "Does this integrate with our property management software?", a: "We integrate with Yardi, MRI, AppFolio, and most major platforms." },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: "truck",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1400&auto=format&fit=crop",
    heroImage: "/logii.jpeg",
    tagline: "Automate dispatch, tracking, and back-office operations.",
    heroDescription:
      "We automate dispatch, tracking, and billing workflows across fragmented logistics systems, cutting manual coordination out of day-to-day operations.",
    painPoints: [
      "Dispatch relies on manual coordination across phone, email, and spreadsheets.",
      "Shipment status updates are inconsistent across systems.",
      "Invoicing lags behind delivery by days or weeks.",
      "Exception handling consumes disproportionate staff time.",
    ],
    solutions: [
      { title: "Automated dispatch workflows", description: "Dispatch-to-delivery hand-offs run through a monitored, automated pipeline." },
      { title: "Real-time status sync", description: "Shipment status stays consistent across every connected system." },
      { title: "Automated invoicing", description: "Invoices generate automatically the moment delivery is confirmed." },
    ],
    workflows: ["Dispatch coordination", "Shipment tracking sync", "Automated invoicing", "Exception & delay handling"],
    automationExamples: [
      { title: "Dispatch-to-invoice automation", description: "A five-step manual handoff is reduced to a single review checkpoint." },
      { title: "Delay exception routing", description: "Shipment delays automatically notify the right team with context attached." },
    ],
    roi: [
      { metric: "31 hrs/wk", label: "saved in dispatch operations" },
      { metric: "2.3x", label: "faster invoicing cycle" },
    ],
    caseStudy: {
      client: "A regional logistics operator",
      result: "31 hours per week saved across dispatch and invoicing",
      description:
        "We automated the dispatch-to-invoice workflow across four systems, cutting a five-step manual process down to one review step.",
    },
    faqs: [
      { q: "Can this integrate with our TMS?", a: "Yes, we integrate with most transportation management systems and carrier APIs." },
      { q: "How are exceptions handled?", a: "Exceptions route automatically to the right team with full shipment context attached." },
    ],
  },
  {
    slug: "agencies",
    name: "Agencies",
    icon: "megaphone",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop",
    heroImage: "/agentt.jpeg",
    tagline: "Automate client reporting and delivery operations.",
    heroDescription:
      "We automate client reporting, project handoffs, and delivery operations so agencies scale account volume without scaling account management headcount.",
    painPoints: [
      "Client reporting is manually assembled from multiple ad and analytics platforms.",
      "Project handoffs between strategy, creative, and delivery lose context.",
      "Account managers spend more time on admin than strategy.",
      "Scaling client volume requires proportional headcount growth.",
    ],
    solutions: [
      { title: "Automated client reporting", description: "Cross-platform performance reports assemble and deliver on schedule." },
      { title: "Delivery workflow automation", description: "Project handoffs move through a tracked, automated pipeline." },
      { title: "AI-assisted account management", description: "Routine client questions and status updates are handled automatically." },
    ],
    workflows: ["Client reporting automation", "Project handoff tracking", "Campaign performance sync", "Resource allocation"],
    automationExamples: [
      { title: "Cross-platform reporting", description: "Ad platform, analytics, and CRM data merge into one automated client report." },
      { title: "Handoff automation", description: "Strategy-to-delivery handoffs move through a tracked pipeline with no lost context." },
    ],
    roi: [
      { metric: "40 hrs/mo", label: "reporting time removed" },
      { metric: "2x", label: "client capacity per manager" },
    ],
    caseStudy: {
      client: "A 60-person performance marketing agency",
      result: "Reporting time cut from days to minutes",
      description:
        "We automated cross-platform client reporting and delivery handoffs, freeing account managers to focus on strategy.",
    },
    faqs: [
      { q: "Which ad and analytics platforms do you support?", a: "We commonly integrate Google Ads, Meta, LinkedIn, GA4, and most major marketing platforms." },
      { q: "Can reports be white-labeled per client?", a: "Yes, reporting automation is built around your branding and each client's specific requirements." },
    ],
  },
  {
    slug: "education",
    name: "Education",
    icon: "graduation-cap",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop",
    heroImage: "/eduu.jpeg",
    tagline: "Automate admissions, advising, and administration.",
    heroDescription:
      "We automate admissions processing, student communications, and administrative workflows so institutions serve more students without more back-office strain.",
    painPoints: [
      "Admissions staff manually review and route thousands of applications.",
      "Student inquiries overwhelm advising and support staff.",
      "Administrative reporting takes days to assemble each term.",
      "Systems for admissions, LMS, and records don't talk to each other.",
    ],
    solutions: [
      { title: "Automated application processing", description: "Applications are extracted, scored, and routed to reviewers automatically." },
      { title: "AI-assisted student support", description: "Common student questions are answered instantly, day or night." },
      { title: "Unified records integration", description: "Admissions, LMS, and records systems sync automatically." },
    ],
    workflows: ["Application intake & routing", "Student inquiry handling", "Term reporting automation", "Records synchronization"],
    automationExamples: [
      { title: "Application scoring & routing", description: "Applications are automatically extracted, scored, and routed to the right reviewer." },
      { title: "24/7 student support assistant", description: "A grounded chatbot resolves common admissions and advising questions instantly." },
    ],
    roi: [
      { metric: "58%", label: "inquiries self-served" },
      { metric: "3x", label: "faster application processing" },
    ],
    caseStudy: {
      client: "A multi-campus higher education system",
      result: "Application review time cut by two-thirds",
      description:
        "We automated application intake, scoring, and routing, alongside a student-facing assistant grounded in institutional policy.",
    },
    faqs: [
      { q: "Can this integrate with our SIS or LMS?", a: "Yes, we integrate with major student information systems and learning management platforms." },
      { q: "Is student data handled securely?", a: "Every education engagement is built with FERPA-aligned data handling as a baseline requirement." },
    ],
  },
  {
    slug: "ecommerce",
    name: "eCommerce",
    icon: "shopping-bag",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop",
    heroImage: "/ind-ecommerce.jpg",
    tagline: "Automate inventory, fulfillment, and reporting.",
    heroDescription:
      "We automate inventory synchronization, fulfillment coordination, and reporting across storefronts, so retail operations run on accurate, real-time data.",
    painPoints: [
      "Inventory counts drift between storefront, warehouse, and e-commerce.",
      "Fulfillment coordination relies on manual exports between systems.",
      "Sales reporting is assembled manually from multiple channels.",
      "Peak-season volume overwhelms manual operational processes.",
    ],
    solutions: [
      { title: "Real-time inventory sync", description: "Inventory stays accurate across every channel automatically." },
      { title: "Fulfillment automation", description: "Order routing and fulfillment coordination run without manual exports." },
      { title: "Unified sales reporting", description: "Multi-channel sales data rolls up into one automated report." },
    ],
    workflows: ["Inventory synchronization", "Order fulfillment routing", "Sales & channel reporting", "Returns processing"],
    automationExamples: [
      { title: "Multi-system inventory sync", description: "Storefront, warehouse, and e-commerce inventory stay synchronized in near real time." },
      { title: "Automated fulfillment routing", description: "Orders route to the right fulfillment center automatically based on live inventory." },
    ],
    roi: [
      { metric: "99.8%", label: "inventory sync accuracy" },
      { metric: "12", label: "systems connected" },
    ],
    caseStudy: {
      client: "A multi-brand retail group",
      result: "Six systems synchronized in near real time",
      description:
        "We replaced a patchwork of manual exports with automated pipelines syncing inventory and sales data across the group.",
    },
    faqs: [
      { q: "Which e-commerce platforms do you support?", a: "We integrate with Shopify, BigCommerce, and most major e-commerce and POS platforms." },
      { q: "Can this handle peak-season volume?", a: "Yes, pipelines are architected to scale with volume spikes without manual intervention." },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
