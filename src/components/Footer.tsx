const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-navy-light/30 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Norax Technology. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
