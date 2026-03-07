import { caseStudies } from '@/data/case-studies';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies.find(s => s.slug === params.slug);
  if (!study) return { title: 'Case Study Not Found' };
  return { title: `${study.title} | The Earth Atelier` };
}

export default function CaseStudyTemplate({ params }: { params: { slug: string } }) {
  const study = caseStudies.find(s => s.slug === params.slug);
  if (!study) notFound();

  return (
    <div className="pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-soil mb-16 max-w-4xl">
          {study.title}
        </h1>
      </div>

      <div className="relative max-w-5xl mx-auto mt-8 mb-32 px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-[80%] ml-auto aspect-video bg-brand-aluminium/20 rounded-sm"></div>

        <div className="md:absolute top-12 left-0 w-full md:w-96 bg-brand-ochre p-8 z-10 mt-8 md:mt-0 shadow-lg">
          <h3 className="font-bold text-brand-soil mb-2">Context</h3>
          <p className="text-brand-soil">{study.context}</p>
        </div>

        {study.responsibility && study.responsibility.length > 0 && (
          <div className="md:absolute -bottom-16 right-0 md:-right-8 w-full md:w-96 bg-[#A29F96] p-8 z-10 text-white mt-8 md:mt-0 shadow-lg">
            <h3 className="font-bold mb-2">Responsibility</h3>
            <p className="mb-2">Process operations across:</p>
            <ul className="list-disc pl-4 text-sm space-y-1">
              {study.responsibility.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="font-bold text-brand-soil mb-4">The operation represented</h3>
            <p className="text-brand-soil/80 leading-relaxed whitespace-pre-wrap">{study.operationRepresented}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="aspect-square bg-brand-aluminium/20 w-full rounded-sm"></div>
          <div>
            <h3 className="font-bold text-brand-soil mb-4">Ambiguity</h3>
            <p className="text-brand-soil/80 leading-relaxed whitespace-pre-wrap">{study.ambiguity}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 space-y-12">
        <div>
          <h3 className="font-bold text-brand-soil mb-4">Formation</h3>
          <p className="text-brand-soil/80 leading-relaxed whitespace-pre-wrap">{study.formation}</p>
        </div>
        <div>
          <h3 className="font-bold text-brand-soil mb-4">Execution</h3>
          <p className="text-brand-soil/80 leading-relaxed whitespace-pre-wrap">{study.execution}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="aspect-square bg-brand-aluminium/20 w-full rounded-sm"></div>
          <div className="aspect-square bg-brand-aluminium/20 w-full rounded-sm"></div>
          <div className="aspect-square bg-brand-aluminium/20 w-full rounded-sm"></div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-10">
        <div>
          <span className="font-bold text-brand-soil mb-2 block text-base">Outcomes</span>
          <p className="text-brand-soil/80 leading-relaxed text-sm md:text-base whitespace-pre-wrap">{study.outcomes}</p>
        </div>

        {study.structuralImpact && (
          <div>
            <span className="font-bold text-brand-soil mb-2 block text-base">Structural Impact</span>
            <p className="text-brand-soil/80 leading-relaxed text-sm md:text-base whitespace-pre-wrap">{study.structuralImpact}</p>
          </div>
        )}

        {study.strategicInsight && (
          <div>
            <span className="font-bold text-brand-soil mb-2 block text-base">Strategic Insight</span>
            <p className="text-brand-soil/80 leading-relaxed text-sm md:text-base whitespace-pre-wrap">{study.strategicInsight}</p>
          </div>
        )}

        {study.demonstration && (
          <div>
            <span className="font-bold text-brand-soil mb-2 block text-base">What this demonstrates</span>
            <p className="text-brand-soil/80 leading-relaxed text-sm md:text-base whitespace-pre-wrap">{study.demonstration}</p>
          </div>
        )}

        <div className="mt-24 pt-12 border-t border-brand-soil/10">
          <p className="italic text-brand-soil/70 text-sm text-center">
            Confidentiality-safe version: Details generalized for public viewing
          </p>
        </div>
      </div>
    </div>
  );
}
