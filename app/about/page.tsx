import Image from 'next/image';
import Link from 'next/link';
import identityBgImage from '@/public/images/identity-bg.png';
import thesisSculptureImage from '@/public/images/thesis-sculpture.png';
import ctaBgImage from '@/public/images/cta-bg.jpg.jpg';
import mapIcon from '@/public/images/mapicon.png';
import layersIcon from '@/public/images/layersicon.png';
import gearIcon from '@/public/images/gearicon.png';

export default function AboutPage() {
  return (
    <>
      {/* TASK 1: Identity Statement Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-soil">
                Identity Statement
              </h1>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl text-brand-soil leading-relaxed">
                I help organizations bring clarity, structure, and execution into complex operational systems where ambiguity, misalignment, or technical depth prevent progress.
              </p>
            </div>
          </div>
          <div className="mt-16 relative w-full aspect-[21/9] rounded-2xl overflow-hidden">
            <Image
              src={identityBgImage}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* TASK 2: Founder Narrative & Brand Thesis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="rounded-2xl overflow-hidden flex flex-col">
          {/* Block 1: Founder Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="h-full bg-[#F0EBE1] p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-wood mb-6">
                Founder Narrative
              </h2>
              <p className="text-brand-soil/80 leading-relaxed">
                My work sits at the intersection of operations, systems thinking, and execution. I&apos;ve worked across manufacturing, logistics, supply chain, and construction, stepping into environments where no one owns the middle: diagnosing what&apos;s broken, restructuring workflows, and leading execution until the system works.
              </p>
            </div>
            <div className="h-full bg-brand-aluminium/20 relative min-h-[400px] md:min-h-full flex items-center justify-center">
              <span className="text-xs font-mono text-brand-aluminium tracking-wider uppercase">
                [ Founder Image Placeholder ]
              </span>
            </div>
          </div>

          {/* Block 2: Brand Thesis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="h-full relative min-h-[400px] md:min-h-full">
              <Image
                src={thesisSculptureImage}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="h-full bg-[#F0EBE1] p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-wood mb-6">
                Brand Thesis
              </h2>
              <p className="text-brand-soil/80 leading-relaxed">
                Operational clarity is not delivered; it is formed. It emerges from diagnosing what&apos;s real, shaping the right structure, and executing with intention. My consulting practice and my artistic practice share the same foundation: turning raw material into intentional structure. Whether it&apos;s clay or a cross-functional operation, the work is to form the unformed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TASK 3: Operating Principles */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-wood mb-12 md:mb-16 text-center">
            Operating Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F3EBE3] p-8">
              <div className="w-12 h-12 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-brand-aluminium/90 shrink-0">
                <Image src={mapIcon} alt="" width={32} height={32} className="object-contain" />
              </div>
              <h3 className="font-bold text-brand-soil">Clarity before action</h3>
            </div>
            <div className="bg-[#F3EBE3] p-8">
              <div className="w-12 h-12 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-brand-aluminium/90 shrink-0">
                <Image src={mapIcon} alt="" width={32} height={32} className="object-contain" />
              </div>
              <h3 className="font-bold text-brand-soil">Structure under chaos</h3>
            </div>
            <div className="bg-[#F3EBE3] p-8">
              <div className="w-12 h-12 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-brand-aluminium/90 shrink-0">
                <Image src={layersIcon} alt="" width={32} height={32} className="object-contain brightness-0 invert" />
              </div>
              <h3 className="font-bold text-brand-soil">Execution with ownership</h3>
            </div>
            <div className="md:col-span-3 flex flex-col sm:flex-row justify-center gap-6">
              <div className="bg-[#F3EBE3] p-8 sm:min-w-[280px] sm:max-w-[320px]">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-brand-aluminium/90 shrink-0">
                  <Image src={layersIcon} alt="" width={32} height={32} className="object-contain brightness-0 invert" />
                </div>
                <h3 className="font-bold text-brand-soil">Integration over silos</h3>
              </div>
              <div className="bg-[#F3EBE3] p-8 sm:min-w-[280px] sm:max-w-[320px]">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-brand-aluminium/90 shrink-0">
                  <Image src={gearIcon} alt="" width={32} height={32} className="object-contain" />
                </div>
                <h3 className="font-bold text-brand-soil">High-competence leadership</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TASK 4: Final CTA Banner */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={ctaBgImage}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/70" aria-hidden />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-soil mb-8 text-balance">
            Let&apos;s bring clarity to your complex operation.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-brand-soil text-white px-8 py-4 font-semibold hover:bg-brand-soil/90 transition-colors"
          >
            Schedule a Clarity Call
          </Link>
        </div>
      </section>
    </>
  );
}
