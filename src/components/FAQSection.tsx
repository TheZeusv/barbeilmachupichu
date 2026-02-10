import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Necesito pedir cita?",
    a: "Recomendamos reservar cita para garantizarte atención sin esperas. Puedes hacerlo por teléfono, WhatsApp o a través del formulario de esta web. También aceptamos clientes sin cita según disponibilidad.",
  },
  {
    q: "¿Cuánto dura un corte de pelo?",
    a: "Un corte estándar dura entre 20 y 30 minutos. Si incluye barba o servicios adicionales, puede extenderse a 40-50 minutos. Nos tomamos el tiempo necesario para que quedes perfecto.",
  },
  {
    q: "¿Qué formas de pago aceptáis?",
    a: "Aceptamos efectivo y tarjeta de crédito/débito. Próximamente Bizum.",
  },
  {
    q: "¿Hacéis degradados / fades?",
    a: "¡Por supuesto! Los degradados son una de nuestras especialidades. Low fade, mid fade, high fade, skin fade… dinos el estilo y lo hacemos realidad.",
  },
  {
    q: "¿Ofrecéis afeitado con toalla caliente?",
    a: "Sí, nuestro afeitado tradicional incluye toalla caliente y productos premium. Es una experiencia relajante que encanta a nuestros clientes.",
  },
  {
    q: "¿Cortáis el pelo a niños?",
    a: "Sí, atendemos a niños hasta 12 años. Nuestro equipo tiene experiencia con los más pequeños y crea un ambiente cómodo para ellos.",
  },
  {
    q: "¿Cómo puedo llegar?",
    a: "Estamos en Av. de Machupichu, 19, local 45, en el barrio de Hortaleza (28043 Madrid). Muy cerca de la zona de Conde de Orgaz y Canillas. Hay aparcamiento fácil en la zona.",
  },
  {
    q: "¿Cuál es vuestro horario?",
    a: "Cerramos a las 20:30. Para conocer la hora de apertura actualizada, contáctanos por teléfono o WhatsApp. Abierto de lunes a sábado.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-card">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">Preguntas frecuentes</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            ¿Dudas? Te las <span className="text-gold-gradient">resolvemos</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-dark rounded-xl px-6 border border-border/50 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
