import Link from 'next/link';

const CASE_STUDIES = [
  {
    slug: 'network-contingency-erp',
    title: 'Network Contingency and Control Tower Operating System for ERP Blackout',
  },
  {
    slug: 'packaging-material-flow',
    title: 'Packaging and Material Flow Transformation to Enable Capacity Expansion',
  },
  {
    slug: 'dtc-fulfillment-consolidation',
    title: 'DTC Fulfillment Consolidation Into a Single Governed Operating System',
  },
  {
    slug: 'network-contingency-erp',
    title: 'Network Contingency and Control Tower Operating System for ERP Blackout',
  },
  {
    slug: 'packaging-material-flow',
    title: 'Packaging and Material Flow Transformation to Enable Capacity Expansion',
  },
  {
    slug: 'dtc-fulfillment-consolidation',
    title: 'DTC Fulfillment Consolidation Into a Single Governed Operating System',
  },
  {
    slug: 'network-contingency-erp',
    title: 'Network Contingency and Control Tower Operating System for ERP Blackout',
  },
  {
    slug: 'packaging-material-flow',
    title: 'Packaging and Material Flow Transformation to Enable Capacity Expansion',
  },
  {
    slug: 'dtc-fulfillment-consolidation',
    title: 'DTC Fulfillment Consolidation Into a Single Governed Operating System',
  },
] as const;

export default function CaseStudiesListingPage() {
  return (
    <div className="pt-40 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header - centered */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-soil mb-6">
          Case studies
        </h1>
        <p className="text-brand-soil/80 text-lg max-w-2xl mx-auto leading-relaxed">
          I have brought structural clarity to over 10+ years of complex operations where multi-stakeholder alignment was critical.
        </p>
      </header>

      {/* 3x3 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
        {CASE_STUDIES.map((study, index) => (
          <Link
            key={`${study.slug}-${index}`}
            href={`/case-studies/${study.slug}`}
            className="group block"
          >
            <div className="aspect-square bg-brand-aluminium/20 rounded-sm mb-4 w-full" />
            <h2 className="font-bold text-brand-soil text-base md:text-lg leading-tight group-hover:text-brand-soil/90 transition-colors">
              {study.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
