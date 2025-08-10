import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { productCategories, productsByCategory } from "@/data/products";
import ProductCard from "@/components/cards/ProductCard";
import { branding } from "@/config/branding";

const ProductsCategory = () => {
  const { slug } = useParams();
  const cat = productCategories.find((c) => c.slug === slug);
  const items = (slug && productsByCategory[slug]) || [];

  if (!cat) {
    return (
      <main className="container py-10">
        <h1 className="text-3xl font-heading">Categoría no encontrada</h1>
        <p className="mt-2"><Link className="story-link" to="/categorias">Ver categorías</Link></p>
      </main>
    );
  }

  return (
    <main className="container py-10">
      <Helmet>
        <title>{cat.name} | {branding.siteName}</title>
        <meta name="description" content={`Explora productos de ${cat.name}: ${cat.description}.`} />
        <link rel="canonical" href={`${branding.domain}/productos/${cat.slug}`} />
      </Helmet>

      <nav className="text-sm text-muted-foreground"><Link className="story-link" to="/categorias">Categorías</Link> / <span>{cat.name}</span></nav>
      <h1 className="text-3xl font-heading mt-2">{cat.name}</h1>
      <p className="mt-2 text-muted-foreground max-w-2xl">{cat.description}</p>

      <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </section>
    </main>
  );
};

export default ProductsCategory;
