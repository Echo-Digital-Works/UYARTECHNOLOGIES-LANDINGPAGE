import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FlowingBackgroundRibbon } from './FlowingBackgroundRibbon';

interface FinalCTAProps {
  onStartProject: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject }) => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#171717] text-white relative overflow-hidden">
      {/* Dynamic Animated Flowing Neon Lines (Hero background continuity - Dark glow) */}
      <FlowingBackgroundRibbon idPrefix="finalcta" variant="dark-glow" opacity={0.8} />
      {/* Subtle architectural dot grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Subtle brand purple ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#6842C2]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#EEE8FA] bg-white/10 px-3.5 py-1 rounded-full mb-5 inline-block border border-white/10 backdrop-blur-sm">
          READY TO ELEVATE YOUR TECH?
        </span>

        {/* Oversized Typography */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 uppercase leading-[1.04]">
          Ready To Build<br />
          <span className="text-[#EEE8FA]">What's Next?</span>
        </h2>

        <p className="text-base sm:text-xl text-white/70 max-w-xl mx-auto mb-6 sm:mb-8 font-normal leading-relaxed">
          Let's turn your next big idea into a digital reality.
        </p>

        <button
          onClick={onStartProject}
          className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#6842C2] hover:bg-[#522F9E] text-white font-extrabold text-base tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <span>Start Your Project</span>
          <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </section>
  );
};
