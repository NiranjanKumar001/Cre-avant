'use client';

import React, { useState, PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';
import SlideNav from './SlideNav';

interface SlideNavProps {
  onNavigate?: (path: string, x: number, y: number) => void;
}

interface PageTransitionProps extends PropsWithChildren {
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, className }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const router = useRouter();

  const handleTransition = (path: string, x: number, y: number) => {
    setCoords({ x, y });
    setIsTransitioning(true);

    // Start transition after a short delay to ensure state is updated
    setTimeout(() => {
      router.push(path);
      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // Match this with animation duration
    }, 300); // Slight delay before navigation
  };

  return (
    <div className={`relative ${className || ''}`}>
      {isTransitioning && (
        <div
          className="fixed inset-0 z-[60] pointer-events-none"
          style={{
            '--x': `${coords.x}px`,
            '--y': `${coords.y}px`,
          } as React.CSSProperties}
        >
          <div className="absolute inset-0 transition-transform origin-center animate-paint-spread" />
        </div>
      )}
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          const isSlideNav =
            child.type === SlideNav ||
            (typeof child.type === 'function' &&
             'name' in child.type &&
             (child.type as { name: string }).name === 'SlideNav');

          if (isSlideNav) {
            return React.cloneElement(child, {
              onNavigate: handleTransition
            } as SlideNavProps);
          }
        }
        return child;
      })}
    </div>
  );
};

export default PageTransition;
