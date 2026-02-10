import { Phone, MessageCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section id="contacto" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
            ¿Listo para un corte{" "}
            <span className="text-gold-gradient">impecable</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Reserva ahora y descubre por qué más de 164 clientes nos recomiendan.
            Tu nuevo look te espera en Hortaleza.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:914244799"
              className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground px-8 py-4 rounded-md font-semibold text-base hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              914 24 47 99
            </a>
            <a
              href="https://wa.me/34914244799?text=Hola%2C%20quiero%20reservar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary/40 text-foreground px-8 py-4 rounded-md font-semibold text-base hover:bg-primary/10 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+de+Machupichu+19+Hortaleza+28043+Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-muted-foreground px-8 py-4 rounded-md font-semibold text-base hover:text-foreground hover:border-primary/40 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Cómo llegar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
