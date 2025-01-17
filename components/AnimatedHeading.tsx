'use client'

import React, { useState, useEffect } from 'react';

const AnimatedText = ({ words }: { words: string[] }) => {
  const [letters, setLetters] = useState<Array<{ char: string; id: number; isAnimating: boolean; color: string }>>([]);

  const appealing_colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
    '#D4A5A5', '#9B5DE5', '#F15BB5', '#00BBF9', '#00F5D4'
  ];

  const getRandomAngle = () => Math.random() * 6 - 3;
  const getRandomColor = () => appealing_colors[Math.floor(Math.random() * appealing_colors.length)];

  useEffect(() => {
    const letterArray = words.join(' ').split('').map((char, index) => ({
      char,
      id: index,
      isAnimating: false,
      color: 'white'
    }));
    setLetters(letterArray);

    const interval = setInterval(() => {
      setLetters(prevLetters => {
        const randomIndex = Math.floor(Math.random() * prevLetters.length);
        return prevLetters.map((letter, idx) => ({
          ...letter,
          isAnimating: idx === randomIndex,
          color: idx === randomIndex ? getRandomColor() : 'white'
        }));
      });
    }, 300);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="inline-block" style={{ fontFamily: 'Russo One, sans-serif' }}>
      {letters.map((letter) => (
        <span
          key={letter.id}
          className="inline-block transition-all duration-300 ease-in-out"
          style={{
            color: letter.isAnimating ? letter.color : 'white',
            transform: letter.isAnimating 
              ? `rotate(${getRandomAngle()}deg)` 
              : 'none',
            marginLeft: letter.char === ' ' ? '1em' : '0',
            fontFamily: 'Russo One, sans-serif',
            display: 'inline-block',
            position: 'relative',
            top: '0',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Bouncy animation
            transformOrigin: 'center center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontWeight: 900
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = getRandomColor();
            e.currentTarget.style.transform = `rotate(${getRandomAngle()}deg) scale(1.4)`;
            e.currentTarget.style.top = '-4px';
            e.currentTarget.style.textShadow = '4px 4px 8px rgba(0,0,0,0.4)';
            e.currentTarget.style.zIndex = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.top = '0';
            e.currentTarget.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
            e.currentTarget.style.zIndex = 'auto';
          }}
        >
          {letter.char === ' ' ? '\u00A0' : letter.char}
        </span>
      ))}
    </div>
  );
};

export default function AnimatedHeading() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
      `}</style>
      <h1 className="heading" style={{ fontFamily: 'Russo One, sans-serif' }}>
        <AnimatedText words={['LETS', 'PITCH','AND']} />
        <br />
        <AnimatedText words={['CONNECT', 'TOGETHER']} />
      </h1>
    </>
  );
}