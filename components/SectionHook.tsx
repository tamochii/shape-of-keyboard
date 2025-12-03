import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DANMAKU_WORDS } from '../constants';
import { GlitchText } from './GlitchText';

export const SectionHook: React.FC = () => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  
  const fullTextLine1 = "雪崩的时候";
  const fullTextLine2 = "没有一片雪花是无辜的";

  // Typewriter effect logic
  useEffect(() => {
    let i1 = 0;
    let i2 = 0;
    
    // Type first line
    const interval1 = setInterval(() => {
      setLine1(fullTextLine1.slice(0, i1 + 1));
      i1++;
      if (i1 > fullTextLine1.length) {
        clearInterval(interval1);
        setShowCursor1(false);
        setShowCursor2(true);
        
        // Start typing second line after a brief pause
        setTimeout(() => {
          const interval2 = setInterval(() => {
            setLine2(fullTextLine2.slice(0, i2 + 1));
            i2++;
            if (i2 > fullTextLine2.length) {
              clearInterval(interval2);
            }
          }, 150);
        }, 300);
      }
    }, 150);

    return () => clearInterval(interval1);
  }, []);

  // Create a larger array of danmaku for better coverage
  const extendedDanmaku = [...DANMAKU_WORDS, ...DANMAKU_WORDS, ...DANMAKU_WORDS];

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b border-gray-800 bg-black">
      {/* Background Danmaku - Increased Opacity and Density */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {extendedDanmaku.map((word, index) => (
          <motion.div
            key={index}
            initial={{ 
              x: Math.random() > 0.5 ? '100vw' : '-20vw', 
              y: `${Math.random() * 100}%`,
              opacity: 0
            }}
            animate={{ 
              x: Math.random() > 0.5 ? '-20vw' : '100vw',
              opacity: [0, 0.6, 0.6, 0] // Fade in and out, max opacity 0.6
            }}
            transition={{ 
              duration: Math.random() * 15 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className={`absolute font-bold whitespace-nowrap select-none blur-[1px] ${
              index % 3 === 0 ? 'text-[#ff003c] text-3xl z-0' : 
              index % 3 === 1 ? 'text-gray-600 text-xl z-0' : 
              'text-zinc-700 text-4xl z-0'
            }`}
            style={{
                top: `${(index * 3) % 100}%` // Distribute vertically more evenly
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* Main Content - Centered Text Only */}
      <div className="z-10 text-center px-4 w-full max-w-5xl relative flex flex-col items-center gap-6">
        {/* Glowing backdrop for text visibility */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black/60 blur-3xl -z-10"></div>

        <h1 className="font-bold text-white tracking-widest leading-tight flex flex-col items-center gap-4">
            {/* Line 1 */}
            <div className="text-4xl md:text-7xl">
                {line1}
                <motion.span 
                    animate={{ opacity: showCursor1 ? [0, 1, 0] : 0 }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className={`${showCursor1 ? 'inline-block' : 'hidden'} w-3 h-8 md:w-5 md:h-14 bg-[#00ff41] ml-2 align-middle shadow-[0_0_10px_#00ff41]`}
                />
            </div>
            
            {/* Line 2 */}
            <div className="text-3xl md:text-6xl text-gray-200">
                {line2}
                <motion.span 
                    animate={{ opacity: showCursor2 ? [0, 1, 0] : 0 }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className={`${showCursor2 ? 'inline-block' : 'hidden'} w-3 h-6 md:w-5 md:h-12 bg-[#00ff41] ml-2 align-middle shadow-[0_0_10px_#00ff41]`}
                />
            </div>
        </h1>
        
        <div className="mt-16">
            <GlitchText 
                text="THE SHAPE OF KEYBOARD" 
                className="text-gray-400 tracking-[0.5em] text-sm md:text-xl font-mono"
            />
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce text-gray-500 font-mono text-sm">
        ↓ 向下滑动探索真相
      </div>
    </section>
  );
};