import {
  Zap, Wrench, Lock, Paintbrush, Wind, Hammer,
  Clock, Star,
  MessageCircle, MapPin, CheckCircle,
} from 'lucide-react';
import type { ServiceOption, StatItem, TestimonialItem, HowItWorksStep, FooterColumn, EarningsDay } from './types';

export const FONT_HEADING = "var(--font-outfit), 'Outfit', sans-serif";
export const FONT_BODY = "var(--font-dm-sans), 'DM Sans', sans-serif";

export const NAV_LINKS = ['Servicios', 'Cómo funciona', 'Para técnicos', 'FAQ'] as const;

export const SERVICE_OPTIONS: Pick<ServiceOption, 'icon' | 'label'>[] = [
  { icon: Zap,        label: 'Electricista' },
  { icon: Wrench,     label: 'Plomero' },
  { icon: Lock,       label: 'Cerrajero' },
  { icon: Paintbrush, label: 'Pintor' },
  { icon: Wind,       label: 'Aire acondicionado' },
  { icon: Hammer,     label: 'Carpintero' },
];

export const SERVICES_DATA: ServiceOption[] = [
  { icon: Zap,        label: 'Electricista',      time: '~25 min', price: 'Desde $45.000' },
  { icon: Wrench,     label: 'Plomero',            time: '~30 min', price: 'Desde $40.000' },
  { icon: Lock,       label: 'Cerrajero',          time: '~20 min', price: 'Desde $35.000' },
  { icon: Paintbrush, label: 'Pintor',             time: '~2 hrs',  price: 'Desde $80.000' },
  { icon: Wind,       label: 'Aire acondicionado', time: '~45 min', price: 'Desde $60.000' },
  { icon: Hammer,     label: 'Carpintero',         time: '~1 hr',   price: 'Desde $55.000' },
];

export const STATS: StatItem[] = [
  { icon: Clock,        value: 30,  suffix: ' min', prefix: '<', label: 'Primera respuesta' },
  { icon: Zap,          value: 24,  suffix: '/7',   prefix: '',  label: 'Disponible siempre' },
  { icon: CheckCircle,  value: 0,   suffix: '',     prefix: '$', label: 'Costo de visita' },
  { icon: Star,         value: 100, suffix: '%',    prefix: '',  label: 'Garantía de satisfacción' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    icon: Wrench,
    service: 'Plomería',
    city: 'Medellín',
    headline: 'Fuga de agua un domingo a las 9pm',
    detail: 'Agua por todo el baño, sin saber a quién llamar un fin de semana. Plomero llegó en 1 hora, cobró exactamente lo acordado, sin sorpresas.',
    responseTime: '< 20 min',
    resolvedIn: '1 hora',
    price: '$55.000',
  },
  {
    icon: Zap,
    service: 'Electricidad',
    city: 'Bogotá',
    headline: 'Cortocircuito un sábado sin luz en media casa',
    detail: 'Parecía imposible conseguir ayuda un fin de semana. El electricista llegó ese mismo día e identificó el problema en 30 minutos.',
    responseTime: '< 30 min',
    resolvedIn: '2 horas',
    price: '$90.000',
  },
  {
    icon: Lock,
    service: 'Cerrajería',
    city: 'Cali',
    headline: 'Puerta trancada a las 11pm',
    detail: 'El cerrajero llegó en 35 minutos, abrió sin dañar la cerradura y cobró exactamente lo que dijo desde el principio.',
    responseTime: '35 min',
    resolvedIn: '35 min',
    price: '$45.000',
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    n: '01',
    icon: MessageCircle,
    title: 'Describe el problema',
    desc: 'Cuéntanos qué necesitas arreglar. Texto, foto o mensaje de voz — como prefieras.',
  },
  {
    n: '02',
    icon: MapPin,
    title: 'Asignamos un técnico',
    desc: 'En minutos conectamos con el técnico verificado más cercano a tu ubicación.',
  },
  {
    n: '03',
    icon: CheckCircle,
    title: 'Problema resuelto',
    desc: 'El técnico llega, trabaja y pagas solo cuando quedas completamente satisfecho.',
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  { title: 'Servicios',  links: ['Plomería', 'Electricidad', 'Cerrajería', 'Pintura', 'Aire acondicionado'] },
  { title: 'Plataforma', links: ['Cómo funciona', 'Para técnicos', 'Preguntas frecuentes'] },
  { title: 'Contacto',   links: ['WhatsApp', 'hola@solfix.co'] },
];

export const TICKER_ITEMS = [
  'Plomería', 'Electricidad', 'Cerrajería', 'Pintura',
  'Carpintería', 'A/C', 'Gasfitería', 'Impermeabilización', 'Fumigación',
];

export const EARNINGS_DATA: EarningsDay[] = [
  { day: 'Lunes',     jobs: 2, amount: '$130.000', pct: 55 },
  { day: 'Martes',    jobs: 3, amount: '$156.000', pct: 66 },
  { day: 'Miércoles', jobs: 4, amount: '$208.000', pct: 88 },
  { day: 'Jueves',    jobs: 3, amount: '$156.000', pct: 66 },
  { day: 'Viernes',   jobs: 4, amount: '$208.000', pct: 88 },
];

export const TECH_BENEFITS = [
  'Accede a clientes verificados sin inversión en publicidad',
  'Tú o tu empresa decide cuándo y dónde operar',
  'Pagos rápidos y transparentes, sin sorpresas',
  'Perfil o empresa verificada que genera confianza y más trabajo',
];

export const CIRCUIT_PATHS = [
  'M 160 0 L 160 120 L 320 120 L 320 240',
  'M 640 0 L 640 80 L 480 80 L 480 200 L 560 200',
  'M 0 200 L 80 200 L 80 320 L 200 320',
  'M 800 300 L 720 300 L 720 160 L 560 160',
];
