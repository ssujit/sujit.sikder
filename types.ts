
export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface Experience {
  role: string;
  institution: string;
  period: string;
  details: string[];
}

export interface Award {
  title: string;
  detail: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
}

export enum Section {
  Home = 'home',
  Research = 'research',
  Publications = 'publications',
  Projects = 'projects',
  Teaching = 'teaching',
  CV = 'cv',
  Contact = 'contact'
}
