import React from 'react';
import { 
  Lightbulb, 
  Globe, 
  Puzzle, 
  Code2, 
  CheckCircle2, 
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { FlowingBackgroundRibbon } from './FlowingBackgroundRibbon';

interface JourneyStep {
  num: string;
  phase: string;
  title: string;
  shortTitle: string;
  tagline: string;
  desc: string;
  deliverable: string;
  theme: {
    accentColor: string;
    darkBase: string;
    rimColor: string;
    textColor: string;
    bgColor: string;
    borderColor: string;
  };
  icon: React.ReactNode;
}

export const DevelopmentJourney: React.FC = () => {
  const stepPositions = [
    { top: 30, left: 140, zIndex: 30 },
    { top: 135, left: 275, zIndex: 28 },
    { top: 240, left: 410, zIndex: 26 },
    { top: 345, left: 545, zIndex: 24 },
    { top: 450, left: 680, zIndex: 22 },
    { top: 555, left: 815, zIndex: 20 },
  ];

  const steps: JourneyStep[] = [
    {
      num: '01',
      phase: 'PHASE 01',
      title: 'Deep Dive & Scope',
      shortTitle: 'Discover & Scope',
      tagline: 'Discovery Phase',
      desc: 'Scope specs, user personas & measurable KPIs.',
      deliverable: 'Scope & KPIs',
      theme: {
        accentColor: '#D99B00',
        darkBase: '#9E6F05',
        rimColor: '#E5A91A',
        textColor: 'text-[#D99B00]',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-200/60'
      },
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      num: '02',
      phase: 'PHASE 02',
      title: 'Data Schema & Cloud',
      shortTitle: 'Data Schema & Cloud',
      tagline: 'System Architecture',
      desc: 'Microservices, DB schemas & cloud blueprints.',
      deliverable: 'Cloud Blueprint',
      theme: {
        accentColor: '#EA580C',
        darkBase: '#A84506',
        rimColor: '#F97316',
        textColor: 'text-[#EA580C]',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200/60'
      },
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      num: '03',
      phase: 'PHASE 03',
      title: 'UI/UX Prototyping',
      shortTitle: 'UI/UX Prototyping',
      tagline: 'UI/UX Experience',
      desc: 'Design systems, UI kits & clickable Figma UX.',
      deliverable: 'Interactive Figma',
      theme: {
        accentColor: '#E11D48',
        darkBase: '#75111B',
        rimColor: '#E11D48',
        textColor: 'text-[#E11D48]',
        bgColor: 'bg-rose-50',
        borderColor: 'border-rose-200/60'
      },
      icon: <Puzzle className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      num: '04',
      phase: 'PHASE 04',
      title: 'Modular Engineering',
      shortTitle: 'Modular Engineering',
      tagline: 'Full-Stack Code',
      desc: 'Clean code sprints & bi-weekly demo builds.',
      deliverable: 'Staging Access',
      theme: {
        accentColor: '#0284C7',
        darkBase: '#0A414E',
        rimColor: '#0284C7',
        textColor: 'text-[#0284C7]',
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-200/60'
      },
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      num: '05',
      phase: 'PHASE 05',
      title: 'Zero-Downtime Deploy',
      shortTitle: 'Zero-Downtime Deploy',
      tagline: 'QA & Launch',
      desc: 'Multi-device QA tests & Web Vitals audit.',
      deliverable: 'Live QA Signoff',
      theme: {
        accentColor: '#65A30D',
        darkBase: '#41520F',
        rimColor: '#84CC16',
        textColor: 'text-[#65A30D]',
        bgColor: 'bg-lime-50',
        borderColor: 'border-lime-200/60'
      },
      icon: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
    },
    {
      num: '06',
      phase: 'PHASE 06',
      title: 'Scale & SLA',
      shortTitle: 'Scale & SLA',
      tagline: 'Scale & SLA',
      desc: 'Continuous telemetry & dedicated 24/7 SLA.',
      deliverable: '24/7 Production SLA',
      theme: {
        accentColor: '#059669',
        darkBase: '#123B17',
        rimColor: '#10B981',
        textColor: 'text-[#059669]',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-200/60'
      },
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
    }
  ];

  return (
    <section id="journey" className="py-10 sm:py-12 lg:py-14 bg-[#FAFAFC] relative overflow-hidden">
      
      {/* Dynamic Animated Flowing Neon Lines (Horizontal Right-to-Left - Hero background continuity) */}
      <FlowingBackgroundRibbon idPrefix="journey" variant="horizontal-mid" opacity={0.65} />
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-amber-50/40 via-purple-50/30 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ======================================================== */}
        {/* DESKTOP INFOGRAPHIC VIEW (Visible on lg+)                */}
        {/* ======================================================== */}
        <div className="hidden lg:block relative min-h-[770px]">
          
          {/* Top Right Header (Matches Infographic Template layout) */}
          <div className="absolute top-2 right-4 max-w-xl text-left z-20">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#6842C2] bg-[#EEE8FA] px-3.5 py-1 rounded-full mb-3 inline-block border border-purple-100">
              STRUCTURED EXECUTION
            </span>
            <h2 className="text-4xl xl:text-5xl font-black text-[#0E0725] tracking-tight leading-[1.1] mb-4">
              From First Conversation<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6842C2] to-[#FF5E36]">
                To Production Launch.
              </span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
              A milestone-driven engineering methodology delivering predictable results, zero tech debt, and total peace of mind at every sprint.
            </p>
          </div>

          {/* Bottom-Left Methodology Highlights (Matches Reference Template) */}
          <div className="absolute top-[370px] left-[20px] w-[340px] z-10 pointer-events-auto">
            <div className="p-6 rounded-3xl bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#6842C2] flex items-center justify-center border border-purple-100/80">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6842C2] block">
                    THE UYAR METHODOLOGY
                  </span>
                  <h4 className="text-sm font-black text-[#0E0725]">
                    Predictable Sprint Velocity
                  </h4>
                </div>
              </div>
              
              <p className="text-xs text-slate-500 leading-relaxed font-normal mb-3.5">
                Every platform delivery follows structured 2-week milestones with unencumbered IP transfer and guaranteed production stability.
              </p>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono font-semibold text-slate-600">
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-50 border border-slate-100/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% IP Transfer</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-50 border border-slate-100/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Bi-Weekly Demos</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-50 border border-slate-100/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Automated CI/CD</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-slate-50 border border-slate-100/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>99.98% SLA Uptime</span>
                </div>
              </div>
            </div>
          </div>

          {/* Diagonal Cascading Overlapping 3D Discs (Zero Floating Clutter!) */}
          <div className="relative w-full h-[760px]">
            {steps.map((step, idx) => {
              const pos = stepPositions[idx];
              return (
                <div 
                  key={step.num}
                  className="absolute group cursor-pointer transition-all duration-300 hover:scale-105 hover:z-40"
                  style={{
                    top: `${pos.top}px`,
                    left: `${pos.left}px`,
                    width: '180px',
                    height: '180px',
                    zIndex: pos.zIndex
                  }}
                >
                  {/* Layer 1: Dark 3D Foundation Shadow */}
                  <div 
                    className="absolute inset-0 rounded-full translate-x-[-9px] translate-y-[8px] shadow-lg transition-transform duration-300 group-hover:translate-x-[-12px] group-hover:translate-y-[10px]" 
                    style={{ backgroundColor: step.theme.darkBase }}
                  />

                  {/* Layer 2: Vibrant Colored 3D Rim */}
                  <div 
                    className="absolute inset-0 rounded-full translate-x-[-4px] translate-y-[4px] transition-transform duration-300 group-hover:translate-x-[-6px] group-hover:translate-y-[5px]" 
                    style={{ backgroundColor: step.theme.rimColor }}
                  />

                  {/* Layer 3: Pristine White Top Face */}
                  <div className="absolute inset-0 rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col items-center justify-center p-3 text-center transition-all duration-300 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]">
                    
                    {/* Colored Icon in Subtle Tinted Circle */}
                    <div 
                      className="w-9 h-9 rounded-full flex items-center justify-center mb-1 shadow-2xs border border-slate-100/80 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${step.theme.accentColor}15`, color: step.theme.accentColor }}
                    >
                      {step.icon}
                    </div>

                    {/* Phase Label */}
                    <span 
                      className="text-[10px] font-mono font-bold uppercase tracking-wider block"
                      style={{ color: step.theme.accentColor }}
                    >
                      PHASE {step.num}
                    </span>

                    {/* Phase Title */}
                    <h4 className="text-xs font-black text-[#0E0725] leading-tight mt-0.5">
                      {step.shortTitle}
                    </h4>

                    {/* Concise Description */}
                    <p className="text-[10px] text-slate-500 leading-tight mt-1 max-w-[145px] line-clamp-2">
                      {step.desc}
                    </p>

                    {/* Deliverable Badge */}
                    <span 
                      className="inline-block mt-1.5 text-[8.5px] font-mono font-bold px-2 py-0.5 rounded-full border shadow-2xs"
                      style={{ 
                        backgroundColor: `${step.theme.accentColor}10`, 
                        color: step.theme.accentColor,
                        borderColor: `${step.theme.accentColor}30`
                      }}
                    >
                      {step.deliverable}
                    </span>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW (Visible on screens < lg)                     */}
        {/* Overlapping 3D Cascading Discs (Zero outer cards!)        */}
        {/* ======================================================== */}
        <div className="block lg:hidden">
          
          {/* Mobile Header */}
          <div className="mb-10 text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#6842C2] bg-[#EEE8FA] px-3 py-1 rounded-full mb-2.5 inline-block border border-purple-100">
              STRUCTURED EXECUTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0E0725] tracking-tight leading-tight mb-2">
              From First Conversation<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6842C2] to-[#FF5E36]">
                To Production Launch.
              </span>
            </h2>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto">
              A milestone-driven engineering methodology delivering predictable results.
            </p>
          </div>

          {/* Overlapping 3D Cascading Staircase (Directly on page) */}
          <div className="relative w-full max-w-[370px] mx-auto min-h-[560px] py-2">

            {/* STEP 01 (left=8px) */}
            <div className="relative flex items-center mb-[-8px] z-30">
              <div className="relative w-[86px] h-[86px] shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#9E6F05] translate-x-[-5px] translate-y-[5px] shadow-md" />
                <div className="absolute inset-0 rounded-full bg-[#E5A91A] translate-x-[-2px] translate-y-[2px]" />
                <div className="absolute inset-0 rounded-full bg-white shadow-md border border-slate-100 flex flex-col items-center justify-center p-1.5 text-center">
                  <div className="w-6 h-6 rounded-full bg-amber-50 text-[#D99B00] flex items-center justify-center mb-0.5">
                    {steps[0].icon}
                  </div>
                  <span className="text-[8px] font-mono font-bold text-[#D99B00]">01</span>
                  <span className="text-[9px] font-black text-[#0E0725] leading-none">Scope</span>
                </div>
              </div>
              <div className="pl-4 pr-1 py-0.5">
                <span className="text-[9px] font-mono font-bold text-[#D99B00] uppercase block">PHASE 01 &bull; DISCOVERY</span>
                <h4 className="text-xs font-black text-[#0E0725] leading-snug">Deep Dive & Scope</h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Map goals, user journeys & KPIs.</p>
                <span className="inline-block mt-1 text-[8px] font-mono text-[#D99B00] bg-amber-50 px-2 py-0.5 rounded font-bold border border-amber-200/50">
                  Scope Spec & KPIs
                </span>
              </div>
            </div>

            {/* STEP 02 (left=22px, overlapping Step 01) */}
            <div className="relative flex items-center mb-[-8px] pl-[14px] z-28">
              <div className="relative w-[86px] h-[86px] shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#A84506] translate-x-[-5px] translate-y-[5px] shadow-md" />
                <div className="absolute inset-0 rounded-full bg-[#F97316] translate-x-[-2px] translate-y-[2px]" />
                <div className="absolute inset-0 rounded-full bg-white shadow-md border border-slate-100 flex flex-col items-center justify-center p-1.5 text-center">
                  <div className="w-6 h-6 rounded-full bg-orange-50 text-[#EA580C] flex items-center justify-center mb-0.5">
                    {steps[1].icon}
                  </div>
                  <span className="text-[8px] font-mono font-bold text-[#EA580C]">02</span>
                  <span className="text-[9px] font-black text-[#0E0725] leading-none">Architect</span>
                </div>
              </div>
              <div className="pl-4 pr-1 py-0.5">
                <span className="text-[9px] font-mono font-bold text-[#EA580C] uppercase block">PHASE 02 &bull; ARCHITECTURE</span>
                <h4 className="text-xs font-black text-[#0E0725] leading-snug">Data Schema & Cloud</h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Microservices, database ERD & cloud models.</p>
                <span className="inline-block mt-1 text-[8px] font-mono text-[#EA580C] bg-orange-50 px-2 py-0.5 rounded font-bold border border-orange-200/50">
                  Cloud Blueprint
                </span>
              </div>
            </div>

            {/* STEP 03 (left=38px, overlapping Step 02) */}
            <div className="relative flex items-center mb-[-8px] pl-[28px] z-26">
              <div className="relative w-[86px] h-[86px] shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#75111B] translate-x-[-5px] translate-y-[5px] shadow-md" />
                <div className="absolute inset-0 rounded-full bg-[#E11D48] translate-x-[-2px] translate-y-[2px]" />
                <div className="absolute inset-0 rounded-full bg-white shadow-md border border-slate-100 flex flex-col items-center justify-center p-1.5 text-center">
                  <div className="w-6 h-6 rounded-full bg-rose-50 text-[#E11D48] flex items-center justify-center mb-0.5">
                    {steps[2].icon}
                  </div>
                  <span className="text-[8px] font-mono font-bold text-[#E11D48]">03</span>
                  <span className="text-[9px] font-black text-[#0E0725] leading-none">UI/UX</span>
                </div>
              </div>
              <div className="pl-4 pr-1 py-0.5">
                <span className="text-[9px] font-mono font-bold text-[#E11D48] uppercase block">PHASE 03 &bull; PROTOTYPE</span>
                <h4 className="text-xs font-black text-[#0E0725] leading-snug">Interactive Wireframes</h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Brand-aligned UI systems & clickable Figma.</p>
                <span className="inline-block mt-1 text-[8px] font-mono text-[#E11D48] bg-rose-50 px-2 py-0.5 rounded font-bold border border-rose-200/50">
                  Interactive Figma
                </span>
              </div>
            </div>

            {/* STEP 04 (left=54px, overlapping Step 03) */}
            <div className="relative flex items-center mb-[-8px] pl-[42px] z-24">
              <div className="relative w-[86px] h-[86px] shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#0A414E] translate-x-[-5px] translate-y-[5px] shadow-md" />
                <div className="absolute inset-0 rounded-full bg-[#0284C7] translate-x-[-2px] translate-y-[2px]" />
                <div className="absolute inset-0 rounded-full bg-white shadow-md border border-slate-100 flex flex-col items-center justify-center p-1.5 text-center">
                  <div className="w-6 h-6 rounded-full bg-sky-50 text-[#0284C7] flex items-center justify-center mb-0.5">
                    {steps[3].icon}
                  </div>
                  <span className="text-[8px] font-mono font-bold text-[#0284C7]">04</span>
                  <span className="text-[9px] font-black text-[#0E0725] leading-none">Code</span>
                </div>
              </div>
              <div className="pl-4 pr-1 py-0.5">
                <span className="text-[9px] font-mono font-bold text-[#0284C7] uppercase block">PHASE 04 &bull; SPRINT CODE</span>
                <h4 className="text-xs font-black text-[#0E0725] leading-snug">Modular Engineering</h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Clean React/Node code & staging reviews.</p>
                <span className="inline-block mt-1 text-[8px] font-mono text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded font-bold border border-sky-200/50">
                  Staging Access
                </span>
              </div>
            </div>

            {/* STEP 05 (left=70px, overlapping Step 04) */}
            <div className="relative flex items-center mb-[-8px] pl-[56px] z-22">
              <div className="relative w-[86px] h-[86px] shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#41520F] translate-x-[-5px] translate-y-[5px] shadow-md" />
                <div className="absolute inset-0 rounded-full bg-[#84CC16] translate-x-[-2px] translate-y-[2px]" />
                <div className="absolute inset-0 rounded-full bg-white shadow-md border border-slate-100 flex flex-col items-center justify-center p-1.5 text-center">
                  <div className="w-6 h-6 rounded-full bg-lime-50 text-[#65A30D] flex items-center justify-center mb-0.5">
                    {steps[4].icon}
                  </div>
                  <span className="text-[8px] font-mono font-bold text-[#65A30D]">05</span>
                  <span className="text-[9px] font-black text-[#0E0725] leading-none">Deploy</span>
                </div>
              </div>
              <div className="pl-4 pr-1 py-0.5">
                <span className="text-[9px] font-mono font-bold text-[#65A30D] uppercase block">PHASE 05 &bull; RIGOROUS QA</span>
                <h4 className="text-xs font-black text-[#0E0725] leading-snug">Zero-Downtime Deploy</h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Regression testing, Web Vitals & signoff.</p>
                <span className="inline-block mt-1 text-[8px] font-mono text-[#65A30D] bg-lime-50 px-2 py-0.5 rounded font-bold border border-lime-200/50">
                  Live QA Signoff
                </span>
              </div>
            </div>

            {/* STEP 06 (left=86px, overlapping Step 05) */}
            <div className="relative flex items-center pl-[70px] z-20">
              <div className="relative w-[86px] h-[86px] shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#123B17] translate-x-[-5px] translate-y-[5px] shadow-md" />
                <div className="absolute inset-0 rounded-full bg-[#10B981] translate-x-[-2px] translate-y-[2px]" />
                <div className="absolute inset-0 rounded-full bg-white shadow-md border border-slate-100 flex flex-col items-center justify-center p-1.5 text-center">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-[#059669] flex items-center justify-center mb-0.5">
                    {steps[5].icon}
                  </div>
                  <span className="text-[8px] font-mono font-bold text-[#059669]">06</span>
                  <span className="text-[9px] font-black text-[#0E0725] leading-none">SLA</span>
                </div>
              </div>
              <div className="pl-4 pr-1 py-0.5">
                <span className="text-[9px] font-mono font-bold text-[#059669] uppercase block">PHASE 06 &bull; EVOLUTION</span>
                <h4 className="text-xs font-black text-[#0E0725] leading-snug">SLA & Scale</h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">Continuous telemetry & dedicated SLA.</p>
                <span className="inline-block mt-1 text-[8px] font-mono text-[#059669] bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200/50">
                  24/7 Production SLA
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
