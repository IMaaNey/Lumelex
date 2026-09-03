import React from 'react';
import { PageView } from '../types';
import { ArrowRight, ShieldCheck, Check, Sparkles, Compass, Cpu, Layers } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div id="lumelex-about-page" className="w-full bg-[#0A0A0A] text-white pt-32">
      {/* Hero */}
      <section className="px-6 sm:px-8 lg:px-12 pb-24 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D9A321]" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#8E8E8E]">
              ABOUT LUMELEX · UAE
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-bold tracking-tight text-white leading-tight mb-8">
            Lighting with
            <br />
            <span className="text-[#D9A321]">purpose.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-[#D1CFC7] font-light max-w-3xl leading-relaxed">
            Headquartered in the United Arab Emirates, LUMELEX is an architectural and professional lighting solutions studio engineering the intersection of architectural form, human experience, and optical precision.
          </p>
        </div>
      </section>

      {/* Brand Philosophy - Ivory Section */}
      <section className="bg-[#F4F1EA] text-[#0A0A0A] py-28 px-6 sm:px-8 lg:px-12 border-b border-[#0A0A0A]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono tracking-[0.25em] text-[#D9A321] font-bold uppercase block mb-3">
              THE CORE BELIEF
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
              &ldquo;More than
              <br />
              illumination.&rdquo;
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#0A0A0A]/80 font-light leading-relaxed">
            <p>
              Light is not simply illumination. It is an architectural element that shapes atmosphere, experience, identity and performance.
            </p>
            <p>
              Founded to serve the high-tempo, ambitious architectural landscape of the UAE and the broader GCC, LUMELEX bridges the critical divide between pure aesthetic vision and rigorous technical execution.
            </p>
            <p className="text-sm text-[#0A0A0A]/70">
              We collaborate with premier architectural practices, landscape masters, engineering consultants, and developers to curate lighting solutions that endure the harsh desert climate while delivering poetic visual comfort.
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Pillars of Capability */}
      <section className="py-28 px-6 sm:px-8 lg:px-12 border-b border-white/10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D9A321] block mb-3">
              FOUR DISCIPLINES, ONE HOUSE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              The anatomy of a LUMELEX project.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#141414] border border-white/15 p-8 space-y-4">
              <Compass className="w-8 h-8 text-[#D9A321]" />
              <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                Design Thinking
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8E8E] font-light leading-relaxed">
                Respecting the architect's massing, texture, and sightlines. Light that emphasizes spatial volume with zero visual glare.
              </p>
            </div>

            <div className="bg-[#141414] border border-white/15 p-8 space-y-4">
              <Cpu className="w-8 h-8 text-[#D9A321]" />
              <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                Technical Performance
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8E8E] font-light leading-relaxed">
                Photometrics modeled in DIALux EVO, verified against international standards (CIE, CIBSE, IESNA) and UAE Estidama / Al Sa'fat mandates.
              </p>
            </div>

            <div className="bg-[#141414] border border-white/15 p-8 space-y-4">
              <Layers className="w-8 h-8 text-[#D9A321]" />
              <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                Product Portfolio
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8E8E] font-light leading-relaxed">
                Nine curated disciplines engineered for 55°C ambient resilience, marine salt spray durability, and flawless batch consistency.
              </p>
            </div>

            <div className="bg-[#141414] border border-white/15 p-8 space-y-4">
              <ShieldCheck className="w-8 h-8 text-[#D9A321]" />
              <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                Project Execution
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8E8E] font-light leading-relaxed">
                On-site engineering supervision, physical aiming, control protocol integration (DALI-2, DMX512), and turnkey handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Architectural Showcase Banner */}
      <section className="relative h-96 sm:h-[480px] overflow-hidden border-b border-white/10">
        <img
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=80"
          alt="Dubai Architectural Skyline at Night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/60 flex items-center justify-center text-center p-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D9A321]">
              COMMITTED TO GCC EXCELLENCE
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Designing light for the world's most daring architectural canvas.
            </h3>
          </div>
        </div>
      </section>

      {/* Final Action */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 text-center bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to integrate LUMELEX into your practice?
          </h3>
          <p className="text-sm text-[#8E8E8E] max-w-lg mx-auto font-light">
            We welcome architects, interior designers, and project managers to review fixture samples or request calculations.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 bg-[#D9A321] text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors cursor-pointer"
            >
              Get a Consultation &rarr;
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-3.5 border border-white/20 text-white font-semibold text-xs uppercase tracking-[0.2em] hover:border-[#D9A321] hover:text-[#D9A321] transition-colors cursor-pointer"
            >
              View Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
