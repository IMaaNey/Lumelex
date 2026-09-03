import React from 'react';
import { ProjectCaseStudy } from '../types';
import { PROJECT_CASE_STUDIES } from '../data/lightingData';
import { X, ArrowRight, ArrowLeft, MapPin, Check, Layers } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onSelectProject: (p: ProjectCaseStudy) => void;
  onOpenConsultation: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onOpenConsultation,
}) => {
  if (!project) return null;

  const currentIndex = PROJECT_CASE_STUDIES.findIndex((p) => p.id === project.id);
  const nextProject = PROJECT_CASE_STUDIES[(currentIndex + 1) % PROJECT_CASE_STUDIES.length];
  const prevProject = PROJECT_CASE_STUDIES[(currentIndex - 1 + PROJECT_CASE_STUDIES.length) % PROJECT_CASE_STUDIES.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 lg:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#0A0A0A] border-0 sm:border border-white/15 shadow-2xl overflow-hidden my-auto min-h-screen sm:min-h-0 sm:max-h-[92vh] flex flex-col">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#D9A321] uppercase">
              Case Study / {project.number}
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs text-white/80 font-medium uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="p-1.5 text-[#8E8E8E] hover:text-white transition-colors"
                title="Previous Case Study"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectProject(nextProject)}
                className="p-1.5 text-[#8E8E8E] hover:text-white transition-colors"
                title="Next Case Study"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#8E8E8E] hover:text-white transition-colors cursor-pointer"
              aria-label="Close case study"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 text-white">
          {/* Hero Image Section */}
          <div className="relative h-[360px] sm:h-[480px] w-full overflow-hidden">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-10">
              <span className="text-xs font-mono tracking-[0.25em] text-[#D9A321] uppercase block mb-2">
                {project.category} · {project.location}
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
                {project.title}
              </h1>
              <p className="text-xs sm:text-sm text-white/70 max-w-xl font-light">
                {project.projectType}
              </p>
            </div>
          </div>

          {/* 4 Technical Metadata Blocks */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-10 border-b border-white/10 bg-[#121212]">
            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#D9A321] uppercase block mb-1">
                Project Type
              </span>
              <span className="text-xs sm:text-sm text-white font-medium">
                {project.projectType}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#D9A321] uppercase block mb-1">
                Location
              </span>
              <span className="text-xs sm:text-sm text-white font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D9A321] shrink-0" />
                {project.location}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#D9A321] uppercase block mb-1">
                LUMELEX Scope
              </span>
              <span className="text-xs sm:text-sm text-white font-medium">
                {project.scope}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#D9A321] uppercase block mb-1">
                Applications
              </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.lightingApplications.slice(0, 3).map((app, idx) => (
                  <span key={idx} className="text-[10px] bg-white/10 px-2 py-0.5 text-white/80">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Editorial Narrative Grid */}
          <div className="p-6 sm:p-10 space-y-12 max-w-4xl">
            {/* The Challenge */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-mono tracking-[0.2em] text-[#D9A321] uppercase">01</span>
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#8E8E8E] font-semibold">The Challenge</h3>
              </div>
              <p className="text-base sm:text-lg text-white font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-mono tracking-[0.2em] text-[#D9A321] uppercase">02</span>
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#D9A321] font-semibold">The Architectural Solution</h3>
              </div>
              <p className="text-base sm:text-lg text-[#D1CFC7] font-light leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* The Result */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-mono tracking-[0.2em] text-[#D9A321] uppercase">03</span>
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#8E8E8E] font-semibold">The Engineering Result</h3>
              </div>
              <p className="text-base sm:text-lg text-white font-light leading-relaxed">
                {project.result}
              </p>
            </div>

            {/* Luminaires Selected */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-mono tracking-[0.2em] text-[#D9A321] uppercase block mb-4">
                Specified Luminaire Systems
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.luminaireSelection.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 text-xs">
                    <Check className="w-4 h-4 text-[#D9A321]" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Images if available */}
            {project.galleryImages.length > 0 && (
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-mono tracking-[0.2em] text-[#8E8E8E] uppercase block mb-4">
                  Visual Documentation
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.galleryImages.map((img, i) => (
                    <div key={i} className="relative h-60 overflow-hidden border border-white/10">
                      <img
                        src={img}
                        alt={`${project.title} view ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer of modal / Next Project */}
          <div className="p-6 sm:p-10 bg-[#121212] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#8E8E8E] uppercase block mb-1">
                Explore Next Case Study
              </span>
              <button
                onClick={() => onSelectProject(nextProject)}
                className="text-lg font-bold text-white hover:text-[#D9A321] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>{nextProject.title} ({nextProject.location})</span>
                <ArrowRight className="w-5 h-5 text-[#D9A321]" />
              </button>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="px-6 py-3.5 bg-[#D9A321] text-[#0A0A0A] font-bold text-xs uppercase tracking-[0.18em] hover:bg-white transition-colors cursor-pointer"
            >
              Discuss Similar Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
