'use client';

import React, { useEffect, useState } from 'react';

const CursorParticles = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    id: number;
    angle: number;
    speed: number;
    size: number;
    color: string;
  }>>([]);
  
  // Original vibrant colors for particles
  const colors = [
    '#FF3366', // Bright Pink
    '#33CC99', // Turquoise
    '#FF9933', // Orange
    '#6666FF', // Purple
    '#FF66CC', // Light Pink
  ];

  // Colors for the cursor
  const cursorColors = [
    '#3B82F6', // Default Blue
    '#FF3366', // Bright Pink
    '#33CC99', // Turquoise
    '#FF9933', // Orange
    '#6666FF', // Purple
  ];

  const [cursorColor, setCursorColor] = useState(cursorColors[0]); // Start with default blue

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Create new particle on mouse move
      if (Math.random() > 0.5) {
        const newParticle = {
          x: e.clientX,
          y: e.clientY,
          id: Date.now(),
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 2 + 1,
          size: Math.random() * 8 + 4,
          color: colors[Math.floor(Math.random() * colors.length)]
        };

        setParticles(prev => [...prev, newParticle]);
      }
    };

    const onMouseDown = () => {
      setIsClicking(true);
      // Change cursor color randomly on click
      setCursorColor(cursorColors[Math.floor(Math.random() * cursorColors.length)]);
    };
    
    const onMouseUp = () => setIsClicking(false);

    const intervalId = setInterval(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + Math.cos(particle.angle) * particle.speed,
            y: particle.y + Math.sin(particle.angle) * particle.speed,
            size: particle.size * 0.95,
          }))
          .filter(particle => particle.size > 0.5)
      );
    }, 16);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {/* Main cursor - Now interactive colors */}
      <div 
        className="fixed pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* Inner circle - Smaller size */}
        <div 
          className="rounded-full"
          style={{
            width: isClicking ? '8px' : '10px',
            height: isClicking ? '8px' : '10px',
            backgroundColor: cursorColor, // Interactive cursor color
            transition: 'all 0.15s ease-out',
            boxShadow: `0 0 10px ${cursorColor}`,
          }}
        />
        
        {/* Outer ring - Smaller size */}
        <div 
          className="rounded-full absolute top-1/2 left-1/2"
          style={{
            width: isClicking ? '16px' : '20px',
            height: isClicking ? '16px' : '20px',
            border: `2px solid ${cursorColor}`, // Interactive border color
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.15s ease-out',
            opacity: 0.5,
          }}
        />
      </div>

      {/* Particles - Keeping original colorful effects */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed rounded-full pointer-events-none z-40"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: 'translate(-50%, -50%)',
            opacity: (particle.size - 0.5) / 8,
            boxShadow: `0 0 ${particle.size/2}px ${particle.color}`,
          }}
        />
      ))}

      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        @media (hover: none) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default CursorParticles;  
