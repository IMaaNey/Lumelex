import React, { useState } from 'react';
import { PageView } from '../types';
import { ArrowRight, MapPin, Mail, Phone, Clock, CheckCircle2, Sparkles } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageView) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Commercial',
    projectLocation: 'Dubai, UAE',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div id="lumelex-contact-page" className="w-full bg-[#0A0A0A] text-white pt-32 pb-24">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D9A321] block mb-3">
            DIRECT INQUIRY &middot; UAE OPERATIONS
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-white leading-tight mb-6">
            Let's talk about
            <br />
            <span className="text-[#D9A321]">your next project.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#D1CFC7] font-light max-w-2xl leading-relaxed">
            Connect directly with LUMELEX lighting consultants, photometric engineers, and project delivery directors in Dubai.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Left Contact Info + Right Minimal Inquiry Form */}
      <section className="px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Office & Coordinates */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9A321] uppercase block mb-4">
                UAE HEADQUARTERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Dubai, United Arab Emirates
              </h2>
              
              <div className="space-y-6 text-sm text-[#8E8E8E] font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D9A321] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-medium block">Studio &amp; Technical Center:</strong>
                    Dubai Design District (d3), Building 7
                    <br />
                    Dubai, United Arab Emirates
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#D9A321] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-medium block">Project Correspondence:</strong>
                    <a href="mailto:info@lumelex.com" className="text-white hover:text-[#D9A321] transition-colors underline">
                      info@lumelex.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D9A321] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-medium block">Direct Line:</strong>
                    <span className="text-white font-mono">+971 4 [Available Upon Inquiry]</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D9A321] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-medium block">Operating Hours:</strong>
                    Monday – Friday: 08:30 – 18:00 (GST)
                  </div>
                </div>
              </div>
            </div>

            {/* Architectural Service Assurance */}
            <div className="p-6 bg-[#141414] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-[#D9A321] text-xs font-mono tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Professional Commitment</span>
              </div>
              <p className="text-xs text-[#8E8E8E] leading-relaxed font-light">
                All tender drawings, DIALux schedules, and proprietary project documents remain strictly protected under UAE federal intellectual property and mutual non-disclosure frameworks.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/15 p-8 sm:p-12">
            {submitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#D9A321]/10 border border-[#D9A321] flex items-center justify-center text-[#D9A321]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-[#8E8E8E] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. A senior LUMELEX lighting engineer will analyze your brief and respond within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      projectType: 'Commercial',
                      projectLocation: 'Dubai, UAE',
                      message: '',
                    });
                  }}
                  className="px-8 py-3 bg-[#D9A321] text-[#0A0A0A] font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-mono tracking-[0.25em] text-[#D9A321] uppercase block mb-1">
                    PROJECT INQUIRY FORM
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Submit Project Specifications
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8E8E8E] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Faisal Al Qasimi"
                      className="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/25 focus:border-[#D9A321] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8E8E8E] mb-2">
                      Company / Practice *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Architectural Practice or Developer"
                      className="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/25 focus:border-[#D9A321] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8E8E8E] mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/25 focus:border-[#D9A321] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8E8E8E] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/25 focus:border-[#D9A321] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8E8E8E] mb-2">
                      Project Type *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-xs text-white focus:border-[#D9A321] focus:outline-none transition-colors"
                    >
                      <option value="Hospitality">Hospitality (Hotel, Resort, Dining)</option>
                      <option value="Commercial">Commercial (Tower, Office, Atrium)</option>
                      <option value="Residential">Residential (Villa, Estate, Penthouse)</option>
                      <option value="Facade">Architectural Facade &amp; Media</option>
                      <option value="Landscape">Landscape &amp; Public Realm</option>
                      <option value="Sports">Sports &amp; Stadium Arena</option>
                      <option value="Industrial">Industrial &amp; Logistics</option>
                      <option value="Infrastructure">Infrastructure &amp; Highway</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#8E8E8E] mb-2">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      placeholder="e.g. Dubai Marina / Abu Dhabi"
                      className="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/25 focus:border-[#D9A321] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8E8E8E] mb-2">
                    Project Message / Scope Description *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your project timeline, lux requirements, target aesthetic, or fixture quantities needed..."
                    className="w-full bg-[#0A0A0A] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/25 focus:border-[#D9A321] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[#D9A321] text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#D9A321]/15 disabled:opacity-50"
                  >
                    <span>{submitting ? 'Transmitting...' : 'Submit Project Inquiry →'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
