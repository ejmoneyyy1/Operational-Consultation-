export default function CaseStudyPage() {
  return (
    <>
      {/* TASK 1: Hero & Overlapping Context Area */}
      <div className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-soil mb-16 max-w-4xl">
          Greenfield Startup Operating System Under Economic Risk
        </h1>

        {/* The Overlapping Grid */}
        <div className="relative max-w-5xl mx-auto mt-8 mb-32">
          {/* Main Image Placeholder */}
          <div className="w-full md:w-[80%] ml-auto aspect-video bg-brand-aluminium/20" />

          {/* Context Box (Orange) */}
          <div className="absolute top-12 left-0 w-[90%] md:w-96 bg-brand-ochre p-8 z-10">
            <h3 className="font-bold text-brand-soil mb-2">Context</h3>
            <p className="text-brand-soil">
              A new process facility was commissioned to scale a pilot technology into full production as a major capacity expansion.
            </p>
          </div>

          {/* Responsibility Box (Taupe) */}
          <div className="absolute -bottom-16 right-0 md:-right-8 w-[90%] md:w-96 bg-[#A29F96] p-8 z-10 text-white">
            <h3 className="font-bold mb-2">Responsibility</h3>
            <p className="mb-2">Process operations across:</p>
            <ul className="list-disc pl-4 text-sm space-y-1">
              <li>Rail yard receiving and storage</li>
              <li>Raw material unloading</li>
              <li>Agglomeration</li>
              <li>Blending</li>
              <li>On-site quality lab</li>
            </ul>
          </div>
        </div>
      </div>

      {/* TASK 2: Operation Represented & Ambiguity Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="font-bold text-brand-soil mb-4">The operation represented</h3>
            <p className="text-brand-soil/80 leading-relaxed">
              Significant new annual production capacity, direct cost savings material to business performance, complex bulk material handling and process flow, heavy mobile equipment integrated into production, and a newly hired workforce with no prior experience in the process. This was not a replication of an existing plant. It was a first-of-kind operating system brought online under economic consequence. Startup stability directly impacted P&L.
            </p>
          </div>
          <div />
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="aspect-square bg-brand-aluminium/20 w-full" />
          <div>
            <h3 className="font-bold text-brand-soil mb-4">Ambiguity</h3>
            <div className="text-brand-soil/80 leading-relaxed space-y-4">
              <p>
                The technical process had proven viable at pilot scale. The operating system had not.
              </p>
              <p>
                Key risks included: Unknown equipment behavior under full production load, operator learning occurring under live production conditions, commissioning defects becoming chronic downtime, controls and instrumentation failing to support real-time governance, and startup delays translating directly into economic loss.
              </p>
              <p>
                There was no historical baseline for how the system would behave under continuous operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TASK 3: Formation & Execution Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 space-y-12">
        {/* Formation Block */}
        <div>
          <h3 className="font-bold text-brand-soil mb-4">Formation</h3>
          <p className="text-brand-soil/80 leading-relaxed">
            Before first production, I shaped operations readiness to ensure real-world operability. This included: operability oversight across process and controls design, readiness governance across equipment, people, and material flow, capability formation through structured hiring and qualification, instrumentation through defect capture and performance visibility, and benchmarking against reference operations. Readiness was built as a system of control, visibility, and ownership before live risk began.
          </p>
        </div>

        {/* Execution Block */}
        <div>
          <h3 className="font-bold text-brand-soil mb-4">Execution</h3>
          <p className="text-brand-soil/80 leading-relaxed mb-4">
            I led process operations across dry commissioning, wet commissioning, and live startup through engineering handoff, while simultaneously developing the workforce through system stabilization.
          </p>
          <p className="text-brand-soil/80 leading-relaxed mb-4">
            Execution included: Hiring and qualifying approximately forty-five operators across four departments, with team and technical leads embedded, structured shift coverage across all shifts, daily commissioning and inspection loops across critical process equipment, real-time defect capture and resolution during ramp, integration of heavy mobile equipment into production flow, environmental readiness and operational qualification, and transition from engineering control to operations ownership.
          </p>
          <p className="text-brand-soil/80 leading-relaxed">
            Startup was governed as a live operating system, not a technical event.
          </p>
        </div>
      </div>

      {/* TASK 4: Three Image Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="aspect-square bg-brand-aluminium/20 w-full" />
          <div className="aspect-square bg-brand-aluminium/20 w-full" />
          <div className="aspect-square bg-brand-aluminium/20 w-full" />
        </div>
      </div>

      {/* TASK 5: Outcomes & Impact */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-10">
        <div className="text-brand-soil/80 leading-relaxed text-sm md:text-base">
          <span className="font-bold text-brand-soil mb-2 block text-base">Outcomes</span>
          Process operations stabilized under real production conditions. Process operations reached steady run performance within approximately twelve weeks of commissioning. Operations assumed full ownership within roughly one week after wet commissioning completed. Approximately forty-five operators were fully qualified across four departments, supported by team and technical leads. Zero safety recordables occurred during commissioning and startup. Economic risk was absorbed without disruption.
        </div>

        <div className="text-brand-soil/80 leading-relaxed text-sm md:text-base">
          <span className="font-bold text-brand-soil mb-2 block text-base">Structural Impact</span>
          The facility did not stabilize because equipment worked. It stabilized because control was built into the system: capability was formed before risk, defects were surfaced in real time, ownership was explicit from day one, and governance significantly reduced firefighting. This protected safety, ramp speed, and long-term reliability.
        </div>

        <div className="text-brand-soil/80 leading-relaxed text-sm md:text-base">
          <span className="font-bold text-brand-soil mb-2 block text-base">Strategic Insight</span>
          Greenfield startups fail when readiness is deferred to live production. By treating readiness as system formation: capability, control, visibility, and ownership. Operational risk became governable under real economic consequence. Risk was not reacted to. It was engineered into a controlled operating system.
        </div>

        <div className="text-brand-soil/80 leading-relaxed text-sm md:text-base">
          <span className="font-bold text-brand-soil mb-2 block text-base">What this demonstrates</span>
          When operational control is built before first production: Operational risk becomes governable, readiness becomes measurable rather than assumed, and long-term performance becomes reliable. That is what enables complex systems to scale under real economic pressure.
        </div>
      </div>
    </>
  );
}
