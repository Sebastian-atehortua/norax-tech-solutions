import { Search, Lightbulb, Settings, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Search,
    title: "Analizamos",
    description: "Entendemos tus necesidades y objetivos.",
  },
  {
    icon: Lightbulb,
    title: "Diseñamos",
    description: "Proponemos soluciones tecnológicas a la medida.",
  },
  {
    icon: Settings,
    title: "Implementamos",
    description: "Ejecutamos con calidad, cumpliendo tiempos y estándares.",
  },
  {
    icon: TrendingUp,
    title: "Acompañamos",
    description: "Brindamos soporte y optimización continua.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="enfoque" className="bg-background py-24 lg:py-32">
      <div className="container px-5">
        <div className="mb-16 max-w-4xl">
          <span className="section-label">03 / Nuestro enfoque</span>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Entendemos tu negocio, impulsamos <span className="text-primary">tu futuro.</span>
          </h2>
        </div>

        <div className="grid gap-0 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={index} className="relative border-t border-border px-0 py-8 lg:border-l lg:border-t-0 lg:px-8 lg:py-0 first:lg:border-l-0 first:lg:pl-0">
              <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-full border border-primary/25 bg-primary/10">
                <reason.icon size={26} className="text-primary" />
              </div>
              <span className="mb-3 block font-mono text-xs text-primary">0{index + 1}</span>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {reason.title.toUpperCase()}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
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
