import { Network, Headset, LifeBuoy, Server, ShieldCheck, ClipboardPenLine, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Infraestructura tecnológica",
    description: "Diseño, implementación y mantenimiento de servidores, almacenamiento, virtualización y centros de datos.",
  },
  {
    icon: Network,
    title: "Redes empresariales",
    description: "Diseño, configuración y administración de redes cableadas e inalámbricas seguras y eficientes.",
  },
  {
    icon: Headset,
    title: "Soporte técnico empresarial",
    description: "Soporte remoto y presencial para equipos, software y usuarios, con resolución rápida y efectiva.",
  },
  {
    icon: LifeBuoy,
    title: "Mesa de ayuda TI",
    description: "Gestión de incidencias y requerimientos con seguimiento y atención oportuna para tu equipo.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad informática",
    description: "Buenas prácticas, firewalls, copias de seguridad y protección de datos.",
  },
  {
    icon: ClipboardPenLine,
    title: "Asesoría y proyectos",
    description: "Planeación y ejecución de proyectos tecnológicos que impulsan la transformación digital.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-background py-24 lg:py-32">
      <div className="container px-5">
        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <span className="section-label">01 / Nuestros servicios</span>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Soluciones tecnológicas para <span className="text-primary">cada necesidad.</span>
          </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
            Un portafolio integral para garantizar el correcto funcionamiento de tu infraestructura tecnológica.
          </p>
        </div>

        <div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative min-h-72 border-b border-r border-border bg-card p-8 transition-colors duration-300 hover:bg-muted/60 lg:p-10"
            >
              <div className="mb-12 flex items-start justify-between">
                <service.icon size={30} className="text-primary" strokeWidth={1.7} />
                <ArrowUpRight className="h-5 w-5 text-border transition-colors group-hover:text-primary" />
              </div>
              <span className="mb-3 block font-mono text-[11px] text-primary">0{index + 1}</span>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
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
