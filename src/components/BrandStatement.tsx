import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { FlowingBackgroundRibbon } from './FlowingBackgroundRibbon';

export const BrandStatement: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#171717] text-white relative overflow-hidden">
      {/* Dynamic Animated Flowing Neon Lines (Hero background continuity - Dark glow) */}
      <FlowingBackgroundRibbon idPrefix="brand" variant="dark-glow" opacity={0.85} />
      {/* Subtle geometric line pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Subtle purple radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#6842C2]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle pill tag */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-mono tracking-widest uppercase mb-5 sm:mb-6 backdrop-blur-sm border border-white/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#EEE8FA]" />
          <span>OUR ENGINEERING PHILOSOPHY</span>
        </motion.div>

        {/* Large Editorial Typography */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] max-w-5xl mx-auto mb-4 sm:mb-6 uppercase"
        >
          Good technology doesn't just solve problems.{' '}
          <span className="text-[#EEE8FA] underline decoration-[#6842C2] decoration-4 underline-offset-8">
            It creates new possibilities.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-white/60 font-mono tracking-wide uppercase max-w-md mx-auto"
        >
          Uyar Technologies Private Limited — Think Higher. Build Smarter.
        </motion.p>

      </div>
    </section>
  );
};

