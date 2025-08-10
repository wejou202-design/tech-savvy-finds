import { branding } from "@/config/branding";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg mb-2">{branding.siteName}</h3>
          <p className="text-sm text-muted-foreground">Reseñas, comparativas y ofertas en software y productos tecnológicos.</p>
        </div>
        <nav className="space-y-2">
          <a className="story-link block" href="/software">Software & Herramientas</a>
          <a className="story-link block" href="/productos">Productos Tech</a>
          <a className="story-link block" href="/categorias">Categorías</a>
        </nav>
        <div className="text-sm text-muted-foreground md:text-right">© {year} {branding.siteName}. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;
