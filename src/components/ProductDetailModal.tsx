import React from 'react';
import { ProductItem } from '../types';
import { X, ArrowRight, ShieldCheck, Cpu, Sliders, CheckCircle2 } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onSpecify: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSpecify,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0A0A0A] border border-white/15 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#8E8E8E] hover:text-white transition-colors bg-black/50 backdrop-blur-sm cursor-pointer"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Presentation */}
        <div className="md:w-1/2 relative bg-[#141414] min-h-[300px] md:min-h-full overflow-hidden flex flex-col justify-between p-6">
          <div className="relative z-10">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#D9A321] uppercase">
              {product.category}
            </span>
          </div>

          <div className="absolute inset-0">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
          </div>

          <div className="relative z-10 mt-auto pt-24">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {product.name}
            </h3>
            <p className="text-xs text-[#D9A321] mt-1 font-medium italic">
              "{product.tagline}"
            </p>
          </div>
        </div>

        {/* Right Column: Technical Specification & Inquiry */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
          <div>
            <div className="border-b border-white/10 pb-4 mb-6">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#8E8E8E] uppercase block mb-1">
                LUMINAIRE SPECIFICATION
              </span>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                {product.descriptor}
              </p>
            </div>

            {/* Spec Matrix */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-[#8E8E8E] flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#D9A321]" /> Luminous Flux
                </span>
                <span className="text-white font-mono font-medium">{product.lumens}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-[#8E8E8E] flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#D9A321]" /> Color Temperature (CCT)
                </span>
                <span className="text-white font-mono font-medium">{product.cct}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-[#8E8E8E]">Color Rendering Index</span>
                <span className="text-white font-mono font-medium">{product.cri}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-[#8E8E8E]">Optical Beam Distribution</span>
                <span className="text-white font-mono font-medium">{product.beamAngle}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-[#8E8E8E] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D9A321]" /> Ingress &amp; Impact
                </span>
                <span className="text-white font-mono font-medium">{product.ipRating}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <span className="text-[#8E8E8E]">Control Protocols</span>
                <span className="text-white font-mono font-medium">{product.control}</span>
              </div>
            </div>

            {/* Quality assurance badge */}
            <div className="mt-6 p-3.5 bg-white/5 border border-white/10 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#D9A321] shrink-0" />
              <div className="text-[11px] text-[#8E8E8E] leading-tight">
                Tested to UAE thermal ambient conditions (+55°C). Certified by Emirates Conformity Assessment Scheme (ECAS).
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onSpecify(product);
              }}
              className="w-full sm:flex-1 py-3 bg-[#D9A321] text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.18em] hover:bg-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Specify for Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => alert(`IES Photometric file downloaded for ${product.name}.`)}
              className="w-full sm:w-auto px-4 py-3 border border-white/20 text-white/80 hover:text-white hover:border-white text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Download IES/BIM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
