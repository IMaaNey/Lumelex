export interface ProductCategory {
  id: string;
  number: string;
  name: string;
  shortTitle: string;
  headline: string;
  description: string;
  detailedOverview: string;
  tags: string[];
  imageUrl: string;
  applications: string[];
  typicalOptics: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  descriptor: string;
  imageUrl: string;
  lumens: string;
  cct: string;
  cri: string;
  beamAngle: string;
  ipRating: string;
  control: string;
  tagline: string;
  isFeatured?: boolean;
}

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  category: 'Hospitality' | 'Commercial' | 'Residential' | 'Facade' | 'Landscape' | 'Industrial' | 'Sports' | 'Infrastructure';
  location: string;
  heroImage: string;
  galleryImages: string[];
  scope: string;
  projectType: string;
  lightingApplications: string[];
  challenge: string;
  solution: string;
  result: string;
  luminaireSelection: string[];
}

export interface SolutionService {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  specs: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  keyProjects: string;
}

export interface ConsultationFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  projectLocation: string;
  timeline: string;
  message: string;
}

export type PageView = 'home' | 'products' | 'solutions' | 'projects' | 'about' | 'contact';
