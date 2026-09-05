export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface DepartmentItem {
  name: string;
  tagline: string;
  desc: string;
  iconName: string;
  skills: string[];
}

export interface GalleryImage {
  id: string;
  title: string;
  caption: string;
  url: string;
  fallbackUrl?: string;
  tag: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  time: string;
  description: string;
  status: 'past' | 'current' | 'upcoming';
}

export interface SiteConfig {
  schoolName: string;
  schoolUrl: string;
  teamName: string;
  teamShortName: string;
  generation: string;
  campaignTitle: string;
  facebookUrl: string;
  tiktokUrl: string;
  formRegisterUrl: string;
  youtubeVideoId: string;
  originalImagesBaseUrl: string;
}
