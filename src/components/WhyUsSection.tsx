import { Award, Heart, Sparkles, BadgeCheck, Clock, Brush } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const values = [
  { icon: Award, title: "30 años de experiencia", desc: "Tres décadas perfeccionando nuestro oficio en Hortaleza." },
  { icon: Heart, title: "Trato amable y profesional", desc: "Nuestros clientes vuelven por la cercanía y el buen trato." },
  { icon: Sparkles, title: "Limpieza y orden", desc: "Un espacio impecable porque tu salud y comodidad importan." },
  { icon: BadgeCheck, title: "Calidad-precio imbatible", desc: "Resultados premium a precios honestos. Sin sorpresas." },
  { icon: Brush, title: "Cortes impecables", desc: "Cada detalle cuenta. Acabados perfectos, siempre." },
  { icon: Clock, title: "Ambiente moderno", desc: "Un espacio renovado y minimalista donde sentirte a gusto." },
];

const reviews = [
  { text: "Llevo años viniendo y siempre salgo encantado. Ahmed es un crack.", author: "Cliente verificado" },
  { text: "Trato excelente, muy profesional y el degradado me quedó perfecto.", author: "Cliente verificado" },
  { text: "Barbería limpia, moderna y con muy buen precio. La recomiendo.", author: "Cliente verificado" },
  { text: "Jean Carlo hace magia con la barba. Toalla caliente incluida, un lujo.", author: "Cliente verificado" },
  { text: "Mouiz es muy detallista con los acabados. Se nota la experiencia.", author: "Cliente verificado" },
  { text: "Moha me atendió sin cita y el resultado fue increíble. Volveré seguro.", author: "Cliente verificado" },
];

const WhyUsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % reviews.length);
  const prev = () => setCurrent((p) => (p - 1 + reviews.length) % reviews.length);

  return (
    <section id="por-que-nosotros" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">Por qué elegirnos</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Más que una <span className="text-gold-gradient">barbería</span>
          </h2>
        </motion.div>

        {/* Value cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex gap-4 p-5 rounded-xl bg-secondary/50 border border-border/50"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Wait time note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-dark rounded-xl p-6 mb-16 border-primary/20 max-w-2xl mx-auto text-center"
        >
          <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="font-serif text-lg font-bold text-foreground mb-2">
            ¿Preocupado por la espera?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Reservas por cita para evitar esperas.</strong>{" "}
            Y si surge algún retraso imprevisto, te avisamos para que no pierdas tu tiempo.
          </p>
        </motion.div>

        {/* Reviews slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">
            Reseñas <span className="text-gold-gradient">destacadas</span>
          </h3>

          <div className="relative max-w-xl mx-auto">
            <div className="glass-dark rounded-xl p-8 text-center min-h-[160px] flex flex-col items-center justify-center">
              <p className="text-foreground text-lg italic leading-relaxed mb-4">
                "{reviews[current].text}"
              </p>
              <p className="text-sm text-muted-foreground">— {reviews[current].author}</p>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Reseña anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? "bg-primary" : "bg-border"
                    }`}
                    aria-label={`Ir a reseña ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Siguiente reseña"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
