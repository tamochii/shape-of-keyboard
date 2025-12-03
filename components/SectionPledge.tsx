import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';

interface SectionPledgeProps {
  onPledge: () => void;
  hasPledged: boolean;
}

export const SectionPledge: React.FC<SectionPledgeProps> = ({ onPledge, hasPledged }) => {
  if (hasPledged) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center text-center p-4"
      >
        <div className="space-y-8 max-w-2xl">
          <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mx-auto"
          >
              <Sun size={80} className="text-yellow-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800">
              良言一句三冬暖
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
              感谢你的善意。<br/>世界因你而温暖。
          </p>
        </div>

        <footer className="absolute bottom-4 text-gray-400 text-xs md:text-sm">
          © The Shape of Keyboard | Cyberbullying Prevention Education
        </footer>
      </motion.div>
    );
  }

  return (
    <section className="min-h-screen py-20 px-4 flex flex-col items-center justify-center text-center relative z-20">
      <div className="space-y-12 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white glitch-text" data-text="拒绝网络暴力">
              拒绝网络暴力
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              每一个ID背后，都是一个有血有肉的人。<br/>
              如果你愿意善用你的键盘，请按下这个按钮。
          </p>
          
          <button
              onClick={onPledge}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black transition-all duration-200 bg-[#00ff41] font-mono rounded hover:bg-white hover:scale-105 active:scale-95 focus:outline-none ring-offset-2 focus:ring-2 ring-[#00ff41]"
          >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative">我承诺善用键盘</span>
          </button>
      </div>

      <footer className="absolute bottom-4 text-gray-500 text-sm">
        © The Shape of Keyboard | Cyberbullying Prevention Education
      </footer>
    </section>
  );
};