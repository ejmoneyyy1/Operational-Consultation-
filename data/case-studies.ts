// Optional: add a "body" field (string) to any case study for verbatim text from the PDF.
// If "body" is present, the case study page shows only header + image + that text.
export const caseStudies = [
  // BUCKET 1: Growth & Infrastructure Expansion
  {
    slug: "greenfield-startup",
    category: "Growth & Infrastructure Expansion",
    title: "Greenfield Startup Operating System Under Economic Risk",
    summary: "Developing a \"first-of-kind\" process facility with a newly hired workforce to achieve full production ready-run within twelve weeks.",
    context: "A new process facility was commissioned to scale a pilot technology into full production as a major capacity expansion.",
    responsibility: [
      "Rail yard receiving and storage",
      "Raw material unloading",
      "Agglomeration",
      "Blending",
      "On-site quality lab"
    ],
    operationRepresented: "Significant new annual production capacity, direct cost savings material to business performance, complex bulk material handling and process flow, heavy mobile equipment integrated into production, and a newly hired workforce with no prior experience in the process.\n\nThis was not a replication of an existing plant. It was a first-of-kind operating system brought online under economic consequence. Startup stability directly impacted P&L.",
    ambiguity: "The technical process had proven viable at pilot scale. The operating system had not.\n\nKey risks included: Unknown equipment behavior under full production load, operator learning occurring under live production conditions, commissioning defects becoming chronic downtime, controls and instrumentation failing to support real-time governance, and startup delays translating directly into economic loss.\n\nThere was no historical baseline for how the system would behave under continuous operations.",
    formation: "Before first production, I shaped operations readiness to ensure real-world operability. This included: operability oversight across process and controls design, readiness governance across equipment, people, and material flow, capability formation through structured hiring and qualification, instrumentation through defect capture and performance visibility, and benchmarking against reference operations.\n\nReadiness was built as a system of control, visibility, and ownership before live risk began.",
    execution: "I led process operations across dry commissioning, wet commissioning, and live startup through engineering handoff, while simultaneously developing the workforce through system stabilization.\n\nExecution Included:\nHiring and qualifying approximately forty-five operators across four departments, with team and technical leads embedded, structured skill coverage across all shifts, daily commissioning and inspection loops across critical process equipment, real-time defect capture and resolution during ramp, integration of heavy mobile equipment into production flow, environmental readiness and operational qualification, and transition from engineering control to operations ownership.\n\nStartup was governed as a live operating system, not a technical event.",
    outcomes: "Process operations stabilized under real production conditions:\nProcess operations reached steady run performance within approximately twelve weeks of commissioning.\nOperations assumed full ownership within roughly one week after wet commissioning completed.\nApproximately forty-five operators were fully qualified across four departments, supported by team and technical leads. Zero safety recordables occurred during commissioning and startup. Economic risk was absorbed without disruption.",
    structuralImpact: "The facility did not stabilize because equipment worked. It stabilized because control was built into the system:\ncapability was formed before risk,\ndefects were surfaced in real time,\nownership was explicit from day one,\nand governance significantly reduced firefighting.\nThis protected safety, ramp speed, and long-term reliability.",
    strategicInsight: "Greenfield startups fail when readiness is deferred to live production. By treating readiness as system formation: capability, control, visibility, and ownership. Operational risk became governable under real economic consequence. Risk was not reacted to. It was engineered into a controlled operating system.",
    demonstration: "When operational control is built before first production: Operational risk becomes governable, readiness becomes measurable rather than assumed, and long-term performance becomes reliable.\n\nThat is what enables complex systems to scale under real economic pressure."
  },
  {
    slug: "packaging-material-flow",
    category: "Growth & Infrastructure Expansion",
    title: "Packaging and Material Flow Transformation to Enable Capacity Expansion",
    summary: "Re-engineering material handling and storage systems at an existing plant to absorb a major increase in annual output without adding constraints.",
    context: "A high-capacity line was being added to an existing manufacturing plant to support growth. The new line represented a major increase in annual output. However, the surrounding material handling systems, storage layouts, and bulk flow infrastructure were not designed for the increased throughput. There was a real risk that the line would commission successfully while the facility failed to absorb the volume without introducing new constraints.",
    ambiguity: "Key unknowns included: where true bottlenecks would emerge once the line was fully loaded, how upstream and downstream systems would respond under load, whether reliability could be sustained under demand, and how to redirect physical flow without disrupting existing operations.",
    formation: "I focused on engineering clear control into operational end-to-end flow. Led analysis across modes, highlighting points to simplify ergonomics and tied directly to Capital decisions justified actual rather than isolated equipment performance.",
    execution: "I led the design of tote and rack paths, cutovers, and volume ramp-up until stabilization. Change sequence to avoid static.",
    outcomes: "Eliminated availability constraints, reduced chronic downtime, and utilization levels reached target.",
    structuralImpact: "Capacity expansion fails unless material flow and infrastructure are treated as a single governed system.",
    strategicInsight: "Growth requires infrastructure that scales seamlessly with volume without introducing new constraints."
  },
  {
    slug: "dtc-fulfillment-consolidation",
    category: "Growth & Infrastructure Expansion",
    title: "DTC Fulfillment Consolidation Into a Single Governed Operating System",
    summary: "Consolidating a fragmented direct-to-consumer network across multiple 3PLs into a unified, governed model to reduce costs and complexity.",
    context: "The direct-to-consumer fulfillment network was fragmented across multiple third-party logistics providers and sites. The model created: rising costs, inconsistent service performance, technology complexity, and legacy ERP platform regulatory exposure for certain SKUs. Reliability declined while overhead continued to increase. The objective was not simply to execute a new fulfillment model without disrupting customer service.",
    ambiguity: "Target-state architecture had already been defined. Key unknowns included: how to run and structure interim SLAs, retire main ERP, order management moving outside automation during blackout, and whether staffing could be handled fully at scale.",
    formation: "I focused on transition viability. Interim operationalized relying on flow design, manual inventory mapping, requirements, day-to-day engineering, and contingency paths. Stood as a temporary workaround.",
    execution: "Phased volume migration, live monitoring, issue licensing, and continuous cross-functional alignment to surface and resolve bottlenecks.",
    outcomes: "Achieved through discipline: clear ownership, real-time accountability, and organizational alignment.",
    structuralImpact: "Replaced a fragmented, costly network with a unified, predictable, and governed operation.",
    strategicInsight: "Long-term scalable growth requires the sacrifice of interim comfort. True consolidation is an exercise in strict governance."
  },

  // BUCKET 2: Crisis Management & Network Resilience
  {
    slug: "network-contingency-erp-blackout",
    category: "Crisis Management & Network Resilience",
    title: "Network Contingency and Control Tower Operating System for ERP Blackout",
    summary: "Protecting end-to-end flow during a peak Q4 demand surge while simultaneously navigating a planned platform migration that removed normal execution visibility.",
    context: "Peak Q4 demand placed extreme pressure across manufacturing, distribution centers, and transportation capacity. At the same time, the enterprise planned a massive migration to a new platform, removing normal execution visibility. Supply chain faced three simultaneous realities: surge volume during the most critical season of the year, offline infrastructure, and the need for a clean restart once it went live. The objective was not to survive an outage, to protect end-to-end flow while maintaining data integrity.",
    ambiguity: "The primary execution backbone was offline. Key unknowns included: how much volume could responsibly be pulled forward, where constraints would break under pressure, and how to serve customers unwilling to accept the blackout.",
    formation: "Began engineering a phased model, pre-positioning controls, alternate paths, node trace mechanisms, and daily treatment environment, a pause fulfillment out of a blackout period.",
    execution: "Downstream rebalancing and rapid deployment of interventions as issues emerged.",
    outcomes: "Service levels were preserved, volume absorbed, disruptions refused, failures mitigated, and reconciliation efforts minimized.",
    structuralImpact: "Proved that execution stability relies on process discipline and clear ownership, not just software.",
    strategicInsight: "Explicit ownership and offline decision-making depend on organizational readiness. When foundational control is built, complex systems do not collapse."
  },
  {
    slug: "zero-disruption-3pl-transition",
    category: "Crisis Management & Network Resilience",
    title: "Zero-Disruption 3PL Transition at Scale",
    summary: "Replacing a structurally misaligned logistics provider at a high-throughput hub during peak seasonal volume without disrupting customer service or manufacturing flow.",
    context: "Following sustained stabilization and performance governance at a high-throughput distribution center supporting two business units, the incumbent third-party logistics provider was determined to be structurally misaligned for long-term operational requirements. The site operated under: high daily inbound and outbound truck volumes, significant seasonal demand variability, tight service-level expectations across multiple customers, and direct coupling to manufacturing flow. The transition window coincided with peak volume. The objective was not simply to change providers, but to replace the system without disrupting the network.",
    ambiguity: "Key unknowns included: whether service could be maintained during a live cutover, where capacity constraints would emerge, and how to manage a new workforce ramp under real demand.",
    formation: "Engineered multiple transition scenarios, explicit timeline curves, mapped failure modes across operations, labor, and IT. Decision gates were defined in advance. Control mechanisms installed before execution began.",
    execution: "Managed as a live operating system, not a handoff. Cross-functional alignment across the customer, both incoming and outgoing partners, and senior executive leadership. Continuous rebalancing and rapid triage team buffers.",
    outcomes: "Produced a stable transition. Peak volume absorbed, reaching steady-state within approximately two weeks post-cutover. Protected customer service boundaries.",
    structuralImpact: "Achieved scale transition with zero customer disruption or manufacturing impact.",
    strategicInsight: "Large-scale transitions succeed when risk is made explicit and governed closely as an operating system."
  },

  // BUCKET 3: Operational Excellence & Control Systems
  {
    slug: "operational-stabilization-distribution-hub",
    category: "Operational Excellence & Control Systems",
    title: "Operational Stabilization of a Multi-Business-Unit Distribution Hub",
    summary: "Recovering a failing 3PL operation by instituting non-negotiable metrics and a closed-loop control mechanism to eliminate inventory and shipping inconsistencies.",
    context: "A third-party logistics provider was failing to meet core operational requirements at a high-throughput distribution center supporting two business units. The site ran daily truckload volume across inbound and outbound flows and managed material on-hand inventory with tight accuracy expectations. Under pressure from seasonal variability, execution instability meant on-time shipping was inconsistent, backlogs fluctuated and reappeared despite effort. Cross-functional teams lacked a single, shared control mechanism.",
    ambiguity: "Performance issues were visible but ungoverned. KPIs lacked explicit ownership, diffuse data reviewed after the fact, root causes debated without closure. Unclear whether systemic or execution failures. No way to separate 'We can fix this' from 'The system is broken'.",
    formation: "Established baselines to historical swings, rebuilt control loops across three non-negotiable metrics. Each metric followed the same logic: design fundamentally simple definitions, high frequency, direct reporting, no dashboard tracking language.",
    execution: "Led cascade training, aligned 3PL leadership while maintaining alignment with senior stakeholders. Focused on parallel tracks: service reliability and structural improvement.",
    outcomes: "Produced tangible results: improved execution then held it in a control state for an extended period. Quantifiable shift from reactive firefighting to predictable impact.",
    structuralImpact: "Restored trust and flow between the 3PL and the enterprise.",
    strategicInsight: "Problem solving routine and day-to-day risk management immediately elevates decision-making. The basic partnership expectations should always be present."
  },
  {
    slug: "customer-policy-enforcement",
    category: "Operational Excellence & Control Systems",
    title: "Customer Policy Enforcement as a Commercial Operations Control System",
    summary: "Engineering a closed-loop governance model to resolve chronic noncompliance in ordering practices and OS&D claims, reducing unrecoverable financial exposure.",
    context: "Noncompliance across ordering practices, receiving behavior, appointment adherence, OS&D claims, and exception handling was driving persistent service disruption and margin leakage. The operating environment included: fragmented issue ownership, inconsistent resolution outcomes, high administrative burden, and unrecoverable financial exposure. Recurring failures tied to the same root causes.",
    ambiguity: "Challenges were not defined by rules but by enforcing them without breaking relationships. Key unknowns: how to assign accountability, quantify impact, or simulate shift in new paths.",
    formation: "I engineered a closed-loop system to formalize flows, scale tracking, and translate metrics into daily execution to surface chronic issues.",
    execution: "I led cross-functional management for continuous review and patterns emergence. Integrated enforcement directly into the standard operating procedure.",
    outcomes: "Real-time visibility achieved, noncompliant volume materially reduced, and predictable accountability instituted.",
    structuralImpact: "Eliminated significant margin leakage and reduced the administrative burden of exception handling.",
    strategicInsight: "Organizations cannot rely on goodwill; they must engineer compliance into the operating model."
  }
];

export const CATEGORY_ORDER = [
  "Growth & Infrastructure Expansion",
  "Crisis Management & Network Resilience",
  "Operational Excellence & Control Systems"
] as const;

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "Growth & Infrastructure Expansion": "Focuses on scaling operations, building new facilities, and engineering systems for increased volume.",
  "Crisis Management & Network Resilience": "Focuses on maintaining continuity during high-risk transitions and technical failures.",
  "Operational Excellence & Control Systems": "Focuses on stabilizing failing operations and implementing rigorous governance and accountability."
};

export const getCaseStudiesByCategory = () => {
  return CATEGORY_ORDER.map((category, index) => ({
    index: index + 1,
    category,
    description: CATEGORY_DESCRIPTIONS[category],
    studies: caseStudies.filter(study => study.category === category)
  }));
};
