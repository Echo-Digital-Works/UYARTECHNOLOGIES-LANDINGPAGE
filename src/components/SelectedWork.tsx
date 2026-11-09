import React, { useState, useMemo, useEffect } from 'react';
import { 
  UtensilsCrossed,
  Truck,
  GraduationCap,
  Cpu,
  Layers,
  ArrowRight,
  Globe, 
  CheckCircle2, 
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { metaPixel } from '../services/metaPixel';
import { FlowingBackgroundRibbon } from './FlowingBackgroundRibbon';

interface SelectedWorkProps {
  onOpenEnquiry?: (service?: string) => void;
}

interface ProjectItem {
  id: string;
  num: string;
  title: string;
  image: string;
  category: 'all' | 'web' | 'edtech' | 'logistics' | 'manufacturing' | 'creative';
  categoryLabel: string;
  tagline: string;
  domain: string;
  url: string;
  simpleExplanation: string;
  overview: string;
  problemSolved: string;
  architectureSolution: string;
  techStack: string[];
  metrics: {
    label: string;
    value: string;
    color: string;
  }[];
  deliverables: string[];
  systemStatus: string;
  theme: {
    accentColor: string;
    textColor: string;
    subtextColor: string;
    bgColor: string;
    borderColor: string;
    hoverShadow: string;
    gradient: string;
    waveFill: string;
    tags: [string, string];
  };
  icon: React.ReactNode;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [mobileProjectIndex, setMobileProjectIndex] = useState<number>(0);
  const [isMobilePaused, setIsMobilePaused] = useState<boolean>(false);

  const getServiceForProject = (category: string): string => {
    switch (category) {
      case 'web':
        return 'Website Development';
      case 'edtech':
        return 'LMS';
      case 'logistics':
        return 'ERP';
      case 'manufacturing':
        return 'Web Application';
      case 'creative':
        return 'Website Development';
      default:
        return 'Website Development';
    }
  };

  // Lock background scroll when case-study modal is open
  useEffect(() => {
    if (!activeModalProject) return;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalProject]);

  const projects: ProjectItem[] = [
    {
      id: 'sk-catering',
      num: '01',
      title: 'SK Catering Services',
      image: '/projects/project-sk-catering.png',
      category: 'web',
      categoryLabel: 'Hospitality & Food Tech',
      tagline: 'Catering & Event Platform',
      domain: 'skcateringservices.com',
      url: 'https://skcateringservices.com',
      simpleExplanation: 'Automated multi-course catering package builder & real-time quotation estimator engineered for high lead conversion.',
      overview: 'SK Catering required a modern web flagship to replace traditional phone-based inquiries with an automated catering package selection and quote estimator.',
      problemSolved: 'Visitors previously faced friction viewing complex multi-course menus and pricing tiers across different event scales (weddings, corporate buffets, private functions).',
      architectureSolution: 'Engineered a custom interactive menu builder in React and Tailwind CSS with sub-second page loads, automated quotation generation, and direct lead capture.',
      techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Quotation Engine'],
      metrics: [
        { label: 'Booking System', value: 'Custom Menu', color: 'text-orange-400' },
        { label: 'Lead Funnel', value: '+180% Inquiries', color: 'text-emerald-400' },
        { label: 'PageSpeed', value: '98 / 100', color: 'text-blue-400' },
      ],
      deliverables: [
        'Custom interactive event menu & banquet builder',
        'Automated real-time quote generation pipeline',
        'Mobile-first responsive UX with 95+ PageSpeed',
        'Analytics & Meta Pixel conversion tracking'
      ],
      systemStatus: '98/100 PageSpeed',
      theme: {
        accentColor: '#FF5E36',
        textColor: 'text-orange-500',
        subtextColor: 'text-orange-200',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-100/80',
        hoverShadow: 'hover:shadow-[0_20px_45px_rgba(255,94,54,0.25)]',
        gradient: 'linear-gradient(180deg, #FF5E36 0%, #FF8A00 100%)',
        waveFill: '#FF5E36',
        tags: ['CUSTOM MENU', '98/100 SPEED']
      },
      icon: <UtensilsCrossed className="w-8 h-8" />
    },
    {
      id: 'oneroute-india',
      num: '02',
      title: 'OneRoute India Logistics',
      image: '/projects/project-oneroute-india.png',
      category: 'logistics',
      categoryLabel: 'Logistics & Supply Chain',
      tagline: 'Fleet Transportation Platform',
      domain: 'onerouteindia.com',
      url: 'https://onerouteindia.com',
      simpleExplanation: 'Enterprise nationwide freight platform with pan-India corridor mapping, automated tonnage calculator & 99.98% cloud uptime.',
      overview: 'OneRoute India is a nationwide freight carrier requiring an enterprise-grade digital portal to showcase their fleet capacity, verified driver standards, and inter-state corridors.',
      problemSolved: 'Commercial clients needed transparent truckload availability, instant transit estimation, and corporate contract booking without manual dispatch calls.',
      architectureSolution: 'Developed an enterprise freight platform with interactive route mapping, automated cargo rate calculator, and high-availability AWS cloud hosting.',
      techStack: ['React.js', 'Express', 'Interactive Maps', 'Freight API', 'Enterprise Security'],
      metrics: [
        { label: 'Route Coverage', value: 'Pan-India', color: 'text-blue-400' },
        { label: 'Fleet Dispatch', value: 'Real-Time', color: 'text-emerald-400' },
        { label: 'Uptime', value: '99.98%', color: 'text-purple-400' },
      ],
      deliverables: [
        'Interactive pan-India freight corridor visualizer',
        'Automated tonnage and freight rate calculation',
        'Driver safety & vehicle certification verification',
        'Role-based corporate booking portal'
      ],
      systemStatus: '99.98% Cloud Uptime',
      theme: {
        accentColor: '#2563EB',
        textColor: 'text-blue-600',
        subtextColor: 'text-blue-200',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-100/80',
        hoverShadow: 'hover:shadow-[0_20px_45px_rgba(37,99,235,0.25)]',
        gradient: 'linear-gradient(180deg, #2563EB 0%, #4F46E5 100%)',
        waveFill: '#2563EB',
        tags: ['PAN-INDIA', 'REAL-TIME FLEET']
      },
      icon: <Truck className="w-8 h-8" />
    },
    {
      id: 'master-mind',
      num: '03',
      title: 'Master Mind Learning',
      image: '/projects/project-master-mind.png',
      category: 'edtech',
      categoryLabel: 'EdTech & Career LMS',
      tagline: 'Technical Training Platform',
      domain: 'mastermindlearningsolution.com',
      url: 'https://mastermindlearningsolution.com',
      simpleExplanation: 'Modern technical course directory with syllabus previews, batch calendar & automated admissions enquiry pipeline.',
      overview: 'Master Mind Learning Solutions prepares engineers for modern technical industries, requiring a seamless course catalog and student enrollment engine.',
      problemSolved: 'Prospective students struggled to navigate prerequisite modules, batch timings, and certification outcomes across various engineering tracks.',
      architectureSolution: 'Constructed an intuitive LMS directory with interactive syllabus previews, batch schedule calendars, faculty profiles, and automated CRM lead capture.',
      techStack: ['React.js', 'Vite', 'REST APIs', 'Cloud Database', 'Modern UI/UX'],
      metrics: [
        { label: 'Student Enrollment', value: '5,000+ Trained', color: 'text-indigo-400' },
        { label: 'Admissions Funnel', value: 'Automated', color: 'text-emerald-400' },
        { label: 'Cloud LMS', value: '99.9% Uptime', color: 'text-cyan-400' },
      ],
      deliverables: [
        'Comprehensive technical course syllabus browser',
        'Automated batch admission & seat reservation form',
        'Faculty credentials & student testimonial showcase',
        'Instant WhatsApp & CRM consultation pipeline'
      ],
      systemStatus: 'Active Admissions',
      theme: {
        accentColor: '#7C3AED',
        textColor: 'text-[#7C3AED]',
        subtextColor: 'text-purple-200',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-100/80',
        hoverShadow: 'hover:shadow-[0_20px_45px_rgba(124,58,237,0.25)]',
        gradient: 'linear-gradient(180deg, #7C3AED 0%, #A855F7 100%)',
        waveFill: '#7C3AED',
        tags: ['EDTECH LMS', '5,000+ TRAINED']
      },
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      id: 'suknesh',
      num: '04',
      title: 'Suknesh Techcenter',
      image: '/projects/project-suknesh.png',
      category: 'edtech',
      categoryLabel: 'Industrial Training & CAD/CAM',
      tagline: 'Industrial Engineering Portal',
      domain: 'sukneshtechcenter.com',
      url: 'https://sukneshtechcenter.com',
      simpleExplanation: 'Industrial engineering portal featuring machinery specifications, corporate lab training & certified RFQ pipeline.',
      overview: 'Suknesh Techcenter delivers corporate CAD/CAM and industrial automation training to manufacturing enterprises across South India.',
      problemSolved: 'Industrial corporate clients needed verification of lab machinery specifications, syllabus alignment with ISO standards, and corporate training quotations.',
      architectureSolution: 'Built a high-performance corporate portal emphasizing industrial lab equipment, corporate workshop modules, and seamless corporate training RFQ submission.',
      techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Fast CDN', 'Schema SEO'],
      metrics: [
        { label: 'Curriculum', value: 'ISO 9001 Aligned', color: 'text-blue-400' },
        { label: 'Corporate Hub', value: 'Direct RFQ', color: 'text-emerald-400' },
        { label: 'Page Load', value: '< 0.7s', color: 'text-purple-400' },
      ],
      deliverables: [
        'Machinery & industrial lab specification gallery',
        'Corporate workshop scheduling and registration',
        'Consulting module showcase with case studies',
        'Technical SEO schema for vocational education'
      ],
      systemStatus: 'Certified Portal',
      theme: {
        accentColor: '#00B4D8',
        textColor: 'text-teal-600',
        subtextColor: 'text-teal-200',
        bgColor: 'bg-teal-50',
        borderColor: 'border-teal-100/80',
        hoverShadow: 'hover:shadow-[0_20px_45px_rgba(0,180,216,0.25)]',
        gradient: 'linear-gradient(180deg, #00B4D8 0%, #10B981 100%)',
        waveFill: '#00B4D8',
        tags: ['CAD / CAM', 'ISO 9001 ALIGNED']
      },
      icon: <Cpu className="w-8 h-8" />
    },
    {
      id: 'sri-sai',
      num: '05',
      title: 'Sri Sai Wire Netting',
      image: '/projects/project-sri-sai.png',
      category: 'manufacturing',
      categoryLabel: 'Manufacturing & B2B Wholesale',
      tagline: 'Industrial Product Portal',
      domain: 'srisaiwirenetting.in',
      url: 'https://www.srisaiwirenetting.in',
      simpleExplanation: 'Perimeter fencing & industrial wire mesh catalog with wire gauge selectors, freight calculators & direct WhatsApp RFQs.',
      overview: 'Sri Sai Wire Netting is a heavy-duty perimeter fencing and industrial wire mesh manufacturer serving commercial contractors and infrastructure builders.',
      problemSolved: 'B2B buyers required precise wire gauge tables, roll dimensions, galvanization grades, and immediate wholesale quantity quotations.',
      architectureSolution: 'Engineered a dedicated B2B product catalog with wire specification filters, automated bulk freight enquiry processing, and WhatsApp sales integration.',
      techStack: ['React.js', 'Product Catalog', 'Enquiry API', 'Responsive Grid', 'B2B Wholesale'],
      metrics: [
        { label: 'Wholesale Portal', value: 'B2B Catalog', color: 'text-emerald-400' },
        { label: 'RFQ Pipeline', value: 'Instant Form', color: 'text-cyan-400' },
        { label: 'Dispatch', value: 'Nationwide', color: 'text-orange-400' },
      ],
      deliverables: [
        'Industrial wire mesh specification sheets and gauge charts',
        'Bulk wholesale quote and sample request pipeline',
        'High-resolution product application galleries',
        'Direct WhatsApp business API routing'
      ],
      systemStatus: 'B2B Production',
      theme: {
        accentColor: '#0284C7',
        textColor: 'text-sky-600',
        subtextColor: 'text-sky-200',
        bgColor: 'bg-sky-50',
        borderColor: 'border-sky-100/80',
        hoverShadow: 'hover:shadow-[0_20px_45px_rgba(2,132,199,0.25)]',
        gradient: 'linear-gradient(180deg, #0284C7 0%, #06B6D4 100%)',
        waveFill: '#0284C7',
        tags: ['B2B WHOLESALE', 'INSTANT RFQ']
      },
      icon: <Layers className="w-8 h-8" />
    },
    {
      id: 'tamilnadu-shia',
      num: '06',
      title: 'Tamil Nadu Shia Muslim Jamaat',
      image: '/projects/project-tamilnadu-shia.png',
      category: 'web',
      categoryLabel: 'Community Platform & Portal',
      tagline: 'Community Organization Platform',
      domain: 'tamilnadushiamuslimjamaat.in',
      url: 'https://www.tamilnadushiamuslimjamaat.in',
      simpleExplanation: 'Centralized community welfare portal delivering real-time announcements, event calendar, member directory & online contributions.',
      overview: 'Tamil Nadu Shia Muslim Jamaat required a unified digital headquarters to connect community members across the state with official notices, social initiatives, and events.',
      problemSolved: 'Community notices, event schedules, and charitable initiatives were previously distributed manually across fragmented messaging groups without a reliable verified hub.',
      architectureSolution: 'Engineered an accessible, high-performance community platform with structured announcement feeds, prayer schedules, dynamic event galleries, and secure donation routing.',
      techStack: ['React.js', 'Tailwind CSS', 'Fast CDN', 'Event Feed', 'Mobile First'],
      metrics: [
        { label: 'Community Hub', value: 'Live Portal', color: 'text-emerald-400' },
        { label: 'Announcements', value: 'Real-Time', color: 'text-cyan-400' },
        { label: 'Uptime', value: '99.9%', color: 'text-blue-400' },
      ],
      deliverables: [
        'Centralized community announcement and news pipeline',
        'Event calendar, prayer timings and committee updates',
        'High-resolution photo and social welfare activity gallery',
        'Sub-second mobile loading with zero bandwidth delay'
      ],
      systemStatus: 'Live Community',
      theme: {
        accentColor: '#059669',
        textColor: 'text-emerald-600',
        subtextColor: 'text-emerald-200',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-100/80',
        hoverShadow: 'hover:shadow-[0_20px_45px_rgba(5,150,105,0.25)]',
        gradient: 'linear-gradient(180deg, #059669 0%, #10B981 100%)',
        waveFill: '#059669',
        tags: ['COMMUNITY PORTAL', '99.9% UPTIME']
      },
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(p => p.category === selectedCategory);
  }, [selectedCategory, projects]);

  // Auto-slide every 3 seconds on mobile view
  useEffect(() => {
    if (isMobilePaused || activeModalProject || filteredProjects.length === 0) return;
    const timer = setInterval(() => {
      setMobileProjectIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isMobilePaused, activeModalProject, filteredProjects.length]);

  // Reset mobile index if category filter changes
  useEffect(() => {
    setMobileProjectIndex(0);
  }, [selectedCategory]);

  const nextMobileProject = () => {
    setMobileProjectIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevMobileProject = () => {
    setMobileProjectIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const categories = [
    { id: 'all', label: 'All Platforms (6)' },
    { id: 'web', label: 'Web Platforms' },
    { id: 'edtech', label: 'EdTech & LMS' },
    { id: 'logistics', label: 'Logistics & Fleet' },
    { id: 'manufacturing', label: 'Manufacturing B2B' },
    { id: 'creative', label: 'Creative Studio' },
  ];

  return (
    <section id="work" className="relative py-10 sm:py-14 lg:py-16 bg-[#FAFAFC] overflow-hidden">
      
      {/* Dynamic Animated Flowing Neon Lines (Horizontal Right-to-Left - Hero background continuity) */}
      <FlowingBackgroundRibbon idPrefix="work" variant="horizontal-mid" opacity={0.65} />
      
      {/* Background Ambient Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-purple-100/35 via-blue-50/20 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] font-black uppercase tracking-wider text-[#6842C2] bg-[#EEE8FA] px-3.5 py-1 rounded-full mb-3 border border-purple-100/60">
              PROVEN PRODUCTION WORK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0E0725] tracking-tight leading-[1.1]">
              Selected Work.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6842C2] via-[#855fe6] to-[#ff6b8b]">
                Live Platforms in Production.
              </span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Explore each platform for a quick overview, or click to explore the complete technical case study and architecture brief.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#0E0725] text-white shadow-md shadow-slate-950/15'
                    : 'bg-white text-slate-600 hover:text-[#0E0725] hover:bg-slate-100 border border-slate-200/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
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
          {/* Slider Container showing 1 card at a time */}
          <div className="relative overflow-hidden px-1 pt-2 pb-2">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${mobileProjectIndex * 100}%)` }}
            >
              {filteredProjects.map((project, idx) => {
                const isActive = idx === mobileProjectIndex;
                return (
                  <div key={project.id} className="w-full shrink-0 px-2">
                    <div
                      onClick={() => setActiveModalProject(project)}
                      className={`relative bg-white rounded-[32px] border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.08)] h-[460px] overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-500 ${
                        isActive ? '-translate-y-1 shadow-2xl' : ''
                      }`}
                    >
                      {/* Top Mockup Showcase Stage */}
                      <div className="relative w-full h-[255px] p-4 flex flex-col justify-between bg-gradient-to-b from-slate-50/60 via-white to-slate-50/30 overflow-hidden">
                        {/* Top Metadata Pills */}
                        <div className="relative z-20 flex items-center justify-between gap-2">
                          <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-xs border border-slate-200/80 ${project.theme.textColor}`}>
                            Client {project.num}
                          </span>
                          <span className="text-[10px] font-mono font-medium text-slate-600 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs border border-slate-200/80 flex items-center gap-1.5 truncate max-w-[190px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span className="truncate">{project.tagline}</span>
                          </span>
                        </div>

                        {/* Centered Device Mockup Image */}
                        <div className="relative z-10 w-full flex-1 flex items-center justify-center py-1">
                          <img
                            src={project.image}
                            alt={project.title}
                            className={`max-h-[175px] w-auto max-w-[94%] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 ${
                              isActive ? 'scale-105' : ''
                            }`}
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* The Rising Liquid Wave Container: On Mobile, if isActive, the wave rises (h-[82%]) and reveals explanation! */}
                      <div 
                        className={`absolute inset-x-0 bottom-0 transition-all duration-500 ease-out flex flex-col justify-between z-20 ${
                          isActive ? 'h-[82%]' : 'h-[46%]'
                        }`}
                        style={{ background: project.theme.gradient }}
                      >
                        {/* Dual Layer Organic Wave SVG Header */}
                        <div className="absolute -top-[35px] left-0 right-0 w-full h-[36px] pointer-events-none overflow-hidden">
                          <svg className="w-full h-full" viewBox="0 0 400 40" preserveAspectRatio="none">
                            <path d="M0,20 C120,5 240,32 400,12 L400,40 L0,40 Z" fill={project.theme.waveFill} opacity="0.35" />
                            <path d="M0,28 C100,38 210,14 310,24 C350,28 380,22 400,18 L400,40 L0,40 Z" fill={project.theme.waveFill} />
                          </svg>
                        </div>

                        {/* Content Inside the Fluid Wave */}
                        <div className="px-6 py-5 relative z-10 flex flex-col justify-between h-full text-white">
                          
                          {/* When not active: unhovered summary */}
                          {!isActive && (
                            <div className="flex flex-col justify-between h-full">
                              <div>
                                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${project.theme.subtextColor} block`}>
                                  {project.categoryLabel}
                                </span>
                                <h3 className="text-xl font-black text-white tracking-tight mt-1 line-clamp-1">
                                  {project.title}
                                </h3>
                              </div>

                              <div className="flex items-center justify-between text-xs font-bold text-white pt-2 border-t border-white/20">
                                <span className="tracking-wider uppercase text-[10px] font-mono opacity-90">
                                  {project.theme.tags[0]}
                                </span>
                                <span className="tracking-wider uppercase text-[10px] font-mono opacity-90">
                                  {project.theme.tags[1]}
                                </span>
                              </div>
                            </div>
                          )}

                          {/* When isActive: hover animation active! (Wave risen, full explanation + action button shown) */}
                          {isActive && (
                            <div className="flex flex-col justify-between h-full animate-in fade-in duration-300">
                              <div>
                                <span className={`text-[10px] font-bold uppercase tracking-widest ${project.theme.subtextColor} font-mono`}>
                                  Client {project.num} &bull; {project.tagline}
                                </span>
                                <h4 className="text-xl font-black text-white tracking-tight mt-1 mb-2">
                                  {project.title}
                                </h4>
                                <p className="text-xs text-white/95 leading-relaxed font-normal line-clamp-3">
                                  {project.simpleExplanation}
                                </p>
                              </div>

                              <div className="flex items-center justify-between pt-3 border-t border-white/25">
                                <span className="text-xs font-semibold text-white/95">
                                  Click for technical brief
                                </span>
                                <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg scale-110">
                                  <ArrowRight className="w-4 h-4 stroke-[2.5]" style={{ color: project.theme.accentColor }} />
                                </div>
                              </div>
                            </div>
                          )}

                        </div>
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
              onClick={prevMobileProject}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm flex items-center justify-center active:scale-95 transition-all cursor-pointer"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {filteredProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileProjectIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === mobileProjectIndex ? 'w-6 bg-[#6842C2]' : 'w-1.5 bg-slate-200'
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextMobileProject}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm flex items-center justify-center active:scale-95 transition-all cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP 3x2 INTERACTIVE WAVY FLUID CARDS GRID            */}
        {/* ======================================================== */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className={`group relative bg-white rounded-[32px] border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] ${project.theme.hoverShadow} transition-all duration-500 hover:-translate-y-2 h-[460px] overflow-hidden flex flex-col justify-between cursor-pointer`}
            >
              
              {/* Top Mockup Showcase Stage */}
              <div className="relative w-full h-[255px] p-4 flex flex-col justify-between bg-gradient-to-b from-slate-50/60 via-white to-slate-50/30 overflow-hidden">
                {/* Top Metadata Pills */}
                <div className="relative z-20 flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-xs border border-slate-200/80 ${project.theme.textColor}`}>
                    Client {project.num}
                  </span>
                  <span className="text-[10px] font-mono font-medium text-slate-600 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs border border-slate-200/80 flex items-center gap-1.5 truncate max-w-[190px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="truncate">{project.tagline}</span>
                  </span>
                </div>

                {/* Centered Device Mockup Image */}
                <div className="relative z-10 w-full flex-1 flex items-center justify-center py-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-[175px] w-auto max-w-[94%] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* The Rising Liquid Wave Container */}
              <div 
                className="absolute inset-x-0 bottom-0 h-[46%] group-hover:h-[82%] transition-all duration-500 ease-out flex flex-col justify-between z-20"
                style={{ background: project.theme.gradient }}
              >
                {/* Dual Layer Organic Wave SVG Header */}
                <div className="absolute -top-[35px] left-0 right-0 w-full h-[36px] pointer-events-none overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 40" preserveAspectRatio="none">
                    {/* Layer 1: Translucent background liquid crest for depth */}
                    <path d="M0,20 C120,5 240,32 400,12 L400,40 L0,40 Z" fill={project.theme.waveFill} opacity="0.35" />
                    {/* Layer 2: Main organic wave curve matching gradient body */}
                    <path d="M0,28 C100,38 210,14 310,24 C350,28 380,22 400,18 L400,40 L0,40 Z" fill={project.theme.waveFill} />
                  </svg>
                </div>

                {/* Content Inside the Fluid Wave */}
                <div className="px-6 py-5 relative z-10 flex flex-col justify-between h-full text-white">
                  
                  {/* Default Unhovered State: Category, Title, and Tags */}
                  <div className="flex flex-col justify-between h-full group-hover:hidden transition-all duration-300">
                    <div>
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${project.theme.subtextColor} block`}>
                        {project.categoryLabel}
                      </span>
                      <h3 className="text-xl font-black text-white tracking-tight mt-1 line-clamp-1">
                        {project.title}
                      </h3>
                    </div>

                    {/* Tags */}
                    <div className="flex items-center justify-between text-xs font-bold text-white pt-2 border-t border-white/20">
                      <span className="tracking-wider uppercase text-[10px] font-mono opacity-90">
                        {project.theme.tags[0]}
                      </span>
                      <span className="tracking-wider uppercase text-[10px] font-mono opacity-90">
                        {project.theme.tags[1]}
                      </span>
                    </div>
                  </div>

                  {/* Hovered Expanded View (Revealed when wave rises: "while hover it explain simple") */}
                  <div className="hidden group-hover:flex flex-col justify-between h-full animate-in fade-in duration-300">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${project.theme.subtextColor} font-mono`}>
                        Client {project.num} &bull; {project.tagline}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1 mb-2">
                        {project.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal line-clamp-3">
                        {project.simpleExplanation}
                      </p>
                    </div>

                    {/* Hovered State: Click For Full Case Study Action Bar */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/25">
                      <span className="text-xs font-semibold text-white/95">
                        Click for technical brief
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" style={{ color: project.theme.accentColor }} />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ======================================================== */}
      {/* CASE STUDY DEEP DIVE POP-UP MODAL                        */}
      {/* ("while in pop-up it explain brief about the project")   */}
      {/* ======================================================== */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200 overscroll-contain"
          onClick={() => setActiveModalProject(null)}
          onTouchMove={(e) => {
            if (e.target === e.currentTarget) e.preventDefault();
          }}
          onWheel={(e) => {
            if (e.target === e.currentTarget) e.preventDefault();
          }}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all duration-300 scale-100 max-h-[92vh] flex flex-col overscroll-contain"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 pb-4 border-b border-slate-100 relative bg-slate-50/70">
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#6842C2] px-2.5 py-0.5 rounded-full">
                  CASE STUDY #{activeModalProject.num}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {activeModalProject.categoryLabel}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0E0725] tracking-tight mb-1">
                {activeModalProject.title}
              </h3>
              <p className="text-xs font-semibold text-[#6842C2] flex items-center gap-1.5">
                <span>{activeModalProject.tagline}</span>
              </p>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 space-y-6 overflow-y-auto text-sm leading-relaxed text-slate-600">
              
              {/* Product Mockup Showcase Banner */}
              <div className="w-full rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/80 border border-slate-200/80 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="max-h-56 sm:max-h-64 w-auto object-contain drop-shadow-xl"
                />
              </div>

              {/* Executive Overview Brief */}
              <div>
                <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                  PROJECT BRIEF & OVERVIEW
                </h4>
                <p className="text-slate-700 font-medium">
                  {activeModalProject.overview}
                </p>
              </div>

              {/* Problem vs Engineered Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 text-xs">
                  <span className="font-bold text-rose-700 block mb-1 text-[11px] uppercase tracking-wider font-mono">
                    The Business Problem
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {activeModalProject.problemSolved}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs">
                  <span className="font-bold text-emerald-700 block mb-1 text-[11px] uppercase tracking-wider font-mono">
                    The Engineered Solution
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {activeModalProject.architectureSolution}
                  </p>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  DELIVERABLES & TECHNICAL FEATURES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeModalProject.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Blueprint */}
              <div>
                <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  TECHNOLOGY BLUEPRINT
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs font-mono font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-lg border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Metrics Bar */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Live Verified Metrics
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                    ● PRODUCTION ACTIVE
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {activeModalProject.metrics.map((m, idx) => (
                    <div key={idx} className="p-2 rounded-xl bg-slate-800/50">
                      <div className={`text-sm sm:text-base font-black ${m.color}`}>
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-tight mt-0.5 font-medium">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Action Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
                Production architecture engineered by Uyar Technologies.
              </span>
              <button
                onClick={() => {
                  const service = getServiceForProject(activeModalProject.category);
                  metaPixel.trackViewContent(activeModalProject.title, 'Selected Case Studies Inquire');
                  setActiveModalProject(null);
                  if (onOpenEnquiry) {
                    onOpenEnquiry(service);
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#6842C2] hover:bg-[#522F9E] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-purple-900/15 cursor-pointer uppercase tracking-wider"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
