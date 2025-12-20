
export interface PersonalInfo {
  name: string;
  title: string;
  researchArea: string;
  bio: string;
  profilePictureUrl: string;
  socialLinks: {
    name: 'LinkedIn' | 'Google Scholar' | 'GitHub' | 'Twitter' | 'Email';
    url: string;
  }[];
}

export interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  featured?: boolean;
  links?: {
    name: 'PDF' | 'DOI' | 'Code' | 'Slides' | 'Project';
    url: string;
  }[];
}

export interface NewsItem {
  id: number;
  date: string;
  content: string;
  featured?: boolean;
}

export interface CVEntry {
  id: number;
  period: string;
  title: string;
  institution: string;
  description?: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  summary: string;
  content?: string; // Made optional to support metadata-only lists
  featured?: boolean;
}

export interface AcademicData {
  personalInfo: PersonalInfo;
  publications: Publication[];
  news: NewsItem[];
  blog: BlogPost[];
  cv: {
    education: CVEntry[];
    researchExperience: CVEntry[];
    experience: CVEntry[];
    awards: CVEntry[];
    certifications: CVEntry[];
    downloadLink: string;
  };
}
