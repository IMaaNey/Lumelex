import React, { useState, useMemo } from 'react';
import { PageView, ProductItem } from '../types';
import { PRODUCT_CATEGORIES, FEATURED_PRODUCTS } from '../data/lightingData';
import { ArrowRight, Search, SlidersHorizontal, Check, ShieldCheck } from 'lucide-react';

interface ProductsPageProps {
  initialCategory?: string;
  onNavigate: (page: PageView) => void;
  onSelectProduct: (product: ProductItem) => void;
  onOpenConsultation: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  initialCategory,
  onNavigate,
  onSelectProduct,
  onOpenConsultation,
}) => {
  const [selectedCatId, setSelectedCatId] = useState<string>(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return FEATURED_PRODUCTS.filter((prod) => {
      const matchesCat = selectedCatId === 'all' || prod.categoryId === selectedCatId;
      const matchesSearch =
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.descriptor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCatId, searchQuery]);

  const currentCategoryData = PRODUCT_CATEGORIES.find((c) => c.id === selectedCatId);

  return (
    <div id="lumelex-products-page" className="w-full bg-[#0A0A0A] text-white pt-32 pb-24">
      {/* Header Banner */}
      <section className="px-6 sm:px-8 lg:px-12 pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D9A321] block mb-3">
            ARCHITECTURAL CATALOGUE &middot; UAE SPECIFICATION
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-white leading-tight mb-6">
            Nine lighting worlds.
            <br />
            <span className="text-[#D9A321]">One complete portfolio.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#D1CFC7] font-light max-w-3xl leading-relaxed">
            Every luminaire in the LUMELEX collection is engineered for extreme climate endurance, chromatic accuracy, and optical discretion.
          </p>
        </div>
      </section>

      {/* 9 Category Overview Grid (Cards for all 9 categories) */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 border-b border-white/10 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-mono tracking-[0.2em] text-[#8E8E8E] uppercase">
              Browse by Lighting Discipline
            </span>
            <span className="text-xs font-mono text-[#D9A321]">
              9 Disciplines Available
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            <button
              onClick={() => setSelectedCatId('all')}
              className={`p-3 text-left border transition-all cursor-pointer flex flex-col justify-between h-28 ${
                selectedCatId === 'all'
                  ? 'bg-white/10 border-[#D9A321] text-white'
                  : 'bg-black/40 border-white/10 text-[#8E8E8E] hover:text-white hover:border-white/20'
              }`}
            >
              <span className="text-[10px] font-mono text-[#D9A321]">ALL</span>
              <span className="text-xs font-bold uppercase tracking-wider">All Systems</span>
            </button>

            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCatId(cat.id)}
                className={`p-3 text-left border transition-all cursor-pointer flex flex-col justify-between h-28 ${
                  selectedCatId === cat.id
                    ? 'bg-white/10 border-[#D9A321] text-white'
                    : 'bg-black/40 border-white/10 text-[#8E8E8E] hover:text-white hover:border-white/20'
                }`}
              >
                <span className="text-[10px] font-mono text-[#D9A321]">{cat.number}</span>
                <span className="text-xs font-bold uppercase tracking-wider line-clamp-2">
                  {cat.shortTitle}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Spotlight Header (if a specific category is selected) */}
      {currentCategoryData && (
        <section className="px-6 sm:px-8 lg:px-12 py-12 bg-white/5 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-[#D9A321] uppercase">DISCIPLINE {currentCategoryData.number}</span>
                <span className="text-white/20">/</span>
                <span className="text-xs text-white/60 uppercase">{currentCategoryData.name}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                &ldquo;{currentCategoryData.headline}&rdquo;
              </h2>
              <p className="text-xs sm:text-sm text-[#8E8E8E] max-w-2xl mt-2 font-light">
                {currentCategoryData.detailedOverview}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 shrink-0">
              {currentCategoryData.tags.map((tag, i) => (
                <span key={i} className="text-[11px] font-mono bg-black/60 px-3 py-1 text-[#D9A321] border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search & Filter Controls */}
      <section className="px-6 sm:px-8 lg:px-12 py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-[#8E8E8E] absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search luminaires, CCT, optics..."
              className="w-full bg-[#141414] border border-white/15 pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/30 focus:border-[#D9A321] focus:outline-none"
            />
          </div>

          <div className="text-xs font-mono text-[#8E8E8E] flex items-center gap-2">
            <span>Showing {filteredProducts.length} architectural luminaire systems</span>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 sm:px-8 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center text-[#8E8E8E] space-y-4">
              <p className="text-lg">No luminaires found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCatId('all');
                  setSearchQuery('');
                }}
                className="text-xs text-[#D9A321] underline uppercase tracking-widest"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-[#141414] border border-white/15 p-6 flex flex-col justify-between group hover:border-[#D9A321]/60 transition-all duration-300"
                >
                  <div>
                    {/* Top Info */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono tracking-[0.2em] text-[#D9A321] uppercase">
                        {prod.category}
                      </span>
                      <span className="text-[10px] font-mono text-white/50">{prod.ipRating}</span>
                    </div>

                    {/* Image */}
                    <div className="relative h-60 w-full overflow-hidden mb-6 bg-black/40 border border-white/10">
                      <img
                        src={prod.imageUrl}
                        alt={prod.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-[#D9A321] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-[#8E8E8E] font-light leading-relaxed mb-6">
                      {prod.descriptor}
                    </p>

                    {/* Spec snippets */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-[#8E8E8E] font-mono mb-6 p-3 bg-white/5 border border-white/5">
                      <div><span className="text-white/40 block">Flux:</span> {prod.lumens}</div>
                      <div><span className="text-white/40 block">CCT:</span> {prod.cct}</div>
                      <div><span className="text-white/40 block">Optics:</span> {prod.beamAngle}</div>
                      <div><span className="text-white/40 block">Control:</span> {prod.control}</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="text-xs font-semibold text-[#D9A321] group-hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={onOpenConsultation}
                      className="text-[11px] uppercase tracking-wider text-[#8E8E8E] hover:text-white"
                    >
                      Request Mockup
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Catalogue Consultation Banner */}
      <section className="px-6 sm:px-8 lg:px-12 py-16 bg-[#F4F1EA] text-[#0A0A0A]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D9A321] font-bold block mb-2">
              BESPOKE ARCHITECTURAL FIXTURES
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0A0A0A]">
              Need custom extrusion profiles or specialized finish?
            </h3>
            <p className="text-sm text-[#0A0A0A]/75 mt-2 max-w-2xl font-light">
              LUMELEX custom-manufactures bespoke luminaire housings, curved cove radiuses, and bespoke RAL/anodized coatings for signature GCC developments.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-[#0A0A0A] text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#D9A321] hover:text-[#0A0A0A] transition-colors cursor-pointer shrink-0"
          >
            Request Custom Specification &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};
