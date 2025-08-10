import { Product } from "@/components/cards/ProductCard";
import dashImg from "@/assets/prod-software-dashboard.jpg";
import designImg from "@/assets/prod-design-tool.jpg";
import { buildSoftwareUrl } from "@/config/affiliates";

export const softwareCategories = [
  { slug: 'productividad', name: 'Productividad', description: 'Gestión del tiempo, tareas y automatización' },
  { slug: 'diseno', name: 'Diseño', description: 'Edición, prototipado y recursos creativos' },
  { slug: 'datos', name: 'Datos', description: 'BI, dashboards y conectores' },
  { slug: 'marketing', name: 'Marketing', description: 'Email, SEO y analítica' },
  { slug: 'ia', name: 'Inteligencia Artificial', description: 'Asistentes, generación y automatización' },
] as const;

export const softwareByCategory: Record<string, Product[]> = {
  productividad: [
    {
      id: 'sf-focusflow',
      title: 'FocusFlow',
      description: 'Planificación, tareas y métricas de productividad.',
      image: dashImg,
      rating: 5,
      ctaLabel: 'Probar FocusFlow',
      href: buildSoftwareUrl('https://focusflow.example.com'),
      tag: 'Productividad',
    },
    {
      id: 'sf-notespro',
      title: 'NotesPro',
      description: 'Notas, wikis y gestión de conocimiento en equipo.',
      rating: 4,
      ctaLabel: 'Obtener oferta',
      href: buildSoftwareUrl('https://notespro.example.com/pricing'),
      tag: 'Productividad',
    },
  ],
  diseno: [
    {
      id: 'sf-pixelcraft',
      title: 'PixelCraft Studio',
      description: 'Suite de diseño con prototipado colaborativo.',
      image: designImg,
      rating: 4,
      ctaLabel: 'Descubrir',
      href: buildSoftwareUrl('https://pixelcraft.example.com'),
      tag: 'Diseño',
    },
  ],
  datos: [
    {
      id: 'sf-datasight',
      title: 'DataSight',
      description: 'Dashboards en tiempo real con conectores populares.',
      rating: 5,
      ctaLabel: 'Ver más',
      href: buildSoftwareUrl('https://datasight.example.com'),
      tag: 'Datos',
    },
  ],
  marketing: [
    {
      id: 'sf-mailboost',
      title: 'MailBoost',
      description: 'Email marketing con segmentación e IA.',
      rating: 5,
      ctaLabel: 'Empezar gratis',
      href: buildSoftwareUrl('https://mailboost.example.com'),
      tag: 'Marketing',
    },
  ],
  ia: [
    {
      id: 'sf-ideagen',
      title: 'IdeaGen AI',
      description: 'Asistente para contenido y brainstorming.',
      rating: 4,
      ctaLabel: 'Probar IA',
      href: buildSoftwareUrl('https://ideagen.example.com'),
      tag: 'IA',
    },
  ],
};
