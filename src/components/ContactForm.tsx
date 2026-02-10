import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().trim().min(2, "Nombre requerido").max(100),
  phone: z.string().trim().min(6, "Teléfono requerido").max(20),
  email: z.string().trim().email("Email no válido").max(255).or(z.literal("")),
  service: z.string().min(1, "Selecciona un servicio"),
  preferred_datetime: z.string().max(100).optional(),
  message: z.string().trim().max(500).optional(),
});

type FormData = z.infer<typeof formSchema>;

const services = [
  "Corte Caballero",
  "Degradado / Fade",
  "Arreglo de Barba",
  "Afeitado",
  "Corte Niño",
  "Pack Corte + Barba",
];

const ContactForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    preferred_datetime: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    try {
      const { error } = await supabase.from("leads").insert({
        name: result.data.name,
        phone: result.data.phone,
        email: result.data.email || null,
        service: result.data.service,
        preferred_datetime: result.data.preferred_datetime || null,
        message: result.data.message || null,
        source: "website",
      });

      if (error) throw error;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="glass-dark rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
          ¡Solicitud enviada!
        </h3>
        <p className="text-muted-foreground">
          Te contactaremos pronto para confirmar tu cita. ¡Gracias!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-dark rounded-xl p-6 md:p-8 space-y-4">
      <h3 className="font-serif text-xl font-bold text-foreground mb-1">
        Reserva tu cita
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Rellena el formulario y te confirmamos en minutos.
      </p>

      {/* Name */}
      <div>
        <label htmlFor="name" className="text-sm font-medium text-foreground block mb-1">Nombre *</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          placeholder="Tu nombre"
        />
        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-foreground block mb-1">Teléfono *</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          placeholder="612 345 678"
        />
        {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="text-sm font-medium text-foreground block mb-1">Email <span className="text-muted-foreground">(opcional)</span></label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          placeholder="tu@email.com"
        />
        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="text-sm font-medium text-foreground block mb-1">Servicio *</label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
        >
          <option value="">Selecciona un servicio</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
      </div>

      {/* Date/time */}
      <div>
        <label htmlFor="preferred_datetime" className="text-sm font-medium text-foreground block mb-1">Fecha/hora preferida <span className="text-muted-foreground">(opcional)</span></label>
        <input
          id="preferred_datetime"
          name="preferred_datetime"
          type="datetime-local"
          value={form.preferred_datetime}
          onChange={handleChange}
          className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground block mb-1">Mensaje <span className="text-muted-foreground">(opcional)</span></label>
        <textarea
          id="message"
          name="message"
          rows={2}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
          placeholder="¿Algo que debamos saber?"
        />
      </div>

      {status === "error" && (
        <p className="text-destructive text-sm">Hubo un error. Inténtalo de nuevo o llámanos al 914 24 47 99.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-gold-gradient text-primary-foreground py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {status === "loading" ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <Send className="w-4 h-4" />
            Enviar solicitud
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
