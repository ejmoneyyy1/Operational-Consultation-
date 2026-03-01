'use client';

import { useEffect, useRef, useState } from 'react';

export function PrecisionCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show cursor after mount to avoid SSR issues
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Direct DOM manipulation for zero-lag movement
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      // Check for hover state - comprehensive detection
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.getAttribute('role') === 'button' ||
        target.closest('[role="button"]') !== null ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom crosshair cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.6 : 1})`,
          transition: 'transform 180ms ease-out',
        }}
      >
        {/* Horizontal line - bolder on hover for better UX */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-black transition-all duration-180 ${
            isHovering ? 'w-7 h-[2.5px]' : 'w-4 h-[1px]'
          }`}
        />
        {/* Vertical line - bolder on hover for better UX */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-black transition-all duration-180 ${
            isHovering ? 'h-7 w-[2.5px]' : 'h-4 w-[1px]'
          }`}
        />
        
        {/* Hollow ring on hover - strong clickability signal */}
        {isHovering && (
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-[2.5px] border-brand-black rounded-full opacity-40 animate-pulse"
          />
        )}
      </div>
    </>
  );
}
