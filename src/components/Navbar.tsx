import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import brandLogo from '../assets/uyar-horizontal-removebg-preview.png';

interface NavbarProps {
  onStartProject: () => void;
  onContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject, onContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string, tabName: string) => {
    setActiveTab(tabName);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-purple-100/80 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home', 'home');
            }}
            className="flex items-center group cursor-pointer"
            aria-label="Uyar Technologies"
          >
            <img
              src={brandLogo}
              alt="Uyar Technologies"
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <button
              onClick={() => scrollTo('home', 'home')}
              className={`relative py-1 transition-colors cursor-pointer ${
                activeTab === 'home' ? 'text-purple-700 font-bold' : 'hover:text-purple-700'
              }`}
            >
              <span>Home</span>
              {activeTab === 'home' && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-purple-700" />
              )}
            </button>

            <button
              onClick={() => scrollTo('services', 'services')}
              className={`py-1 transition-colors cursor-pointer ${
                activeTab === 'services' ? 'text-purple-700 font-bold' : 'hover:text-purple-700'
              }`}
            >
              Services
            </button>

            <button
              onClick={() => scrollTo('work', 'work')}
              className={`py-1 transition-colors cursor-pointer ${
                activeTab === 'work' ? 'text-purple-700 font-bold' : 'hover:text-purple-700'
              }`}
            >
              Our Work
            </button>

            <button
              onClick={() => scrollTo('testimonials', 'reviews')}
              className={`py-1 transition-colors cursor-pointer ${
                activeTab === 'reviews' ? 'text-purple-700 font-bold' : 'hover:text-purple-700'
              }`}
            >
              Reviews
            </button>

            <button
              onClick={() => scrollTo('videos', 'videos')}
              className={`py-1 transition-colors cursor-pointer ${
                activeTab === 'videos' ? 'text-purple-700 font-bold' : 'hover:text-purple-700'
              }`}
            >
              Videos
            </button>

            <button
              onClick={() => scrollTo('about', 'about')}
              className={`py-1 transition-colors cursor-pointer ${
                activeTab === 'about' ? 'text-purple-700 font-bold' : 'hover:text-purple-700'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => {
                setActiveTab('contact');
                if (onContact) {
                  onContact();
                } else {
                  onStartProject();
                }
              }}
              className={`py-1 transition-colors cursor-pointer ${
                activeTab === 'contact' ? 'text-purple-700 font-bold' : 'hover:text-purple-700'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action: Purple Gradient Pill Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onStartProject}
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#5B21B6] via-[#6842C2] to-[#7C3AED] hover:from-[#4C1D95] hover:to-[#6D28D9] text-white text-xs font-bold tracking-wide shadow-md shadow-purple-500/20 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-purple-700 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-purple-100 bg-white/98 backdrop-blur-xl px-6 pt-4 pb-8 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3.5 text-base font-semibold text-slate-800">
            <button
              onClick={() => scrollTo('home', 'home')}
              className="text-left py-2 border-b border-slate-100 hover:text-purple-700"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('services', 'services')}
              className="text-left py-2 border-b border-slate-100 hover:text-purple-700"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('work', 'work')}
              className="text-left py-2 border-b border-slate-100 hover:text-purple-700"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollTo('testimonials', 'reviews')}
              className="text-left py-2 border-b border-slate-100 hover:text-purple-700"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollTo('videos', 'videos')}
              className="text-left py-2 border-b border-slate-100 hover:text-purple-700"
            >
              Videos
            </button>
            <button
              onClick={() => scrollTo('about', 'about')}
              className="text-left py-2 border-b border-slate-100 hover:text-purple-700"
            >
              About Us
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveTab('contact');
                if (onContact) {
                  onContact();
                } else {
                  onStartProject();
                }
              }}
              className="text-left py-2 border-b border-slate-100 hover:text-purple-700"
            >
              Contact
            </button>

            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onStartProject();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-[#5B21B6] to-[#7C3AED] text-white text-xs font-bold shadow-md"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
