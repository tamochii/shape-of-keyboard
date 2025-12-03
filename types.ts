export interface ToxicWord {
  id: string;
  text: string;
  damage: number;
}

export interface FlipCardData {
  id: number;
  frontText: string;
  backText: string;
  backDetail: string;
}

export interface ShieldLink {
  label: string;
  url: string;
}

export interface ShieldData {
  id: string;
  title: string;
  icon: 'tech' | 'legal' | 'mind';
  content: string[];
  links?: ShieldLink[];
}