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

      {/* Bucketed case studies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        {buckets.map(({ index, category, description, studies }) => (
          <section key={category} className="mb-20 md:mb-28">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-soil mb-3">
              {index}. {category}
            </h2>
            <p className="text-brand-soil/80 text-base md:text-lg mb-10 max-w-3xl">
              {description}
            </p>
            <ul className="space-y-8">
              {studies.map((study) => (
                <li key={study.slug}>
                  <Link href={`/case-studies/${study.slug}`} className="group block">
                    <h3 className="font-semibold text-lg text-brand-soil group-hover:text-brand-wood transition-colors mb-1.5">
                      {study.title}
                    </h3>
                    <p className="text-brand-soil/75 text-sm md:text-base leading-relaxed">
                      {(study as { summary?: string }).summary ?? study.context}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
