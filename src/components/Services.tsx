import React, { useState, useEffect } from 'react';
import { FlowingBackgroundRibbon } from './FlowingBackgroundRibbon';
import { 
  Globe, 
  BarChart3, 
  Smartphone, 
  Cloud, 
  Settings, 
  Zap, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
  Clock,
  Tag,
  Users
} from 'lucide-react';
import { metaPixel } from '../services/metaPixel';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

interface ServiceDetail {
  id: string;
  optionNum: string;
  serviceKey: string;
  title: string;
  desc: string;
  explanation: string;
  deliverables: string[];
  idealFor: string;
  timeline: string;
  tag: string;
  color: string;
  hoverShadow: string;
  icon: React.ReactNode;
}

const services: ServiceDetail[] = [
  {
    id: 'web',
    optionNum: '01',
    serviceKey: 'Custom Website Development',
    title: 'Custom Website Development',
    desc: 'High-conversion websites engineered to strengthen your brand, rank high on search engines, and convert visitors.',
    explanation: 'We build bespoke, lightning-fast marketing websites tailored specifically to your company’s brand identity and business objectives. Unlike generic WordPress templates or website builders, our code is crafted for 95+ Google PageSpeed scores, technical SEO dominance, and maximum conversion rates.',
    deliverables: [
      'Bespoke Figma UI/UX designed around your brand',
      'Next.js & Tailwind CSS modern, responsive frontend',
      'On-page technical SEO, OpenGraph metadata & Schema markup',
      'Content Management setup for effortless updates',
      'Analytics, Meta Pixel & conversion funnel tracking'
    ],
    idealFor: 'Growing companies, premium brands, and agencies looking to establish credibility and convert organic visitors into qualified inbound leads.',
    timeline: '1 - 2 Weeks',
    tag: 'From ₹25,000',
    color: '#FF7A00',
    hoverShadow: 'hover:shadow-orange-500/15',
    icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />,
  },
  {
    id: 'webapp',
    optionNum: '02',
    serviceKey: 'Web Application Development',
    title: 'Web Application Development',
    desc: 'Powerful, responsive web portals and administrative engines built specifically around your day-to-day business operations.',
    explanation: 'Custom cloud-based web applications, dashboards, client portals, and internal tools engineered around your exact operational workflows. We turn complex data pipelines, user management, and business logic into seamless, secure software that runs effortlessly in the browser.',
    deliverables: [
      'Role-Based Access Control (RBAC) & secure authentication',
      'Interactive real-time dashboards with visual analytics',
      'RESTful & GraphQL API architecture',
      'Robust relational database design (PostgreSQL / Supabase)',
      'Automated email, SMS, and webhook notification pipelines'
    ],
    idealFor: 'Businesses needing to digitize manual processes, provide client self-service portals, replace spreadsheets, or manage team operations centrally.',
    timeline: '2 - 4 Weeks',
    tag: 'From ₹45,000',
    color: '#D9007E',
    hoverShadow: 'hover:shadow-pink-500/15',
    icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />,
  },
  {
    id: 'mobile',
    optionNum: '03',
    serviceKey: 'Mobile Application Development',
    title: 'Mobile App Development',
    desc: 'Native & cross-platform Android & iOS apps delivering 60 FPS interactions, offline storage, and push notifications.',
    explanation: 'Production-ready native and cross-platform mobile applications for iOS and Android. Engineered for 60 FPS fluidity, offline reliability, real-time push notifications, and intuitive mobile gesture experiences that delight users and drive daily engagement.',
    deliverables: [
      'Cross-platform single codebase (React Native / Flutter)',
      'Offline cache & local data synchronization',
      'Push notifications via Firebase Cloud Messaging',
      'Biometric authentication (FaceID, Fingerprint)',
      'End-to-end publishing to Google Play Store & Apple App Store'
    ],
    idealFor: 'B2C platforms, on-demand service platforms, e-commerce brands, logistics teams, and founders launching direct mobile-first products.',
    timeline: '3 - 5 Weeks',
    tag: 'From ₹65,000',
    color: '#6C3FC7',
    hoverShadow: 'hover:shadow-purple-500/15',
    icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />,
  },
  {
    id: 'saas',
    optionNum: '04',
    serviceKey: 'SaaS Application Development',
    title: 'SaaS & Cloud Platforms',
    desc: 'Multi-tenant subscription software architectures featuring automated billing, role-based access, and isolated databases.',
    explanation: 'End-to-end multi-tenant Software-as-a-Service (SaaS) architecture. Built with automated subscription billing, isolated tenant workspaces, seat management, and auto-scaling cloud infrastructure that handles growth from day one.',
    deliverables: [
      'Multi-tenant database schema with data isolation & encryption',
      'Automated recurring billing & invoicing (Stripe / Razorpay)',
      'Organization workspaces, team invites & granular permissions',
      'Comprehensive audit logging and SOC2-ready security patterns',
      'Automated CI/CD pipelines & auto-scaling cloud infrastructure'
    ],
    idealFor: 'Tech founders, micro-SaaS creators, and enterprises looking to commercialize internal tools into paid recurring subscription platforms.',
    timeline: '4 - 8 Weeks',
    tag: 'Multi-Tenant',
    color: '#00A3C4',
    hoverShadow: 'hover:shadow-cyan-500/15',
    icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />,
  },
  {
    id: 'erp',
    optionNum: '05',
    serviceKey: 'Customized Business Software',
    title: 'ERP & Custom Software',
    desc: 'Tailored enterprise management software, automated inventory tools, and custom internal workflow applications.',
    explanation: 'Custom Enterprise Resource Planning software tailored to your specific operations. Unifies inventory tracking, sales invoicing, CRM, employee attendance, and supplier logistics into a single, intuitive centralized command center.',
    deliverables: [
      'Custom modules: Inventory, Invoicing, CRM, and HR operations',
      'One-click automated PDF invoice, receipt & tax report generation',
      'Barcode/QR code scanning and automated low-stock alerts',
      'Custom access tiers for staff, branch managers, and accountants',
      'Automated daily data backups & legacy database migration'
    ],
    idealFor: 'Manufacturers, wholesale traders, distributors, healthcare clinics, and multi-branch businesses wanting automated operational control.',
    timeline: '4 - 8 Weeks',
    tag: 'Custom Plan',
    color: '#10B981',
    hoverShadow: 'hover:shadow-emerald-500/15',
    icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />,
  },
  {
    id: 'ai',
    optionNum: '06',
    serviceKey: 'AI & Automation Systems',
    title: 'AI & Automation Systems',
    desc: 'Intelligent LLM integrations, workflow automation bots, and data-driven agents engineered to boost team productivity.',
    explanation: 'Custom AI agent integrations and automated bots that eliminate repetitive manual tasks, provide 24/7 client support, and process unstructured business data without human fatigue or delay.',
    deliverables: [
      'Custom LLM agent workflows (GPT-4o, Claude 3.5, Gemini 1.5 Pro)',
      'Retrieval-Augmented Generation (RAG) over company documents',
      'WhatsApp & web customer support bots with human handover',
      'Automated lead qualification, email triage & CRM data sync',
      'Scheduled background workers and webhook automations'
    ],
    idealFor: 'Sales, marketing, and customer operations teams wanting to 10x output, cut support costs, and automate repetitive data entry.',
    timeline: '1 - 3 Weeks',
    tag: 'AI Powered',
    color: '#2563EB',
    hoverShadow: 'hover:shadow-blue-500/15',
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />,
  },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeModal, setActiveModal] = useState<ServiceDetail | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isMobilePaused, setIsMobilePaused] = useState(false);

  // Lock background scroll when popup modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-slide every 3 seconds on mobile view
  useEffect(() => {
    if (isMobilePaused || activeModal) return;
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isMobilePaused, activeModal, services.length]);

  const nextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % services.length);
  };

  const prevMobile = () => {
    setMobileIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleCardClick = (service: ServiceDetail) => {
    metaPixel.trackViewContent(service.serviceKey, 'Services 6-Card Pop-up');
    setActiveModal(service);
  };

  const handleProceedFromModal = (serviceName: string) => {
    setActiveModal(null);
    onSelectService(serviceName);
    const form = document.getElementById('enquiry-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-8 sm:py-10 lg:py-12 bg-[#F8F9FA] relative z-20 overflow-hidden">
      
      {/* Dynamic Animated Flowing Neon Lines (Horizontal Right-to-Left - Hero background continuity) */}
      <FlowingBackgroundRibbon idPrefix="services" variant="horizontal-mid" opacity={0.65} />
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-purple-200/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-orange-200/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER (COMPACT)                                */}
        {/* ======================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="text-[11px] font-bold text-[#6842C2] tracking-widest uppercase bg-[#EEE8FA] px-3.5 py-1 rounded-full mb-2.5 inline-block shadow-2xs border border-purple-100">
            WHAT WE BUILD
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-[2.1rem] font-black text-[#0E0725] tracking-tight uppercase leading-[1.2] mb-2.5">
            Technology Built Around Your Business.
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            Explore each service and click any card to discover full deliverables and project details.
          </p>
        </div>

        {/* ======================================================== */}
        {/* MOBILE 1-CARD CAROUSEL (AUTO-SLIDES EVERY 3S + ARROWS)   */}
        {/* ("hover animation active on the currently visible card")  */}
        {/* ======================================================== */}
        <div 
          className="md:hidden relative pt-6 pb-2"
          onTouchStart={() => setIsMobilePaused(true)}
          onTouchEnd={() => setIsMobilePaused(false)}
        >
          {/* Slider Container showing 1 card at a time */}
          <div className="relative overflow-hidden px-2 pt-4 pb-2">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            >
              {services.map((item, idx) => {
                const isActive = idx === mobileIndex;
                return (
                  <div key={item.id} className="w-full shrink-0 px-2">
                    <div
                      onClick={() => handleCardClick(item)}
                      className={`group relative bg-white rounded-tr-[36px] rounded-bl-[36px] p-5 pt-14 border border-slate-100 flex flex-col justify-between cursor-pointer min-h-[230px] transition-all duration-500 ${
                        isActive 
                          ? 'shadow-xl -translate-y-1.5' 
                          : 'shadow-[0_8px_24px_rgba(0,0,0,0.05)]'
                      }`}
                    >
                      {/* Corner Arc: Expanded when isActive */}
                      <div className="absolute inset-0 rounded-tr-[36px] rounded-bl-[36px] overflow-hidden pointer-events-none">
                        <div className={`w-full h-full transform origin-top-left transition-all duration-500 ease-out ${
                          isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}>
                          <svg className="absolute top-0 left-0 w-32 h-32 pointer-events-none select-none" viewBox="0 0 140 140" fill="none">
                            <defs>
                              <path id={`textArc-m-${idx}`} d="M 16 110 A 94 94 0 0 0 110 16" fill="none" />
                            </defs>
                            <path d="M 0 0 L 130 0 A 130 130 0 0 1 0 130 Z" fill={item.color} />
                            <text fill="white" fontSize="9" fontWeight="800" letterSpacing="2.5" opacity="0.95">
                              <textPath href={`#textArc-m-${idx}`} startOffset="50%" textAnchor="middle">
                                SERVICES
                              </textPath>
                            </text>
                          </svg>
                        </div>
                      </div>

                      {/* 3D Elevated White Disc */}
                      <div className={`absolute -top-3 -left-3 w-16 h-16 rounded-full bg-white border border-slate-100 flex flex-col items-center justify-center pointer-events-none select-none z-10 transition-all duration-500 ${
                        isActive ? 'scale-105 shadow-[0_8px_22px_rgba(14,7,37,0.22)]' : 'shadow-[0_6px_18px_rgba(14,7,37,0.15)]'
                      }`}>
                        <span className="text-[8px] font-black text-slate-400 tracking-wider uppercase -mb-0.5">
                          OPTION
                        </span>
                        <span className="text-xl font-black tracking-tight" style={{ color: item.color }}>
                          {item.optionNum}
                        </span>
                      </div>

                      {/* Upper-Right Corner Icon */}
                      <div 
                        className={`self-end w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-500 z-10 ${
                          isActive ? 'scale-110 rotate-6' : ''
                        }`}
                        style={{ color: item.color }}
                      >
                        {item.icon}
                      </div>

                      {/* Card Main Body */}
                      <div className="text-center mt-2 px-1 z-10">
                        <h3 className="text-sm font-black text-[#0E0725] uppercase tracking-tight mb-1.5">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-snug max-w-[250px] mx-auto line-clamp-2">
                          {item.desc}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold z-10">
                        <span className="text-slate-400 font-mono text-[10px] font-semibold">
                          {item.tag}
                        </span>
                        <span 
                          className={`flex items-center gap-1 transition-transform duration-300 text-[11px] ${
                            isActive ? 'translate-x-1' : ''
                          }`}
                          style={{ color: item.color }}
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                        </span>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Arrows & Indicators Bar */}
          <div className="flex items-center justify-between px-3 mt-4">
            <button
              onClick={prevMobile}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm flex items-center justify-center active:scale-95 transition-all cursor-pointer"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === mobileIndex ? 'w-6 bg-[#6842C2]' : 'w-1.5 bg-slate-200'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextMobile}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm flex items-center justify-center active:scale-95 transition-all cursor-pointer"
              aria-label="Next service"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP 3x2 GRID                                         */}
        {/* ======================================================== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-2">
          {services.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className={`group relative bg-white rounded-tr-[36px] rounded-bl-[36px] rounded-tl-none rounded-br-none p-5 sm:p-5.5 pt-14 sm:pt-16 shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:shadow-xl ${item.hoverShadow} hover:-translate-y-1.5 transition-all duration-300 border border-slate-100 flex flex-col justify-between cursor-pointer min-h-[220px] sm:min-h-[230px]`}
            >
              
              {/* Clipped Inner Container for Concentric Quarter-Circle Arc & Curved Text */}
              {/* Hover Animation: Arc expands out from top-left when hovered! */}
              <div className="absolute inset-0 rounded-tr-[36px] rounded-bl-[36px] rounded-tl-none rounded-br-none overflow-hidden pointer-events-none">
                <div className="w-full h-full transform origin-top-left scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400 ease-out">
                  <svg 
                    className="absolute top-0 left-0 w-32 sm:w-36 h-32 sm:h-36 pointer-events-none select-none" 
                    viewBox="0 0 140 140" 
                    fill="none"
                  >
                    <defs>
                      <path id={`textArc-${idx}`} d="M 16 110 A 94 94 0 0 0 110 16" fill="none" />
                    </defs>

                    {/* Concentric Colored Corner Arc */}
                    <path d="M 0 0 L 130 0 A 130 130 0 0 1 0 130 Z" fill={item.color} />

                    {/* Curved Text along Arc */}
                    <text fill="white" fontSize="9" fontWeight="800" letterSpacing="2.5" opacity="0.95">
                      <textPath href={`#textArc-${idx}`} startOffset="50%" textAnchor="middle">
                        SERVICES
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Elevated 3D White Disc (Protruding cleanly over top-left corner) */}
              <div className="absolute -top-3 -left-3 sm:-top-3.5 sm:-left-3.5 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white shadow-[0_6px_18px_rgba(14,7,37,0.15)] group-hover:shadow-[0_8px_22px_rgba(14,7,37,0.22)] border border-slate-100 flex flex-col items-center justify-center pointer-events-none select-none z-10 transition-transform duration-300 group-hover:scale-105">
                <span className="text-[8px] sm:text-[9px] font-black text-slate-400 tracking-wider uppercase -mb-0.5">
                  OPTION
                </span>
                <span 
                  className="text-xl sm:text-2xl font-black tracking-tight transition-colors duration-300"
                  style={{ color: item.color }}
                >
                  {item.optionNum}
                </span>
              </div>

              {/* Upper-Right Corner Icon in Matching Accent Color */}
              <div 
                className="self-end w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 z-10"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>

              {/* Card Main Body */}
              <div className="text-center mt-2 px-1 z-10">
                <h3 
                  className="text-sm sm:text-[15px] font-black text-[#0E0725] uppercase tracking-tight mb-1.5 transition-colors duration-200"
                >
                  <span className="group-hover:opacity-90 transition-opacity">
                    {item.title}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 leading-snug max-w-[250px] mx-auto line-clamp-2">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer: Tag & Action Arrow */}
              <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold z-10">
                <span className="text-slate-400 font-mono text-[10px] font-semibold">
                  {item.tag}
                </span>
                <span 
                  className="flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-200 text-[11px]"
                  style={{ color: item.color }}
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ======================================================== */}
      {/* EXPLANATORY POP-UP MODAL                                */}
      {/* ======================================================== */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all duration-300 scale-100 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Color Accent Bar */}
            <div 
              className="h-2 w-full"
              style={{ backgroundColor: activeModal.color }}
            />

            {/* Modal Header */}
            <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 relative">
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center gap-2.5 mb-2">
                <span 
                  className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: activeModal.color }}
                >
                  OPTION {activeModal.optionNum}
                </span>
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeModal.timeline}
                </span>
                <span className="text-xs font-mono font-semibold text-slate-400 flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  {activeModal.tag}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ color: activeModal.color, backgroundColor: `${activeModal.color}15` }}
                >
                  {activeModal.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0E0725] tracking-tight">
                  {activeModal.title}
                </h3>
              </div>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-5 sm:p-6 space-y-4 overflow-y-auto text-sm leading-relaxed text-slate-600">
              
              {/* Section 1: What This Means */}
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                  WHAT THIS MEANS
                </h4>
                <p className="text-slate-700 font-normal leading-relaxed text-[13px] sm:text-sm">
                  {activeModal.explanation}
                </p>
              </div>

              {/* Section 2: Key Deliverables */}
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2">
                  KEY DELIVERABLES INCLUDED
                </h4>
                <ul className="space-y-2">
                  {activeModal.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                      <CheckCircle2 
                        className="w-4 h-4 flex-shrink-0 mt-0.5" 
                        style={{ color: activeModal.color }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3: Ideal For */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
                <Users className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600">
                  <span className="font-bold text-slate-800">Best Suited For: </span>
                  {activeModal.idealFor}
                </div>
              </div>

            </div>

            {/* Modal Footer / Action CTA */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400 font-medium text-center sm:text-left">
                Free initial architecture consultation & quote included.
              </span>
              <button
                onClick={() => handleProceedFromModal(activeModal.serviceKey)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 hover:opacity-95"
                style={{ backgroundColor: activeModal.color }}
              >
                <span>Select & Get Quote</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
