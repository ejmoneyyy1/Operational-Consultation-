'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';

const NAV_DESKTOP_LINKS = NAV_LINKS.filter((link) => link.href !== '/contact');

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full top-0 z-50 fixed bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.svg"
              alt="The Earth Atelier"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Center: Links (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-8 text-brand-soil font-medium text-sm">
            {NAV_DESKTOP_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? 'text-brand-soil'
                    : 'text-brand-soil/90 hover:text-brand-soil transition-colors'
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: CTA */}
          <div className="flex items-center">
            <Link
              href="/contact"
              className="bg-[#F0EBE1] text-brand-soil px-5 py-2.5 text-sm font-medium hover:bg-[#E5DFD5] transition-colors rounded-sm"
            >
              Book an appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
