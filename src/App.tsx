import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConversionBar } from './components/ConversionBar';
import { Services } from './components/Services';
import { BrandStatement } from './components/BrandStatement';
import { SelectedWork } from './components/SelectedWork';
import { WhyUyar } from './components/WhyUyar';
import { DevelopmentJourney } from './components/DevelopmentJourney';
import { Testimonials } from './components/Testimonials';
import { VideosSection } from './components/VideosSection';
import { AboutUs } from './components/AboutUs';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { metaPixel } from './services/metaPixel';

export function App() {
  const [selectedService, setSelectedService] = useState<string>('Website Development');
  // Enquiry form pop-up opens first upon entering the site
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(true);

  useEffect(() => {
    // Initialize Meta Pixel tracking once on app mount
    metaPixel.init();
  }, []);

  const openEnquiryModal = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
  };

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#171717] flex flex-col font-sans selection:bg-[#6842C2] selection:text-white">
      {/* SECTION 01: Sticky Navigation Bar */}
      <Navbar 
        onStartProject={() => openEnquiryModal()} 
        onContact={() => openEnquiryModal()}
      />

      <main className="flex-grow">
        {/* SECTION 02: Impressive Hero Experience with Layered Software Products */}
        <Hero
          onBuildProject={() => openEnquiryModal()}
          onExploreWork={scrollToWork}
          onSelectService={(service) => openEnquiryModal(service)}
        />

        {/* SECTION 03: Immediate Trust Conversion Bar */}
        <ConversionBar />

        {/* SECTION 04: Editorial Asymmetric 12-Column Services Grid */}
        <Services onSelectService={(service) => openEnquiryModal(service)} />

        {/* SECTION 05: Visual Break - Large Editorial Brand Statement */}
        <BrandStatement />

        {/* SECTION 06: Selected Work - Alternating Case-Study Showcase */}
        <SelectedWork onOpenEnquiry={openEnquiryModal} />

        {/* SECTION 07: Why Uyar - Two-Column Distinctive Trust Section */}
        <WhyUyar />

        {/* SECTION 08: Development Journey - Interactive 5-Step Timeline */}
        <DevelopmentJourney />

        {/* SECTION 09: Testimonials - Verified Social Proof */}
        <Testimonials />

        {/* SECTION 10: Videos - Instagram Ratio (9:16) Reels & Product Demos */}
        <VideosSection onOpenEnquiry={openEnquiryModal} />

        {/* SECTION 11: About Us - Purpose & IDEA Lab Hub */}
        <AboutUs onWorkTogether={() => openEnquiryModal()} />

        {/* SECTION 11: Final Conversion Section */}
        <FinalCTA onStartProject={() => openEnquiryModal()} />
      </main>

      {/* SECTION 12: Minimalist Enterprise Footer */}
      <Footer onOpenEnquiry={() => openEnquiryModal()} />

      {/* High-Conversion Pop-up Enquiry Modal */}
      <EnquiryModal 
        isOpen={isEnquiryModalOpen} 
        onClose={closeEnquiryModal} 
        initialService={selectedService} 
      />
    </div>
  );
}

export default App;
