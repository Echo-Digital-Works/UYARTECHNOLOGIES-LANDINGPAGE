import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import logoImg from '../assets/uyar-horizontal-removebg-preview.png';

interface FooterProps {
  onOpenEnquiry?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] text-white/70 pt-10 sm:pt-12 pb-8 sm:pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">

          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="bg-white px-3.5 py-1.5 rounded-xl mb-4">
              <img
                src={logoImg}
                alt="Uyar Technologies Private Limited"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-xs font-mono font-bold tracking-widest text-[#EEE8FA] uppercase mb-3">
              Think Higher. Build Smarter.
            </p>

            <p className="text-xs text-white/50 leading-relaxed max-w-sm mb-6">
              Uyar Technologies Private Limited is an Indian technology firm engineering high-performance websites, custom web applications, mobile platforms, SaaS, LMS, and ERP solutions for forward-looking businesses.
            </p>

            {/* Social Presences */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/uyartech.official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#6842C2] text-white/70 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://facebook.com/uyartechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#6842C2] text-white/70 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/company/uyartechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#6842C2] text-white/70 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors cursor-pointer">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('work')} className="hover:text-white transition-colors cursor-pointer">
                  Selected Work
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('why-uyar')} className="hover:text-white transition-colors cursor-pointer">
                  Why Uyar
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('journey')} className="hover:text-white transition-colors cursor-pointer">
                  Our Journey
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('videos')} className="hover:text-white transition-colors cursor-pointer">
                  Featured Videos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (onOpenEnquiry) {
                      onOpenEnquiry();
                    } else {
                      scrollTo('home');
                    }
                  }} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Start Project Enquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>Custom Website Development</li>
              <li>Web Application Engineering</li>
              <li>Mobile App Development (iOS/Android)</li>
              <li>SaaS Application Architecture</li>
              <li>LMS Platforms</li>
              <li>ERP & Business Software</li>
              <li>Customized Software Solutions</li>
            </ul>
          </div>

          {/* Column 4: Official Headquarters Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-white/60">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6842C2] shrink-0 mt-0.5" />
                <span>
                  K.S. Rangasamy College of Technology,<br />
                  IDEA Lab, Ground Floor, Thiruchengodu - 637 215, Tamil Nadu, India.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#6842C2] shrink-0" />
                <a href="tel:+917904075373" className="hover:text-white transition-colors">
                  +91 79040 75373 (Mon - Sat, 9am - 6pm)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#6842C2] shrink-0" />
                <a href="mailto:uyartechnologies26@gmail.com" className="hover:text-white transition-colors">
                  uyartechnologies26@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <div>
            © {new Date().getFullYear()} Uyar Technologies Private Limited. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
