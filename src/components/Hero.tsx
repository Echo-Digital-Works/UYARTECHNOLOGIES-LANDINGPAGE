import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Play,
  Zap
} from 'lucide-react';

import heroLaptop from '../assets/hero-laptop-clean.png';
import cardWeb from '../assets/card-web.png';
import cardCloud from '../assets/card-cloud-clean.png';
import cardMobile from '../assets/card-mobile.png';
import cardGears from '../assets/card-gears-clean.png';

interface HeroProps {
  onBuildProject: () => void;
  onExploreWork: () => void;
  onSelectService?: (service: string) => void;
}

interface ServiceCardData {
  id: string;
  serviceName: string;
  badge: string;
  badgeColor: string;
  image: string;
  title: string;
  subtitle: string;
  bgColor: string;
  imageScale?: string;
}

const SERVICE_CARDS: ServiceCardData[] = [
  {
    id: 'web',
    serviceName: 'Custom Website Development',
    badge: '18% Faster',
    badgeColor: 'text-[#6320EE]',
    image: cardWeb,
    title: 'Custom Websites',
    subtitle: 'Next.js & Tailwind CSS',
    bgColor: 'from-[#F0EDFC] to-[#E3DCFB]',
    imageScale: 'scale-90',
  },
  {
    id: 'saas',
    serviceName: 'SaaS Application Development',
    badge: 'Scalable SaaS',
    badgeColor: 'text-[#6320EE]',
    image: cardCloud,
    title: 'Web Applications',
    subtitle: 'Multi-Tenant Cloud Platforms',
    bgColor: 'from-[#F3EEFF] to-[#E5D7FE]',
    imageScale: 'scale-95',
  },
  {
    id: 'mobile',
    serviceName: 'Mobile Application Development',
    badge: 'iOS & Android',
    badgeColor: 'text-[#059669]',
    image: cardMobile,
    title: 'Mobile Applications',
    subtitle: 'React Native & Flutter',
    bgColor: 'from-[#E6FAF2] to-[#CCF5E6]',
    imageScale: 'scale-85',
  },
  {
    id: 'erp',
    serviceName: 'Customized Business Software',
    badge: 'Enterprise Grade',
    badgeColor: 'text-[#2563EB]',
    image: cardGears,
    title: 'ERP & Custom Tools',
    subtitle: 'Automated Workflows',
    bgColor: 'from-[#EFF6FF] to-[#DBEAFE]',
    imageScale: 'scale-85',
  },
];

