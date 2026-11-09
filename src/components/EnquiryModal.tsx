import React, { useState, useEffect } from 'react';
import { 
  X,
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Lock, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitProjectEnquiry, type LeadFormData } from '../services/api';
import { metaPixel } from '../services/metaPixel';

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ 
  isOpen, 
  onClose, 
  initialService = 'Website Development' 
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: initialService,
    budget: '₹50,000 – ₹1,00,000',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  // Synchronize initial service when modal opens or service changes
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService, isOpen]);

  // Handle ESC key and lock background scroll completely across document
  useEffect(() => {
    if (!isOpen) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    // Lock both body and root html to prevent any background scrolling
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const serviceOptions = [
    'Website Development',
    'Web Application',
    'Mobile Application',
    'SaaS Application',
    'LMS',
    'ERP',
    'Customized Software',
    'Other'
  ];

  const budgetOptions = [
    'Below ₹25,000',
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹3,00,000',
    'Above ₹3,00,000',
    'Not Sure Yet'
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    // Indian phone number validation (10 digits starting with 6,7,8,9, optional +91 prefix)
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    const indianPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!indianPhoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please provide a valid 10-digit Indian phone number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select what you are looking for';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting || isSubmitted) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setServerMessage(null);

    try {
      const response = await submitProjectEnquiry(formData);

      if (response.success) {
        setIsSubmitted(true);
        setServerMessage(response.message);

        // Fire Meta Pixel Lead event ONLY after success confirmation
        metaPixel.trackLead({
          service: formData.service,
          budget: formData.budget,
          eventId: response.eventId
        });

        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } else {
        setServerMessage(response.message || 'Submission encountered an error. Please try again.');
      }
    } catch (err) {
      console.error('Lead submission failure:', err);
      setServerMessage('Unable to submit enquiry right now. Please call us directly at +91 79040 75373.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setServerMessage(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      service: initialService,
      budget: '₹50,000 – ₹1,00,000',
      message: ''
    });
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto overscroll-contain"
      role="dialog"
      aria-modal="true"
    >
      {/* Dimmed Backdrop */}
      <div 
        className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        onTouchMove={(e) => e.preventDefault()}
        onWheel={(e) => e.preventDefault()}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/80 my-auto z-10 animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Split Screen Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[92vh] sm:max-h-[88vh] overflow-y-auto overscroll-contain">
          
          {/* Left Hero Panel (Charcoal Dark Theme - visible on desktop/laptop) */}
          <div className="hidden lg:flex lg:col-span-5 bg-[#171717] text-white p-6 sm:p-8 lg:p-10 flex-col justify-between relative overflow-hidden">
            {/* Subtle brand glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6842C2]/25 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#EEE8FA] text-[11px] font-mono tracking-widest uppercase mb-4 backdrop-blur-sm border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-[#EEE8FA]" />
                <span>START A CONVERSATION</span>
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight mb-3">
                Let's Build Something<br />
                <span className="text-[#EEE8FA]">Exceptional.</span>
              </h2>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal mb-6">
                Tell us what you're planning. Our team is ready to explore architectural solutions and give you a clear roadmap.
              </p>

              {/* Explicit Highlights */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#6842C2]/40 text-[#EEE8FA] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">
                      Tailored To Your Operations
                    </h4>
                    <p className="text-[11px] text-white/60 leading-relaxed">
                      Custom software built to mirror your workflow with zero restrictive templates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#6842C2]/40 text-[#EEE8FA] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">
                      Clear Milestone Roadmaps
                    </h4>
                    <p className="text-[11px] text-white/60 leading-relaxed">
                      Bi-weekly sprint deliverables, architectural reviews, and guaranteed timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#6842C2]/40 text-[#EEE8FA] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">
                      Direct Developer Access
                    </h4>
                    <p className="text-[11px] text-white/60 leading-relaxed">
                      Connect straight with technical leads throughout development and post-launch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Line Footer in Left Panel */}
            <div className="relative z-10 pt-4 border-t border-white/10 space-y-1.5 text-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">
                Direct Contact
              </span>
              <a
                href="tel:+917904075373"
                className="flex items-center gap-2 font-semibold text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#6842C2]" />
                <span>+91 79040 75373</span>
              </a>
              <a
                href="mailto:uyartechnologies26@gmail.com"
                className="flex items-center gap-2 font-semibold text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#6842C2]" />
                <span>uyartechnologies26@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Panel: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            
            {isSubmitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#EEE8FA] text-[#6842C2] flex items-center justify-center mb-4 animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#171717] mb-2 tracking-tight">
                  Enquiry Received Successfully!
                </h3>
                <p className="text-[#171717]/70 max-w-sm mx-auto mb-5 text-xs sm:text-sm leading-relaxed">
                  {serverMessage || 'Thank you for reaching out. A Senior Solutions Consultant will review your specs and connect with you within 24 hours.'}
                </p>

                <div className="p-4 bg-[#FAFAF8] rounded-xl border border-[#EAEAE6] text-left text-xs text-[#171717]/80 max-w-xs w-full mb-6 space-y-1.5 font-mono">
                  <div><strong className="text-[#171717] font-sans">Client:</strong> {formData.fullName}</div>
                  <div><strong className="text-[#171717] font-sans">Service:</strong> {formData.service}</div>
                  <div><strong className="text-[#171717] font-sans">Phone:</strong> {formData.phone}</div>
                  <div><strong className="text-[#171717] font-sans">Email:</strong> {formData.email}</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-full bg-[#6842C2] hover:bg-[#522F9E] text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
                  >
                    Done / Close Window
                  </button>
                  <button
                    onClick={handleReset}
                    className="text-xs font-bold text-[#6842C2] hover:underline cursor-pointer py-1"
                  >
                    Submit another enquiry →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                
                <div className="mb-5 pr-8">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#171717] tracking-tight mb-1">
                    Tell Us About Your Project.
                  </h3>
                  <p className="text-xs text-[#171717]/60">
                    Provide your requirements below and receive an architectural estimate.
                  </p>
                </div>

                {serverMessage && (
                  <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{serverMessage}</span>
                  </div>
                )}

                <div className="space-y-3.5">
                  
                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="modal-fullName" className="block text-[11px] font-bold text-[#171717] mb-1 uppercase tracking-wide">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="modal-fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        autoComplete="name"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#171717] bg-[#FAFAF8] placeholder-[#171717]/30 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName 
                            ? 'border-red-400 focus:ring-red-100' 
                            : 'border-[#EAEAE6] focus:border-[#6842C2] focus:ring-[#EEE8FA]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="modal-email" className="block text-[11px] font-bold text-[#171717] mb-1 uppercase tracking-wide">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ramesh@company.com"
                        autoComplete="email"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#171717] bg-[#FAFAF8] placeholder-[#171717]/30 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.email 
                            ? 'border-red-400 focus:ring-red-100' 
                            : 'border-[#EAEAE6] focus:border-[#6842C2] focus:ring-[#EEE8FA]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="modal-phone" className="block text-[11px] font-bold text-[#171717] mb-1 uppercase tracking-wide">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="modal-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 98765 43210"
                        autoComplete="tel"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#171717] bg-[#FAFAF8] placeholder-[#171717]/30 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.phone 
                            ? 'border-red-400 focus:ring-red-100' 
                            : 'border-[#EAEAE6] focus:border-[#6842C2] focus:ring-[#EEE8FA]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="modal-companyName" className="block text-[11px] font-bold text-[#171717] mb-1 uppercase tracking-wide">
                        Company Name <span className="text-[#171717]/40 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="modal-companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Enterprises"
                        autoComplete="organization"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAEAE6] text-xs sm:text-sm text-[#171717] bg-[#FAFAF8] placeholder-[#171717]/30 focus:bg-white focus:outline-none focus:border-[#6842C2] focus:ring-2 focus:ring-[#EEE8FA] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Selection & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="modal-service" className="block text-[11px] font-bold text-[#171717] mb-1 uppercase tracking-wide">
                        What Are You Looking For? <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="modal-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAEAE6] text-xs sm:text-sm text-[#171717] bg-[#FAFAF8] focus:bg-white focus:outline-none focus:border-[#6842C2] focus:ring-2 focus:ring-[#EEE8FA] transition-all cursor-pointer font-medium"
                      >
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.service}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="modal-budget" className="block text-[11px] font-bold text-[#171717] mb-1 uppercase tracking-wide">
                        Estimated Project Budget <span className="text-[#171717]/40 font-normal lowercase">(optional)</span>
                      </label>
                      <select
                        id="modal-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAEAE6] text-xs sm:text-sm text-[#171717] bg-[#FAFAF8] focus:bg-white focus:outline-none focus:border-[#6842C2] focus:ring-2 focus:ring-[#EEE8FA] transition-all cursor-pointer font-medium"
                      >
                        {budgetOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Project Description Textarea */}
                  <div>
                    <label htmlFor="modal-message" className="block text-[11px] font-bold text-[#171717] mb-1 uppercase tracking-wide">
                      Tell Us About Your Project <span className="text-[#171717]/40 font-normal lowercase">(optional)</span>
                    </label>
                    <textarea
                      id="modal-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what you want to build, key features, and timeline..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-[#171717] bg-[#FAFAF8] placeholder-[#171717]/30 focus:bg-white focus:outline-none focus:ring-2 transition-all resize-y ${
                        errors.message 
                          ? 'border-red-400 focus:ring-red-100' 
                          : 'border-[#EAEAE6] focus:border-[#6842C2] focus:ring-[#EEE8FA]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-red-600 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-full bg-[#6842C2] hover:bg-[#522F9E] disabled:bg-[#EAEAE6] disabled:text-[#171717]/40 disabled:cursor-not-allowed text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-1"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Your Project Specs...</span>
                      </>
                    ) : (
                      <>
                        <span>Let's Discuss My Project →</span>
                      </>
                    )}
                  </button>

                  {/* Privacy Assurance */}
                  <div className="flex items-center justify-center gap-2 text-[#171717]/40 text-[11px] pt-1">
                    <Lock className="w-3 h-3" />
                    <span>Protected under Mutual NDA. No spam guarantee.</span>
                  </div>

                </div>
              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
