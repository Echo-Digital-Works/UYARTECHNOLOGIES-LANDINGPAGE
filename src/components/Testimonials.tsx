import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Info } from 'lucide-react';
import { FlowingBackgroundRibbon } from './FlowingBackgroundRibbon';

interface ScreenshotItem {
  id: number;
  title: string;
  candidate: string;
  gradient: string;
  blobShape: string;
  blobGlow: string;
  accentColor: string;
  screenImg: string;
  zoomImg: string;
  caption: string;
}

export const Testimonials: React.FC = () => {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState<number>(0);
  const [isMobilePaused, setIsMobilePaused] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const screenshots: ScreenshotItem[] = [
    {
      id: 1,
      title: "AWS DevOps Offer Confirmation",
      candidate: "Madhan (Q-Burst Offer)",
      gradient: "from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]",
      // Prominent organic curved peak on the top-left matching reference, tucked neatly behind phone at bottom
      blobShape: "rounded-[58px_24px_48px_32px] -top-10 -left-4 -right-1.5 bottom-0",
      blobGlow: "bg-[#7C3AED]/20",
      accentColor: "#7C3AED",
      screenImg: "/testimonials/screen_zoom_1.png",
      zoomImg: "/testimonials/screen_zoom_1.png",
      caption: "Verified employment terms & CTC confirmation chat via WhatsApp"
    },
    {
      id: 2,
      title: "Offer Release & Mentorship",
      candidate: "Offer Letter Release",
      gradient: "from-[#38BDF8] via-[#0284C7] to-[#0369A1]",
      // Smooth organic crest top matching reference, tucked neatly behind phone at bottom
      blobShape: "rounded-[36px_54px_32px_48px] -top-9 -left-2 -right-3 bottom-0",
      blobGlow: "bg-[#0284C7]/20",
      accentColor: "#0284C7",
      screenImg: "/testimonials/screen_zoom_2.png",
      zoomImg: "/testimonials/screen_zoom_2.png",
      caption: "Direct WhatsApp confirmation celebrating verified offer letter release"
    },
    {
      id: 3,
      title: "Accenture Signed Offer Letter",
      candidate: "Malar Logeshwari R (Accenture)",
      gradient: "from-[#34D399] via-[#10B981] to-[#059669]",
      // Smooth organic rounded crest matching reference, tucked neatly behind phone at bottom
      blobShape: "rounded-[52px_32px_46px_36px] -top-9 -left-3 -right-2 bottom-0",
      blobGlow: "bg-[#10B981]/20",
      accentColor: "#10B981",
      screenImg: "/testimonials/screen_zoom_3.png",
      zoomImg: "/testimonials/screen_zoom_3.png",
      caption: "Accenture signed employment offer letter with 300% salary hike"
    },
    {
      id: 4,
      title: "Technical Lead Offer Verification",
      candidate: "Dinakar (Verified Offer)",
      gradient: "from-[#2DD4BF] via-[#14B8A6] to-[#0D9488]",
      // Prominent organic curved peak on the top-right matching reference, tucked neatly behind phone at bottom
      blobShape: "rounded-[28px_60px_32px_52px] -top-11 -left-1 -right-4 bottom-0",
      blobGlow: "bg-[#14B8A6]/20",
      accentColor: "#14B8A6",
      screenImg: "/testimonials/screen_zoom_4.png",
      zoomImg: "/testimonials/screen_zoom_4.png",
      caption: "Verified WhatsApp chat confirmation for technical platform offer"
    }
  ];

  const checkScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScrollState();
    const handleResize = () => checkScrollState();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide every 3 seconds on mobile view
  useEffect(() => {
    if (isMobilePaused || activeModalIndex !== null) return;
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isMobilePaused, activeModalIndex, screenshots.length]);

  const nextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevMobile = () => {
    setMobileIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  // Lock background scroll when zoom modal is open
  useEffect(() => {
    if (activeModalIndex === null) return;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [activeModalIndex]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === 'Escape') setActiveModalIndex(null);
      if (e.key === 'ArrowLeft') {
        setActiveModalIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : screenshots.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveModalIndex((prev) => (prev !== null && prev < screenshots.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex, screenshots.length]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
    setTimeout(checkScrollState, 350);
  };

  return (
    <section id="testimonials" className="py-8 sm:py-10 lg:py-12 bg-[#FAFAFA] relative overflow-hidden">
      
      {/* Dynamic Animated Flowing Neon Lines (Horizontal Right-to-Left - Hero background continuity) */}
      <FlowingBackgroundRibbon idPrefix="testimonials" variant="horizontal-mid" opacity={0.65} />
      
      {/* Background Animated Liquid Ambient Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Large Purple Fluid Blob */}
        <div className="absolute -top-32 -left-20 w-[450px] sm:w-[620px] h-[450px] sm:h-[620px] bg-gradient-to-tr from-[#6842C2]/20 via-[#8B5CF6]/15 to-transparent rounded-[45%_55%_65%_35%/55%_45%_55%_45%] blur-3xl animate-blob-1" />
        
        {/* Sky Blue Fluid Blob */}
        <div className="absolute top-1/4 left-1/3 w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] bg-gradient-to-br from-[#0284C7]/18 via-[#38BDF8]/12 to-transparent rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl animate-blob-2" />
        
        {/* Emerald / Teal Fluid Blob */}
        <div className="absolute -bottom-24 -right-20 w-[480px] sm:w-[640px] h-[480px] sm:h-[640px] bg-gradient-to-bl from-[#059669]/18 via-[#10B981]/12 to-transparent rounded-[50%_50%_40%_60%/40%_60%_50%_50%] blur-3xl animate-blob-3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        
        {/* Section Header (Centered & Neat) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-[11px] font-bold text-[#6842C2] tracking-widest uppercase bg-[#EEE8FA] px-3.5 py-1 rounded-full mb-3 inline-block border border-purple-100 shadow-2xs">
            VERIFIED SOCIAL PROOF
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight mb-3">
            Trusted By Businesses.<br className="hidden sm:inline" />{" "}
            <span className="text-[#6842C2]">Proven In Production.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
            Direct perspectives and verified proof from platform owners and professionals who trust Uyar Technologies.
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
          <div className="relative overflow-hidden px-2 pt-10 pb-4">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            >
              {screenshots.map((item, idx) => {
                const isActive = idx === mobileIndex;
                return (
                  <div key={item.id} className="w-full shrink-0 flex justify-center px-4">
                    <div
                      onClick={() => setActiveModalIndex(idx)}
                      className="relative cursor-pointer select-none"
                    >
                      {/* Ambient Soft Glow Blob */}
                      <div
                        className={`absolute -top-6 left-0 right-0 h-48 ${item.blobGlow} rounded-[48px] blur-xl transition-opacity duration-500 -z-10 pointer-events-none ${
                          isActive ? 'opacity-70' : 'opacity-30'
                        }`}
                      />

                      {/* Organic Asymmetrical Blob Backdrop */}
                      <div
                        className={`absolute ${item.blobShape} bg-gradient-to-b ${item.gradient} transition-all duration-500 ease-out z-0 ${
                          isActive ? 'scale-[1.04] -top-12' : ''
                        }`}
                      >
                        <div className="absolute top-2 left-6 right-6 h-10 bg-white/20 rounded-full blur-sm pointer-events-none" />
                      </div>

                      {/* Smartphone Mockup */}
                      <div className={`relative z-10 w-[230px] h-[460px] bg-slate-900 rounded-[34px] border-[5px] border-white shadow-xl overflow-hidden flex flex-col transition-all duration-500 ${
                        isActive ? '-translate-y-2 shadow-2xl' : ''
                      }`}>
                        {/* Top Speaker Ear-piece */}
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 pointer-events-none">
                          <div className="w-10 h-1 bg-slate-700/80 rounded-full" />
                          <div className="w-1.5 h-1.5 bg-slate-800 rounded-full border border-slate-700/60" />
                        </div>

                        {/* Screenshot Image Screen */}
                        <div className="w-full h-full rounded-[24px] overflow-hidden bg-slate-950 relative">
                          <img
                            src={item.screenImg}
                            alt={item.title}
                            className={`w-full h-full object-cover object-top transition-transform duration-500 ease-out ${
                              isActive ? 'scale-105' : ''
                            }`}
                            loading="lazy"
                          />

                          {/* Hover/Active Overlay with View Prompt */}
                          <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}>
                            <div className={`px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-lg flex items-center gap-1.5 transform transition-transform duration-300 ${
                              isActive ? 'scale-100' : 'scale-90'
                            }`}>
                              <Maximize2 className="w-3.5 h-3.5 text-[#6842C2]" />
                              <span>View Full Screen</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Arrows & Indicators */}
          <div className="flex items-center justify-between px-6 mt-3">
            <button
              onClick={prevMobile}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm flex items-center justify-center active:scale-95 transition-all cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === mobileIndex ? 'w-6 bg-[#6842C2]' : 'w-1.5 bg-slate-200'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextMobile}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm flex items-center justify-center active:scale-95 transition-all cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP CAROUSEL TRACK                                    */}
        {/* ======================================================== */}
        <div className="hidden md:block relative group/carousel">
          
          {/* Left Arrow Button (Mobile/Tablet only) */}
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous screenshot"
            className={`lg:hidden absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_20px_rgba(0,0,0,0.12)] flex items-center justify-center text-slate-700 hover:text-[#6842C2] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer ${
              !canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          </button>

          {/* Right Arrow Button (Mobile/Tablet only) */}
          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Next screenshot"
            className={`lg:hidden absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_20px_rgba(0,0,0,0.12)] flex items-center justify-center text-slate-700 hover:text-[#6842C2] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer ${
              !canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          </button>

          {/* Horizontal Scroll Track (Centered on desktop) */}
          <div
            ref={scrollRef}
            onScroll={checkScrollState}
            className="flex items-center justify-start lg:justify-center gap-5 sm:gap-6 lg:gap-7 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pt-12 pb-6 px-4 sm:px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {screenshots.map((item, idx) => (
              <div
                key={item.id}
                data-screenshot-card={`card-${idx}`}
                onClick={() => setActiveModalIndex(idx)}
                className="flex-shrink-0 snap-center relative group cursor-pointer select-none"
              >
                {/* Ambient Soft Glow Blob at top of card */}
                <div
                  className={`absolute -top-6 left-0 right-0 h-48 ${item.blobGlow} rounded-[48px] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 -z-10 pointer-events-none`}
                />

                {/* Organic Asymmetrical Blob Backdrop matching Reference */}
                <div
                  className={`absolute ${item.blobShape} bg-gradient-to-b ${item.gradient} transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:-top-13 z-0`}
                >
                  {/* Specular glossy highlight */}
                  <div className="absolute top-2 left-6 right-6 h-10 bg-white/20 rounded-full blur-sm pointer-events-none" />
                </div>

                {/* Smartphone Mockup */}
                <div className="relative z-10 w-[220px] sm:w-[235px] xl:w-[245px] h-[450px] sm:h-[480px] xl:h-[490px] bg-slate-900 rounded-[32px] sm:rounded-[36px] border-[5px] sm:border-[6px] border-white shadow-sm overflow-hidden flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
                  
                  {/* Top Speaker Ear-piece on Bezel */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 pointer-events-none">
                    <div className="w-10 h-1 bg-slate-700/80 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-slate-800 rounded-full border border-slate-700/60" />
                  </div>

                  {/* Screenshot Image Screen */}
                  <div className="w-full h-full rounded-[22px] sm:rounded-[26px] overflow-hidden bg-slate-950 relative">
                    <img
                      src={item.screenImg}
                      alt={item.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Hover Overlay with View Prompt */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-lg flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-3.5 h-3.5 text-[#6842C2]" />
                        <span>View Full Screen</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {activeModalIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200 overscroll-contain"
          onClick={() => setActiveModalIndex(null)}
          onTouchMove={(e) => {
            if (e.target === e.currentTarget) e.preventDefault();
          }}
          onWheel={(e) => {
            if (e.target === e.currentTarget) e.preventDefault();
          }}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-lg w-full max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/95">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                  {screenshots[activeModalIndex].title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {screenshots[activeModalIndex].candidate}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActiveModalIndex(null)}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View Area */}
            <div className="relative flex-1 overflow-y-auto p-3 sm:p-4 bg-black flex items-center justify-center min-h-[420px]">
              <img
                src={screenshots[activeModalIndex].zoomImg}
                alt={screenshots[activeModalIndex].title}
                className="max-h-[68vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />

              {/* Modal Previous Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : screenshots.length - 1));
                }}
                aria-label="Previous screenshot"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Modal Next Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIndex((prev) => (prev !== null && prev < screenshots.length - 1 ? prev + 1 : 0));
                }}
                aria-label="Next screenshot"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer Caption */}
            <div className="px-5 py-3 border-t border-slate-800 bg-slate-900 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#6842C2]" />
                {screenshots[activeModalIndex].caption}
              </span>
              <span className="font-mono text-slate-500">
                {activeModalIndex + 1} / {screenshots.length}
              </span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
