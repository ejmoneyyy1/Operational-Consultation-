import Link from 'next/link';
import Image from 'next/image';

import heroImage from '@/public/images/Rectangle 1.jpg';
import strategyGapImage from '@/public/images/Rectangle 22.jpg';
import ownershipVoidImage from '@/public/images/Rectangle 22-2.jpg';
import divergingTracksImage from '@/public/images/Rectangle 22-3.jpg';
import ctaBgImage from '@/public/images/cta-bg.jpg.jpg';
import mapIcon from '@/public/images/mapicon.png';
import layersIcon from '@/public/images/layersicon.png';
import gearIcon from '@/public/images/gearicon.png';
export default function HomePage() {
  return (
    <>
    <section className="relative min-h-[400px] md:min-h-[85vh] flex items-center pt-20 pb-12 md:pt-28 md:pb-24">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Industrial operations and complex systems"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#F5F2EC]/55" aria-hidden />
      </div>

      {/* Content overlay - dark brown text per Figma */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance text-brand-soil">
            Operational <span className="text-brand-ochre">Clarity</span> Architect for Complex Operations
          </h1>
          <p className="mt-6 text-lg text-brand-soil/85">
            I diagnose, structure, and execute complex operations where ownership, clarity, and flow break.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-brand-aluminium hover:bg-brand-aluminium/90 transition-colors rounded-md"
            >
              Schedule a Clarity Call
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-brand-ochre hover:bg-brand-ochre/90 transition-colors rounded-md"
            >
              See What I Do
            </Link>
          </div>
        </div>

        {/* Experience block - horizontal layout: "10+ years" left, description right */}
        <div className="absolute right-4 sm:right-6 lg:right-8 bottom-6 lg:bottom-8 z-20 bg-[#F0EBE1]/95 p-6 md:p-8 shadow-lg rounded-lg flex flex-row items-start gap-6 max-w-[520px]">
          <div className="flex flex-col leading-none shrink-0">
            <span className="text-6xl md:text-7xl font-bold text-brand-soil">10+</span>
            <span className="text-2xl md:text-3xl font-bold text-brand-soil">years</span>
          </div>
          <p className="text-base md:text-lg text-brand-soil font-medium leading-snug pt-1">
            across manufacturing, logistics, supply chain, and multi-stakeholder execution.
          </p>
        </div>
      </div>
    </section>

    {/* Value Proposition */}
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-wood">
            Value Proposition
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-brand-soil text-base leading-relaxed">
            I diagnose the hidden friction in your operations, structure the workflows that fix it, and stay to execute until the system is stable. It&apos;s not just advice; it&apos;s operational clarity formed from the inside out.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-brand-linen p-8">
            <div className="mb-4">
              <Image
                src={mapIcon}
                alt=""
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-brand-soil mb-3">
              Diagnose the real system
            </h3>
            <p className="text-brand-soil text-sm leading-relaxed">
              I reveal what&apos;s actually happening behind workflows, decisions, and cross-functional behavior — not assumed causes.
            </p>
          </div>
          <div className="bg-brand-linen p-8">
            <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-brand-aluminium">
              <Image
                src={layersIcon}
                alt=""
                width={40}
                height={40}
                className="object-contain brightness-0 invert"
              />
            </div>
            <h3 className="text-xl font-bold text-brand-soil mb-3">
              Structure the path forward
            </h3>
            <p className="text-brand-soil text-sm leading-relaxed">
              Bringing order to ambiguous environments by defining ownership, redesigning workflows, and aligning teams.
            </p>
          </div>
          <div className="bg-brand-linen p-8">
            <div className="mb-4">
              <Image
                src={gearIcon}
                alt=""
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-brand-soil mb-3">
              Execute until stable
            </h3>
            <p className="text-brand-soil text-sm leading-relaxed">
              I lead operations and drive execution until the system becomes stable and predictable.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Problem I solve */}
    <section className="py-16 md:py-24 bg-[#F0EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-soil">
            Problem I solve
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-brand-soil text-base leading-relaxed">
            When ownership is unclear and teams operate in silos, execution breaks down in the &apos;messy middle&apos; - leaving high-stakes projects stuck in ambiguity with no clear path forward.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
  {/* Card 1: Strategy Gap */}
  <div className="group">
    <div className="relative aspect-video w-full overflow-hidden border border-brand-aluminium/20">
      <Image
        src={strategyGapImage}
        alt="Abstract visualization of the strategy gap"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <h3 className="mt-6 text-xl font-bold text-brand-wood">The Strategy Gap</h3>
    <p className="mt-3 text-brand-soil/80 leading-relaxed">
      You know what needs to happen, but the how gets lost in translation between leadership and the frontline.
    </p>
  </div>

  {/* Card 2: Ownership Void */}
  <div className="group">
    <div className="relative aspect-video w-full overflow-hidden border border-brand-aluminium/20">
      <Image
        src={ownershipVoidImage}
        alt="Abstract visualization of ownership void"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <h3 className="mt-6 text-xl font-bold text-brand-wood">The Ownership Void</h3>
    <p className="mt-3 text-brand-soil/80 leading-relaxed">
      Critical decisions stall because they sit between departments where no single person has authority.
    </p>
  </div>

  {/* Card 3: Diverging Tracks */}
  <div className="group">
    <div className="relative aspect-video w-full overflow-hidden border border-brand-aluminium/20">
      <Image
        src={divergingTracksImage}
        alt="Abstract visualization of diverging tracks"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <h3 className="mt-6 text-xl font-bold text-brand-wood">The Diverging Tracks</h3>
    <p className="mt-3 text-brand-soil/80 leading-relaxed">
      Teams are working hard, but moving in different directions. The energy is there, but the alignment is broken.
    </p>
  </div>
</div>
      </div>
    </section>

    {/* Case studies */}
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-soil mb-6">
            Case studies
          </h2>
          <p className="max-w-3xl mx-auto text-brand-soil text-base leading-relaxed">
            I have brought structural clarity to over 10+ years of complex operations where multi-stakeholder alignment was critical.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div>
            <div className="aspect-square bg-brand-stainless/30 flex items-center justify-center">
              <span className="text-xs font-mono text-brand-aluminium tracking-wider uppercase">
                [ Image Placeholder ]
              </span>
            </div>
            <h3 className="mt-6 text-lg font-bold text-brand-soil">
              Network Contingency and Control Tower Operating System for ERP Blackout
            </h3>
          </div>
          <div>
            <div className="aspect-square bg-brand-stainless/30 flex items-center justify-center">
              <span className="text-xs font-mono text-brand-aluminium tracking-wider uppercase">
                [ Image Placeholder ]
              </span>
            </div>
            <h3 className="mt-6 text-lg font-bold text-brand-soil">
              Packaging and Material Flow Transformation to Enable Capacity Expansion
            </h3>
          </div>
          <div>
            <div className="aspect-square bg-brand-stainless/30 flex items-center justify-center">
              <span className="text-xs font-mono text-brand-aluminium tracking-wider uppercase">
                [ Image Placeholder ]
              </span>
            </div>
            <h3 className="mt-6 text-lg font-bold text-brand-soil">
              DTC Fulfillment Consolidation into a Single Governed Operating System
            </h3>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-brand-soil hover:opacity-90 transition-opacity"
          >
            See More
          </Link>
        </div>
      </div>
    </section>

    {/* The Forming Framework */}
    <section className="py-16 md:py-24 bg-brand-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-soil mb-16">
            The Forming Framework
          </h2>
        </header>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-4">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left flex-1">
            <div className="w-10 h-10 rounded-full bg-brand-stainless/50 flex items-center justify-center text-brand-soil font-bold text-lg shrink-0">
              1
            </div>
            <h3 className="text-xl font-bold text-brand-soil mt-4">
              Reveal
            </h3>
            <p className="text-brand-soil/80 mt-2 text-sm leading-relaxed">
              Diagnose the real system and uncover constraints
            </p>
          </div>
          <div className="hidden md:block flex-1 min-w-4 self-start mt-5 border-t border-brand-aluminium/40" aria-hidden />
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left flex-1">
            <div className="w-10 h-10 rounded-full bg-brand-stainless/50 flex items-center justify-center text-brand-soil font-bold text-lg shrink-0">
              2
            </div>
            <h3 className="text-xl font-bold text-brand-soil mt-4">
              Shape
            </h3>
            <p className="text-brand-soil/80 mt-2 text-sm leading-relaxed">
              Structure workflows and integrate cross-functional operations
            </p>
          </div>
          <div className="hidden md:block flex-1 min-w-4 self-start mt-5 border-t border-brand-aluminium/40" aria-hidden />
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left flex-1">
            <div className="w-10 h-10 rounded-full bg-brand-stainless/50 flex items-center justify-center text-brand-soil font-bold text-lg shrink-0">
              3
            </div>
            <h3 className="text-xl font-bold text-brand-soil mt-4">
              Deliver
            </h3>
            <p className="text-brand-soil/80 mt-2 text-sm leading-relaxed">
              Lead execution until the system stabilizes
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 md:py-32 relative overflow-hidden">
      {/* The Background Image */}
      <div className="absolute inset-0">
        <Image
          src={ctaBgImage}
          alt="Abstract architectural structure"
          fill
          className="object-cover"
        />
        {/* Semi-transparent overlay so the text is readable */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* The Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-soil mb-8 text-balance">
          Let&apos;s bring clarity to your complex operation.
        </h2>
        <button className="bg-brand-soil text-white font-semibold px-8 py-4 hover:bg-brand-soil/90 transition-minimal">
          Schedule a Clarity Call
        </button>
      </div>
    </section>
    </>
  );
}
