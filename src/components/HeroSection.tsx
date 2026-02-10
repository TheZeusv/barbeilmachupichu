import { Star, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import heroBg from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Interior de barbería premium en Madrid"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="relative container mx-auto section-padding pt-32 lg:pt-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? "fill-primary text-primary" : "fill-primary/50 text-primary/50"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">4.7★</span>
              <span className="text-sm text-muted-foreground">· 164 reseñas</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[1.1] mb-6">
              Tu barbería de{" "}
              <span className="text-gold-gradient">confianza</span>
              <br />
              en Hortaleza
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Más de 30 años cuidando tu imagen en el corazón de Conde de Orgaz.
              Cortes impecables, trato profesional y un ambiente que te hará volver.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="#contacto-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contacto-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground px-7 py-3.5 rounded-md font-semibold text-base hover:opacity-90 transition-opacity"
              >
                Reservar cita
              </a>
              <a
                href="tel:914244799"
                className="inline-flex items-center gap-2 border border-primary/40 text-foreground px-7 py-3.5 rounded-md font-semibold text-base hover:bg-primary/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Llamar
              </a>
            </div>

            <p className="text-xs text-muted-foreground">
              Av. de Machupichu, 19 · Hortaleza, Madrid
            </p>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            id="contacto-form"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
