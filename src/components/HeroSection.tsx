import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import portfolioAsset from "@/assets/Portafolio_Norax.pdf.asset.json";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-secondary pt-24"
    >
      {/* Background image */}
      <div
        className="absolute inset-y-0 right-0 w-full bg-cover bg-center bg-no-repeat opacity-50 lg:w-[58%]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Content */}
      <div className="container relative z-10 px-5 py-20 lg:py-28">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="mb-7 flex w-fit items-center gap-3 border border-accent/25 bg-accent/10 px-3 py-2 font-mono text-[11px] font-semibold uppercase text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Infraestructura TI para empresas
          </div>
          <h1 className="mb-7 text-5xl font-bold leading-[1.02] text-secondary-foreground sm:text-6xl lg:text-8xl">
            Tecnología que conecta y hace <span className="text-gradient">crecer</span> tu empresa.
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Soluciones TI confiables y escalables para que tu empresa opere con estabilidad, seguridad y eficiencia.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 px-8 text-base shadow-electric">
              <a href="#contacto">
                Solicitar diagnóstico tecnológico
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 border-border bg-secondary/40 px-8 text-base text-secondary-foreground hover:bg-muted">
              <a href={portfolioAsset.url} target="_blank" rel="noreferrer">Ver portafolio</a>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/60 pt-6 text-sm text-muted-foreground">
            {["Atención personalizada", "Soporte confiable", "Soluciones escalables"].map((item) => (
              <span key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" />{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
