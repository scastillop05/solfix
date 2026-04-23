import {
  Zap, Wrench, Lock, Paintbrush, Wind, Hammer,
  Users, Clock, Star, TrendingUp,
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
  { icon: Users,      value: 200,  suffix: '+',    prefix: '',  label: 'Técnicos activos' },
  { icon: Clock,      value: 18,   suffix: ' min', prefix: '~', label: 'Tiempo de respuesta' },
  { icon: Star,       value: 98,   suffix: '%',    prefix: '',  label: 'Clientes satisfechos' },
  { icon: TrendingUp, value: 5000, suffix: '+',    prefix: '',  label: 'Servicios completados' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Andrea Mosquera',
    barrio: 'El Poblado',
    stars: 5,
    text: 'Se me dañó la llave del agua a las 9pm. En 25 minutos tenía un plomero en casa. Increíble servicio.',
  },
  {
    name: 'Julián Restrepo',
    barrio: 'Ciudad Jardín',
    stars: 5,
    text: 'Finalmente una plataforma donde los técnicos son de verdad confiables. Los he usado 3 veces y siempre perfecto.',
  },
  {
    name: 'Marcela Ortiz',
    barrio: 'Chipichape',
    stars: 5,
    text: 'El precio fue exactamente el que me dijeron. Sin sorpresas ni cobros extra. Así se trabaja con profesionalismo.',
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
  { title: 'Servicios', links: ['Plomería', 'Electricidad', 'Cerrajería', 'Pintura', 'Aire acondicionado'] },
  { title: 'Empresa',   links: ['Sobre nosotros', 'Cómo funciona', 'Para técnicos', 'Blog'] },
  { title: 'Soporte',   links: ['WhatsApp', 'Centro de ayuda', 'Términos', 'Privacidad'] },
];

export const TICKER_ITEMS = [
  'Plomería', 'Electricidad', 'Cerrajería', 'Pintura',
  'Carpintería', 'A/C', 'Gasfitería', 'Impermeabilización', 'Fumigación',
];

export const EARNINGS_DATA: EarningsDay[] = [
  { day: 'Lunes',     jobs: 4, amount: '$320.000', pct: 80 },
  { day: 'Martes',    jobs: 3, amount: '$240.000', pct: 60 },
  { day: 'Miércoles', jobs: 5, amount: '$400.000', pct: 100 },
  { day: 'Jueves',    jobs: 4, amount: '$320.000', pct: 80 },
  { day: 'Viernes',   jobs: 6, amount: '$480.000', pct: 120 },
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
