import Link from 'next/link';
import Image from 'next/image';
import { getCaseStudiesByCategory } from '@/data/case-studies';

export const metadata = {
  title: 'Case Studies | The Earth Atelier',
};

export default function CaseStudiesPage() {
  const buckets = getCaseStudiesByCategory();

  return (
    <div className="bg-[#FDFBF7]">
      {/* Abstract header banner - tall so image isn't squashed */}
      <section className="relative min-h-[420px] md:min-h-[55vh] flex items-center justify-center pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/case-studies-header.png"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" aria-hidden />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Case studies
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            I have brought structural clarity to over 10+ years of complex operations where multi-stakeholder alignment was critical.
          </p>
        </div>
      </section>

      {/* Intro + confidentiality note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 text-center">
        <p className="text-brand-soil/90 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
          A selection of projects that demonstrate forming structure and clarity from ambiguity.
        </p>
        <p className="text-black font-bold text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Note: To maintain client confidentiality, specific company names, proprietary data, and internal metrics have been abstracted or generalized. These narratives focus on the structural challenges and the logic of the operating systems implemented.
        </p>
      </div>

      {/* Bucketed case studies - 3-col card grid per category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {buckets.map(({ index, category, description, studies }) => (
          <section key={category} className="mb-20 md:mb-28">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-soil mb-3">
              {index}. {category}
            </h2>
            <p className="text-brand-soil/80 text-base md:text-lg mb-12 max-w-3xl">
              {description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
              {studies.map((study, studyIndex) => {
                const publicVersionSuffix = ' (Public version — confidentiality-safe draft)';
                const titleMain = study.title.endsWith(publicVersionSuffix)
                  ? study.title.slice(0, -publicVersionSuffix.length)
                  : study.title;
                const showSuffix = study.title.endsWith(publicVersionSuffix);
                return (
                  <Link
                    key={study.slug}
                    href={`/case-studies/${study.slug}`}
                    className="group flex flex-col h-[220px] bg-[#F5F3EF] border border-brand-aluminium/25 rounded-xl p-6 hover:border-brand-wood/40 hover:shadow-md transition-all shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-soil flex items-center justify-center mb-4 flex-shrink-0">
                      <span className="text-white font-bold text-sm">
                        {studyIndex + 1}
                      </span>
                    </div>
                    <h3 className="font-semibold text-brand-soil text-[15px] leading-snug group-hover:text-brand-wood transition-colors line-clamp-3">
                      {titleMain}
                    </h3>
                    {showSuffix && (
                      <p className="mt-2 text-brand-soil/60 text-xs leading-relaxed">
                        (Public version — confidentiality-safe draft)
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
