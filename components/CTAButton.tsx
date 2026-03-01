'use client';

import Link from 'next/link';
import { PRIMARY_CTA, SECONDARY_CTA } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary';
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export function CTAButton({ 
  variant = 'primary', 
  href,
  className,
  children 
}: CTAButtonProps) {
  const ctaConfig = variant === 'primary' ? PRIMARY_CTA : SECONDARY_CTA;
  const finalHref = href || ctaConfig.href;
  const finalText = children || ctaConfig.text;

  if (variant === 'primary') {
    return (
      <Link
        href={finalHref}
        className={cn(
          'inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white bg-neutral-900 hover:bg-neutral-800 transition-minimal',
          className
        )}
      >
        {finalText}
      </Link>
    );
  }

  return (
    <Link
      href={finalHref}
      className={cn(
        'inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-neutral-900 border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 transition-minimal',
        className
      )}
    >
      {finalText}
    </Link>
  );
}
