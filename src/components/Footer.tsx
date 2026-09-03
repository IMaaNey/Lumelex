import React from 'react';
import { PageView } from '../types';
import { PRODUCT_CATEGORIES } from '../data/lightingData';
import { ArrowUpRight, MapPin, Mail, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView, categoryFilter?: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const handleNav = (page: PageView, catFilter?: string) => {
    onNavigate(page, catFilter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="lumelex-footer" className="bg-[#0A0A0A] text-white border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Branding Strip */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-16 border-b border-white/10 gap-8">
          <div>
            <span className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[0.2em] text-white block">
              LUMELEX
            </span>
            <p className="text-base sm:text-lg text-[#8E8E8E] mt-3 max-w-md font-light">
              Lighting engineered beautifully. The silent architect of modern GCC environments.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 bg-[#D9A321] text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>Initiate Project Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Column Structure */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-16 border-b border-white/10 text-xs">
          {/* Column 1: Products */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#D9A321] uppercase block mb-5">
              Portfolio Categories
            </span>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleNav('products', cat.id)}
                  className="text-left text-[#8E8E8E] hover:text-white transition-colors flex items-center gap-2 py-0.5 cursor-pointer group"
                >
                  <span className="font-mono text-[10px] text-[#D9A321]/60 group-hover:text-[#D9A321]">
                    {cat.number}
                  </span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#D9A321] uppercase block mb-5">
              Solutions
            </span>
            <ul className="space-y-3 text-[#8E8E8E]">
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Consultancy & Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Photometric Calculations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Product Specification
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Supply & Procurement
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Site Installation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Testing & Commissioning
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#D9A321] uppercase block mb-5">
              Company
            </span>
            <ul className="space-y-3 text-[#8E8E8E]">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About LUMELEX
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Selected Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Engineering Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Architectural Thinking
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Direct Contact */}
          <div>
            <span className="font-mono text-[11px] tracking-[0.25em] text-[#D9A321] uppercase block mb-5">
              UAE Headquarters
            </span>
            <div className="space-y-3 text-[#8E8E8E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9A321] shrink-0 mt-0.5" />
                <span>
                  Dubai Design District (d3) &amp; Abu Dhabi Operations
                  <br />
                  <span className="text-white font-medium">United Arab Emirates</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-2">
                <Mail className="w-4 h-4 text-[#D9A321] shrink-0" />
                <a href="mailto:info@lumelex.com" className="text-white hover:text-[#D9A321] transition-colors">
                  info@lumelex.com
                </a>
              </div>
              <div className="pt-2 text-[11px] text-[#8E8E8E] leading-relaxed">
                Serving architects, developers, interior designers, and governmental infrastructure projects across the UAE &amp; GCC.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8E8E8E] tracking-wider gap-4">
          <div className="flex items-center gap-4">
            <span>&copy; 2026 LUMELEX. All Rights Reserved.</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-[#D9A321] flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> UAE Architectural Lighting Solutions
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms &amp; Conditions</span>
            <span className="hover:text-white cursor-pointer transition-colors">Specification Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
