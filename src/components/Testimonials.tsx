import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Info, Star } from 'lucide-react';
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
  const [isDesktopPaused, setIsDesktopPaused] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(true);

  const screenshots: ScreenshotItem[] = [
    {
      id: 1,
      title: "Custom Website & Business Consultation",
      candidate: "Agni Crackers",
      gradient: "from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]",
      blobShape: "rounded-[52px_24px_42px_28px] -top-8 -left-3.5 -right-1.5 bottom-0",
      blobGlow: "bg-[#7C3AED]/20",
      accentColor: "#7C3AED",
      screenImg: "/testimonials/Agni%20Crackers%20Client%20Feedback%20Poster%20(1).png",
      zoomImg: "/testimonials/Agni%20Crackers%20Client%20Feedback%20Poster%20(1).png",
      caption: "Verified WhatsApp feedback praising custom website delivery & responsive ongoing support"
    },
    {
      id: 2,
      title: "Digital Strategy & Website Transformation",
      candidate: "MasterMind Learning Solution",
      gradient: "from-[#38BDF8] via-[#0284C7] to-[#0369A1]",
      blobShape: "rounded-[32px_48px_28px_42px] -top-7 -left-2 -right-2.5 bottom-0",
      blobGlow: "bg-[#0284C7]/20",
      accentColor: "#0284C7",
      screenImg: "/testimonials/Happy%20Review_%20Your%20Success,%20Our%20Pride.png",
      zoomImg: "/testimonials/Happy%20Review_%20Your%20Success,%20Our%20Pride.png",
      caption: "5-star client review celebrating clear milestone communication & digital launch"
    },
    {
      id: 3,
      title: "Branding, Website & Deployment Package",
      candidate: "Prabhu Mohan (OneRoute India Logistics)",
      gradient: "from-[#34D399] via-[#10B981] to-[#059669]",
      blobShape: "rounded-[46px_28px_40px_32px] -top-7 -left-2.5 -right-2 bottom-0",
      blobGlow: "bg-[#10B981]/20",
      accentColor: "#10B981",
      screenImg: "/testimonials/OneRoute%20Logistics%20Client%20Appreciation.png",
      zoomImg: "/testimonials/OneRoute%20Logistics%20Client%20Appreciation.png",
      caption: "Client appreciation for logo design, branding, domain setup, and complete web delivery"
    },
    {
      id: 4,
      title: "Modern Brand Website & Rapid Delivery",
      candidate: "Karthik (SK Catering Services)",
      gradient: "from-[#2DD4BF] via-[#14B8A6] to-[#0D9488]",
      blobShape: "rounded-[26px_54px_28px_46px] -top-8 -left-1.5 -right-3.5 bottom-0",
      blobGlow: "bg-[#14B8A6]/20",
      accentColor: "#14B8A6",
      screenImg: "/testimonials/Uyar%20Technologies%20Client%20Review%20Poster.png",
      zoomImg: "/testimonials/Uyar%20Technologies%20Client%20Review%20Poster.png",
      caption: "5-star feedback highlighting creativity, dedication, and modern brand presentation"
    },
    {
      id: 5,
      title: "Transparent Proposal & Web Development",
      candidate: "Suknesh Tech Center",
      gradient: "from-[#6366F1] via-[#4F46E5] to-[#4338CA]",
      blobShape: "rounded-[44px_30px_42px_30px] -top-8 -left-2.5 -right-2.5 bottom-0",
      blobGlow: "bg-[#4F46E5]/20",
      accentColor: "#4F46E5",
      screenImg: "/testimonials/Uyar%20Technologies%20Client%20Review.png",
      zoomImg: "/testimonials/Uyar%20Technologies%20Client%20Review.png",
      caption: "Direct WhatsApp client review recommending Uyar Technologies for website design & delivery"
    }
  ];

  const checkScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollWidth, clientWidth } = scrollRef.current;
    setHasOverflow(scrollWidth - clientWidth > 4);
  };

  useEffect(() => {
    checkScrollState();
    const timer = setTimeout(checkScrollState, 150);
    const handleResize = () => checkScrollState();
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getStepWidth = (el: HTMLDivElement) => {
    const firstCard = el.firstElementChild as HTMLElement | null;
    if (!firstCard) return 303;
    const styles = window.getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || '28') || 28;
    return firstCard.getBoundingClientRect().width + gap;
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    if (maxScroll <= 4) return;
    const step = getStepWidth(el);

    if (direction === 'right') {
      if (el.scrollLeft >= maxScroll - 32) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollTo({ left: Math.min(el.scrollLeft + step, maxScroll), behavior: 'smooth' });
      }
    } else {
      if (el.scrollLeft <= 16) {
        el.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        el.scrollTo({ left: Math.max(el.scrollLeft - step, 0), behavior: 'smooth' });
      }
    }
    setTimeout(checkScrollState, 350);
  };

  // Auto-slide every 2 seconds on desktop view
  useEffect(() => {
    if (isDesktopPaused || activeModalIndex !== null) return;
    const timer = setInterval(() => {
      const el = scrollRef.current;
      if (!el || el.clientWidth === 0) return;
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      if (maxScroll <= 4) return;
      const step = getStepWidth(el);

      if (el.scrollLeft >= maxScroll - 32) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollTo({ left: Math.min(el.scrollLeft + step, maxScroll), behavior: 'smooth' });
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [isDesktopPaused, activeModalIndex]);

  // Auto-slide every 2 seconds on mobile view
  useEffect(() => {
    if (isMobilePaused || activeModalIndex !== null) return;
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % screenshots.length);
    }, 2000);
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

  return (
    <section id="testimonials" className="py-8 sm:py-10 lg:py-12 bg-[#FAFAFA] relative overflow-hidden">
      
      {/* Dynamic Animated Flowing Neon Lines (Horizontal Right-to-Left - Hero background continuity) */}
      <FlowingBackgroundRibbon idPrefix="testimonials" variant="horizontal-mid" opacity={0.65} />
      
      {/* Background Animated Liquid Ambient Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 -left-20 w-[450px] sm:w-[620px] h-[450px] sm:h-[620px] bg-gradient-to-tr from-[#6842C2]/20 via-[#8B5CF6]/15 to-transparent rounded-[45%_55%_65%_35%/55%_45%_55%_45%] blur-3xl animate-blob-1" />
        <div className="absolute top-1/4 left-1/3 w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] bg-gradient-to-br from-[#0284C7]/18 via-[#38BDF8]/12 to-transparent rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl animate-blob-2" />
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
        {/* ======================================================== */}
        <div 
          className="md:hidden relative pt-4 pb-2"
          onTouchStart={() => setIsMobilePaused(true)}
          onTouchEnd={() => setIsMobilePaused(false)}
        >
          <div className="relative overflow-hidden px-2 pt-9 pb-4">
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
                          isActive ? 'scale-[1.03] -top-10' : ''
                        }`}
                      >
                        <div className="absolute top-2 left-6 right-6 h-10 bg-white/20 rounded-full blur-sm pointer-events-none" />
                      </div>

                      {/* Framed Testimonial Card */}
                      <div className={`relative z-10 w-[275px] bg-slate-900 rounded-[26px] border-[5px] border-white shadow-xl overflow-hidden flex flex-col transition-all duration-500 ${
                        isActive ? '-translate-y-1.5 shadow-2xl' : ''
                      }`}>
                        {/* 1:1 Uncropped Poster Image */}
                        <div className="w-full aspect-square overflow-hidden bg-white relative">
                          <img
                            src={item.screenImg}
                            alt={`${item.candidate} - ${item.title}`}
                            className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                              isActive ? 'scale-[1.02]' : ''
                            }`}
                            loading="lazy"
                          />

                          {/* Subtle Tap to Zoom Badge */}
                          <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-semibold shadow-md backdrop-blur-xs flex items-center gap-1">
                            <Maximize2 className="w-3 h-3 text-[#C4B5FD]" />
                            <span>Zoom</span>
                          </div>
                        </div>

                        {/* Compact Footer Strip */}
                        <div className="px-3.5 py-2.5 bg-slate-900 text-left border-t border-slate-800">
                          <div className="flex items-center justify-between gap-2 mb-0.5">
                            <span className="text-xs font-bold text-white truncate">
                              {item.candidate}
                            </span>
                            <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-amber-400 shrink-0">
                              <Star className="w-3 h-3 fill-amber-400" />
                              5.0
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 truncate">
                            {item.title}
                          </p>
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
        <div
          className="hidden md:block relative md:px-6 lg:px-7 group/carousel"
          onMouseEnter={() => setIsDesktopPaused(true)}
          onMouseLeave={() => setIsDesktopPaused(false)}
        >
          
          {/* Left Arrow Button */}
          {hasOverflow && (
            <button
              onClick={() => handleScroll('left')}
              aria-label="Previous testimonial"
              className="absolute left-0 lg:left-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_20px_rgba(0,0,0,0.14)] flex items-center justify-center text-slate-700 hover:bg-purple-50 hover:border-purple-200 hover:text-[#6842C2] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </button>
          )}

          {/* Right Arrow Button */}
          {hasOverflow && (
            <button
              onClick={() => handleScroll('right')}
              aria-label="Next testimonial"
              className="absolute right-0 lg:right-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_20px_rgba(0,0,0,0.14)] flex items-center justify-center text-slate-700 hover:bg-purple-50 hover:border-purple-200 hover:text-[#6842C2] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </button>
          )}

          {/* Horizontal Scroll Track */}
          <div
            ref={scrollRef}
            onScroll={checkScrollState}
            className="flex items-center justify-start gap-5 lg:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-proximity pt-10 pb-6"
          >
            {screenshots.map((item, idx) => (
              <div
                key={item.id}
                data-screenshot-card={`card-${idx}`}
                onClick={() => setActiveModalIndex(idx)}
                className="flex-shrink-0 snap-start relative group cursor-pointer select-none px-2.5 md:w-[calc((100%-40px)/3)] lg:w-[calc((100%-48px)/3)] xl:w-[calc((100%-72px)/4)]"
              >
                {/* Ambient Soft Glow Blob at top of card */}
                <div
                  className={`absolute -top-6 left-1 right-1 h-48 ${item.blobGlow} rounded-[48px] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 -z-10 pointer-events-none`}
                />

                {/* Organic Asymmetrical Blob Backdrop */}
                <div
                  className={`absolute ${item.blobShape} !left-1 !right-1 bg-gradient-to-b ${item.gradient} transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:-top-10 z-0`}
                >
                  <div className="absolute top-2 left-6 right-6 h-10 bg-white/20 rounded-full blur-sm pointer-events-none" />
                </div>

                {/* Framed Testimonial Card */}
                <div className="relative z-10 w-full bg-slate-900 rounded-[24px] sm:rounded-[28px] border-[5px] sm:border-[6px] border-white shadow-md overflow-hidden flex flex-col transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl">
                  
                  {/* 1:1 Uncropped Poster Image */}
                  <div className="w-full aspect-square overflow-hidden bg-white relative">
                    <img
                      src={item.screenImg}
                      alt={`${item.candidate} - ${item.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Hover Overlay with View Prompt */}
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1.5px]">
                      <div className="px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-semibold shadow-lg flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-3.5 h-3.5 text-[#6842C2]" />
                        <span>View Full Size</span>
                      </div>
                    </div>
                  </div>

                  {/* Compact Client Caption Strip */}
                  <div className="px-3.5 py-2.5 bg-slate-900 text-left border-t border-slate-800">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-xs font-bold text-white truncate">
                        {item.candidate}
                      </span>
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-amber-400 shrink-0">
                        <Star className="w-3 h-3 fill-amber-400" />
                        5.0
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate">
                      {item.title}
                    </p>
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
            className="relative max-w-2xl w-full max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col overscroll-contain"
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
            <div className="relative flex-1 overflow-y-auto p-3 sm:p-5 bg-black flex items-center justify-center min-h-[360px]">
              <img
                src={screenshots[activeModalIndex].zoomImg}
                alt={`${screenshots[activeModalIndex].candidate} - ${screenshots[activeModalIndex].title}`}
                className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />

              {/* Modal Previous Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveModalIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : screenshots.length - 1));
                }}
                aria-label="Previous testimonial"
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
                aria-label="Next testimonial"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer Caption */}
            <div className="px-5 py-3 border-t border-slate-800 bg-slate-900 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#6842C2] shrink-0" />
                {screenshots[activeModalIndex].caption}
              </span>
              <span className="font-mono text-slate-500 shrink-0 ml-3">
                {activeModalIndex + 1} / {screenshots.length}
              </span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
