import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { PRODUCT_CATEGORIES, SOLUTIONS_SERVICES } from '../data/lightingData';
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, categoryFilter?: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<'products' | 'solutions' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(PRODUCT_CATEGORIES[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: PageView, categoryFilter?: string) => {
    setActiveMega(null);
    setMobileMenuOpen(false);
    onNavigate(page, categoryFilter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="lumelex-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-4'
            : 'bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent border-b border-white/5 py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-[0.22em] text-white group-hover:text-[#D9A321] transition-colors duration-200">
                LUMELEX
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#8E8E8E] font-medium -mt-0.5">
                Lighting Solutions · UAE
              </span>
            </div>
          </button>

          {/* Center Navigation Desktop */}
          <nav id="desktop-main-nav" className="hidden lg:flex items-center space-x-10 text-[13px] uppercase tracking-[0.18em] font-medium text-[#D1CFC7]">
            {/* Products with Mega Menu */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveMega('products')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <button
                id="nav-products-btn"
                onClick={() => handleLinkClick('products')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                  currentPage === 'products' ? 'text-[#D9A321]' : 'hover:text-white'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMega === 'products' ? 'rotate-180 text-[#D9A321]' : ''}`} />
              </button>

              {/* Products Mega Dropdown */}
              {activeMega === 'products' && (
                <div
                  id="products-mega-menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[840px] bg-[#0A0A0A] border border-white/15 p-6 shadow-2xl rounded-none grid grid-cols-12 gap-6 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="col-span-8 grid grid-cols-2 gap-x-6 gap-y-3">
                    <div className="col-span-2 pb-2 mb-1 border-b border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-semibold tracking-[0.25em] text-[#8E8E8E]">
                        NINE LIGHTING WORLDS
                      </span>
                      <button
                        onClick={() => handleLinkClick('products')}
                        className="text-[11px] text-[#D9A321] hover:underline normal-case tracking-normal flex items-center gap-1"
                      >
                        View all portfolio <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onMouseEnter={() => setHoveredCategory(cat)}
                        onClick={() => handleLinkClick('products', cat.id)}
                        className="flex items-start gap-3 p-2 text-left hover:bg-white/5 transition-colors group cursor-pointer"
                      >
                        <span className="text-[10px] font-mono text-[#D9A321] pt-0.5">{cat.number}</span>
                        <div>
                          <div className="text-white text-xs font-semibold tracking-wider group-hover:text-[#D9A321] transition-colors">
                            {cat.name}
                          </div>
                          <div className="text-[11px] normal-case tracking-normal text-[#8E8E8E] line-clamp-1">
                            {cat.headline}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Mega Menu Visual Preview */}
                  <div className="col-span-4 bg-[#141414] p-4 flex flex-col justify-between border border-white/10 relative overflow-hidden">
                    <div className="relative h-44 w-full overflow-hidden mb-3">
                      <img
                        src={hoveredCategory.imageUrl}
                        alt={hoveredCategory.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                      <span className="absolute bottom-2 left-2 text-[10px] font-mono tracking-widest text-[#D9A321] bg-black/80 px-2 py-0.5 border border-[#D9A321]/30">
                        {hoveredCategory.number} / 09
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-1">
                        {hoveredCategory.name}
                      </h4>
                      <p className="text-[11px] normal-case text-[#8E8E8E] line-clamp-2 mb-3">
                        {hoveredCategory.description}
                      </p>
                      <button
                        onClick={() => handleLinkClick('products', hoveredCategory.id)}
                        className="text-[11px] text-[#D9A321] font-semibold flex items-center gap-1.5 uppercase tracking-wider hover:translate-x-1 transition-transform"
                      >
                        Explore Category <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions with Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveMega('solutions')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <button
                id="nav-solutions-btn"
                onClick={() => handleLinkClick('solutions')}
                className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 ${
                  currentPage === 'solutions' ? 'text-[#D9A321]' : 'hover:text-white'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMega === 'solutions' ? 'rotate-180 text-[#D9A321]' : ''}`} />
              </button>

              {activeMega === 'solutions' && (
                <div
                  id="solutions-mega-menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-[#0A0A0A] border border-white/15 p-5 shadow-2xl rounded-none grid grid-cols-1 gap-2 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="pb-2 border-b border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-[0.25em] text-[#8E8E8E]">
                      END-TO-END CAPABILITY
                    </span>
                    <span className="text-[10px] text-[#D9A321]">Design · Specify · Install · Commission</span>
                  </div>
                  {SOLUTIONS_SERVICES.map((sol) => (
                    <button
                      key={sol.id}
                      onClick={() => handleLinkClick('solutions')}
                      className="p-2.5 text-left hover:bg-white/5 flex items-start gap-3 transition-colors group cursor-pointer"
                    >
                      <span className="text-[10px] font-mono text-[#D9A321] pt-0.5">{sol.number}</span>
                      <div>
                        <div className="text-white text-xs font-semibold tracking-wider group-hover:text-[#D9A321] transition-colors">
                          {sol.title}
                        </div>
                        <div className="text-[11px] normal-case tracking-normal text-[#8E8E8E]">
                          {sol.shortDesc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Projects Link */}
            <button
              id="nav-projects-btn"
              onClick={() => handleLinkClick('projects')}
              className={`transition-colors cursor-pointer py-1 ${
                currentPage === 'projects' ? 'text-[#D9A321]' : 'hover:text-white'
              }`}
            >
              Projects
            </button>

            {/* About Link */}
            <button
              id="nav-about-btn"
              onClick={() => handleLinkClick('about')}
              className={`transition-colors cursor-pointer py-1 ${
                currentPage === 'about' ? 'text-[#D9A321]' : 'hover:text-white'
              }`}
            >
              About
            </button>
          </nav>

          {/* Right Action Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              id="nav-contact-btn"
              onClick={() => handleLinkClick('contact')}
              className={`text-[12px] uppercase tracking-[0.18em] font-medium transition-colors cursor-pointer ${
                currentPage === 'contact' ? 'text-[#D9A321]' : 'text-[#8E8E8E] hover:text-white'
              }`}
            >
              Contact
            </button>

            <button
              id="nav-get-consultation-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#D9A321] text-[#D9A321] text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-[#D9A321] hover:text-[#0A0A0A] transition-all duration-200 cursor-pointer"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              id="mobile-consultation-quick-btn"
              onClick={onOpenConsultation}
              className="px-3 py-1.5 border border-[#D9A321] text-[#D9A321] text-[10px] uppercase tracking-wider font-semibold"
            >
              Consult
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#D9A321] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="fixed inset-0 z-40 bg-[#0A0A0A] pt-24 pb-10 px-6 flex flex-col justify-between overflow-y-auto lg:hidden">
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#8E8E8E] uppercase">Navigation</span>
            </div>

            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleLinkClick('home')}
                className={`text-left text-2xl font-bold tracking-wider ${
                  currentPage === 'home' ? 'text-[#D9A321]' : 'text-white'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleLinkClick('products')}
                className={`text-left text-2xl font-bold tracking-wider ${
                  currentPage === 'products' ? 'text-[#D9A321]' : 'text-white'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => handleLinkClick('solutions')}
                className={`text-left text-2xl font-bold tracking-wider ${
                  currentPage === 'solutions' ? 'text-[#D9A321]' : 'text-white'
                }`}
              >
                Solutions
              </button>
              <button
                onClick={() => handleLinkClick('projects')}
                className={`text-left text-2xl font-bold tracking-wider ${
                  currentPage === 'projects' ? 'text-[#D9A321]' : 'text-white'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => handleLinkClick('about')}
                className={`text-left text-2xl font-bold tracking-wider ${
                  currentPage === 'about' ? 'text-[#D9A321]' : 'text-white'
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleLinkClick('contact')}
                className={`text-left text-2xl font-bold tracking-wider ${
                  currentPage === 'contact' ? 'text-[#D9A321]' : 'text-white'
                }`}
              >
                Contact
              </button>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="text-[10px] font-mono tracking-[0.2em] text-[#D9A321] uppercase mb-3">
                9 Lighting Disciplines
              </div>
              <div className="grid grid-cols-2 gap-2">
                {PRODUCT_CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleLinkClick('products', c.id)}
                    className="text-left text-xs text-[#8E8E8E] hover:text-white py-1"
                  >
                    <span className="text-[#D9A321] mr-1.5 font-mono">{c.number}</span>
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 bg-[#D9A321] text-[#0A0A0A] font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between text-[11px] text-[#8E8E8E]">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#D9A321]" /> Dubai, United Arab Emirates</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-[#D9A321]" /> Est. UAE</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
