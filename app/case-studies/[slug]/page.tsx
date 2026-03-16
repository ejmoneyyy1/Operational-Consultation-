import Image from 'next/image';
import { caseStudies } from '@/data/case-studies';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies.find(s => s.slug === params.slug);
  if (!study) return { title: 'Case Study Not Found' };
  return { title: `${study.title} | The Earth Atelier` };
}

const sectionClassFirst = "mb-0";
const sectionClassRest = "mt-20 md:mt-24 mb-0";
const headingClass = "font-bold text-brand-soil mb-5 text-sm md:text-base uppercase tracking-widest text-brand-wood";
const paragraphClass = "text-brand-soil/85 leading-loose text-base md:text-lg max-w-3xl";
const listClass = "text-brand-soil/85 leading-loose text-base md:text-lg max-w-3xl space-y-2 list-disc pl-6 mt-2";

function SectionContent({ text }: { text: string }) {
  const blocks = text.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        const lines = block.split(/\n/).map((l) => l.trim()).filter(Boolean);
        const bulletLines = lines.filter((l) => l.startsWith("•"));
        const textLines = lines.filter((l) => !l.startsWith("•"));
        const hasBullets = bulletLines.length > 0;
        return (
          <div key={i} className="space-y-3">
            {textLines.length > 0 && (
              <p className={paragraphClass + " whitespace-pre-line"}>
                {textLines.join("\n")}
              </p>
            )}
            {hasBullets && (
              <ul className={listClass}>
                {bulletLines.map((line, j) => (
                  <li key={j}>{line.replace(/^•\s*/, "")}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function CaseStudyTemplate({ params }: { params: { slug: string } }) {
  const study = caseStudies.find(s => s.slug === params.slug);
  if (!study) notFound();

  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7]">
      {/* Full-width abstract image */}
      <div className="relative w-full min-h-[280px] md:min-h-[380px] mb-12 md:mb-16 overflow-hidden">
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
        <h1 className="text-4xl md:text-5xl font-bold text-brand-soil mb-20 max-w-4xl leading-tight">
          {study.title}
        </h1>

        <div className="max-w-3xl">
          <section className={sectionClassFirst}>
            <h2 className={headingClass}>Context</h2>
            <SectionContent text={study.context} />
          </section>

          {study.operationRepresented && (
            <section className={sectionClassRest}>
              <h2 className={headingClass}>The operation represented</h2>
              <SectionContent text={study.operationRepresented} />
            </section>
          )}

          <section className={sectionClassRest}>
            <h2 className={headingClass}>Ambiguity</h2>
            <SectionContent text={study.ambiguity} />
          </section>

          <section className={sectionClassRest}>
            <h2 className={headingClass}>Formation</h2>
            <SectionContent text={study.formation} />
          </section>

          <section className={sectionClassRest}>
            <h2 className={headingClass}>Execution</h2>
            <SectionContent text={study.execution} />
          </section>

          <section className={sectionClassRest}>
            <h2 className={headingClass}>Outcomes</h2>
            <SectionContent text={study.outcomes} />
          </section>

          {study.structuralImpact && (
            <section className={sectionClassRest}>
              <h2 className={headingClass}>Structural Impact</h2>
              <SectionContent text={study.structuralImpact} />
            </section>
          )}

          {study.strategicInsight && (
            <section className={sectionClassRest}>
              <h2 className={headingClass}>Strategic Insight</h2>
              <SectionContent text={study.strategicInsight} />
            </section>
          )}

          {study.demonstration && (
            <section className={sectionClassRest}>
              <h2 className={headingClass}>What this demonstrates</h2>
              <SectionContent text={study.demonstration} />
            </section>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32">
        <div className="py-10 border-t border-brand-soil/25 text-center">
          <p className="text-brand-soil/55 text-sm italic">
            Confidentiality-safe version: Details generalized for public viewing
          </p>
        </div>
      </div>
    </div>
  );
}
