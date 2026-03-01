'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function FadeIn({ children, delay = 0, className, once = true }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 0.61, 0.36, 1], // Sleek easeOutCubic curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FadeInStaggerProps {
  children: ReactNode[];
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
}

export function FadeInStagger({
  children,
  staggerDelay = 0.15,
  initialDelay = 0,
  className,
}: FadeInStaggerProps) {
  return (
    <>
      {children.map((child, index) => (
        <FadeIn
          key={index}
          delay={initialDelay + index * staggerDelay}
          className={className}
        >
          {child}
        </FadeIn>
      ))}
    </>
  );
}
