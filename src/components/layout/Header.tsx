import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { branding } from "@/config/branding";

const navItems = [
  { to: "/software", label: "Software & Herramientas" },
  { to: "/productos", label: "Productos Tech" },
  { to: "/categorias", label: "Categorías" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          {branding.logoUrl ? (
            <img src={branding.logoUrl} alt={`${branding.siteName} logo`} className="h-8 w-8 rounded" loading="lazy" />
          ) : (
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">EI</span>
          )}
          <span className="font-heading text-lg">{branding.siteName}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `story-link text-sm ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild variant="cta">
            <a href="#newsletter">Únete al boletín</a>
          </Button>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-accent"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="container py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm ${isActive ? 'text-primary' : 'text-foreground'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild variant="cta" onClick={() => setOpen(false)}>
              <a href="#newsletter">Únete al boletín</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
