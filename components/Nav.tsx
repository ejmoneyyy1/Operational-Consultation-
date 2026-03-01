"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';

const NAV_DESKTOP_LINKS = NAV_LINKS.filter((link) => link.href !== '/contact');

export function Nav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="w-full top-0 z-50 fixed bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo - dark brown on transparent nav */}
            <Link href="/" className="flex items-center">
              <img
                src="/images/logo.svg"
                alt="The Earth Atelier"
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Center: Desktop links (hidden on mobile) - dark brown */}
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

            {/* Right: Desktop CTA (hidden on mobile) + Mobile hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex bg-[#F0EBE1] text-brand-soil px-5 py-2.5 text-sm font-medium hover:bg-[#E5DFD5] transition-colors rounded-md"
              >
                Book an appointment
              </Link>

              {/* Hamburger - visible only on mobile */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 -mr-2 text-brand-soil hover:text-brand-soil/80 transition-colors"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay - when drawer is open */}
      {isMobileMenuOpen && (
        <button
          type="button"
          onClick={closeMenu}
          className="fixed inset-0 bg-brand-soil/20 backdrop-blur-sm z-40 md:hidden"
          aria-label="Close menu"
        />
      )}

      {/* Slide-out drawer from right */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#F0EBE1] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex justify-end pt-6 pr-6">
          <button
            type="button"
            onClick={closeMenu}
            className="p-2 text-brand-soil hover:bg-brand-soil/10 rounded-md transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col space-y-8 mt-16 px-8 text-2xl text-brand-soil font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={pathname === link.href ? 'text-brand-soil' : 'text-brand-soil/90 hover:text-brand-soil'}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-8 inline-flex items-center justify-center bg-brand-soil text-white px-6 py-3 text-lg font-medium rounded-md hover:bg-brand-soil/90 transition-colors"
          >
            Book an appointment
          </Link>
        </div>
      </div>
    </>
  );
}
