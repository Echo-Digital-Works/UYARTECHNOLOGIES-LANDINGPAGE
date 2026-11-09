import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  MessagesSquare, 
  FolderCode, 
  PieChart, 
  Maximize2, 
  Sparkles,
  MapPin,
  ShieldCheck
} from 'lucide-react';
import { FlowingBackgroundRibbon } from './FlowingBackgroundRibbon';

interface AboutUsProps {
  onWorkTogether: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onWorkTogether }) => {
  // Card 1 is active by default matching the user's reference image
  const [activeCard, setActiveCard] = useState<number>(1);

  const missionCards = [
    {
      id: 0,
      title: "Client-Centric Engineering",
      desc: "We analyze your exact commercial workflow, operational bottlenecks, and business goals before engineering a single line of code. Zero pre-made templates or generic themes.",
      icon: MessagesSquare
    },
    {
      id: 1,
      title: "100% Code & IP Ownership",
      desc: "Complete commercial rights, unencumbered source code transfer, and production-grade security hardening delivered on every deployment with zero vendor lock-in.",
      icon: FolderCode
    },
    {
      id: 2,
      title: "Resilient Cloud Scalability",
      desc: "Architected with modern future-proof frameworks accommodating high concurrency, automated CI/CD pipelines, and dedicated post-launch maintenance with strict SLAs.",
      icon: PieChart
    }
  ];

  return (
    <section id="about" className="relative w-full overflow-hidden">
      
      {/* Dynamic Animated Flowing Neon Lines (Horizontal Right-to-Left - Hero background continuity) */}
      <FlowingBackgroundRibbon idPrefix="about" variant="horizontal-mid" opacity={0.60} />
      
      {/* Full-bleed split layout: Left Dark, Right Light */}
      <div className="flex flex-col lg:flex-row w-full min-h-[500px] relative">
        
        {/* LEFT COLUMN: Dark Side (Full bleed to left edge) */}
        <div className="w-full lg:w-1/2 bg-[#0B1313] flex justify-end relative py-10 sm:py-12 lg:py-14 px-6 sm:px-10 lg:px-14">
          
          {/* Subtle dark ambient glows */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C7D94C]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#6842C2]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Constrained container for left content */}
          <div className="w-full max-w-xl flex flex-col justify-between relative z-10 lg:pr-10 xl:pr-14">
            <div>
              {/* Eyebrow Label matching reference */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#C7D94C] uppercase">
                  ABOUT THE COMPANY
                </span>
              </div>

              {/* Display Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] mb-6">
                About Our <br />
                <span className="text-[#C7D94C]">Mission.</span>
              </h2>

              {/* Primary Narrative Paragraph */}
              <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-normal mb-5">
                Uyar Technologies Private Limited is a registered Indian software engineering firm headquartered at the KSRCT IDEA Lab. We bridge academic research rigor with enterprise-grade software execution, building high-performance web platforms, custom ERPs, and mobile applications.
              </p>

              {/* Secondary Closing Paragraph matching reference */}
              <p className="text-xs sm:text-sm text-slate-400/80 leading-relaxed font-normal mb-8">
                Every system is designed around measurable commercial impact—delivering transparent bi-weekly sprint deliverables, guaranteed 99.9% uptime architectures, and complete IP transfer from day one.
              </p>

              {/* Credibility Chips on Dark Side */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10 mb-8 lg:mb-0">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C7D94C]" />
                  <span>Govt. Reg. Private Limited</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#C7D94C]" />
                  <span>KSRCT IDEA Lab Hub</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-6">
              <button
                onClick={onWorkTogether}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#C7D94C] hover:bg-[#D5E65C] text-[#0B1313] font-extrabold text-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95"
              >
                <span>Let's Build Together</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-[#0B1313] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Mobile/Tablet Centerpiece Target (Centered on horizontal dividing seam) */}
        <div className="block lg:hidden -my-16 mx-auto w-44 h-44 sm:w-52 sm:h-52 relative z-30 select-none">
          <img
            src="/target_arrow.svg"
            alt="About Our Mission Target with Arrow Hit"
            className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)] mx-auto"
          />
        </div>

        {/* RIGHT COLUMN: Light Side (Full bleed to right edge) */}
        <div className="w-full lg:w-1/2 bg-[#EDF0E8] flex justify-start relative py-10 sm:py-12 lg:py-14 pt-12 lg:pt-14 px-6 sm:px-10 lg:px-14">
          
          {/* Constrained container for right content */}
          <div className="w-full max-w-xl flex flex-col justify-center relative z-10 lg:pl-16 xl:pl-20">
            
            {/* Three Mission Cards Stacked Vertically */}
            <div className="space-y-4 sm:space-y-5">
              {missionCards.map((card) => {
                const IconComponent = card.icon;
                const isActive = activeCard === card.id;

                return (
                  <div
                    key={card.id}
                    onClick={() => setActiveCard(card.id)}
                    className={`rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 cursor-pointer flex items-start gap-4 sm:gap-5 relative group ${
                      isActive
                        ? 'bg-[#C7D94C] text-[#0B1313] shadow-lg scale-[1.01] border-2 border-[#B9CB3E]'
                        : 'bg-white text-[#171717] shadow-sm hover:shadow-md border border-slate-200/80 hover:-translate-y-0.5'
                    }`}
                  >
                    {/* Left Outline Icon matching reference */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isActive
                          ? 'bg-[#B8CA3F]/50 text-[#0B1313]'
                          : 'bg-[#F4F5F0] text-[#0B1313] group-hover:bg-[#EDF0E8]'
                      }`}
                    >
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    {/* Card Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4
                          className={`text-base sm:text-lg font-bold leading-tight ${
                            isActive ? 'text-[#0B1313]' : 'text-[#171717]'
                          }`}
                        >
                          {card.title}
                        </h4>
                        {isActive && (
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0B1313] text-[#C7D94C] px-2.5 py-0.5 rounded-full shrink-0">
                            CORE FOCUS
                          </span>
                        )}
                      </div>
                      
                      <p
                        className={`text-xs sm:text-sm leading-relaxed font-normal ${
                          isActive ? 'text-[#0B1313]/85 font-medium' : 'text-[#171717]/70'
                        }`}
                      >
                        {card.desc}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Bottom Right Floating Pills matching Reference */}
            <div className="mt-6 flex items-center justify-end gap-2.5">
              <button
                onClick={onWorkTogether}
                aria-label="Expand discovery"
                title="Expand project discovery"
                className="w-10 h-10 rounded-2xl bg-white/90 hover:bg-white border border-slate-300/80 shadow-xs flex items-center justify-center text-slate-700 hover:text-black transition-all cursor-pointer active:scale-95"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
              <div 
                title="Verified Production Engineering"
                className="w-10 h-10 rounded-2xl bg-white/90 border border-slate-300/80 shadow-xs flex items-center justify-center text-slate-700"
              >
                <Sparkles className="w-4 h-4 text-[#6842C2]" />
              </div>
            </div>

          </div>

        </div>

        {/* DESKTOP CENTERPIECE TARGET: Sits on the exact 50% split boundary */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none select-none">
          <div className="w-[280px] h-[280px] xl:w-[310px] xl:h-[310px] relative transition-transform duration-500 hover:scale-105">
            <img
              src="/target_arrow.svg"
              alt="About Our Mission Target with Arrow Hit"
              className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.38)]"
            />
          </div>
        </div>

      </div>

    </section>
  );
};
