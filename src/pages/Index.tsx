import { Helmet } from "react-helmet-async";
import Hero from "@/components/sections/Hero";
import NewsletterBar from "@/components/sections/NewsletterBar";
import { Button } from "@/components/ui/button";
import { Wrench, Headphones } from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TechSavvy Finds: Software y Gadgets</title>
        <meta name="description" content="Descubre herramientas de software y gadgets con reseñas, comparativas y ofertas de afiliado." />
        <link rel="canonical" href="/" />
      </Helmet>

      <main>
        <Hero />
        <NewsletterBar />

        <section className="container py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border p-6 bg-card animate-fade-in">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground"><Wrench /></span>
                <h2 className="text-xl font-heading">Software & Herramientas</h2>
              </div>
              <p className="mt-2 text-muted-foreground">Productividad, diseño y datos. Guías y ofertas para elegir la herramienta ideal.</p>
              <Button asChild variant="hero" className="mt-4">
                <a href="/software">Explorar herramientas</a>
              </Button>
            </article>

            <article className="rounded-xl border p-6 bg-card animate-fade-in">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground"><Headphones /></span>
                <h2 className="text-xl font-heading">Productos Tecnológicos</h2>
              </div>
              <p className="mt-2 text-muted-foreground">Gadgets, hogar inteligente y accesorios de oficina con enlaces directos a Amazon.</p>
              <Button asChild variant="cta" className="mt-4">
                <a href="/productos">Ver gadgets</a>
              </Button>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
