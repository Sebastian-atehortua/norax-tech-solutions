const AboutSection = () => {
  return (
    <section id="nosotros" className="bg-secondary py-24 text-secondary-foreground lg:py-32">
      <div className="container grid gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="section-label text-accent">02 / Quiénes somos</span>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            Tu aliado tecnológico en <span className="text-gradient">cada etapa.</span>
          </h2>
        </div>
        <div className="border-l border-border pl-6 md:pl-10 lg:pt-2">
          <p className="mb-6 text-xl leading-relaxed text-secondary-foreground/90 md:text-2xl">
            Somos una empresa colombiana especializada en infraestructura tecnológica y soporte TI.
          </p>
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
            Ayudamos a las empresas a optimizar sus recursos tecnológicos, garantizando estabilidad, seguridad y eficiencia. Trabajamos como aliados estratégicos con soluciones personalizadas que impulsan su crecimiento.
          </p>
          <div className="grid grid-cols-2 gap-px bg-border">
            {["Confianza", "Innovación", "Compromiso", "Crecimiento"].map((value) => (
              <div key={value} className="bg-secondary p-5 text-sm font-semibold uppercase text-secondary-foreground">{value}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
