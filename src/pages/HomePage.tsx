import React, { useState } from 'react';
import { PageView, ProductCategory, ProductItem, ProjectCaseStudy } from '../types';
import {
  PRODUCT_CATEGORIES,
  FEATURED_PRODUCTS,
  PROJECT_CASE_STUDIES,
  INDUSTRIES,
  PROCESS_STEPS
} from '../data/lightingData';
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  Layers,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Sliders,
  Shield,
  Eye,
  Compass
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageView, categoryFilter?: string) => void;
  onOpenConsultation: (prefillType?: string) => void;
  onSelectProject: (project: ProjectCaseStudy) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectProject,
  onSelectProduct,
}) => {
  // Section 03 state: Category Showcase
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(
    PRODUCT_CATEGORIES.find((c) => c.id === 'facade') || PRODUCT_CATEGORIES[0]
  );

  // Section 09 state: Active Industry
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);

  return (
    <div id="lumelex-home" className="w-full overflow-hidden">
      {/* =========================================================================
          SECTION 01 — HERO (Dark #0A0A0A)
          ========================================================================= */}
      <section
        id="section-hero"
        className="relative min-h-screen flex flex-col justify-between bg-[#0A0A0A] text-white pt-32 pb-12 px-6 sm:px-8 lg:px-12 border-b border-white/10"
      >
        {/* Background Architectural Atmosphere */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
            alt="UAE Architectural Night Lighting"
            className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Subtle architectural light beams */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/70" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D9A321]/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D9A321] animate-pulse" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#8E8E8E]">
                LIGHTING SOLUTIONS · UAE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[88px] font-bold tracking-[-0.03em] leading-[0.98] text-white mb-8">
              Light,
              <br />
              engineered
              <br />
              <span className="text-[#D9A321] relative inline-block">
                beautifully.
                <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#D9A321]/40" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-[#D1CFC7] font-light max-w-2xl leading-relaxed mb-10">
              Architectural lighting solutions designed to enhance spaces, elevate experiences and perform with precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <button
                id="hero-primary-cta"
                onClick={() => onNavigate('solutions')}
                className="px-8 py-4 bg-[#D9A321] text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer shadow-lg shadow-[#D9A321]/10"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => onOpenConsultation()}
                className="px-8 py-4 border border-white/20 text-white font-semibold text-xs uppercase tracking-[0.2em] hover:border-[#D9A321] hover:text-[#D9A321] transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>

        {/* Hero Bottom Metadata Row & Scroll Indicator */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono tracking-[0.25em] text-[#8E8E8E]">
          <div className="flex items-center space-x-6">
            <span className="text-white font-medium">UAE</span>
            <span className="text-white/20">/</span>
            <span>ARCHITECTURAL LIGHTING</span>
            <span className="text-white/20">/</span>
            <span>TECHNICAL EXCELLENCE</span>
          </div>

          <a
            href="#section-brand-statement"
            className="flex items-center gap-2 hover:text-[#D9A321] transition-colors py-1 cursor-pointer"
          >
            <span>SCROLL</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 — BRAND STATEMENT (Warm Ivory #F4F1EA)
          ========================================================================= */}
      <section
        id="section-brand-statement"
        className="bg-[#F4F1EA] text-[#0A0A0A] py-28 px-6 sm:px-8 lg:px-12 border-b border-[#0A0A0A]/10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9A321]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#8E8E8E] uppercase">
              Brand Philosophy
            </span>
          </div>

          {/* Large Editorial Quote */}
          <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.18] tracking-[-0.02em] max-w-5xl mb-10 text-[#0A0A0A]">
            &ldquo;Light is the silent architect of{' '}
            <span className="text-[#D9A321] font-semibold underline decoration-[#D9A321]/40 underline-offset-8">
              our environment.
            </span>
            &rdquo;
          </blockquote>

          {/* Short Paragraph */}
          <p className="text-lg sm:text-xl text-[#0A0A0A]/75 font-light max-w-3xl leading-relaxed mb-20">
            At LUMELEX, we believe lighting is more than illumination. It is a carefully engineered layer of architecture that shapes atmosphere, performance and experience.
          </p>

          {/* Three Minimal Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-[#0A0A0A]/15">
            {/* 01 */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#D9A321] block">
                01
              </span>
              <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-[#0A0A0A]">
                Design-Led
              </h3>
              <p className="text-sm text-[#0A0A0A]/70 font-light leading-relaxed">
                Lighting designed around the architecture. Revealing forms, highlighting textures, and preserving sightlines.
              </p>
            </div>

            {/* 02 */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#D9A321] block">
                02
              </span>
              <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-[#0A0A0A]">
                Performance-Driven
              </h3>
              <p className="text-sm text-[#0A0A0A]/70 font-light leading-relaxed">
                Engineered for efficiency, reliability and longevity under extreme UAE ambient thermal and environmental conditions.
              </p>
            </div>

            {/* 03 */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#D9A321] block">
                03
              </span>
              <h3 className="text-lg font-bold uppercase tracking-[0.15em] text-[#0A0A0A]">
                Project-Focused
              </h3>
              <p className="text-sm text-[#0A0A0A]/70 font-light leading-relaxed">
                From concept calculations to procurement, installation, and rigorous on-site photometric commissioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — PRODUCT PORTFOLIO (Deep Black #0A0A0A)
          Interactive 9-Category Showcase
          ========================================================================= */}
      <section
        id="section-portfolio"
        className="bg-[#0A0A0A] text-white py-32 px-6 sm:px-8 lg:px-12 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D9A321] block mb-3">
                THE LUMELEX PORTFOLIO
              </span>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                One portfolio.
                <br />
                Nine lighting worlds.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#8E8E8E] max-w-md font-light">
              Interactive architectural exploration across interior, exterior, facade, sports, and infrastructure disciplines.
            </p>
          </div>

          {/* Interactive Layout: Left vertical nav + Right dynamic visual area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Category Navigation */}
            <div className="lg:col-span-4 flex flex-col space-y-2 border-r border-white/10 pr-0 lg:pr-6">
              {PRODUCT_CATEGORIES.map((cat) => {
                const isActive = selectedCategory.id === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex items-center justify-between p-4 text-left transition-all duration-200 border cursor-pointer ${
                      isActive
                        ? 'bg-white/10 border-[#D9A321] text-white pl-6'
                        : 'border-transparent text-[#8E8E8E] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs font-mono font-bold ${
                          isActive ? 'text-[#D9A321]' : 'text-white/40'
                        }`}
                      >
                        {cat.number}
                      </span>
                      <span className="text-sm font-semibold tracking-wider uppercase">
                        {cat.shortTitle}
                      </span>
                    </div>
                    {isActive && <ChevronRight className="w-4 h-4 text-[#D9A321]" />}
                  </button>
                );
              })}
            </div>

            {/* Right Dynamic Visual Area */}
            <div className="lg:col-span-8 bg-[#141414] border border-white/15 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
              {/* Top Meta */}
              <div className="relative z-10 flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#D9A321] tracking-widest">
                    WORLD {selectedCategory.number} / 09
                  </span>
                  <span className="text-white/20">|</span>
                  <span className="text-xs uppercase tracking-widest text-white/80">
                    {selectedCategory.name}
                  </span>
                </div>
                <span className="text-[11px] text-[#8E8E8E] hidden sm:inline font-mono">
                  UAE Compliant &middot; ECAS
                </span>
              </div>

              {/* Center Imagery with Overlay */}
              <div className="relative h-72 sm:h-96 w-full overflow-hidden mb-8 border border-white/10">
                <img
                  src={selectedCategory.imageUrl}
                  alt={selectedCategory.name}
                  key={selectedCategory.id}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-85" />
                
                {/* Category Headline Floating in image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                    &ldquo;{selectedCategory.headline}&rdquo;
                  </h3>
                </div>
              </div>

              {/* Description & Application Tags */}
              <div className="relative z-10 space-y-6">
                <p className="text-sm sm:text-base text-[#D1CFC7] font-light leading-relaxed">
                  {selectedCategory.description}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-[#8E8E8E] uppercase mr-2">Tags:</span>
                  {selectedCategory.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-white/80 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Action */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-xs text-[#8E8E8E] font-light">
                    Optics: <strong className="text-white font-normal">{selectedCategory.typicalOptics}</strong>
                  </span>

                  <button
                    onClick={() => onNavigate('products', selectedCategory.id)}
                    className="px-6 py-3 bg-[#D9A321] text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.18em] hover:bg-white transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Explore {selectedCategory.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — SOLUTIONS (Warm Ivory #F4F1EA)
          From concept to illumination - 4-stage horizontal process
          ========================================================================= */}
      <section
        id="section-solutions"
        className="bg-[#F4F1EA] text-[#0A0A0A] py-32 px-6 sm:px-8 lg:px-12 border-b border-[#0A0A0A]/10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D9A321] font-semibold block mb-3">
              END-TO-END EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0A0A0A] leading-tight mb-6">
              From concept
              <br />
              to illumination.
            </h2>
            <p className="text-base sm:text-xl text-[#0A0A0A]/75 font-light leading-relaxed">
              A complete lighting journey, managed with precision from the first calculation to final commissioning.
            </p>
          </div>

          {/* Horizontal Process with Thin Gold Connecting Line */}
          <div className="relative">
            {/* Gold Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-[#D9A321]" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 relative z-10">
              {/* Stage 01 */}
              <div className="bg-[#F4F1EA] pt-2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#0A0A0A] text-[#D9A321] border border-[#D9A321] flex items-center justify-center font-mono font-bold text-sm">
                    01
                  </div>
                </div>
                <h3 className="text-base font-bold uppercase tracking-wider text-[#0A0A0A]">
                  Consultancy &amp; Design
                </h3>
                <p className="text-sm text-[#0A0A0A]/70 font-light leading-relaxed">
                  Lighting concepts, photometric calculations and technical planning built around your project architecture.
                </p>
              </div>

              {/* Stage 02 */}
              <div className="bg-[#F4F1EA] pt-2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#0A0A0A] text-[#D9A321] border border-[#D9A321] flex items-center justify-center font-mono font-bold text-sm">
                    02
                  </div>
                </div>
                <h3 className="text-base font-bold uppercase tracking-wider text-[#0A0A0A]">
                  Specialized Supply
                </h3>
                <p className="text-sm text-[#0A0A0A]/70 font-light leading-relaxed">
                  Curated lighting products selected according to application, environmental durability, and project requirements.
                </p>
              </div>

              {/* Stage 03 */}
              <div className="bg-[#F4F1EA] pt-2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#0A0A0A] text-[#D9A321] border border-[#D9A321] flex items-center justify-center font-mono font-bold text-sm">
                    03
                  </div>
                </div>
                <h3 className="text-base font-bold uppercase tracking-wider text-[#0A0A0A]">
                  Expert Installation
                </h3>
                <p className="text-sm text-[#0A0A0A]/70 font-light leading-relaxed">
                  Professional on-site technical supervision with precision, thermal verification, and flawless architectural finish.
                </p>
              </div>

              {/* Stage 04 */}
              <div className="bg-[#F4F1EA] pt-2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#0A0A0A] text-[#D9A321] border border-[#D9A321] flex items-center justify-center font-mono font-bold text-sm">
                    04
                  </div>
                </div>
                <h3 className="text-base font-bold uppercase tracking-wider text-[#0A0A0A]">
                  Testing &amp; Commissioning
                </h3>
                <p className="text-sm text-[#0A0A0A]/70 font-light leading-relaxed">
                  Final optical aiming, DMX/DALI scene adjustments, lux level auditing and comprehensive certification handover.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Action Link */}
          <div className="mt-16 pt-8 border-t border-[#0A0A0A]/10 flex justify-end">
            <button
              onClick={() => onNavigate('solutions')}
              className="text-xs uppercase tracking-[0.2em] font-bold text-[#0A0A0A] hover:text-[#D9A321] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>View Detailed Engineering Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 — FEATURED PRODUCTS (Black #0A0A0A)
          Asymmetric Product Grid featuring 6 products
          ========================================================================= */}
      <section
        id="section-featured-products"
        className="bg-[#0A0A0A] text-white py-32 px-6 sm:px-8 lg:px-12 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D9A321] block mb-3">
                SELECTED FROM THE COLLECTION
              </span>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                Designed for performance.
                <br />
                Made to be seen.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#D9A321] hover:text-white transition-colors cursor-pointer"
            >
              <span>Browse Full Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Asymmetric Product Grid: 6 featured products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.slice(0, 6).map((prod, idx) => {
              // Create subtle visual hierarchy: item 0 and 3 can be slightly taller
              const isHeroCard = idx === 0 || idx === 3;
              return (
                <div
                  key={prod.id}
                  className={`bg-[#141414] border border-white/15 p-6 flex flex-col justify-between group hover:border-[#D9A321]/50 transition-all duration-300 ${
                    isHeroCard ? 'lg:col-span-2' : 'col-span-1'
                  }`}
                >
                  <div>
                    {/* Card Top Details */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono tracking-[0.25em] text-[#D9A321] uppercase">
                        {prod.category}
                      </span>
                      <span className="text-[10px] font-mono text-[#8E8E8E]">
                        {prod.lumens}
                      </span>
                    </div>

                    {/* Product Image */}
                    <div
                      className={`relative w-full overflow-hidden mb-6 bg-black/40 border border-white/10 ${
                        isHeroCard ? 'h-64 sm:h-80' : 'h-52'
                      }`}
                    >
                      <img
                        src={prod.imageUrl}
                        alt={prod.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Product Info */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-[#D9A321] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8E8E8E] font-light leading-relaxed mb-6">
                      {prod.descriptor}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-white/50">{prod.ipRating}</span>
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="text-xs font-semibold text-[#D9A321] group-hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>View Product</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 — PROJECTS (Warm Ivory #F4F1EA)
          Editorial Masonry Project Grid
          ========================================================================= */}
      <section
        id="section-projects"
        className="bg-[#F4F1EA] text-[#0A0A0A] py-32 px-6 sm:px-8 lg:px-12 border-b border-[#0A0A0A]/10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D9A321] font-semibold block mb-3">
                SELECTED PROJECTS
              </span>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
                Where lighting
                <br />
                becomes experience.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#0A0A0A] hover:text-[#D9A321] transition-colors cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Editorial Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECT_CASE_STUDIES.slice(0, 4).map((proj, i) => {
              // Asymmetric heights
              const isLarge = i === 0 || i === 3;
              return (
                <div
                  key={proj.id}
                  onClick={() => onSelectProject(proj)}
                  className={`relative overflow-hidden group cursor-pointer border border-[#0A0A0A]/10 ${
                    isLarge ? 'md:col-span-2 h-[460px]' : 'col-span-1 h-[460px]'
                  }`}
                >
                  <img
                    src={proj.heroImage}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                  {/* Category Pill Top Left */}
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-[#D9A321] font-mono text-[10px] uppercase tracking-widest border border-[#D9A321]/30">
                      {proj.category}
                    </span>
                  </div>

                  {/* Project Info Bottom */}
                  <div className="absolute bottom-6 left-6 right-6 text-white transition-transform duration-300 group-hover:-translate-y-1">
                    <span className="text-[11px] font-mono tracking-widest text-[#8E8E8E] block mb-1">
                      {proj.location}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-[#D9A321] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-white/70 line-clamp-2 font-light">
                      {proj.scope}
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#D9A321] font-semibold uppercase tracking-wider">
                      <span>Examine Case Study</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 border-2 border-[#0A0A0A] text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#0A0A0A] hover:text-white transition-all cursor-pointer"
            >
              View All Projects →
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07 — PROJECT DETAIL EXPERIENCE SPOTLIGHT
          Featured Case Study Deep Dive Card
          ========================================================================= */}
      <section
        id="section-case-study-spotlight"
        className="bg-[#0A0A0A] text-white py-28 px-6 sm:px-8 lg:px-12 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#141414] border border-white/15 p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9A321] uppercase block">
                PROJECT / 01 &middot; CASE STUDY EXPERIENCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                {PROJECT_CASE_STUDIES[0].title}
              </h2>
              <p className="text-xs font-mono text-[#8E8E8E] uppercase tracking-wider">
                {PROJECT_CASE_STUDIES[0].location}
              </p>
              
              <div className="space-y-4 pt-2 border-t border-white/10 text-xs sm:text-sm text-[#D1CFC7] font-light leading-relaxed">
                <div>
                  <strong className="text-white uppercase font-mono tracking-wider block mb-1">
                    The Challenge:
                  </strong>
                  <p>{PROJECT_CASE_STUDIES[0].challenge}</p>
                </div>
                <div>
                  <strong className="text-[#D9A321] uppercase font-mono tracking-wider block mb-1">
                    The Solution:
                  </strong>
                  <p>{PROJECT_CASE_STUDIES[0].solution}</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onSelectProject(PROJECT_CASE_STUDIES[0])}
                  className="px-6 py-3.5 bg-[#D9A321] text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Open Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectProject(PROJECT_CASE_STUDIES[1])}
                  className="px-6 py-3.5 border border-white/20 text-white font-semibold text-xs uppercase tracking-[0.2em] hover:text-[#D9A321] hover:border-[#D9A321] transition-colors cursor-pointer"
                >
                  Next Project &rarr;
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[380px] sm:h-[460px] overflow-hidden border border-white/10">
              <img
                src={PROJECT_CASE_STUDIES[0].heroImage}
                alt="Case study spotlight"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
              <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 text-[11px] font-mono text-[#D9A321] border border-[#D9A321]/30">
                Forbes 5-Star Benchmark
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08 — WHY LUMELEX (Deep Black #0A0A0A)
          "Precision in every lumen." - 4 large minimal statements
          ========================================================================= */}
      <section
        id="section-why-lumelex"
        className="bg-[#0A0A0A] text-white py-32 px-6 sm:px-8 lg:px-12 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D9A321] block mb-3">
              THE LUMELEX STANDARD
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Precision
              <br />
              in every lumen.
            </h2>
          </div>

          {/* 4 Large Minimal Statements with gold numbering and thin divider lines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 border-t border-white/10 pt-12">
            {/* Statement 01 */}
            <div className="border-b border-white/10 pb-8 space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-base font-mono text-[#D9A321] font-bold">01</span>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-white">
                  Engineered Performance
                </h3>
              </div>
              <p className="text-base text-[#8E8E8E] font-light leading-relaxed pl-9">
                Solutions designed around technical requirements. High efficacy, rigorous thermal heat dissipation, and zero visible flicker for demanding GCC environments.
              </p>
            </div>

            {/* Statement 02 */}
            <div className="border-b border-white/10 pb-8 space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-base font-mono text-[#D9A321] font-bold">02</span>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-white">
                  Architectural Thinking
                </h3>
              </div>
              <p className="text-base text-[#8E8E8E] font-light leading-relaxed pl-9">
                Lighting that works with the architecture — not against it. Concealed luminaires, razor-thin profiles, and glare-free comfort that leaves spaces unencumbered.
              </p>
            </div>

            {/* Statement 03 */}
            <div className="border-b border-white/10 pb-8 space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-base font-mono text-[#D9A321] font-bold">03</span>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-white">
                  Reliable Supply
                </h3>
              </div>
              <p className="text-base text-[#8E8E8E] font-light leading-relaxed pl-9">
                Products selected around project specifications and performance. Strict batch binning consistency (MacAdam ≤ 2) and robust warranty assurance.
              </p>
            </div>

            {/* Statement 04 */}
            <div className="border-b border-white/10 pb-8 space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="text-base font-mono text-[#D9A321] font-bold">04</span>
                <h3 className="text-2xl font-bold uppercase tracking-wider text-white">
                  End-to-End Expertise
                </h3>
              </div>
              <p className="text-base text-[#8E8E8E] font-light leading-relaxed pl-9">
                From consultation to commissioning. Specialized engineers on site ensuring that the final illuminated reality matches the approved photometric render.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09 — INDUSTRIES (Warm Ivory #F4F1EA)
          "Every space tells a different story." - Interactive industry cards
          ========================================================================= */}
      <section
        id="section-industries"
        className="bg-[#F4F1EA] text-[#0A0A0A] py-32 px-6 sm:px-8 lg:px-12 border-b border-[#0A0A0A]/10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D9A321] font-semibold block mb-3">
              SPECIALIZED TYPOLOGIES
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0A0A0A] leading-tight mb-4">
              Every space
              <br />
              tells a different story.
            </h2>
            <p className="text-base sm:text-lg text-[#0A0A0A]/75 font-light">
              Tailored lighting systems engineered for the unique optical demands of each commercial, civic, and residential typology.
            </p>
          </div>

          {/* Horizontally Scrollable / Interactive Industry Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind, idx) => (
              <div
                key={ind.id}
                onClick={() => onOpenConsultation(ind.name)}
                className="bg-white border border-[#0A0A0A]/10 overflow-hidden group cursor-pointer flex flex-col justify-between hover:border-[#D9A321] transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={ind.imageUrl}
                      alt={ind.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#0A0A0A]/20 group-hover:bg-transparent transition-colors" />
                    <span className="absolute top-3 left-3 bg-[#0A0A0A]/80 text-[#D9A321] text-[10px] font-mono px-2 py-0.5">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0A0A0A] tracking-tight mb-2 group-hover:text-[#D9A321] transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-[#0A0A0A]/70 font-light leading-relaxed mb-4">
                      {ind.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#0A0A0A]/5 flex items-center justify-between text-xs font-semibold text-[#0A0A0A] group-hover:text-[#D9A321] transition-colors">
                  <span className="uppercase tracking-wider text-[10px]">Consult on {ind.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 — EXPERIENCE STATEMENT (Full-width cinematic section)
          Dark overlay, large centered statement
          ========================================================================= */}
      <section
        id="section-experience-statement"
        className="relative py-36 px-6 sm:px-8 lg:px-12 bg-[#0A0A0A] text-white border-b border-white/10 overflow-hidden text-center flex items-center justify-center min-h-[520px]"
      >
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Atmospheric architecture"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D9A321] block">
            THE PHILOSOPHY OF PERCEPTION
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            &ldquo;Good lighting
            <br />
            <span className="text-[#D9A321]">disappears</span> into the experience.&rdquo;
          </h2>

          <p className="text-lg sm:text-2xl text-[#8E8E8E] font-light max-w-xl mx-auto">
            The best lighting isn't always noticed. It's felt.
          </p>

          <div className="pt-6">
            <span className="inline-block w-16 h-[1px] bg-[#D9A321]" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11 — PROCESS (Warm Ivory #F4F1EA)
          "One process. Complete control." - 6-step timeline
          ========================================================================= */}
      <section
        id="section-process"
        className="bg-[#F4F1EA] text-[#0A0A0A] py-32 px-6 sm:px-8 lg:px-12 border-b border-[#0A0A0A]/10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D9A321] font-semibold block mb-3">
              OUR APPROACH
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0A0A0A] leading-tight mb-4">
              One process.
              <br />
              Complete control.
            </h2>
            <p className="text-base sm:text-lg text-[#0A0A0A]/75 font-light">
              A systematic engineering methodology ensuring precision from initial architectural sketch to occupancy handover.
            </p>
          </div>

          {/* 6-step Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-8 bg-white border border-[#0A0A0A]/10 relative group hover:border-[#D9A321] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#0A0A0A]/10">
                  <span className="text-2xl font-mono font-bold text-[#D9A321]">
                    {step.number}
                  </span>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#0A0A0A]">
                    {step.name}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0A0A0A] mb-3 leading-snug">
                  {step.headline}
                </h3>
                <p className="text-xs sm:text-sm text-[#0A0A0A]/70 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12 — FINAL CTA (Full Black #0A0A0A)
          Very large headline: "Have a project in mind?"
          ========================================================================= */}
      <section
        id="section-final-cta"
        className="bg-[#0A0A0A] text-white py-36 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D9A321] block">
            ENGAGE WITH LUMELEX
          </span>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight">
            Have a project
            <br />
            <span className="text-[#D9A321]">in mind?</span>
          </h2>

          <p className="text-lg sm:text-2xl text-[#8E8E8E] font-light max-w-xl mx-auto">
            Let's design the light around it.
          </p>

          {/* Subtle gold horizontal line */}
          <div className="w-24 h-[2px] bg-[#D9A321] mx-auto my-8" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
            <button
              onClick={() => onOpenConsultation()}
              className="w-full sm:w-auto px-10 py-4 bg-[#D9A321] text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-3 cursor-pointer shadow-xl shadow-[#D9A321]/15"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-semibold text-xs uppercase tracking-[0.2em] hover:text-[#D9A321] hover:border-[#D9A321] transition-all flex items-center justify-center cursor-pointer"
            >
              Talk to LUMELEX
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
