import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Nuestro enfoque", href: "#enfoque" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-secondary/85 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between px-5">
        <a href="#inicio" className="flex items-center" aria-label="Norax Technology, inicio">
          <img src="/norax-logo.png" alt="Norax Technology" className="h-11 w-auto object-contain" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="h-10 px-5 shadow-electric">
            <a href="#contacto">Solicitar diagnóstico</a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="border-t border-border bg-secondary px-5 pb-5 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="mt-2 w-full">
            <a href="#contacto" onClick={() => setIsOpen(false)}>Solicitar diagnóstico</a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
