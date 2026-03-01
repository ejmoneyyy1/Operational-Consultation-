export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Study' },
  { href: '/contact', label: 'Contact' },
] as const;

export const PRIMARY_CTA = {
  text: 'Schedule a Clarity Call',
  href: '/contact',
} as const;

export const SECONDARY_CTA = {
  text: 'See What I Do',
  href: '/services',
} as const;
