import { Award, Building2, TrendingUp, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Experiencia en infraestructura",
    description: "Años de experiencia diseñando e implementando soluciones de infraestructura tecnológica.",
  },
  {
    icon: Building2,
    title: "Enfoque en empresas",
    description: "Entendemos las necesidades de las PYMEs y adaptamos nuestras soluciones a su realidad.",
  },
  {
    icon: TrendingUp,
    title: "Soluciones escalables",
    description: "Infraestructura que crece junto con tu empresa, sin necesidad de rehacer todo.",
  },
  {
    icon: ShieldCheck,
    title: "Soporte confiable",
    description: "Respuesta rápida y efectiva cuando más lo necesitas. Estamos contigo.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 gradient-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full text-xs font-medium tracking-widest uppercase border border-electric/30 text-electric bg-electric/10">
            ¿Por qué Norax?
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-4">
            Por qué elegir <span className="text-gradient">Norax Technology</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 rounded-full bg-electric/10 border border-electric/20 flex items-center justify-center mx-auto mb-5">
                <reason.icon size={26} className="text-electric" />
              </div>
              <h3 className="text-base font-heading font-semibold text-secondary-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
