import React, { useState, useMemo } from 'react';
import { PageView, ProjectCaseStudy } from '../types';
import { PROJECT_CASE_STUDIES } from '../data/lightingData';
import { ArrowRight, ArrowUpRight, MapPin, Filter } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageView) => void;
  onSelectProject: (project: ProjectCaseStudy) => void;
  onOpenConsultation: () => void;
}

const CATEGORIES = [
  'All',
  'Hospitality',
  'Residential',
  'Commercial',
  'Industrial',
  'Sports',
  'Landscape',
  'Facade',
  'Infrastructure',
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onSelectProject,
  onOpenConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECT_CASE_STUDIES;
    return PROJECT_CASE_STUDIES.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div id="lumelex-projects-page" className="w-full bg-[#0A0A0A] text-white pt-32 pb-24">
      {/* Header */}
      <section className="px-6 sm:px-8 lg:px-12 pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D9A321] block mb-3">
            ARCHITECTURAL PORTFOLIO · UAE &amp; GCC
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-[80px] font-bold tracking-tight text-white leading-tight mb-6">
            Where lighting
            <br />
            <span className="text-[#D9A321]">becomes experience.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#D1CFC7] font-light max-w-2xl leading-relaxed">
            A curated archive of architectural landmarks, private sanctuaries, stadium arenas, and urban infrastructure realized by LUMELEX across the Emirates.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 sm:px-8 lg:px-12 py-8 border-b border-white/10 bg-[#121212] sticky top-20 z-20 backdrop-blur-md bg-[#121212]/95">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-mono text-[#8E8E8E] uppercase mr-3 flex items-center gap-1.5 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#D9A321]" /> Typology:
          </span>
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#D9A321] text-[#0A0A0A] border-[#D9A321]'
                    : 'bg-transparent text-[#8E8E8E] border-white/10 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 sm:px-8 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="bg-[#141414] border border-white/15 overflow-hidden group cursor-pointer flex flex-col justify-between hover:border-[#D9A321]/60 transition-all duration-300"
              >
                <div>
                  <div className="relative h-72 w-full overflow-hidden bg-black/60">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent opacity-80" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/80 backdrop-blur-sm text-[#D9A321] text-[10px] font-mono uppercase tracking-widest border border-[#D9A321]/30">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[11px] font-mono text-[#8E8E8E] flex items-center gap-1 mb-1">
                        <MapPin className="w-3 h-3 text-[#D9A321]" />
                        {project.location}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#D9A321] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs text-[#8E8E8E] font-light line-clamp-3 leading-relaxed">
                      {project.challenge}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.lightingApplications.slice(0, 3).map((app, i) => (
                        <span key={i} className="text-[10px] font-mono bg-white/5 px-2 py-0.5 text-white/70">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between text-xs text-[#D9A321] font-semibold uppercase tracking-wider">
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Consultation Strip */}
      <section className="px-6 sm:px-8 lg:px-12 py-20 bg-[#F4F1EA] text-[#0A0A0A]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D9A321] font-bold block mb-2">
              START A COLLABORATION
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0A0A]">
              Have a signature project in concept?
            </h3>
            <p className="text-sm text-[#0A0A0A]/75 mt-2 font-light max-w-xl">
              From landmark towers to private island villas, our Dubai engineering team is ready to assist your design studio.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-[#0A0A0A] text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#D9A321] hover:text-[#0A0A0A] transition-colors cursor-pointer shrink-0"
          >
            Request Project Consultation &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};
