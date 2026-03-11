import { Network, Cable, Headset, LifeBuoy, Server } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Infraestructura de red",
    description: "Diseño, instalación y optimización de redes empresariales.",
  },
  {
    icon: Cable,
    title: "Cableado estructurado",
    description: "Implementación de cableado profesional para redes corporativas.",
  },
  {
    icon: Headset,
    title: "Soporte técnico empresarial",
    description: "Resolución de incidentes y soporte para equipos y usuarios.",
  },
  {
    icon: LifeBuoy,
    title: "Mesa de ayuda TI",
    description: "Externalización del soporte técnico para empresas.",
  },
  {
    icon: Server,
    title: "Administración de infraestructura TI",
    description: "Gestión de servidores, redes y sistemas empresariales.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full text-xs font-medium tracking-widest uppercase text-primary bg-primary/10">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Soluciones tecnológicas <span className="text-gradient">integrales</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos servicios especializados en infraestructura TI para que tu empresa opere con eficiencia y seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg p-8 border border-border hover:border-electric/40 transition-all duration-300 hover:shadow-lg hover:shadow-electric/5"
            >
              <div className="w-12 h-12 rounded-lg gradient-electric flex items-center justify-center mb-5 group-hover:glow-electric transition-all">
                <service.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-card-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
