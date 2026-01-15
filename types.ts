export interface Project {
  title: string;
  category: string;
  description: string;
  points: string[];
  link?: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details: string;
}