'use client'
import React, { useState, useEffect } from 'react';

const AnimatedText = ({ words }: { words: string[] }) => {
  const [letters, setLetters] = useState<Array<{ char: string; id: number; isAnimating: boolean; color: string; wordIndex: number }>>([]);

  const appealing_colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
    '#D4A5A5', '#9B5DE5', '#F15BB5', '#00BBF9', '#00F5D4'
  ];

  const getRandomAngle = () => Math.random() * 6 - 3;
  const getRandomColor = () => appealing_colors[Math.floor(Math.random() * appealing_colors.length)];

  useEffect(() => {
    let letterArray: Array<{ char: string; id: number; isAnimating: boolean; color: string; wordIndex: number }> = [];
    let globalIndex = 0;
    
    words.forEach((word, wordIndex) => {
      const wordLetters = word.split('').map((char) => ({
        char,
        id: globalIndex++,
        isAnimating: false,
        color: 'white',
        wordIndex
      }));
      letterArray = [...letterArray, ...wordLetters];
      
      // Add space after word unless it's the last word
      if (wordIndex < words.length - 1) {
        letterArray.push({
          char: ' ',
          id: globalIndex++,
          isAnimating: false,
          color: 'white',
          wordIndex
        });
      }
    });

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

  // Group letters by word index
  const wordGroups = letters.reduce((groups, letter) => {
    if (!groups[letter.wordIndex]) {
      groups[letter.wordIndex] = [];
    }
    groups[letter.wordIndex].push(letter);
    return groups;
  }, {} as Record<number, typeof letters>);

  return (
    <div className="inline-flex flex-wrap justify-center gap-2" style={{ fontFamily: 'Russo One, sans-serif' }}>
      {Object.values(wordGroups).map((wordLetters, groupIndex) => (
        <span key={groupIndex} className="inline-flex">
          {wordLetters.map((letter) => (
            <span
              key={letter.id}
              className="inline-block transition-all duration-300 ease-in-out"
              style={{
                color: letter.isAnimating ? letter.color : 'white',
                transform: letter.isAnimating 
                  ? `rotate(${getRandomAngle()}deg)` 
                  : 'none',
                marginLeft: letter.char === ' ' ? '0.25em' : '0',
                fontFamily: 'Russo One, sans-serif',
                display: 'inline-block',
                position: 'relative',
                top: '0',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
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
      <div className="w-full max-w-4xl mx-auto text-center p-4">
        <h1 className="heading inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-relaxed" 
            style={{ fontFamily: 'Russo One, sans-serif' }}>
          <div className="flex flex-col items-center gap-2">
            <AnimatedText words={['LETS', 'PITCH', '&']} />
            <AnimatedText words={['CONNECT', 'TOGETHER']} />
          </div>
        </h1>
      </div>
    </>
  );
}