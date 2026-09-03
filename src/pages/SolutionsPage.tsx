import React from 'react';
import { PageView } from '../types';
import { SOLUTIONS_SERVICES } from '../data/lightingData';
import { ArrowRight, CheckCircle2, FileText, Cpu, Compass, Shield, Wrench, Activity } from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: PageView) => void;
  onOpenConsultation: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div id="lumelex-solutions-page" className="w-full bg-[#0A0A0A] text-white pt-32 pb-24">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D9A321]" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#8E8E8E]">
              COMPREHENSIVE SCOPE · UAE &amp; GCC
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-bold tracking-tight text-white leading-tight mb-8">
            From calculation
            <br />
            <span className="text-[#D9A321]">to commissioning.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-[#D1CFC7] font-light max-w-3xl leading-relaxed">
            LUMELEX delivers the complete lighting lifecycle under a unified engineering accountability framework—ensuring aesthetic fidelity and operational durability.
          </p>
        </div>
      </section>

      {/* Overview Pillars - Warm Ivory */}
      <section className="bg-[#F4F1EA] text-[#0A0A0A] py-20 px-6 sm:px-8 lg:px-12 border-b border-[#0A0A0A]/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D9A321] font-bold block mb-2">
              ENGINEERING PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0A]">
              We eliminate the gap between design renderings and installed reality.
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-[#0A0A0A]/75 max-w-md font-light leading-relaxed">
            Standard lighting vendors drop boxes on site. LUMELEX verifies the optical angles, thermal paths, and control network protocols from initial calculation through handover.
          </div>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="px-6 sm:px-8 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto space-y-16">
          {SOLUTIONS_SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="bg-[#141414] border border-white/15 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 hover:border-[#D9A321]/50 transition-colors"
            >
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-mono font-bold text-[#D9A321]">
                    {service.number}
                  </span>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#8E8E8E]">
                    PHASE {service.number}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-[#8E8E8E] font-light italic">
                  &ldquo;{service.shortDesc}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-[#D1CFC7] font-light leading-relaxed pt-2">
                  {service.fullDesc}
                </p>

                <div className="pt-4 text-xs font-mono text-[#D9A321]">
                  Standards: {service.specs}
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#0A0A0A] p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#8E8E8E] uppercase block mb-4">
                    KEY DELIVERABLES &amp; DOCUMENTATION
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 p-3 bg-white/5 border border-white/5 text-xs text-white"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D9A321] shrink-0 mt-0.5" />
                        <span className="font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#8E8E8E]">Available across Dubai, Abu Dhabi, and the GCC</span>
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-semibold text-[#D9A321] hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Inquire on {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance / Certifications Bar */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 bg-[#121212] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="text-2xl font-bold text-white block mb-1">DIALux EVO</span>
            <span className="text-xs text-[#8E8E8E] font-mono uppercase tracking-wider">Certified Calculation</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-white block mb-1">Al Sa'fat / Estidama</span>
            <span className="text-xs text-[#8E8E8E] font-mono uppercase tracking-wider">UAE Green Building Compliant</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-white block mb-1">DALI-2 / DMX-512</span>
            <span className="text-xs text-[#8E8E8E] font-mono uppercase tracking-wider">Open Protocol Commissioning</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-white block mb-1">+55&deg;C Ambient</span>
            <span className="text-xs text-[#8E8E8E] font-mono uppercase tracking-wider">Thermal Heat Verified</span>
          </div>
        </div>
      </section>

      {/* Solutions CTA */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Have a project tender or schematic drawing?
          </h2>
          <p className="text-base text-[#8E8E8E] font-light max-w-xl mx-auto">
            Send our engineering team your CAD or DIALux files for a preliminary photometric review and luminaire schedule optimization.
          </p>
          <div className="pt-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#D9A321] text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors cursor-pointer"
            >
              Submit Drawings for Review &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
