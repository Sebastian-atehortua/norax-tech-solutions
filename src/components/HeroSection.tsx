import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-navy opacity-80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-16">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full text-xs font-medium tracking-widest uppercase border border-electric/30 text-electric bg-electric/10">
            Infraestructura TI para PYMEs
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground leading-tight mb-6">
            Infraestructura Tecnológica{" "}
            <span className="text-gradient">Profesional</span> para Empresas
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            En Norax Technology ayudamos a las empresas a diseñar, implementar y
            administrar su infraestructura tecnológica de forma segura, escalable
            y eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gradient-electric text-primary-foreground glow-electric text-base px-8 py-6"
            >
              <a href="#contacto" className="flex items-center gap-2">
                Solicitar diagnóstico tecnológico
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-electric/30 text-secondary-foreground hover:bg-electric/10 text-base px-8 py-6"
            >
              <a href="#servicios">Ver servicios</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
