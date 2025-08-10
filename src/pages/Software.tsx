import { Helmet } from "react-helmet-async";
import FilterBar from "@/components/sections/FilterBar";
import ProductCard, { Product } from "@/components/cards/ProductCard";
import dashboardImg from "@/assets/prod-software-dashboard.jpg";
import designImg from "@/assets/prod-design-tool.jpg";
import { useMemo, useState } from "react";

const ALL = "Todas";
const CATEGORIES = [ALL, "Productividad", "Diseño", "Datos"];

const DATA: Product[] = [
  {
    id: "tool-1",
    title: "FocusFlow (SaaS)",
    description: "Suite de productividad con tareas, calendario y analítica de tiempo.",
    image: dashboardImg,
    rating: 5,
    ctaLabel: "Obtener oferta",
    href: "#",
    tag: "Productividad",
  },
  {
    id: "tool-2",
    title: "PixelCraft Studio",
    description: "Herramientas pro para diseño gráfico y prototipado colaborativo.",
    image: designImg,
    rating: 4,
    ctaLabel: "Ver más",
    href: "#",
    tag: "Diseño",
  },
  {
    id: "tool-3",
    title: "DataSight",
    description: "Análisis de datos con dashboards en tiempo real y conectores.",
    rating: 5,
    ctaLabel: "Probar ahora",
    href: "#",
    tag: "Datos",
  },
];

const Software = () => {
  const [active, setActive] = useState<string>(ALL);

  const filtered = useMemo(() => {
    if (active === ALL) return DATA;
    return DATA.filter((d) => d.tag === active);
  }, [active]);

  return (
    <main className="container py-10">
      <Helmet>
        <title>Software y Herramientas | TechSavvy Finds</title>
        <meta name="description" content="Explora las mejores herramientas de software con reseñas, valoraciones y ofertas." />
        <link rel="canonical" href="/software" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Software y Herramientas',
            itemListElement: DATA.map((p, index) => ({
              '@type': 'SoftwareApplication',
              position: index + 1,
              name: p.title,
              description: p.description,
              aggregateRating: { '@type': 'AggregateRating', ratingValue: p.rating, reviewCount: 40 }
            }))
          })}
        </script>
      </Helmet>

      <h1 className="text-3xl font-heading">Software y Herramientas</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">Descubre herramientas seleccionadas para productividad, diseño y análisis de datos.</p>

      <section className="mt-6">
        <FilterBar options={CATEGORIES} active={active} onChange={setActive} />
      </section>

      <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </section>
    </main>
  );
};

export default Software;
