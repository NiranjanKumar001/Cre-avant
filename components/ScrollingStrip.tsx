'use client';

import React from 'react';
import { Satisfy, Righteous } from "next/font/google";

// Initialize fonts
const cursiveFont = Satisfy({
  weight: '400',
  subsets: ['latin'],
});

const funkFont = Righteous({
  weight: '400',
  subsets: ['latin'],
});

const ScrollingStrip = () => {
  const names1 = [
    "Innovation Hub", "Tech Ventures", "Future Labs", "Digital Dreams",
    "Smart Start", "Next Gen", "AI Solutions", "Green Tech",
    "Cloud Nine", "Data Driven", "Web Works", "Mobile First"
  ];

  const names2 = [
    "Startup Space", "Growth Engine", "Think Tank", "Code Craft",
    "Pixel Perfect", "Dev Studio", "Launch Pad", "Bright Ideas",
    "Tech Titans", "Digital Forge", "App Factory", "Innovation Lab"
  ];

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-50% - 1rem)); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
          @keyframes scroll-reverse {
            from { transform: translateX(calc(-50% - 1rem)); }
            to { transform: translateX(0); }
          }
          .animate-scroll-reverse {
            animation: scroll-reverse 20s linear infinite;
          }
          .animate-scroll-reverse:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="w-full overflow-hidden">
        {/* First strip */}
        <div className="relative bg-blue-100/40 backdrop-blur-sm py-6">
          <div className="flex animate-scroll">
            <div className="flex shrink-0 gap-12 pe-12">
              {names1.map((name, index) => (
                <span 
                  key={index} 
                  className={`${cursiveFont.className} text-blue-600/70 font-bold text-3xl whitespace-nowrap hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform`}
                >
                  {name}
                </span>
              ))}
            </div>
            <div className="flex shrink-0 gap-12 pe-12">
              {names1.map((name, index) => (
                <span 
                  key={index} 
                  className={`${cursiveFont.className} text-blue-600/70 font-bold text-3xl whitespace-nowrap hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform`}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Second strip */}
        <div className="relative bg-purple-100/40 backdrop-blur-sm py-6">
          <div className="flex animate-scroll-reverse">
            <div className="flex shrink-0 gap-12 pe-12">
              {names2.map((name, index) => (
                <span 
                  key={index} 
                  className={`${funkFont.className} text-purple-600/70 font-bold text-3xl whitespace-nowrap hover:text-purple-600 transition-colors duration-300 hover:scale-110 transform`}
                >
                  {name}
                </span>
              ))}
            </div>
            <div className="flex shrink-0 gap-12 pe-12">
              {names2.map((name, index) => (
                <span 
                  key={index} 
                  className={`${funkFont.className} text-purple-600/70 font-bold text-3xl whitespace-nowrap hover:text-purple-600 transition-colors duration-300 hover:scale-110 transform`}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollingStrip;
