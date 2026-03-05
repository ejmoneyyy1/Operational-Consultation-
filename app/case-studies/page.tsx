import Link from 'next/link';

const CASE_STUDIES = [
  {
    slug: 'agglomeration-plant',
    title: '01 Agglomeration Plant Operations Management Startup',
    description: 'Shaping readiness, capability, and execution during complex industrial startup.',
  },
  {
    slug: 'network-contingency-erp',
    title: '02 Network Contingency and Control Tower Operating System for ERP Blackout',
    description: 'Governance and control tower design when core systems go offline under operational pressure.',
  },
  {
    slug: 'packaging-material-flow',
    title: '03 Packaging and Material Flow Transformation to Enable Capacity Expansion',
    description: 'Redesigning material flow and packaging operations to unlock capacity and reduce bottlenecks.',
  },
  {
    slug: 'dtc-fulfillment-consolidation',
    title: '04 DTC Fulfillment Consolidation into a Single Governed Operating System',
    description: 'Unifying direct-to-consumer fulfillment under one operating model and governance structure.',
  },
  {
    slug: 'greenfield-startup-operating-system',
    title: '05 Greenfield Startup Operating System Under Economic Risk',
    description: 'Forming operations readiness and execution for first-of-kind facility under P&L consequence.',
  },
  {
    slug: 'warehouse-turnaround',
    title: '06 Warehouse and Distribution Turnaround',
    description: 'Diagnosing and restructuring distribution operations to restore throughput and visibility.',
  },
  {
    slug: 'cross-functional-integration',
    title: '07 Cross-Functional Integration and Execution',
    description: 'Aligning siloed teams and workflows into a single, accountable operating system.',
  },
] as const;

export default function CaseStudiesListingPage() {
  return (
    <div className="pt-40 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-brand-soil mb-16 max-w-4xl">
        Case Studies
      </h1>

      {/* Intro Description - 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <p className="text-xl text-brand-soil leading-relaxed max-w-xl">
          I diagnose, structure, and execute complex operational systems where ambiguity, misalignment, or technical depth prevent progress.
        </p>
        <p className="text-brand-soil/80 max-w-sm mt-4 md:mt-0">
          A selection of projects that demonstrate forming structure and clarity from ambiguity.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-24 mt-24">
        {CASE_STUDIES.map((study) => (
          <Link
            key={study.slug}
            href={`/case-studies/${study.slug}`}
            className="group block"
          >
            <div className="aspect-[4/3] bg-brand-aluminium/20 rounded-sm mb-6" />
            <h2 className="font-bold text-lg text-brand-soil mb-2 group-hover:text-brand-soil/90 transition-colors">
              {study.title}
            </h2>
            <p className="text-brand-soil/80">
              {study.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
