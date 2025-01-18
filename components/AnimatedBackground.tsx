"use client";

import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [letters, setLetters] = useState<Array<{
    id: number;
    char: string;
    x: number;
    y: number;
    rotation: number;
    color: string; // Added color property
  }>>([]);

  // Expanded character set
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;':\",.<>?/ऄअआइईउऊऋऌऍऎएऐऑऒओऔकखगघङचछजझञटठडढणतथदधनऩपफबभमयरऱलळऴवशषसहऽॐॠॡ।॥०१२3456789॰ॲॳॴॵॶॷॹॺॻॼॽॾॿ";

  const colors = [
    'rgba(59, 130, 246, 0.3)',
    'rgba(255, 99, 71, 0.3)',
    'rgba(255, 215, 0, 0.3)',
    'rgba(75, 192, 192, 0.3)',
    'rgba(153, 102, 255, 0.3)',
    'rgba(255, 159, 64, 0.3)'
  ];

  let letterCount = 0;

  useEffect(() => {
    const addLetter = () => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const char = characters[Math.floor(Math.random() * characters.length)];
      const rotation = Math.random() * 45 - 22.5;
      const color = colors[Math.floor(Math.random() * colors.length)]; // Random color

      setLetters(prev => [
        ...prev,
        {
          id: letterCount++,
          char,
          x,
          y,
          rotation,
          color
        }
      ]);

      // Limit the number of letters on screen
      if (letters.length >= 50) { // Increased to allow more letters
        setLetters(prev => prev.slice(1)); // Remove the oldest letter
      }
    };

    const interval = setInterval(addLetter, 200); // Adjusted interval for faster appearance
    return () => clearInterval(interval);
  }, [letters.length]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {letters.map((letter) => (
        <div
          key={letter.id}
          className="absolute font-bold text-2xl"
          style={{
            left: `${letter.x}%`,
            top: `${letter.y}%`,
            transform: `rotate(${letter.rotation}deg)`,
            animation: 'letterAnimation 3s forwards',
            color: letter.color,
            textShadow: `0 0 10px ${letter.color}`
          }}
        >
          {letter.char}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
