const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full text-xs font-medium tracking-widest uppercase text-primary bg-primary/10">
            Sobre nosotros
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Tu socio tecnológico <span className="text-gradient">estratégico</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Norax Technology es una empresa enfocada en brindar soluciones
            tecnológicas empresariales que permiten a las organizaciones operar
            de forma eficiente, segura y preparada para crecer.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nuestro objetivo es convertirnos en un socio tecnológico estratégico
            para las empresas, acompañándolas en cada etapa de su crecimiento
            con infraestructura confiable y soporte de primer nivel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
