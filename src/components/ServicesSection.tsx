import { Scissors, SprayCan, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Scissors,
    title: "Corte Caballero",
    desc: "Corte clásico o moderno adaptado a tu estilo. Incluye lavado y secado.",
    price: "12",
  },
  {
    icon: Sparkles,
    title: "Degradado / Fade",
    desc: "Degradados precisos: low, mid o high fade. Acabado impecable.",
    price: "14",
  },
  {
    icon: SprayCan,
    title: "Arreglo de Barba",
    desc: "Perfilado, recorte y cuidado con productos premium para tu barba.",
    price: "8",
  },
  {
    icon: SprayCan,
    title: "Afeitado",
    desc: "Afeitado tradicional con navaja y toalla caliente. Piel suave garantizada.",
    price: "10",
  },
  {
    icon: Scissors,
    title: "Corte Niño",
    desc: "Cortes divertidos y cómodos para los más pequeños (hasta 12 años).",
    price: "10",
  },
  {
    icon: Sparkles,
    title: "Pack Corte + Barba",
    desc: "Combo completo: corte de pelo y arreglo de barba. El más solicitado.",
    price: "18",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">Nuestros servicios</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Lo que hacemos <span className="text-gold-gradient">mejor</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className="group glass-dark rounded-xl p-6 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-lg">Desde {s.price}€</span>
                <a
                  href="#contacto-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contacto-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  Pedir cita →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
