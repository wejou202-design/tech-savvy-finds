import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const NewsletterBar = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Correo inválido", description: "Por favor ingresa un email válido." });
      return;
    }
    toast({ title: "¡Gracias por suscribirte!", description: "Pronto recibirás tu eBook gratuito." });
    setEmail("");
  };

  return (
    <section id="newsletter" className="border-b bg-secondary/40">
      <div className="container py-6 flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">Únete y recibe un eBook gratuito con 50 herramientas para impulsar tu productividad.</p>
        </div>
        <form onSubmit={onSubmit} className="flex gap-2 w-full md:w-auto">
          <Input
            type="email"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Correo electrónico"
          />
          <Button type="submit" variant="cta">Suscribirme</Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterBar;
