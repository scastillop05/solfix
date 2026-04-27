import {
  Zap, Wrench, Lock, Paintbrush, Wind, Hammer,
  Clock, Star, Users,
  MessageCircle, MapPin, CheckCircle,
  Shield, Home, Leaf, Layers,
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
  { icon: Leaf,       label: 'Jardinería' },
  { icon: Layers,     label: 'Estucado' },
];

export const SERVICES_DATA: ServiceOption[] = [
  { icon: Zap,        label: 'Electricista',        time: '~25 min', price: 'Desde $45.000' },
  { icon: Wrench,     label: 'Plomero',              time: '~30 min', price: 'Desde $40.000' },
  { icon: Lock,       label: 'Cerrajero',            time: '~20 min', price: 'Desde $35.000' },
  { icon: Paintbrush, label: 'Pintor',               time: '~2 hrs',  price: 'Desde $80.000' },
  { icon: Wind,       label: 'Aire acondicionado',   time: '~45 min', price: 'Desde $60.000' },
  { icon: Hammer,     label: 'Carpintero',           time: '~1 hr',   price: 'Desde $55.000' },
  { icon: Leaf,       label: 'Jardinería',           time: '~2 horas', price: 'Desde $60.000' },
  { icon: Layers,     label: 'Estucado de paredes',  time: '~1 día',  price: 'Desde $120.000' },
];

export const STATS: StatItem[] = [
  { icon: Users,       value: 84,   suffix: '%',   prefix: '', label: 'de usuarios usarían la plataforma' },
  { icon: Clock,       value: 57,   suffix: '%',   prefix: '', label: 'tarda más de 1 hora en conseguir técnico' },
  { icon: CheckCircle, value: 98,   suffix: '%',   prefix: '', label: 'clientes satisfechos' },
  { icon: Star,        value: 4.86, suffix: '/5',  prefix: '', label: 'valoración promedio de garantía', decimals: 2 },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    icon: Zap,
    service: 'Electricidad',
    city: 'Carlos M. · Sur de Cali',
    headline: 'De llamar 3 personas a técnico confirmado en minutos',
    detail: 'Siempre me tocaba llamar a 3 o 4 personas antes de encontrar un electricista disponible. Con SOLFIX tuve uno confirmado en minutos y el precio fue exactamente el acordado.',
    responseTime: 'Minutos',
    resolvedIn: 'Mismo día',
    price: 'Precio acordado',
  },
  {
    icon: Shield,
    service: 'Garantía cumplida',
    city: 'Patricia L. · Norte de Cali',
    headline: 'La garantía que nunca había visto en un técnico independiente',
    detail: 'Lo que más me convenció fue la garantía. El técnico quedó en volver al día siguiente y cumplió. Nunca había tenido esa experiencia con un técnico independiente.',
    responseTime: 'Mismo día',
    resolvedIn: 'Al día siguiente',
    price: 'Sin costo extra',
  },
  {
    icon: Home,
    service: 'Hogar familiar',
    city: 'Familia Rodríguez · Oeste de Cali',
    headline: 'Técnico confiable y respetuoso para mis papás',
    detail: 'Mis papás son mayores y siempre fue difícil conseguirles técnicos confiables. SOLFIX fue fácil de usar y el técnico fue muy respetuoso con ellos.',
    responseTime: 'Rápido',
    resolvedIn: 'Mismo día',
    price: 'Justo y claro',
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
