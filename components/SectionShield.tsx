import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Scale, Brain, Smartphone, ExternalLink } from 'lucide-react';
import { SHIELD_DATA } from '../constants';

export const SectionShield: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tech');

  const getIcon = (type: string) => {
    switch(type) {
        case 'tech': return <Smartphone size={24} />;
        case 'legal': return <Scale size={24} />;
        case 'mind': return <Brain size={24} />;
        default: return <Shield size={24} />;
    }
  };

  const activeItem = SHIELD_DATA.find(item => item.id === activeTab);

  return (
    <section className="min-h-screen py-20 px-4 bg-[#0a0a0a] text-white flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
            <Shield size={48} className="text-[#00ff41]" />
            <h2 className="text-4xl md:text-5xl font-bold">你的护盾</h2>
        </div>
        <p className="text-gray-400">当黑暗来临时，请拿起这些武器。</p>
      </div>

      <div className="w-full max-w-5xl bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden backdrop-blur-md">
        {/* Tabs */}
        <div className="flex border-b border-zinc-800">
            {SHIELD_DATA.map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex-1 py-6 flex flex-col md:flex-row gap-2 items-center justify-center transition-colors ${
                        activeTab === item.id 
                        ? 'bg-[#00ff41]/10 text-[#00ff41] border-b-2 border-[#00ff41]' 
                        : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                    }`}
                >
                    {getIcon(item.icon)}
                    <span className="font-bold tracking-wider">{item.title}</span>
                </button>
            ))}
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 min-h-[400px] relative">
            <AnimatePresence mode="wait">
                {activeItem && (
                    <motion.div
                        key={activeItem.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="text-[#00ff41]">></span> {activeItem.title}指南
                            </h3>
                            <ul className="space-y-4">
                                {activeItem.content.map((line, idx) => (
                                    <li key={idx} className="flex items-start gap-4 p-4 bg-black/40 rounded border border-zinc-800 hover:border-[#00ff41]/50 transition-colors">
                                        <span className="text-[#00ff41] font-mono mt-1 text-lg">0{idx + 1}</span>
                                        <p className="text-gray-300 leading-relaxed text-lg">{line}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* External Links Section */}
                        {activeItem.links && activeItem.links.length > 0 && (
                            <div className="pt-6 border-t border-zinc-800">
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">相关资源 (Useful Links)</h4>
                                <div className="flex flex-wrap gap-4">
                                    {activeItem.links.map((link, idx) => (
                                        <a 
                                            key={idx} 
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-[#00ff41] hover:text-black rounded transition-colors text-sm font-bold"
                                        >
                                            {link.label}
                                            <ExternalLink size={14} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};