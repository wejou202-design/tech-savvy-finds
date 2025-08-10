import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { softwareCategories } from "@/data/software";
import { productCategories } from "@/data/products";
import { branding } from "@/config/branding";

const Categories = () => {
  return (
    <main className="container py-10">
      <Helmet>
        <title>Categorías | {branding.siteName}</title>
        <meta name="description" content="Explora todas las categorías y subcategorías de software y productos tecnológicos." />
        <link rel="canonical" href={`${branding.domain}/categorias`} />
      </Helmet>

      <h1 className="text-3xl font-heading">Categorías</h1>

      <section className="mt-6">
        <h2 className="text-2xl font-heading mb-3">Software y Herramientas</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {softwareCategories.map((c) => (
            <Link key={c.slug} to={`/software/${c.slug}`} className="rounded-lg border p-4 hover:shadow-md hover:-translate-y-0.5 transition">
              <h3 className="font-heading text-lg">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-heading mb-3">Productos Tecnológicos</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((c) => (
            <Link key={c.slug} to={`/productos/${c.slug}`} className="rounded-lg border p-4 hover:shadow-md hover:-translate-y-0.5 transition">
              <h3 className="font-heading text-lg">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Categories;
