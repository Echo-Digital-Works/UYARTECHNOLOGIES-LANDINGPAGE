import React from 'react';
import { motion } from 'framer-motion';

export type RibbonVariant = 'horizontal-mid' | 'horizontal-upper' | 'horizontal-lower' | 'dark-glow';

interface FlowingBackgroundRibbonProps {
  idPrefix: string;
  variant?: RibbonVariant;
  opacity?: number;
  className?: string;
}

export const FlowingBackgroundRibbon: React.FC<FlowingBackgroundRibbonProps> = ({
  idPrefix,
  variant = 'horizontal-mid',
  opacity = 1,
  className = ''
}) => {
  // Gradients unique to this instance to avoid SVG defs collision
  const filamentGrad1 = `${idPrefix}-filamentGrad1`;
  const filamentGrad2 = `${idPrefix}-filamentGrad2`;
  const pulseGrad = `${idPrefix}-pulseGrad`;
  const pulseGradCyan = `${idPrefix}-pulseGradCyan`;
  const neonPulse = `${idPrefix}-neonPulse`;

  const isDark = variant === 'dark-glow';

  // Base Y offset based on variant
  const baseY = variant === 'horizontal-upper' ? 260 : variant === 'horizontal-lower' ? 520 : 380;

  // Generate 10 parallel horizontal harmonic filament lines flowing strictly from RIGHT (1750) to LEFT (-150)
  // Each line has a smooth horizontal undulating cubic bezier wave that never cuts or clips at borders
  const generateFilamentPath = (offsetY: number) => {
    const y0 = baseY + offsetY;
    const y1 = baseY + offsetY - 60;
    const y2 = baseY + offsetY + 70;
    const y3 = baseY + offsetY - 40;
    const y4 = baseY + offsetY + 50;
    const y5 = baseY + offsetY - 30;
    const y6 = baseY + offsetY;

    return `M 1750 ${y0} C 1420 ${y1} 1220 ${y2} 850 ${y3} C 500 ${y4} 220 ${y5} -150 ${y6}`;
  };

  const filaments = [
    generateFilamentPath(0),
    generateFilamentPath(14),
    generateFilamentPath(28),
    generateFilamentPath(42),
    generateFilamentPath(56),
    generateFilamentPath(70),
    generateFilamentPath(84),
    generateFilamentPath(98),
    generateFilamentPath(112),
    generateFilamentPath(126),
  ];

  // Pulse paths directly on filament 2 and filament 6
  const pulsePath1 = filaments[1];
  const pulsePath2 = filaments[5];

  return (
    <div 
      className={`absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1600 900" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Filament Line Gradient 1 (Flows from Right to Left: Purple -> Violet -> Pink -> Cyan) */}
          <linearGradient id={filamentGrad1} x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#6320EE" stopOpacity={isDark ? "0.25" : "0.12"} />
            <stop offset="25%" stopColor="#7C3AED" stopOpacity={isDark ? "0.85" : "0.55"} />
            <stop offset="65%" stopColor="#EC4899" stopOpacity={isDark ? "0.80" : "0.50"} />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity={isDark ? "0.35" : "0.20"} />
          </linearGradient>

          {/* Filament Line Gradient 2 (Counter-tone Pink -> Purple -> Electric Violet) */}
          <linearGradient id={filamentGrad2} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity={isDark ? "0.30" : "0.15"} />
            <stop offset="45%" stopColor="#A855F7" stopOpacity={isDark ? "0.80" : "0.45"} />
            <stop offset="85%" stopColor="#6320EE" stopOpacity={isDark ? "0.75" : "0.40"} />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity={isDark ? "0.20" : "0.10"} />
          </linearGradient>

          {/* Traveling Light Pulse Gradient (Moving from Right to Left) */}
          <linearGradient id={pulseGrad} x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#6320EE" stopOpacity="0" />
            <stop offset="20%" stopColor="#7C3AED" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#EC4899" stopOpacity="1" />
            <stop offset="80%" stopColor="#F472B6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#6320EE" stopOpacity="0" />
          </linearGradient>

          {/* Traveling Light Pulse Gradient 2 (Cyan to Violet Accent) */}
          <linearGradient id={pulseGradCyan} x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0" />
            <stop offset="25%" stopColor="#A855F7" stopOpacity="0.9" />
            <stop offset="65%" stopColor="#38BDF8" stopOpacity="1" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
          </linearGradient>

          {/* Neon intense glow for traveling light pulses */}
          <filter id={neonPulse} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="7" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Primary Layered Harmonic Filament Lines Group (Undulating gently like Hero) */}
        <motion.g
          animate={{
            y: [-7, 8, -7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {filaments.slice(0, 5).map((d, idx) => (
            <path 
              key={idx}
              d={d} 
              stroke={`url(#${idx % 2 === 0 ? filamentGrad1 : filamentGrad2})`} 
              strokeWidth={2.0 - idx * 0.15} 
              strokeLinecap="round" 
              opacity={0.65 - idx * 0.06} 
            />
          ))}
        </motion.g>

        {/* 2. Secondary Layered Harmonic Filament Lines Group (Counter-undulating for parallax depth) */}
        <motion.g
          animate={{
            y: [7, -7, 7],
          }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {filaments.slice(5).map((d, idx) => (
            <path 
              key={idx}
              d={d} 
              stroke={`url(#${idx % 2 === 0 ? filamentGrad2 : filamentGrad1})`} 
              strokeWidth={1.5 - idx * 0.12} 
              strokeLinecap="round" 
              opacity={0.45 - idx * 0.05} 
            />
          ))}
        </motion.g>

        {/* 3. Glowing Traveling Light Pulse 1 (Gliding smoothly from RIGHT to LEFT) */}
        <motion.path
          d={pulsePath1}
          stroke={`url(#${pulseGrad})`}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeDasharray="200 950"
          animate={{
            strokeDashoffset: [0, -1150],
          }}
          transition={{
            duration: 6.8,
            repeat: Infinity,
            ease: "linear",
          }}
          filter={`url(#${neonPulse})`}
          opacity={isDark ? "0.95" : "0.85"}
        />

        {/* 4. Glowing Traveling Light Pulse 2 (Cyan pulse gliding from RIGHT to LEFT) */}
        <motion.path
          d={pulsePath2}
          stroke={`url(#${pulseGradCyan})`}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeDasharray="160 880"
          animate={{
            strokeDashoffset: [-150, -1190],
          }}
          transition={{
            duration: 8.2,
            repeat: Infinity,
            ease: "linear",
            delay: 1.4,
          }}
          filter={`url(#${neonPulse})`}
          opacity={isDark ? "0.9" : "0.8"}
        />
      </svg>
    </div>
  );
};
