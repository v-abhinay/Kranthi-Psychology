import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon?: LucideIcon;
  benefits: string[];
  whoIsItFor: string[];
  commonProblems?: string[];
  process?: string[];
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavigationLink {
  label: string;
  path: string;
}