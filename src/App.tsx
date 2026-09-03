import React, { useState, useEffect } from 'react';
import { PageView, ProductItem, ProjectCaseStudy } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProductDetailModal } from './components/ProductDetailModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>(undefined);
  
  // Modals state
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationPrefill, setConsultationPrefill] = useState<string | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const handleNavigate = (page: PageView, catFilter?: string) => {
    setCurrentPage(page);
    setCategoryFilter(catFilter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (prefillType?: string) => {
    setConsultationPrefill(prefillType);
    setConsultationOpen(true);
  };

  const handleSpecifyProduct = (product: ProductItem) => {
    setSelectedProduct(null);
    setConsultationPrefill(product.category);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#D9A321] selection:text-black antialiased">
      {/* Sticky & Floating Architectural Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            initialCategory={categoryFilter}
            onNavigate={handleNavigate}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'solutions' && (
          <SolutionsPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Editorial Dark Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Project Consultation & Specification Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        prefilledType={consultationPrefill}
      />

      {/* Project Detail Case Study Experience */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        onOpenConsultation={() => handleOpenConsultation(selectedProject?.category)}
      />

      {/* Technical Luminaire Specification Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSpecify={handleSpecifyProduct}
      />
    </div>
  );
}
