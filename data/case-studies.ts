export const caseStudies = [
  // BUCKET 1: Growth & Infrastructure Expansion
  {
    slug: "greenfield-startup",
    category: "Growth & Infrastructure Expansion",
    title: "Greenfield Startup Operating System Under Economic Risk",
    context: "A new process facility was commissioned to scale a pilot technology into full production as a major capacity expansion.",
    responsibility: [
      "Rail yard receiving and storage",
      "Raw material unloading",
      "Agglomeration",
      "Blending",
      "On-site quality lab"
    ],
    operationRepresented: "Significant new annual production capacity, direct cost savings material to business performance, complex bulk material handling and process flow, heavy mobile equipment integrated into production, and a newly hired workforce with no prior experience in the process. This was not a replication of an existing plant. It was a first-of-kind operating system brought online under economic consequence. Startup stability directly impacted P&L.",
    ambiguity: "The technical process had proven viable at pilot scale. The operating system had not.\n\nKey risks included: Unknown equipment behavior under full production load, operator learning occurring under live production conditions, commissioning defects becoming chronic downtime, controls and instrumentation failing to support real-time governance, and startup delays translating directly into economic loss.\n\nThere was no historical baseline for how the system would behave under continuous operations.",
    formation: "Before first production, I shaped operations readiness to ensure real-world operability. This included: operability oversight across process and controls design, readiness governance across equipment, people, and material flow, capability formation through structured hiring and qualification, instrumentation through defect capture and performance visibility, and benchmarking against reference operations. Readiness was built as a system of control, visibility, and ownership before live risk began.",
    execution: "I led process operations across dry commissioning, wet commissioning, and live startup through engineering handoff, while simultaneously developing the workforce through system stabilization.\n\nExecution included: Hiring and qualifying approximately forty-five operators across four departments, with team and technical leads embedded, structured shift coverage across all shifts, daily commissioning and inspection loops across critical process equipment, real-time defect capture and resolution during ramp, integration of heavy mobile equipment into production flow, environmental readiness and operational qualification, and transition from engineering control to operations ownership.\n\nStartup was governed as a live operating system, not a technical event.",
    outcomes: "Process operations stabilized under real production conditions. Process operations reached steady run performance within approximately twelve weeks of commissioning. Operations assumed full ownership within roughly one week after wet commissioning completed. Approximately forty-five operators were fully qualified across four departments, supported by team and technical leads. Zero safety recordables occurred during commissioning and startup. Economic risk was absorbed without disruption.",
    structuralImpact: "The facility did not stabilize because equipment worked. It stabilized because control was built into the system: capability was formed before risk, defects were surfaced in real time, ownership was explicit from day one, and governance significantly reduced firefighting. This protected safety, ramp speed, and long-term reliability.",
    strategicInsight: "Greenfield startups fail when readiness is deferred to live production. By treating readiness as system formation: capability, control, visibility, and ownership. Operational risk became governable under real economic consequence. Risk was not reacted to. It was engineered into a controlled operating system.",
    demonstration: "When operational control is built before first production: Operational risk becomes governable, readiness becomes measurable rather than assumed, and long-term performance becomes reliable. That is what enables complex systems to scale under real economic pressure."
  },
  {
    slug: "packaging-material-flow",
    category: "Growth & Infrastructure Expansion",
    title: "Packaging and Material Flow Transformation to Enable Capacity Expansion",
    responsibility: [
      "Tote and rack path design",
      "Material flow and storage layout",
      "Cutover sequencing and volume ramp",
      "End-to-end flow and capital alignment"
    ],
    context: "A high-capacity line was being added to an existing manufacturing plant to support growth. The new line represented a major increase in annual output. However, the surrounding material handling systems, storage layouts, and bulk flow infrastructure were not designed for the new throughput.",
    operationRepresented: "There was a real risk that the line would commission successfully while the facility failed to absorb the volume. The objective was to install and ensure capacity without introducing new constraints, and to achieve stability.",
    ambiguity: "Key unknowns were not obvious. Key unknowns included: where true bottlenecks would emerge once the line was fully loaded, how upstream and downstream systems would respond under load, whether reliability could be sustained under demand, and how to redirect physical flow without disrupting existing operations. At one point, a shift could have failed elsewhere in the network.",
    formation: "I focused on engineering clear control into operational end-to-end flow. I led analysis across modes, highlighting points to simplify ergonomics and tied directly to Capital decisions. The work was tied to capital justification rather than isolated equipment performance.",
    execution: "I led the design of tote and rack paths, cutovers, and volume ramp-up until stabilization. Change management was sequenced to avoid disruption.",
    outcomes: "Eliminated availability constraints, reduced chronic downtime, and utilization levels reached target.",
    structuralImpact: "Capacity expansion fails unless material flow and infrastructure are treated as a single governed system. The structural impact came because individual systems were upgraded and flow was assumed and managed at scale.",
    strategicInsight: "Growth requires infrastructure that scales seamlessly with volume without introducing new constraints. By treating capacity as a single system from the start, the fragmentation that often appears later is avoided."
  },
  {
    slug: "dtc-fulfillment-consolidation",
    category: "Growth & Infrastructure Expansion",
    title: "DTC Fulfillment Consolidation Into a Single Governed Operating System",
    responsibility: [
      "Interim SLA design and transition viability",
      "Flow design and manual inventory mapping",
      "Phased volume migration and live monitoring",
      "Cross-functional alignment and bottleneck resolution"
    ],
    context: "The direct-to-consumer fulfillment network was fragmented across multiple third-party logistics providers and sites. The model created rising costs, inconsistent service performance, technology complexity, legacy ERP platform exposure, and regulatory exposure for certain SKUs. Reliability declined while overhead continued to increase.",
    operationRepresented: "The objective was not simply to execute a new fulfillment model, but to do it without disrupting customer service. The enterprise needed the target state to still be built.",
    ambiguity: "Target-state architecture had already been defined. Key unknowns included: how to run and structure interim SLAs, retire main ERP, order management moving outside automation during blackout, and whether staffing could be handled fully at scale. There was a gap between current and target state that had to be closed.",
    formation: "I focused on transition viability. Interim operations relied on flow design, manual inventory mapping, requirements, day-to-day engineering, and contingency paths. This stood as a temporary workaround.",
    execution: "Phased volume migration, live monitoring, issue licensing, and continuous cross-functional alignment to surface and resolve bottlenecks. Processes affected were surfaced and developed.",
    outcomes: "Achieved through discipline: clear ownership, real-time accountability, and organizational alignment.",
    structuralImpact: "Replaced a fragmented, costly network with a unified, predictable, and governed operation. Impact was delivered through discipline and deliberate dependence on the new control.",
    strategicInsight: "Long-term scalable growth requires the sacrifice of interim comfort. True consolidation is an exercise in strict governance. When understood and avoided as a one-time event, the following long-term outcome is manageable."
  },

  // BUCKET 2: Crisis Management & Network Resilience
  {
    slug: "network-contingency-erp-blackout",
    category: "Crisis Management & Network Resilience",
    title: "Network Contingency and Control Tower Operating System for ERP Blackout",
    responsibility: [
      "Phased model and control tower design",
      "Pre-positioning controls and alternate paths",
      "Node trace mechanisms and daily treatment",
      "Downstream rebalancing and intervention deployment"
    ],
    context: "Peak Q4 demand placed extreme pressure across manufacturing, distribution centers, and transportation capacity. At the same time, the enterprise planned a massive migration to a new platform, removing normal execution visibility.",
    operationRepresented: "Supply chain faced three simultaneous realities: surge volume during the most critical season, offline infrastructure, and the need for a clean restart once it went live. The objective was not to survive an outage, but to protect end-to-end flow while maintaining data integrity.",
    ambiguity: "The primary execution backbone was offline. Governance had to run without normal visibility. Key unknowns included: how much volume could responsibly be pulled forward, where constraints would break under pressure, and how to serve customers unwilling to accept the blackout. Risk could compound into failure if not governed.",
    formation: "Before execution began, I engineered a phased model, pre-positioning controls, alternate paths, node trace mechanisms, and daily treatment. The environment paused fulfillment out of a blackout period.",
    execution: "Downstream rebalancing and rapid deployment of interventions as issues emerged. Execution ran at full load where possible.",
    outcomes: "Service levels were preserved, volume absorbed, disruptions refused, failures mitigated, and reconciliation efforts minimized.",
    structuralImpact: "Proved that execution stability relies on process discipline and clear ownership, not just software. Structural impact was delivered when technology was combined with explicit ownership and offline decision-making.",
    strategicInsight: "Explicit ownership and offline decision-making depend on organizational readiness. When foundational control is deliberately built, complex systems do not collapse."
  },
  {
    slug: "zero-disruption-3pl-transition",
    category: "Crisis Management & Network Resilience",
    title: "Zero-Disruption 3PL Transition at Scale",
    responsibility: [
      "Transition scenario design and timeline curves",
      "Failure mode mapping across operations, labor, and IT",
      "Cutover sequencing and wall-to-wall inventory reconciliation",
      "Cross-functional alignment and new provider onboarding"
    ],
    context: "Following sustained stabilization and performance governance at a high-throughput distribution center supporting two business units, the incumbent third-party logistics provider was determined to be structurally misaligned for long-term operational requirements.",
    operationRepresented: "The site operated under high daily inbound and outbound truck volumes, significant seasonal demand variability, tight service-level expectations across multiple customers, and direct coupling to manufacturing flow. The transition window coincided with peak volume.",
    ambiguity: "The objective was not simply to change providers, but to replace the system without disrupting the network. Exit itself had to be governed. Key unknowns: whether service could be maintained during a live cutover, where capacity constraints would emerge, and how to manage a new workforce ramp under real demand. The transition was more complex than average; there was no historical playbook for a move of this scale.",
    formation: "I established clarity over a year of planning periods. Engineered multiple transition scenarios, explicit timeline curves, mapped failure modes across operations, labor, and IT. Decision gates were defined in advance.",
    execution: "Control mechanisms were installed before execution began. Managed as a live operating system, not a handoff. Cross-functional alignment across the customer, incoming/outgoing partners, and senior leadership. Execution included balancing the management team, cutover sequencing, legacy removal, wall-to-wall inventory reconciliation, and onboarding of the new provider.",
    outcomes: "Produced a stable transition. Peak volume absorbed, reaching steady-state within approximately two weeks post-cutover. Protected customer service boundaries.",
    structuralImpact: "Achieved scale transition with zero customer disruption or manufacturing impact. Node loss was eliminated by treating capacity and contingency as a single flow.",
    strategicInsight: "Large-scale transitions succeed when risk is made explicit and governed closely as an operating system. What seems impossible disappears during execution when the model is valid."
  },

  // BUCKET 3: Operational Excellence & Control Systems
  {
    slug: "operational-stabilization-distribution-hub",
    category: "Operational Excellence & Control Systems",
    title: "Operational Stabilization of a Multi-Business-Unit Distribution Hub",
    responsibility: [
      "Baseline establishment and control loop rebuild",
      "Three non-negotiable metrics and dashboard tracking",
      "Cascade training and stakeholder alignment",
      "Service reliability and structural improvement"
    ],
    context: "A third-party logistics provider was failing to meet core operational requirements at a high-throughput distribution center supporting two business units.",
    operationRepresented: "The site ran daily truckload volume across inbound/outbound flows and managed material on-hand inventory with tight accuracy expectations. The site was under pressure from seasonal demand. Execution instability meant on-time shipping was inconsistent, and backlogs fluctuated and reappeared despite effort. Deteriorating performance drove large adjustments. Operational teams lacked a single, shared control mechanism; reporting had been replaced by diffuse data.",
    ambiguity: "Performance issues were visible but ungoverned. KPIs lacked clear ownership. Data was diffuse and reviewed after the fact; root causes were debated without closure. It was unclear whether structural capacity or execution was the issue; there was no way to separate system issues from execution failures.",
    formation: "Established baselines to historical swings, rebuilt control loops across three non-negotiable metrics. The logic was nominally simple: define expectations, high-frequency direct reporting, dashboard tracking language.",
    execution: "Led cascade training and aligned senior stakeholders. Transfer and plan with 3PL leadership while maintaining alignment. Focused on parallel tracks: service reliability and structural improvement. Process discipline was linked to longer-term evaluation. Real execution focused on service reliability and removal of structural barriers by linking to a glidepath.",
    outcomes: "Produced tangible results: improved execution then held it in a control state for an extended period. Quantifiable shift from reactive firefighting to predictable impact.",
    structuralImpact: "Restored trust and flow between the 3PL and the enterprise.",
    strategicInsight: "Problem solving routine and day-to-day risk management immediately elevates decision-making. The basic partnership expectations should always be present. The work also revealed demand patterns that the enterprise should always possess."
  },
  {
    slug: "customer-policy-enforcement",
    category: "Operational Excellence & Control Systems",
    title: "Customer Policy Enforcement as a Commercial Operations Control System",
    responsibility: [
      "Closed-loop system design and flow formalization",
      "Metrics translation into daily execution",
      "Cross-functional review and pattern emergence",
      "Enforcement integration into standard operating procedure"
    ],
    context: "Noncompliance across ordering practices, receiving behavior, appointment adherence, OS&D claims, and exception handling was driving persistent service disruption and margin leakage.",
    operationRepresented: "The operating environment included fragmented issue ownership, inconsistent resolution outcomes, high administrative burden, and unrecoverable financial exposure. Recurring failures were tied to the same root causes. Control did not exist at the organizational level; issues were addressed reactively rather than governed.",
    ambiguity: "Challenges were not defined by rules but by enforcing them without breaking relationships. Key unknowns: how to assign accountability, quantify impact, and simulate shift in new paths. Supply and the broader team had to align.",
    formation: "I engineered a closed-loop system to formalize flows, scale tracking, and translate metrics into daily execution to surface chronic issues. Structural and risk posture improved. The model was not guided by anecdote alone.",
    execution: "I led roll-out and process design, cross-functional management for continuous review and pattern emergence. Integrated enforcement directly into the standard operating procedure. Real-time visibility was achieved through post-mortem reviews. Noncompliant volume was materially reduced; predictable accountability was instituted.",
    outcomes: "Real-time visibility achieved, noncompliant volume materially reduced, and predictable accountability instituted. Lines improved because accountability became predictable.",
    structuralImpact: "Eliminated significant margin leakage and reduced the administrative burden of exception handling.",
    strategicInsight: "Organizations cannot rely on goodwill; they must engineer compliance into the operating model. Compliance must be sustained and parties treated accordingly."
  }
];

export const getCaseStudiesByCategory = () => {
  const categories = [
    "Growth & Infrastructure Expansion",
    "Crisis Management & Network Resilience",
    "Operational Excellence & Control Systems"
  ];

  return categories.map(category => ({
    category,
    studies: caseStudies.filter(study => study.category === category)
  }));
};
