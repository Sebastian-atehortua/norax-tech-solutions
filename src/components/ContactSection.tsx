import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Por favor completa todos los campos requeridos.");
      return;
    }
    toast.success("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const whatsappUrl = `https://wa.me/5491100000000?text=${encodeURIComponent("Hola, me gustaría hablar con un especialista de Norax Technology.")}`;

  return (
    <section id="contacto" className="py-24 gradient-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full text-xs font-medium tracking-widest uppercase border border-electric/30 text-electric bg-electric/10">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-4">
            Hablemos de tu <span className="text-gradient">infraestructura</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Contáctanos para una evaluación gratuita de tu infraestructura tecnológica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-electric" />
              </div>
              <div>
                <h3 className="text-sm font-heading font-semibold text-secondary-foreground mb-1">
                  Correo electrónico
                </h3>
                <a href="mailto:soporte@noraxtech.com" className="text-muted-foreground hover:text-electric transition-colors">
                  soporte@noraxtech.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-electric" />
              </div>
              <div>
                <h3 className="text-sm font-heading font-semibold text-secondary-foreground mb-1">
                  WhatsApp
                </h3>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 px-5 py-2.5 rounded-lg gradient-electric text-primary-foreground text-sm font-medium glow-electric hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={16} />
                  Hablar con un especialista
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Nombre *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-navy-light/50 border-navy-light text-secondary-foreground placeholder:text-muted-foreground"
              maxLength={100}
            />
            <Input
              type="email"
              placeholder="Correo electrónico *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-navy-light/50 border-navy-light text-secondary-foreground placeholder:text-muted-foreground"
              maxLength={255}
            />
            <Input
              placeholder="Empresa"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-navy-light/50 border-navy-light text-secondary-foreground placeholder:text-muted-foreground"
              maxLength={100}
            />
            <Textarea
              placeholder="¿En qué podemos ayudarte? *"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-navy-light/50 border-navy-light text-secondary-foreground placeholder:text-muted-foreground resize-none"
              maxLength={1000}
            />
            <Button type="submit" className="w-full gradient-electric text-primary-foreground glow-electric py-6">
              <Send size={16} className="mr-2" />
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
