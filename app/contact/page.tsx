import Link from 'next/link';
import BookingEmbed from '@/components/BookingEmbed';

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-brand-soil max-w-3xl leading-tight mb-20">
          Let&apos;s bring clarity to your complex operation.
        </h1>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left Column: Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-brand-wood mb-6">Get in touch</h3>
            <p className="text-brand-soil/80 mb-10">
              If your project, workflow, or system is stuck in ambiguity, I can help.
            </p>
            <div className="flex flex-col space-y-6 text-xl text-brand-soil font-medium">
              <Link
                href="mailto:hello@edwin.com"
                className="flex items-center gap-3 underline decoration-brand-soil/30 hover:decoration-brand-soil transition-colors w-fit"
                aria-label="Email hello@edwin.com"
              >
                <span className="flex-shrink-0" aria-hidden>
                  <svg className="w-6 h-6 text-brand-soil/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                hello@edwin.com
              </Link>
              <span className="flex items-center gap-3">
                <span className="flex-shrink-0" aria-hidden>
                  <svg className="w-6 h-6 text-brand-soil/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                +1 (555) 123-4567
              </span>
            </div>
          </div>

          {/* Right Column: Booking */}
          <BookingEmbed />
        </div>
      </div>
    </>
  );
}
