import type { LucideIcon as LucideIconBase } from 'lucide-react';

export type LucideIcon = LucideIconBase;

export interface ServiceOption {
  icon: LucideIcon;
  label: string;
  time: string;
  price: string;
}

export interface StatItem {
  icon: LucideIcon;
  value: number;
  suffix: string;
  prefix: string;
  label: string;
}

export interface TestimonialItem {
  name: string;
  barrio: string;
  service: string;
  stars: number;
  text: string;
}

export interface HowItWorksStep {
  n: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}

export interface EarningsDay {
  day: string;
  jobs: number;
  amount: string;
  pct: number;
}

export interface RequestFormData {
  service: string;
  name: string;
  phone: string;
  address: string;
  description: string;
  urgency: 'normal' | 'urgente';
}

export interface TechFormData {
  type: 'independiente' | 'empresa';
  name: string;
  phone: string;
  specialty: string;
  barrio: string;
  experience: string;
  companyName: string;
  nit: string;
  services: string;
  coverage: string;
}

export interface ModalContextValue {
  openRequest: () => void;
  openTech: () => void;
}

export interface ContactPayload {
  service: string;
  name: string;
  phone: string;
  address: string;
  description: string;
  urgency: 'normal' | 'urgente';
}
