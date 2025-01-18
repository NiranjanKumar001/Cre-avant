"use client";

import React, { useEffect, useState } from 'react';

// Define TypeScript interfaces
interface Letter {
  id: number;
  char: string;
  x: number;
  y: number;
  rotation: number;
  color: string;
}

const AnimatedBackground = () => {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [counter, setCounter] = useState(0);

  // Define constants outside component to prevent recreating on each render
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;':\",.<>?/ऄअआइईउऊऋऌऍऎएऐऑऒओऔकखगघङचछजझञटठडढणतथदधनऩपफबभमयरऱलळऴवशषसहऽॐॠॡ।॥०१२3456789॰ॲॳॴॵॶॷॹॺॻॼॽॾॿ";

  const colors = [
    'rgba(59, 130, 246, 0.3)',
    'rgba(255, 99, 71, 0.3)',
    'rgba(255, 215, 0, 0.3)',
    'rgba(75, 192, 192, 0.3)',
    'rgba(153, 102, 255, 0.3)',
    'rgba(255, 159, 64, 0.3)'
  ];

  const MAX_LETTERS = 50;

  useEffect(() => {
    const addLetter = () => {
      setCounter(prev => prev + 1);
      const newLetter: Letter = {
        id: counter,
        char: characters[Math.floor(Math.random() * characters.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 45 - 22.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      };

      setLetters(prev => {
        const newLetters = [...prev, newLetter];
        return newLetters.slice(-MAX_LETTERS); // Keep only the latest MAX_LETTERS
      });
    };

    const intervalId = setInterval(addLetter, 200);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, [counter]); // Add counter to dependencies

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {letters.map((letter) => (
        <div
          key={letter.id}
          className="absolute font-bold text-2xl opacity-0"
          style={{
            left: `${letter.x}%`,
            top: `${letter.y}%`,
            transform: `rotate(${letter.rotation}deg)`,
            color: letter.color,
            textShadow: `0 0 10px ${letter.color}`,
            animation: 'fadeInOut 3s forwards'
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