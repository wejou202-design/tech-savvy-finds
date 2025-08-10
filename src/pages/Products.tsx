import { Helmet } from "react-helmet-async";
import ProductCard, { Product } from "@/components/cards/ProductCard";
import ComparisonTable from "@/components/sections/ComparisonTable";
import speakerImg from "@/assets/prod-smart-speaker.jpg";
import mouseImg from "@/assets/prod-ergonomic-mouse.jpg";

const PRODUCTS: Product[] = [
  {
    id: "g-1",
    title: "Smart Speaker X",
    description: "Asistente inteligente con sonido 360° y control por voz.",
    image: speakerImg,
    rating: 4,
    ctaLabel: "Ver en Amazon",
    href: "#",
    tag: "Hogar inteligente",
  },
  {
    id: "g-2",
    title: "Mouse Ergonómico Pro",
    description: "Comodidad todo el día con precisión óptica avanzada.",
    image: mouseImg,
    rating: 5,
    ctaLabel: "Comprar ahora",
    href: "#",
    tag: "Oficina",
  },
  {
    id: "g-3",
    title: "USB-C Hub 7en1",
    description: "Amplía tus puertos con HDMI 4K, USB 3.0 y lector SD.",
    rating: 4,
    ctaLabel: "Ver en Amazon",
    href: "#",
    tag: "Accesorios",
  },
];

const rows = [
  { feature: 'Conectividad', a: 'Wi‑Fi', b: 'Bluetooth', c: 'USB‑C' },
  { feature: 'Compatibilidad', a: 'iOS/Android', b: 'Windows/macOS', c: 'Universal' },
  { feature: 'Garantía', a: '1 año', b: '2 años', c: '1 año' },
];

const Products = () => {
  return (
    <main className="container py-10">
      <Helmet>
        <title>Productos Tecnológicos | TechSavvy Finds</title>
        <meta name="description" content="Encuentra gadgets y accesorios de oficina con reseñas, valoraciones y comparativas." />
        <link rel="canonical" href="/productos" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Productos Tecnológicos',
            itemListElement: PRODUCTS.map((p, index) => ({
              '@type': 'Product',
              position: index + 1,
              name: p.title,
              description: p.description,
              aggregateRating: { '@type': 'AggregateRating', ratingValue: p.rating, reviewCount: 25 }
            }))
          })}
        </script>
      </Helmet>

      <h1 className="text-3xl font-heading">Productos Tecnológicos</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">Gadgets, hogar inteligente y accesorios de oficina con enlaces directos a Amazon.</p>

      <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-heading mb-3">Comparativa rápida</h2>
        <ComparisonTable rows={rows} products={["Smart Speaker X", "Mouse Ergonómico Pro", "USB-C Hub 7en1"]} />
      </section>
    </main>
  );
};

export default Products;
