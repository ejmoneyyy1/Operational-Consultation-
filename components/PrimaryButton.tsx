import Link from 'next/link';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function PrimaryButton({ 
  href, 
  children, 
  className,
  onClick,
  type = 'button',
  disabled = false
}: PrimaryButtonProps) {
  const baseClasses = 'px-8 py-3 bg-brand-black text-white text-sm font-medium rounded-sm transition-minimal hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed';
  
  if (href && !disabled) {
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
      disabled={disabled}
      className={cn(baseClasses, className)}
    >
      {children}
    </button>
  );
}
