export interface TechItem {
  name: string;
  icon?: string; // used by Modern mode only
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;       // 1–2 sentences, used in cards
  technicalSummary: string;       // Markdown string, used in Lo-Fi mode
  visualAssets: {
    screenshots: string[];        // image paths, used in Modern mode
    thumbnail: string;
  };
  techStack: TechItem[];
  tags: string[];                 // for filtering: 'backend', 'fullstack', 'ml', etc.
  liveUrl?: string;
  repoUrl?: string;
  status: 'live' | 'archived' | 'wip';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bulletPoints: string[];
  techUsed: TechItem[];
}

export interface PortfolioData {
  name: string;
  tagline: string;
  terminalTagline: string;        // alternate tagline for Lo-Fi mode
  about: string;
  email: string;
  socials: { github: string; linkedin: string; twitter?: string };
  projects: Project[];
  experience: Experience[];
  skills: TechItem[];
}