export const Hero: React.FC<HeroProps> = ({ onBuildProject, onExploreWork, onSelectService }) => {
  const handleCardClick = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    } else {
      onBuildProject();
    }
    const enquiry = document.getElementById('enquiry-form');
    if (enquiry) {
      enquiry.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full pt-20 sm:pt-24 pb-4 sm:pb-6 overflow-hidden bg-white flex flex-col"
    >
      {/* ======================================================== */}
      {/* DYNAMIC ANIMATED BACKGROUND CURVES & FILAMENTS           */}
      {/* Smooth undulation + Traveling light pulses               */}
      {/* ======================================================== */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none select-none -z-0 overflow-hidden" 
        viewBox="0 0 1600 900" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Main sweeping vibrant electric purple-to-pink gradient */}
          <linearGradient id="curveGrad1" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#6320EE" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#9333EA" stopOpacity="0.35" />
            <stop offset="80%" stopColor="#EC4899" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#F472B6" stopOpacity="0.10" />
          </linearGradient>

          {/* Secondary soft ethereal violet-indigo gradient */}
          <linearGradient id="curveGrad2" x1="100%" y1="100%" x2="0%" y2="20%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
            <stop offset="30%" stopColor="#818CF8" stopOpacity="0.30" />
            <stop offset="70%" stopColor="#C084FC" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6320EE" stopOpacity="0.05" />
          </linearGradient>

          {/* Filament Line Gradient 1 */}
          <linearGradient id="filamentGrad1" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#6320EE" stopOpacity="0.1" />
            <stop offset="30%" stopColor="#7C3AED" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#EC4899" stopOpacity="0.50" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
          </linearGradient>

          {/* Filament Line Gradient 2 */}
          <linearGradient id="filamentGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#6320EE" stopOpacity="0.30" />
          </linearGradient>

          {/* Glowing Traveling Pulse Gradient (Electric Violet to Hot Pink) */}
          <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6320EE" stopOpacity="0" />
            <stop offset="20%" stopColor="#7C3AED" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#EC4899" stopOpacity="1" />
            <stop offset="80%" stopColor="#F472B6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6320EE" stopOpacity="0" />
          </linearGradient>

          {/* Traveling Light Pulse Gradient 2 */}
          <linearGradient id="pulseGradCyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0" />
            <stop offset="30%" stopColor="#A855F7" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#38BDF8" stopOpacity="1" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
          </linearGradient>

          {/* Soft blur for ambient waves */}
          <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Neon intense glow for traveling light pulses */}
          <filter id="neonPulse" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur1" />
            <feGaussianBlur stdDeviation="10" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Lower Wave Ribbon (Smooth undulating breathing animation) */}
        <motion.path 
          d="M -100 680 C 250 640 450 780 750 710 C 1050 640 1280 420 1700 480 L 1700 950 L -100 950 Z" 
          fill="url(#curveGrad2)" 
          opacity="0.35"
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* 2. Primary Flowing Dynamic Wave Ribbon (Swooping behind laptop with harmonic wave animation) */}
        <motion.path 
          d="M -100 560 C 280 500 520 730 880 660 C 1220 590 1380 320 1700 280 L 1700 420 C 1380 460 1180 700 840 760 C 480 820 220 620 -100 660 Z" 
          fill="url(#curveGrad1)" 
          opacity="0.45"
          filter="url(#softGlow)"
          animate={{
            y: [12, -12, 12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* 3. Upper Delicate Wave Ribbon Accent */}
        <motion.path 
          d="M 600 -50 C 900 150 1250 80 1700 220 L 1700 320 C 1250 180 950 240 600 50 Z" 
          fill="url(#curveGrad1)" 
          opacity="0.22"
          animate={{
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* 4. Layered Harmonic Filament Lines Group A (Undulating gently) */}
        <motion.g
          animate={{
            y: [-6, 7, -6],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Filament Line 01 */}
          <path d="M -100 500 C 300 440 540 670 900 600 C 1260 530 1420 280 1700 240" stroke="url(#filamentGrad1)" strokeWidth="2.2" strokeLinecap="round" opacity="0.65" />
          {/* Filament Line 02 */}
          <path d="M -100 515 C 310 455 550 685 910 615 C 1270 545 1430 295 1700 255" stroke="url(#filamentGrad1)" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
          {/* Filament Line 03 */}
          <path d="M -100 530 C 320 470 560 700 920 630 C 1280 560 1440 310 1700 270" stroke="url(#filamentGrad1)" strokeWidth="1.5" strokeLinecap="round" opacity="0.50" />
          {/* Filament Line 04 */}
          <path d="M -100 545 C 330 485 570 715 930 645 C 1290 575 1450 325 1700 285" stroke="url(#filamentGrad2)" strokeWidth="1.4" strokeLinecap="round" opacity="0.45" />
          {/* Filament Line 05 */}
          <path d="M -100 560 C 340 500 580 730 940 660 C 1300 590 1460 340 1700 300" stroke="url(#filamentGrad2)" strokeWidth="1.6" strokeLinecap="round" opacity="0.50" />
          {/* Filament Line 06 */}
          <path d="M -100 575 C 350 515 590 745 950 675 C 1310 605 1470 355 1700 315" stroke="url(#filamentGrad1)" strokeWidth="1.3" strokeLinecap="round" opacity="0.40" />
        </motion.g>

        {/* 5. Layered Harmonic Filament Lines Group B (Counter-undulating for rich parallax depth) */}
        <motion.g
          animate={{
            y: [7, -6, 7],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Filament Line 07 */}
          <path d="M -100 590 C 360 530 600 760 960 690 C 1320 620 1480 370 1700 330" stroke="url(#filamentGrad1)" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
          {/* Filament Line 08 */}
          <path d="M -100 605 C 370 545 610 775 970 705 C 1330 635 1490 385 1700 345" stroke="url(#filamentGrad2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
          {/* Filament Line 09 */}
          <path d="M -100 620 C 380 560 620 790 980 720 C 1340 650 1500 400 1700 360" stroke="url(#filamentGrad2)" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
          {/* Filament Line 10 */}
          <path d="M -100 635 C 390 575 630 805 990 735 C 1350 665 1510 415 1700 375" stroke="url(#filamentGrad1)" strokeWidth="1.1" strokeLinecap="round" opacity="0.30" />
          {/* Filament Line 11 */}
          <path d="M -100 650 C 400 590 640 820 1000 750 C 1360 680 1520 430 1700 390" stroke="url(#filamentGrad1)" strokeWidth="1.4" strokeLinecap="round" opacity="0.40" />
          {/* Filament Line 12 */}
          <path d="M -100 665 C 410 605 650 835 1010 765 C 1370 695 1530 445 1700 405" stroke="url(#filamentGrad2)" strokeWidth="1.0" strokeLinecap="round" opacity="0.28" />
        </motion.g>

        {/* 6. Upper Right Counter-Filaments (Framing top-right behind badge) */}
        <motion.g
          animate={{
            y: [-5, 5, -5],
            x: [3, -3, 3]
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <path d="M 750 -30 C 1050 160 1350 90 1700 240" stroke="url(#filamentGrad1)" strokeWidth="1.6" strokeLinecap="round" opacity="0.45" />
          <path d="M 780 -20 C 1070 170 1360 105 1700 255" stroke="url(#filamentGrad2)" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
          <path d="M 810 -10 C 1090 180 1370 120 1700 270" stroke="url(#filamentGrad1)" strokeWidth="1.0" strokeLinecap="round" opacity="0.25" />
        </motion.g>

        {/* ======================================================== */}
        {/* 7. GLOWING TRAVELING LIGHT PULSES ALONG THE LINES        */}
        {/* Continuous electric light gliding smoothly along paths   */}
        {/* ======================================================== */}
        {/* Traveling Light Pulse 1 (Electric Magenta-Purple) */}
        <motion.path
          d="M -100 500 C 300 440 540 670 900 600 C 1260 530 1420 280 1700 240"
          stroke="url(#pulseGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="220 900"
          animate={{
            strokeDashoffset: [0, -1120],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          filter="url(#neonPulse)"
          opacity="0.95"
        />

        {/* Traveling Light Pulse 2 (Electric Violet-Cyan) */}
        <motion.path
          d="M -100 560 C 340 500 580 730 940 660 C 1300 590 1460 340 1700 300"
          stroke="url(#pulseGradCyan)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="180 850"
          animate={{
            strokeDashoffset: [-200, -1230],
          }}
          transition={{
            duration: 7.2,
            repeat: Infinity,
            ease: "linear",
            delay: 1.2,
          }}
          filter="url(#neonPulse)"
          opacity="0.9"
        />

        {/* Traveling Light Pulse 3 (Upper wave accent) */}
        <motion.path
          d="M 750 -30 C 1050 160 1350 90 1700 240"
          stroke="url(#pulseGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="140 700"
          animate={{
            strokeDashoffset: [0, -840],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
          }}
          filter="url(#neonPulse)"
          opacity="0.85"
        />
      </svg>

      {/* Decorative Dot Matrix Grid (Top-Left) */}
      <div className="absolute top-20 left-6 sm:left-12 grid grid-cols-5 gap-2.5 opacity-30 pointer-events-none select-none z-10">
        {[...Array(25)].map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
        ))}
      </div>

      {/* Decorative Dot Matrix Grid (Bottom-Right) */}
      <div className="absolute bottom-40 right-8 sm:right-16 grid grid-cols-5 gap-2.5 opacity-25 pointer-events-none select-none z-10">
        {[...Array(25)].map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
        ))}
      </div>

      {/* Main unified responsive content wrapper */}
      <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col gap-6 sm:gap-8">
        
        {/* ======================================================== */}
        {/* TOP SECTION: Two-column layout with isolated 3D laptop   */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center pt-1 pb-2">
          
          {/* Top Left: Headline, Subtitle, Dual Action CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-20">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.4rem] font-black tracking-tight leading-[1.08] mb-4">
              <span className="text-[#0E0725] block">From Vision to</span>
              <span className="bg-gradient-to-r from-[#6320EE] via-[#8B2BE2] to-[#EC4899] bg-clip-text text-transparent block">
                Production Software
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-[1.08rem] text-[#555068] leading-relaxed max-w-lg mb-8 font-normal">
              Discover enterprise-grade web, mobile & custom software engineered quickly, securely, and conveniently for your business.
            </p>

            {/* Dual CTAs: Primary Purple-Pink Pill + Watch Demo */}
            <div className="flex items-center gap-4 flex-wrap">
              {/* Primary Pill Button */}
              <button
                onClick={onBuildProject}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6320EE] via-[#8B2BE2] to-[#EC4899] hover:from-[#5218C8] hover:to-[#D92672] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-purple-600/30 hover:shadow-xl hover:shadow-pink-500/35 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Watch Demo Button */}
              <button
                onClick={onExploreWork}
                className="inline-flex items-center gap-3 px-3 py-2.5 rounded-full hover:bg-purple-50/60 text-[#0E0725] font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer group"
              >
                <span className="w-9 h-9 rounded-full bg-[#EDE7F6] text-[#6320EE] group-hover:bg-[#6320EE] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span>Watch Demo</span>
              </button>
            </div>

          </div>

          {/* Top Right: Crystal Clear 3D Laptop + Phone + Floating Badge */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-xl lg:max-w-none flex items-center justify-center lg:justify-end">
              
              {/* Floating Top-Right 100% CUSTOM Badge */}
              <div className="absolute -top-3 sm:-top-5 right-2 sm:right-6 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl shadow-purple-950/10 border border-purple-100 flex items-center gap-3 max-w-[260px]">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#6320EE] to-[#8B2BE2] flex items-center justify-center shrink-0 text-white shadow-md shadow-purple-500/25">
                  <Zap className="w-4 h-4 fill-white text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-[13px] font-black text-[#6320EE] tracking-tight">
                      100% CUSTOM!
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-tight mt-0.5 font-medium">
                    Production-ready in weeks with full code ownership
                  </p>
                </div>
              </div>

              {/* Ultra-Crisp Isolated 3D Laptop & Phone Render */}
              <img
                src={heroLaptop}
                alt="Uyar Technologies 3D Digital Solutions"
                className="w-full h-auto max-h-[380px] sm:max-h-[440px] xl:max-h-[470px] object-contain drop-shadow-xl select-none"
                loading="eager"
              />

            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* BOTTOM SECTION: 4 Ultra-Clean High-Resolution 3D Cards   */}
        {/* ======================================================== */}
        <div className="relative z-10 w-full pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
            {SERVICE_CARDS.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.serviceName)}
                className="group bg-white rounded-2xl p-2.5 sm:p-3 shadow-md shadow-purple-950/5 border border-slate-100 hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Upper Pastel 3D Mockup Container with Floating 3D Graphic */}
                <div className={`relative w-full h-32 sm:h-36 rounded-xl overflow-hidden mb-2.5 bg-gradient-to-b ${card.bgColor} p-3 flex flex-col items-center justify-center`}>
                  
                  {/* Top-Left Badge Pill */}
                  <div className={`absolute top-2.5 left-2.5 z-10 px-2.5 py-0.5 rounded-full bg-white/95 ${card.badgeColor} text-[11px] font-bold shadow-xs border border-white/60`}>
                    {card.badge}
                  </div>

                  {/* 3D High-Resolution Render Image */}
                  <div className="w-full h-full flex items-center justify-center pt-2">
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`max-h-[85px] sm:max-h-[95px] w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110 ${card.imageScale || ''}`}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Lower Card Details */}
                <div className="px-1 pt-1 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#0E0725] group-hover:text-[#6320EE] transition-colors duration-200 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#555068] font-medium mt-0.5 truncate">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Action Link & Circular Arrow Button */}
                  <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-slate-100">
                    <span className="text-xs sm:text-[13px] font-bold text-[#6320EE] group-hover:text-[#5218C8] flex items-center gap-1 transition-colors">
                      Explore Solution
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(card.serviceName);
                      }}
                      aria-label={`Explore ${card.title}`}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EDE7F6] group-hover:bg-[#6320EE] text-[#6320EE] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs"
                    >
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};