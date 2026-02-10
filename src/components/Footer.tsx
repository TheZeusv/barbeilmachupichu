import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand & Address */}
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-4">
              Barbeil <span className="text-gold-gradient">Machupichu</span>
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Av. de Machupichu, 19, local 45<br />Hortaleza, 28043 Madrid</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:914244799" className="hover:text-primary transition-colors">914 24 47 99</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Abierto · Cierre 20:30</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces</h4>
            <nav className="space-y-2 text-sm">
              {[
                { href: "#servicios", label: "Servicios" },
                { href: "#por-que-nosotros", label: "Por qué nosotros" },
                { href: "#galeria", label: "Galería" },
                { href: "#faq", label: "Preguntas frecuentes" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Ubicación</h4>
            <div className="rounded-xl overflow-hidden border border-border aspect-video">
              <iframe
                title="Ubicación de Barbeil Machupichu en Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.5!2d-3.64!3d40.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI4JzEyLjAiTiAzwrAzOCcyNC4wIlc!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+de+Machupichu+19+Hortaleza+28043+Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-gold-light transition-colors mt-3"
            >
              <MapPin className="w-4 h-4" />
              Cómo llegar
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Peluquería Barbería Barbeil Machupichu. Todos los derechos reservados.</p>
          <p className="mt-1">Av. de Machupichu, 19, local 45, Hortaleza, 28043 Madrid · Tel: 914 24 47 99</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
