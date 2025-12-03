import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FLIP_CARDS } from '../constants';
import { GlitchText } from './GlitchText';

export const SectionTypes: React.FC = () => {
  return (
    <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center bg-black/90">
      <div className="mb-16 text-center">
        <GlitchText 
            text="网暴图鉴" 
            as="h2" 
            className="text-4xl md:text-6xl font-bold text-white mb-4" 
        />
        <p className="text-gray-400 max-w-xl mx-auto">
          恶语伤人六月寒。这不只是玩笑，是暴力的不同伪装。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {FLIP_CARDS.map((card) => (
          <FlipCard key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
};

const FlipCard: React.FC<{ data: typeof FLIP_CARDS[0] }> = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
        className="relative h-[400px] w-full cursor-pointer perspective-1000 group"
        onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div 
        className="w-full h-full relative transform-style-3d transition-all duration-700"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-zinc-900 border border-zinc-700 p-8 flex flex-col items-center justify-center shadow-lg hover:border-[#00ff41] transition-colors rounded-sm">
            <div className="text-6xl mb-6 opacity-20 text-white">0{data.id}</div>
            <p className="text-xl md:text-2xl font-mono text-[#00ff41] text-center leading-relaxed">
                {data.frontText}
            </p>
            <span className="absolute bottom-4 right-4 text-xs text-gray-500 animate-pulse">
                [CLICK TO REVEAL TRUTH]
            </span>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#ff003c] text-white p-8 flex flex-col items-center justify-center shadow-[0_0_20px_rgba(255,0,60,0.5)] rounded-sm">
            <h3 className="text-3xl font-bold mb-6 text-black uppercase tracking-wider border-b-4 border-black pb-2">
                {data.backText}
            </h3>
            <p className="text-lg font-bold text-black text-center">
                {data.backDetail}
            </p>
        </div>
      </motion.div>
    </div>
  );
};