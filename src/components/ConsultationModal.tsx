import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Building2, MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledType?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledType = 'Hospitality'
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: prefilledType,
    projectLocation: 'Dubai, UAE',
    timeline: 'Within 3-6 months',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/15 p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#8E8E8E] hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-6 animate-in fade-in">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#D9A321]/10 border border-[#D9A321] flex items-center justify-center text-[#D9A321]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#D9A321] uppercase block mb-2">
                Inquiry Received · Reference LX-{Math.floor(1000 + Math.random() * 9000)}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Project Consultation Requested
              </h3>
              <p className="text-sm text-[#8E8E8E] mt-3 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-medium">{formData.name}</span>. Our architectural lighting engineering team in Dubai will review your brief and contact you within 24 business hours.
              </p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 text-left text-xs text-[#8E8E8E] max-w-md mx-auto space-y-1">
              <div><span className="text-white font-medium">Project:</span> {formData.projectType} · {formData.projectLocation}</div>
              <div><span className="text-white font-medium">Organization:</span> {formData.company || 'Private Inquiry'}</div>
              <div><span className="text-white font-medium">Direct Channel:</span> {formData.email}</div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3.5 bg-[#D9A321] text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8 border-b border-white/10 pb-5">
              <div className="flex items-center gap-2 text-[#D9A321] text-[11px] font-mono tracking-[0.2em] uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Architectural Lighting Advisory · UAE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Initiate a Project Consultation
              </h2>
              <p className="text-xs sm:text-sm text-[#8E8E8E] mt-2 font-light leading-relaxed">
                Whether you are an architect in early schematic concept or a contractor finalizing luminaire procurement, connect directly with LUMELEX lighting engineers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8E8E8E] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Al Mansoori"
                    className="w-full bg-[#141414] border border-white/15 px-3.5 py-2.5 text-white placeholder-white/30 focus:border-[#D9A321] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8E8E8E] mb-1.5">
                    Firm / Studio / Developer
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-white/40 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Studio Architects / Emaar"
                      className="w-full bg-[#141414] border border-white/15 pl-9 pr-3.5 py-2.5 text-white placeholder-white/30 focus:border-[#D9A321] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8E8E8E] mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-white/40 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tariq@firm.ae"
                      className="w-full bg-[#141414] border border-white/15 pl-9 pr-3.5 py-2.5 text-white placeholder-white/30 focus:border-[#D9A321] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8E8E8E] mb-1.5">
                    Contact Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-white/40 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 000 0000"
                      className="w-full bg-[#141414] border border-white/15 pl-9 pr-3.5 py-2.5 text-white placeholder-white/30 focus:border-[#D9A321] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8E8E8E] mb-1.5">
                    Project Typology *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#141414] border border-white/15 px-3.5 py-2.5 text-white focus:border-[#D9A321] focus:outline-none transition-colors"
                  >
                    <option value="Hospitality">Luxury Hospitality &amp; Resorts</option>
                    <option value="Commercial">Commercial Tower &amp; Atrium</option>
                    <option value="Residential">High-End Residential Villa / Estate</option>
                    <option value="Facade">Architectural Facade &amp; Media</option>
                    <option value="Landscape">Botanical &amp; Public Landscape</option>
                    <option value="Sports">Stadium &amp; Sports Arena</option>
                    <option value="Industrial">Industrial &amp; Logistics Hub</option>
                    <option value="Infrastructure">Infrastructure, Highway &amp; Bridges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8E8E8E] mb-1.5">
                    Location in UAE / GCC *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-white/40 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      placeholder="e.g. Dubai, Abu Dhabi, Riyadh"
                      className="w-full bg-[#141414] border border-white/15 pl-9 pr-3.5 py-2.5 text-white focus:border-[#D9A321] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8E8E8E] mb-1.5">
                    Project Timeline
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-white/40 absolute left-3 top-3" />
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[#141414] border border-white/15 pl-9 pr-3.5 py-2.5 text-white focus:border-[#D9A321] focus:outline-none transition-colors"
                    >
                      <option value="Concept (Immediate)">Concept / Schematic (Immediate)</option>
                      <option value="Within 3-6 months">Within 3-6 months</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="Tender / Procurement Phase">Tender / Procurement Phase</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8E8E8E] mb-1.5">
                    Primary Service Requirement
                  </label>
                  <select
                    className="w-full bg-[#141414] border border-white/15 px-3.5 py-2.5 text-white focus:border-[#D9A321] focus:outline-none transition-colors"
                  >
                    <option>Turnkey (Design, Supply, Install, Commission)</option>
                    <option>Photometric DIALux Calculation &amp; Design</option>
                    <option>Luminaire Specification &amp; Supply</option>
                    <option>Testing, Programming &amp; Commissioning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#8E8E8E] mb-1.5">
                  Project Brief &amp; Architectural Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about the spatial scale, facade heights, lux level requirements, or aesthetic vision..."
                  className="w-full bg-[#141414] border border-white/15 px-3.5 py-2.5 text-white placeholder-white/30 focus:border-[#D9A321] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-[#8E8E8E]">
                  Strict confidentiality guaranteed under UAE NDA standards.
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 bg-[#D9A321] text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.18em] hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Submit Project Inquiry'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
