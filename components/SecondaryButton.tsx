import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SecondaryButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function SecondaryButton({ 
  href, 
  children, 
  className,
  onClick,
  type = 'button'
}: SecondaryButtonProps) {
  const baseClasses = 'px-8 py-3 bg-transparent border border-border-color text-brand-black text-sm font-medium rounded-sm transition-minimal hover:bg-brand-gray';
  
  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, className)}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type}
      onClick={onClick}
      className={cn(baseClasses, className)}
    >
      {children}
    </button>
  );
}
