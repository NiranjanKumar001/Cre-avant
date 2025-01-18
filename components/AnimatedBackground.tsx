
"use client";

import React, { useEffect, useState, useCallback, useMemo } from 'react';

interface Letter {
  id: string;  // Changed to string for more unique IDs
  char: string;
  x: number;
  y: number;
  rotation: number;
  color: string;
}

const AnimatedBackground = () => {
  const [letters, setLetters] = useState<Letter[]>([]);

  // Memoize constants
  const characters = useMemo(() => 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;':\",.<>?/ऄअआइईउऊऋऌऍऎएऐऑऒओऔकखगघङचछजझञटठडढणतथदधनऩपफबभमयरऱलळऴवशषसहऽॐॠॡ।॥०१२3456789॰ॲॳॴॵॶॷॹॺॻॼॽॾॿ",
    []
  );

  const colors = useMemo(() => [
    'rgba(59, 130, 246, 0.3)',
    'rgba(255, 99, 71, 0.3)',
    'rgba(255, 215, 0, 0.3)',
    'rgba(75, 192, 192, 0.3)',
    'rgba(153, 102, 255, 0.3)',
    'rgba(255, 159, 64, 0.3)'
  ], []);

  const MAX_LETTERS = 50;

  // Generate unique ID using timestamp and random number
  const generateUniqueId = useCallback(() => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  // Memoize letter creation logic
  const createLetter = useCallback((): Letter => ({
    id: generateUniqueId(),
    char: characters[Math.floor(Math.random() * characters.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 45 - 22.5,
    color: colors[Math.floor(Math.random() * colors.length)]
  }), [characters, colors, generateUniqueId]);

  useEffect(() => {
    const addLetter = () => {
      setLetters(prev => {
        const newLetters = [...prev, createLetter()];
        return newLetters.slice(-MAX_LETTERS); // Keep only the latest MAX_LETTERS
      });
    };

    const intervalId = setInterval(addLetter, 200);

    return () => clearInterval(intervalId);
  }, [createLetter]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {letters.map((letter) => (
        <div
          key={letter.id}
          className="absolute font-bold text-2xl transform-gpu"
          style={{
            left: `${letter.x}%`,
            top: `${letter.y}%`,
            transform: `rotate(${letter.rotation}deg)`,
            color: letter.color,
            textShadow: `0 0 10px ${letter.color}`,
            animation: 'fadeInOut 3s forwards',
            willChange: 'transform, opacity'
          }}
        >
          {letter.char}
        </div>
      ))}

      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translate(0, 20px) rotate(0deg);
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(0, -20px) rotate(${Math.random() * 45}deg);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;