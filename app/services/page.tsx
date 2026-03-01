import Image from 'next/image';
import Link from 'next/link';
import service1Img from '@/public/images/service-1.jpg';
import service2Img from '@/public/images/service-2.jpg';
import service3Img from '@/public/images/service-3.jpg';
import ctaBgImage from '@/public/images/cta-bg.jpg.jpg';

export default function ServicesPage() {
  return (
    <>
      {/* TASK 1: Page Header */}
      <section className="pt-40 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-brand-wood mb-6">
            Services
          </h1>
          <p className="text-xl text-brand-soil leading-relaxed">
            I help organizations diagnose, structure, and execute complex operations. Each engagement is built to resolve ambiguity and restore momentum.
          </p>
        </div>
      </section>

      {/* TASK 2: Service Blocks */}

      {/* Block 1: Operational Diagnostic Sprint */}
      <section className="relative w-full min-h-[700px] flex items-center py-24">
        <div className="absolute inset-0">
          <Image
            src={service1Img}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-start">
          <div className="bg-[#F0EBE1] p-10 md:p-14 max-w-2xl w-full rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-brand-wood mb-4">
              Operational Diagnostic Sprint
            </h2>
            <p className="text-brand-soil/80 mb-8 leading-relaxed">
              What you need when operations are unclear, misaligned, or failing, and you need clarity fast.
            </p>
            <p className="font-bold text-brand-soil mb-4">What I deliver:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-brand-soil/80 text-sm mb-8">
              <li>• System mapping</li>
              <li>• Ownership clarification</li>
              <li>• Workflow analysis</li>
              <li>• Constraints & risks</li>
              <li>• Prioritized recommendations</li>
              <li>• Execution roadmap</li>
            </ul>
            <div className="bg-brand-soil text-white p-6 mt-8">
              <p className="font-bold mb-1">Outcome:</p>
              <p>Clarity, alignment, and a clear path forward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Operational Integration & Execution */}
      <section className="relative w-full min-h-[700px] flex items-center py-24">
        <div className="absolute inset-0">
          <Image
            src={service2Img}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end">
          <div className="bg-[#F0EBE1] p-10 md:p-14 max-w-2xl w-full rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-brand-wood mb-4">
              Operational Integration & Execution
            </h2>
            <p className="text-brand-soil/80 mb-8 leading-relaxed">
              What you need when clarity isn&apos;t enough, and you need someone to execute.
            </p>
            <p className="font-bold text-brand-soil mb-4">What I deliver:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-brand-soil/80 text-sm mb-8">
              <li>• Cross-functional integration</li>
              <li>• Workflow redesign</li>
              <li>• Operational leadership</li>
              <li>• Execution oversight</li>
              <li>• Stabilization</li>
            </ul>
            <div className="bg-brand-soil text-white p-6 mt-8">
              <p className="font-bold mb-1">Outcome:</p>
              <p>A functioning, predictable operation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Special Operations (Complex Work) */}
      <section className="relative w-full min-h-[700px] flex items-center py-24">
        <div className="absolute inset-0">
          <Image
            src={service3Img}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-start">
          <div className="bg-[#F0EBE1] p-10 md:p-14 max-w-2xl w-full rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-brand-wood mb-4">
              Special Operations (Complex Work)
            </h2>
            <p className="text-brand-soil/80 mb-8 leading-relaxed">
              What you need when high stakes, ambiguous, technical environments require ownership.
            </p>
            <p className="font-bold text-brand-soil mb-4">What I deliver:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-brand-soil/80 text-sm mb-8">
              <li>• Project rescue</li>
              <li>• Heavy machinery integration</li>
              <li>• Warehouse or factory turnarounds</li>
              <li>• Supply chain transitions</li>
              <li>• Construction/renovation system clarity</li>
            </ul>
            <div className="bg-brand-soil text-white p-6 mt-8">
              <p className="font-bold mb-1">Outcome:</p>
              <p>Chaos becomes structure. Ambiguity becomes clarity. Execution becomes real.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TASK 3: Final CTA Banner */}
      <section className="py-32 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold text-brand-soil mb-6 text-balance">
            Let&apos;s bring clarity to your complex operation.
          </h2>
          <p className="text-lg text-brand-soil/80 mb-10">
            If your project, workflow, or system is stuck in ambiguity, I can help.
          </p>
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
