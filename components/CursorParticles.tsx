'use client'

import React, { useState, useEffect } from 'react';

const CursorParticles = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    char: string;
    opacity: number;
    size: number;
    velocity: {
      x: number;
      y: number;
    };
  }>>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Generate random code-like characters
  const getRandomChar = () => {
    const codeChars = [
      '0', '1', '{', '}', '(', ')', '[', ']', '<', '>', 
      '/', '\\', '|', '=', '+', '-', '*', '&', '%', '$', 
      '#', '@', '!', ';', ':', 'void', 'int', 'if', 'for',
      'while', '++', '--', '!=', '==', '||', '&&'
    ];
    return codeChars[Math.floor(Math.random() * codeChars.length)];
  };

  useEffect(() => {
    // Skip effect on mobile devices
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Create new particle with random vertical offset
      const newParticle = {
        id: Date.now(),
        x: e.clientX + (Math.random() * 40 - 20),
        y: e.clientY + (Math.random() * 40 - 20),
        char: getRandomChar(),
        opacity: 1,
        size: Math.random() * 12 + 10,
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: Math.random() * 2 + 1
        }
      };

      setParticles(prev => [...prev.slice(-50), newParticle]); // Keep only last 50 particles
    };

    // Update and remove particles
    const particleInterval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            opacity: particle.opacity - 0.03,
            y: particle.y + particle.velocity.y,
            x: particle.x + particle.velocity.x
          }))
          .filter(particle => particle.opacity > 0)
      );
    }, 50);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(particleInterval);
    };
  }, []);

  // Don't render anything on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Custom cursor */}
      <div 
        className="fixed w-4 h-4 border-2 border-green-400 rounded-full mix-blend-difference"
        style={{
          transform: `translate(${mousePos.x - 8}px, ${mousePos.y - 8}px)`,
          boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)'
        }}
      />
      
      {/* Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute font-mono text-green-400 pointer-events-none select-none"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            fontSize: particle.size,
            transform: 'translate(-50%, -50%)',
            textShadow: '0 0 5px rgba(0, 255, 0, 0.5)',
            fontWeight: 'bold'
          }}
        >
          {particle.char}
        </div>
      ))}
    </div>
  );
};

export default CursorParticles;