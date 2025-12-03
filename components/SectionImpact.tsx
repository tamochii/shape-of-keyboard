import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { HeartCrack, Activity } from 'lucide-react';
import { TOXIC_WORDS_INTERACTIVE } from '../constants';
import { GlitchText } from './GlitchText';

export const SectionImpact: React.FC = () => {
  const [san, setSan] = useState(100);
  const controls = useAnimation();

  useEffect(() => {
    if (san <= 0) {
      setSan(0);
      controls.start({
        x: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.5 }
      });
    }
  }, [san, controls]);

  const handleDamage = (damage: number) => {
    if (san <= 0) return;
    setSan(prev => Math.max(0, prev - damage));
    controls.start({
      scale: [1, 0.95, 1],
      color: "#ff0000",
      transition: { duration: 0.2 }
    });
  };

  const reset = () => setSan(100);

  return (
    <section className="min-h-screen py-20 px-4 flex flex-col md:flex-row items-center justify-center bg-black border-t border-zinc-900 gap-12 max-w-7xl mx-auto">
      
      {/* Left: Weapons */}
      <div className="flex-1 w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-[#ff003c] pl-4">
          <span className="text-[#ff003c]">伤害</span> 演示
        </h2>
        <p className="text-gray-400 mb-6">点击下方网络暴力词汇，直观感受对受害者造成的精神伤害。</p>
        
        <div className="flex flex-wrap gap-4">
            {TOXIC_WORDS_INTERACTIVE.map((item) => (
                <button
                    key={item.id}
                    onClick={() => handleDamage(item.damage)}
                    disabled={san <= 0}
                    className="px-6 py-3 border border-zinc-600 text-zinc-300 hover:bg-[#ff003c] hover:text-black hover:border-[#ff003c] transition-all uppercase tracking-widest disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    {item.text}
                </button>
            ))}
        </div>
        
        {san === 0 && (
            <button 
                onClick={reset}
                className="mt-8 text-[#00ff41] hover:underline underline-offset-4 font-mono"
            >
                [ 重置模拟系统 ]
            </button>
        )}
      </div>

      {/* Right: Victim Status */}
      <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center">
        <motion.div 
            animate={controls}
            className={`relative w-64 h-80 md:w-80 md:h-96 border-4 flex items-center justify-center transition-colors duration-500 ${
                san > 50 ? 'border-[#00ff41]' : san > 20 ? 'border-yellow-500' : 'border-[#ff003c]'
            }`}
        >
            {/* Hologram Avatar Placeholder */}
            <div className={`text-9xl transition-all duration-500 ${san === 0 ? 'opacity-30 blur-sm' : 'opacity-100'}`}>
                {san > 0 ? <Activity size={120} color={san > 50 ? '#00ff41' : san > 20 ? 'yellow' : '#ff003c'} /> : <HeartCrack size={120} color="#ff003c" />}
            </div>

            {/* Status Bars */}
            <div className="absolute -right-8 top-10 flex flex-col gap-2">
                 <div className="w-4 h-32 bg-zinc-800 border border-zinc-600 relative overflow-hidden">
                    <motion.div 
                        initial={{ height: '100%' }}
                        animate={{ height: `${san}%` }}
                        className={`w-full absolute bottom-0 transition-colors duration-300 ${
                            san > 50 ? 'bg-[#00ff41]' : san > 20 ? 'bg-yellow-500' : 'bg-[#ff003c]'
                        }`}
                    />
                 </div>
                 <span className="text-xs text-white -rotate-90 mt-4 font-mono tracking-widest">心理防线</span>
            </div>

            {/* Glitch Overlay when critical */}
            {san < 30 && san > 0 && (
                <div className="absolute inset-0 bg-[#ff003c] opacity-10 animate-pulse pointer-events-none mix-blend-overlay"></div>
            )}
             {san === 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                    <GlitchText text="精神崩溃" className="text-[#ff003c] text-3xl font-bold" />
                </div>
            )}
        </motion.div>
        
        <div className="mt-6 font-mono text-xl">
            当前状态: <span className={san > 50 ? 'text-[#00ff41]' : san > 20 ? 'text-yellow-500' : 'text-[#ff003c]'}>
                {san > 50 ? '意识稳定' : san > 0 ? '精神创伤' : '彻底崩溃'}
            </span>
        </div>
      </div>
    </section>
  );
};