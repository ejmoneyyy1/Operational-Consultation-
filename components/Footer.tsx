import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'Tiktok', href: 'https://tiktok.com' },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#F0EBE1] py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left max-w-7xl mx-auto gap-10 md:gap-0">
        {/* Logo + Copyright + Contact - centered on mobile */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/images/logo.svg"
            alt="The Earth Atelier"
            className="h-8 md:h-10 w-auto mb-6 md:mb-10"
          />
          <p className="text-brand-soil text-sm">© 2026. All rights reserved</p>
          <div className="mt-4 flex flex-col gap-1 text-brand-soil text-sm">
            <a href="mailto:edwinalobuia@gmail.com" className="hover:text-brand-soil/80 transition-colors">
              edwinalobuia@gmail.com
            </a>
            <a href="tel:+233539652694" className="hover:text-brand-soil/80 transition-colors">
              +233 539652694
            </a>
          </div>
        </div>

        {/* Nav + Socials - centered on mobile */}
        <div className="flex flex-col items-center md:items-end">
          <nav
            className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-brand-soil text-sm font-medium mb-6"
            aria-label="Footer navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand-soil/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-brand-soil text-sm">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-soil/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
