import Image from 'next/image';
import { caseStudies } from '@/data/case-studies';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies.find(s => s.slug === params.slug);
  if (!study) return { title: 'Case Study Not Found' };
  return { title: `${study.title} | The Earth Atelier` };
}

const sectionClassFirst = "mb-0";
const sectionClassRest = "mt-12 mb-0";
const headingClass = "font-bold text-brand-soil mb-1.5 text-xs uppercase tracking-widest";
const paragraphClass = "text-brand-soil/80 leading-relaxed text-sm md:text-base whitespace-pre-wrap max-w-3xl";

export default function CaseStudyTemplate({ params }: { params: { slug: string } }) {
  const study = caseStudies.find(s => s.slug === params.slug);
  if (!study) notFound();

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7]">
      {/* Full-width abstract image - fills horizontally like the case studies listing banner */}
      <div className="relative w-full min-h-[280px] md:min-h-[380px] mb-10 overflow-hidden">
        <Image
          src="/images/case-study-abstract.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Case study title */}
        <h1 className="text-4xl md:text-5xl font-bold text-brand-soil mb-16 max-w-4xl leading-tight">
          {study.title}
        </h1>

        {/* Sections with headers: extra space above each new section so the header sits with its paragraph */}
        <div className="max-w-3xl">
          <section className={sectionClassFirst}>
            <h2 className={headingClass}>Context</h2>
            <p className={paragraphClass}>{study.context}</p>
          </section>

          {study.operationRepresented && (
            <section className={sectionClassRest}>
              <h2 className={headingClass}>The operation represented</h2>
              <p className={paragraphClass}>{study.operationRepresented}</p>
            </section>
          )}

          <section className={sectionClassRest}>
            <h2 className={headingClass}>Ambiguity</h2>
            <p className={paragraphClass}>{study.ambiguity}</p>
          </section>

          <section className={sectionClassRest}>
            <h2 className={headingClass}>Formation</h2>
            <p className={paragraphClass}>{study.formation}</p>
          </section>

          <section className={sectionClassRest}>
            <h2 className={headingClass}>Execution</h2>
            <p className={paragraphClass}>{study.execution}</p>
          </section>

          <section className={sectionClassRest}>
            <h2 className={headingClass}>Outcomes</h2>
            <p className={paragraphClass}>{study.outcomes}</p>
          </section>

          {study.structuralImpact && (
            <section className={sectionClassRest}>
              <h2 className={headingClass}>Structural Impact</h2>
              <p className={paragraphClass}>{study.structuralImpact}</p>
            </section>
          )}

          {study.strategicInsight && (
            <section className={sectionClassRest}>
              <h2 className={headingClass}>Strategic Insight</h2>
              <p className={paragraphClass}>{study.strategicInsight}</p>
            </section>
          )}

          {study.demonstration && (
            <section className={sectionClassRest}>
              <h2 className={headingClass}>What this demonstrates</h2>
              <p className={paragraphClass}>{study.demonstration}</p>
            </section>
          )}
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-4 mt-24">
        <div className="py-8 border-t border-brand-soil/20 text-center">
          <p className="italic text-brand-soil/60 text-sm">
            Confidentiality-safe version: Details generalized for public viewing
          </p>
        </div>
      </div>
    </div>
  );
}
