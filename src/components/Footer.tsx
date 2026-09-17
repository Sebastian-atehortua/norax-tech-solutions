const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary py-8">
      <div className="container flex flex-col gap-3 px-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Norax Technology. Todos los derechos reservados.
        </p>
        <p className="font-mono text-[11px] uppercase text-accent">Soluciones tecnológicas para empresas que avanzan.</p>
      </div>
    </footer>
  );
};

export default Footer;
