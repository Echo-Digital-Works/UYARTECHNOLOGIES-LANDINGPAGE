import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { FlowingBackgroundRibbon } from './FlowingBackgroundRibbon';

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  views: string;
  videoUrl: string;
  previewTime?: number;
  description: string;
  service: string;
  tags: string[];
}

interface VideosSectionProps {
  onOpenEnquiry?: (service?: string) => void;
}

export const VideosSection: React.FC<VideosSectionProps> = ({ onOpenEnquiry }) => {
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);
  const [mobileVideoIndex, setMobileVideoIndex] = useState<number>(0);
  const [isMobilePaused, setIsMobilePaused] = useState<boolean>(false);
  const [isDesktopPaused, setIsDesktopPaused] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(true);

  const videoList: VideoItem[] = [
    {
      id: 'video-1',
      title: 'Why Retail & Saree Brands Need Their Own Website',
      category: 'E-Commerce',
      duration: '0:43',
      views: '4.6k',
      videoUrl: '/videos/v1.mp4',
      previewTime: 0.8,
      description: '3 essentials that set leading dress and saree stores apart: a dedicated brand website, transparent price & size details, and category-wise shopping.',
      service: 'Website Development',
      tags: ['Saree Store', 'Online Ordering', 'Brand Website']
    },
    {
      id: 'video-2',
      title: '24/7 Automated Online Store & Order Tracking',
      category: 'Web Stores',
      duration: '0:22',
      views: '3.8k',
      videoUrl: '/videos/v2.mp4',
      previewTime: 1,
      description: 'Turn product browsers into automated 24/7 orders with upfront pricing, seamless ordering, and real-time delivery tracking.',
      service: 'Web Application',
      tags: ['24/7 Orders', 'E-Commerce', 'Delivery Tracking']
    },
    {
      id: 'video-3',
      title: 'Interactive Saree Catalogue & Instant Enquiry Website',
      category: 'Retail UI',
      duration: '0:28',
      views: '5.4k',
      videoUrl: '/videos/v3.mp4',
      previewTime: 0.8,
      description: 'Replace endless Instagram feed scrolling and WhatsApp DMs with categorized silk, cotton & designer saree collections and one-tap enquiry.',
      service: 'Website Development',
      tags: ['Catalogue UI', 'Product Gallery', 'Instant Enquiry']
    },
    {
      id: 'video-4',
      title: 'High-Converting Customized E-Commerce UX',
      category: 'Conversion UX',
      duration: '0:47',
      views: '6.1k',
      videoUrl: '/videos/v4.mp4',
      previewTime: 1,
      description: 'Stop losing customers to slow or confusing pages. See how we craft fast, trustworthy product discovery-to-checkout experiences.',
      service: 'Web Application',
      tags: ['Custom E-Commerce', 'Fast Checkout', 'UI/UX']
    },
    {
      id: 'video-5',
      title: 'Firecracker Shop Catalogue & Systematic Enquiry Portal',
      category: 'Retail Portal',
      duration: '0:47',
      views: '4.9k',
      videoUrl: '/videos/v5.mp4',
      previewTime: 1,
      description: 'Move from scattered WhatsApp price lists and DM follow-ups to an organized cracker business website with structured incoming enquiries.',
      service: 'Website Development',
      tags: ['Crackers Store', 'Lead Management', 'Business Site']
    },
    {
      id: 'video-6',
      title: 'Photography Portfolio & Client Booking Platform',
      category: 'Portfolio & Booking',
      duration: '0:47',
      views: '5.7k',
      videoUrl: '/videos/v6.mp4',
      previewTime: 1,
      description: 'Showcase Wedding, Pre-Wedding, and Event shoots in a categorized portfolio website designed for effortless client enquiries.',
      service: 'Website Development',
      tags: ['Photo Portfolio', 'Client Booking', 'Creative Studio']
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
    if (!firstCard) return 314;
    const styles = window.getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || '24') || 24;
    return firstCard.getBoundingClientRect().width + gap;
  };

  const scroll = (direction: 'left' | 'right') => {
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
    if (isDesktopPaused || activeModalVideo) return;
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
  }, [isDesktopPaused, activeModalVideo]);

  // Auto-slide every 2 seconds on mobile view
  useEffect(() => {
    if (isMobilePaused || activeModalVideo) return;
    const timer = setInterval(() => {
      setMobileVideoIndex((prev) => (prev + 1) % videoList.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isMobilePaused, activeModalVideo, videoList.length]);

  const nextMobileVideo = () => {
    setMobileVideoIndex((prev) => (prev + 1) % videoList.length);
  };

  const prevMobileVideo = () => {
    setMobileVideoIndex((prev) => (prev - 1 + videoList.length) % videoList.length);
  };

  // Lock background scroll and listen for Escape key when popup is open
  useEffect(() => {
    if (!activeModalVideo) return;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalVideo(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalVideo]);

  return (
    <section id="videos" className="py-12 sm:py-16 lg:py-20 bg-[#FAFAFC] relative overflow-hidden">
      
      {/* Dynamic Animated Flowing Neon Lines (Horizontal Right-to-Left - Hero background continuity) */}
      <FlowingBackgroundRibbon idPrefix="videos" variant="horizontal-mid" opacity={0.65} />
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-purple-100/40 via-blue-50/30 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#6842C2] bg-[#EEE8FA] px-3.5 py-1 rounded-full mb-3 inline-block border border-purple-100">
              FEATURED VIDEO SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E0725] tracking-tight leading-[1.1] mb-3">
              Engineered In Action.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6842C2] to-[#FF5E36]">
                Watch Our Platforms In Motion.
              </span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl font-normal">
              Watch how Uyar Technologies helps retail boutiques, cracker stores, photographers, and growing businesses turn visitors into enquiries. Click any video to play.
            </p>
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE 1-CARD CAROUSEL (AUTO-SLIDES EVERY 3S + ARROWS)   */}
        {/* ("hover animation active on the currently visible card")  */}
        {/* ======================================================== */}
        <div 
          className="md:hidden relative pb-4"
          onTouchStart={() => setIsMobilePaused(true)}
          onTouchEnd={() => setIsMobilePaused(false)}
        >
          <div className="relative overflow-hidden px-2 pt-2 pb-2">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${mobileVideoIndex * 100}%)` }}
            >
              {videoList.map((video, idx) => {
                const isActive = idx === mobileVideoIndex;
                return (
                  <div key={video.id} className="w-full shrink-0 flex justify-center px-3">
                    <div
                      className={`relative w-full max-w-[280px] aspect-[9/16] rounded-3xl overflow-hidden bg-slate-900 border transition-all duration-500 cursor-pointer ${
                        isActive 
                          ? 'shadow-2xl scale-[1.02] border-purple-500/60 ring-2 ring-purple-500/20' 
                          : 'shadow-xl border-slate-800'
                      }`}
                      onClick={() => setActiveModalVideo(video)}
                    >
                      {/* Video Preview Frame */}
                      <video
                        src={`${video.videoUrl}#t=${video.previewTime ?? 1}`}
                        muted
                        playsInline
                        preload="metadata"
                        aria-label={video.title}
                        className={`w-full h-full object-cover pointer-events-none transition-transform duration-500 ${
                          isActive ? 'scale-105' : ''
                        }`}
                      />

                      {/* Top Glass Tag */}
                      <div className="absolute top-3.5 inset-x-3.5 z-20 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/20">
                          {video.category}
                        </span>

                        <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white/90 border border-white/20">
                          {video.duration}
                        </span>
                      </div>

                      {/* Center Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25 z-10">
                        <div className={`w-16 h-16 rounded-full text-[#6842C2] flex items-center justify-center transition-all transform shadow-2xl shadow-purple-900/50 ${
                          isActive 
                            ? 'scale-110 bg-white ring-4 ring-purple-500/30' 
                            : 'bg-white/95'
                        }`}>
                          <Play className="w-7 h-7 fill-current translate-x-0.5" />
                        </div>
                      </div>

                      {/* Bottom Scrim with Video Details */}
                      <div className="absolute inset-x-0 bottom-0 z-20 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end text-left pointer-events-none">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[10px] font-mono text-white/70">
                            {video.views} views
                          </span>
                        </div>

                        <h3 className={`text-sm font-bold leading-snug line-clamp-2 drop-shadow-sm mb-2 transition-colors ${
                          isActive ? 'text-purple-200' : 'text-white'
                        }`}>
                          {video.title}
                        </h3>

                        <div className="flex flex-wrap gap-1 mt-1">
                          {video.tags.slice(0, 2).map((t, i) => (
                            <span key={i} className="text-[9px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/15 text-white/90 backdrop-blur-xs">
                              #{t.replace(/\s+/g, '')}
                            </span>
                          ))}
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
              onClick={prevMobileVideo}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm flex items-center justify-center active:scale-95 transition-all cursor-pointer"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {videoList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileVideoIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === mobileVideoIndex ? 'w-6 bg-[#6842C2]' : 'w-1.5 bg-slate-200'
                  }`}
                  aria-label={`Go to video ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextMobileVideo}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm flex items-center justify-center active:scale-95 transition-all cursor-pointer"
              aria-label="Next video"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP 9:16 VIDEO CARDS CAROUSEL                        */}
        {/* ======================================================== */}
        <div
          className="hidden md:block relative md:px-6 lg:px-7 group/carousel"
          onMouseEnter={() => setIsDesktopPaused(true)}
          onMouseLeave={() => setIsDesktopPaused(false)}
        >
          {/* Left Arrow Button */}
          {hasOverflow && (
            <button
              onClick={() => scroll('left')}
              aria-label="Previous videos"
              className="absolute left-0 lg:left-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_20px_rgba(0,0,0,0.14)] flex items-center justify-center text-slate-700 hover:bg-purple-50 hover:border-purple-200 hover:text-[#6842C2] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </button>
          )}

          {/* Right Arrow Button */}
          {hasOverflow && (
            <button
              onClick={() => scroll('right')}
              aria-label="Next videos"
              className="absolute right-0 lg:right-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_20px_rgba(0,0,0,0.14)] flex items-center justify-center text-slate-700 hover:bg-purple-50 hover:border-purple-200 hover:text-[#6842C2] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </button>
          )}

          <div 
            ref={scrollRef}
            onScroll={checkScrollState}
            className="flex gap-5 lg:gap-6 overflow-x-auto pt-3 pb-6 scroll-smooth no-scrollbar snap-x snap-proximity"
          >
            {videoList.map((video) => (
              <div
                key={video.id}
                className="group relative shrink-0 md:w-[calc((100%-40px)/3)] lg:w-[calc((100%-48px)/3)] xl:w-[calc((100%-72px)/4)] aspect-[9/16] rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-slate-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 snap-start cursor-pointer"
                onClick={() => setActiveModalVideo(video)}
              >
                {/* Video Preview Frame */}
                <video
                  src={`${video.videoUrl}#t=${video.previewTime ?? 1}`}
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={video.title}
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                />

                {/* Top Glass Tag */}
                <div className="absolute top-3.5 inset-x-3.5 z-20 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/20">
                    {video.category}
                  </span>

                  <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white/90 border border-white/20">
                    {video.duration}
                  </span>
                </div>

                {/* Center Play Button Overlay (Click opens pop-up) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all z-10">
                  <div className="w-16 h-16 rounded-full bg-white/95 group-hover:bg-white text-[#6842C2] shadow-2xl flex items-center justify-center transition-all transform group-hover:scale-110 shadow-purple-900/40">
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Scrim with Video Details */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5 bg-gradient-to-t from-black via-black/75 to-transparent flex flex-col justify-end text-left pointer-events-none">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-white/70">
                      {video.views} views
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 drop-shadow-sm mb-2 group-hover:text-purple-200 transition-colors">
                    {video.title}
                  </h3>

                  <div className="flex flex-wrap gap-1 mt-1">
                    {video.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[9px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/15 text-white/90 backdrop-blur-xs">
                        #{t.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner with Action */}
        <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0E0725]">
                Want custom product walkthroughs or video demos built for your business?
              </h4>
              <p className="text-xs text-slate-500">
                We design high-converting product videos, interactive UI walkthroughs, and custom software tailored to your workflow.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('Customized Software')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6842C2] hover:bg-[#522F9E] text-white text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs active:scale-95"
          >
            <span>Request Video Showcase</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Pop-up Video Player Modal (9:16 Aspect Ratio) */}
      {activeModalVideo && (
        <div 
          className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 overscroll-contain"
          onClick={() => setActiveModalVideo(null)}
          onTouchMove={(e) => {
            if (e.target === e.currentTarget) e.preventDefault();
          }}
          onWheel={(e) => {
            if (e.target === e.currentTarget) e.preventDefault();
          }}
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Container */}
          <div 
            className="relative w-full max-w-sm sm:max-w-md h-[90vh] max-h-[820px] bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col my-auto overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalVideo(null)}
              className="absolute top-3.5 right-3.5 z-30 w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-md"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player (Plays only here in the pop-up!) */}
            <div className="relative flex-1 min-h-0 bg-black flex items-center justify-center">
              <video
                key={activeModalVideo.id}
                src={activeModalVideo.videoUrl}
                autoPlay
                controls
                loop
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            {/* Bottom Info & CTA Footer (Non-overlapping with video controls) */}
            <div className="shrink-0 p-4 sm:p-5 bg-slate-950 border-t border-white/10 z-20">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/80 text-[10px] font-mono font-bold text-white uppercase inline-block mb-1.5">
                {activeModalVideo.category}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1 leading-snug">
                {activeModalVideo.title}
              </h3>
              <p className="text-xs text-white/75 line-clamp-2 mb-3 leading-relaxed">
                {activeModalVideo.description}
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const s = activeModalVideo.service;
                    setActiveModalVideo(null);
                    if (onOpenEnquiry) onOpenEnquiry(s);
                  }}
                  className="flex-1 py-2.5 px-4 rounded-full bg-[#6842C2] hover:bg-[#522F9E] text-white text-xs font-bold text-center transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  Build This With Us →
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
