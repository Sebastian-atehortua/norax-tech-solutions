import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send, MapPin, Instagram, Globe2 } from "lucide-react";
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

  const whatsappUrl = `https://wa.me/573004857022?text=${encodeURIComponent("Hola, me gustaría hablar con un especialista de Norax Technology.")}`;

  return (
    <section id="contacto" className="bg-secondary py-24 lg:py-32">
      <div className="container px-5">
        <div className="mb-16 max-w-4xl">
          <span className="section-label text-accent">04 / Contacto</span>
          <h2 className="mt-5 text-4xl font-bold text-secondary-foreground md:text-6xl">
            Hablemos de cómo podemos <span className="text-gradient">ayudarte.</span>
          </h2>
        </div>

        <div className="grid gap-14 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-7">
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">Cuéntanos qué necesita tu empresa. Revisaremos tu caso y te orientaremos hacia una solución clara.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <a href="mailto:norax.technology@outlook.com" className="contact-link"><Mail /><span>norax.technology@outlook.com</span></a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-link"><MessageCircle /><span>+57 300 485 7022</span></a>
              <a href="https://instagram.com/norax.technology" target="_blank" rel="noopener noreferrer" className="contact-link"><Instagram /><span>@norax.technology</span></a>
              <div className="contact-link"><MapPin /><span>Medellín, Colombia</span></div>
              <a href="https://www.noraxtechnology.com" target="_blank" rel="noopener noreferrer" className="contact-link sm:col-span-2"><Globe2 /><span>www.noraxtechnology.com</span></a>
            </div>

            <Button asChild size="lg" className="h-14 px-7 shadow-electric"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle /> Hablar con un especialista</a></Button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 border border-border bg-card/50 p-6 md:p-8">
            <h3 className="mb-6 text-xl font-semibold text-card-foreground">Solicita un diagnóstico</h3>
            <Input
              placeholder="Nombre *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12 border-border bg-secondary text-secondary-foreground placeholder:text-muted-foreground"
              maxLength={100}
            />
            <Input
              type="email"
              placeholder="Correo electrónico *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12 border-border bg-secondary text-secondary-foreground placeholder:text-muted-foreground"
              maxLength={255}
            />
            <Input
              placeholder="Empresa"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="h-12 border-border bg-secondary text-secondary-foreground placeholder:text-muted-foreground"
              maxLength={100}
            />
            <Textarea
              placeholder="¿En qué podemos ayudarte? *"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="resize-none border-border bg-secondary text-secondary-foreground placeholder:text-muted-foreground"
              maxLength={1000}
            />
            <Button type="submit" className="h-12 w-full shadow-electric">
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
