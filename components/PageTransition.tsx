'use client';

import React, { useState, PropsWithChildren, ReactElement, cloneElement, isValidElement } from 'react';
import { useRouter } from 'next/navigation';

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
    
    setTimeout(() => {
      router.push(path);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }, 1000);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (isValidElement(child)) {
      // Only pass onNavigate to SlideNav component
      if (child.type === 'nav' || (typeof child.type === 'function' && child.type.name === 'SlideNav')) {
        return cloneElement(child as ReactElement, { onNavigate: handleTransition });
      }
      return child;
    }
    return child;
  });

  return (
    <div className={`relative ${className || ''}`}>
      {isTransitioning && (
        <div 
          className="fixed inset-0 z-50"
          style={{
            '--x': `${coords.x}px`,
            '--y': `${coords.y}px`
          } as React.CSSProperties}
        >
          <div className="absolute inset-0 animate-paint-spread bg-primary" />
        </div>
      )}
      {childrenWithProps}
    </div>
  );
};

export default PageTransition;