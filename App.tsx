import React, { useState, useEffect } from 'react';
import { SectionHook } from './components/SectionHook';
import { SectionTypes } from './components/SectionTypes';
import { SectionImpact } from './components/SectionImpact';
import { SectionShield } from './components/SectionShield';
import { SectionPledge } from './components/SectionPledge';

export default function App() {
  const [hasPledged, setHasPledged] = useState(false);

  // Disable scrolling when the pledge is taken (success screen active)
  useEffect(() => {
    if (hasPledged) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [hasPledged]);

  return (
    <main className={`relative min-h-screen transition-colors duration-1000 ${
      hasPledged ? 'bg-white' : 'bg-black'
    }`}>
      {/* Global overlay for CRT scanlines (only in dark mode) */}
      {!hasPledged && (
        <div className="fixed inset-0 pointer-events-none z-50 scanlines opacity-30 mix-blend-overlay"></div>
      )}

      <div className="relative z-10">
        <SectionHook />
        
        <div className={hasPledged ? 'opacity-50 grayscale transition-all duration-1000' : ''}>
            <SectionTypes />
            <SectionImpact />
            <SectionShield />
        </div>

        <SectionPledge 
          onPledge={() => setHasPledged(true)} 
          hasPledged={hasPledged}
        />
      </div>

      {/* Floating particles effect for light mode */}
      {hasPledged && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
      )}
    </main>
  );
}