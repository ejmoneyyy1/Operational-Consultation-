import Link from 'next/link';
import { getCaseStudiesByCategory } from '@/data/case-studies';

export const metadata = {
  title: 'Case Studies | The Earth Atelier',
};

export default function CaseStudiesPage() {
  const groupedStudies = getCaseStudiesByCategory();

  return (
    <div className="pt-40 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-brand-soil mb-12 max-w-4xl">
        Case Studies
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <p className="text-xl text-brand-soil leading-relaxed max-w-xl">
          I diagnose, structure, and execute complex operational systems where ambiguity, misalignment, or technical depth prevent progress.
        </p>
        <p className="text-brand-soil/80 max-w-sm">
          A selection of projects that demonstrate forming structure and clarity from ambiguity.
        </p>
      </div>

      <p className="italic text-brand-soil/70 text-sm mb-24 max-w-3xl">
        Note: To maintain client confidentiality, specific company names, proprietary data, and internal metrics have been abstracted or generalized. These narratives focus on the structural challenges and the logic of the operating systems implemented.
      </p>

      <div className="space-y-32">
        {groupedStudies.map((group) => (
          <div key={group.category}>
            <h2 className="text-2xl font-bold text-brand-wood mb-12 border-b border-brand-soil/10 pb-4">
              {group.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-24">
              {group.studies.map((study) => (
                <Link href={`/case-studies/${study.slug}`} key={study.slug} className="group block">
                  <div className="aspect-[4/3] bg-brand-aluminium/20 rounded-sm mb-6 overflow-hidden relative">
                    {/* Image Placeholder - Will be updated with real images later */}
                  </div>
                  <h3 className="font-bold text-lg text-brand-soil mb-3 group-hover:text-brand-wood transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-brand-soil/80 line-clamp-3">
                    {study.context}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
