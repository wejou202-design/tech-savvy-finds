import heroImg from "@/assets/hero-tech.jpg";
import { Button } from "@/components/ui/button";
import { branding } from "@/config/branding";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Escritorio tecnológico con laptop y gadgets"
          className="h-[60vh] w-full object-cover"
          loading="eager"
          width={1600}
          height={896}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />
      </div>

      <div className="container relative z-10 h-[60vh] flex items-end pb-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading leading-tight">
            {branding.siteName}: herramientas y gadgets para potenciar tu productividad
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Reseñas honestas, comparativas claras y ofertas de afiliado seleccionadas para ayudarte a elegir mejor.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="hero">
              <a href="/software" aria-label="Explorar software y herramientas">Descubre las mejores herramientas</a>
            </Button>
            <Button asChild size="lg" variant="cta">
              <a href="/productos" aria-label="Explorar gadgets tecnológicos">Compra los mejores gadgets</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
