import { Product } from "@/components/cards/ProductCard";
import speakerImg from "@/assets/prod-smart-speaker.jpg";
import mouseImg from "@/assets/prod-ergonomic-mouse.jpg";
import { buildAmazonUrl } from "@/config/affiliates";

export const productCategories = [
  { slug: 'hogar-inteligente', name: 'Hogar inteligente', description: 'Altavoces, luces y domótica' },
  { slug: 'oficina', name: 'Oficina', description: 'Productividad y ergonomía' },
  { slug: 'accesorios', name: 'Accesorios', description: 'Hubs, cables y almacenamiento' },
  { slug: 'audio', name: 'Audio', description: 'Auriculares y altavoces' },
  { slug: 'streaming', name: 'Streaming', description: 'Cámaras y micrófonos' },
] as const;

export const productsByCategory: Record<string, Product[]> = {
  'hogar-inteligente': [
    {
      id: 'am-smartspk',
      title: 'Smart Speaker X',
      description: 'Control por voz y sonido 360°.',
      image: speakerImg,
      rating: 4,
      ctaLabel: 'Ver en Amazon',
      href: buildAmazonUrl('https://www.amazon.es/dp/B089?'),
      tag: 'Hogar inteligente',
    },
  ],
  oficina: [
    {
      id: 'am-ergomouse',
      title: 'Mouse Ergonómico Pro',
      description: 'Comodidad y precisión óptica.',
      image: mouseImg,
      rating: 5,
      ctaLabel: 'Comprar ahora',
      href: buildAmazonUrl('https://www.amazon.es/dp/B07?'),
      tag: 'Oficina',
    },
  ],
  accesorios: [
    {
      id: 'am-usbhub',
      title: 'USB-C Hub 7en1',
      description: 'HDMI 4K, USB 3.0 y lector SD.',
      rating: 4,
      ctaLabel: 'Ver en Amazon',
      href: buildAmazonUrl('https://www.amazon.es/dp/B08?'),
      tag: 'Accesorios',
    },
  ],
  audio: [
    {
      id: 'am-headset',
      title: 'Headset Cancelación Activa',
      description: 'Audio premium para trabajo y ocio.',
      rating: 4,
      ctaLabel: 'Ver en Amazon',
      href: buildAmazonUrl('https://www.amazon.es/dp/B09?'),
      tag: 'Audio',
    },
  ],
  streaming: [
    {
      id: 'am-micusb',
      title: 'Micrófono USB Pro',
      description: 'Grabación clara para streaming.',
      rating: 4,
      ctaLabel: 'Ver en Amazon',
      href: buildAmazonUrl('https://www.amazon.es/dp/B00?'),
      tag: 'Streaming',
    },
  ],
};
