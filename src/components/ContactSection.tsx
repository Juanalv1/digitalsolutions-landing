"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { Instagram } from "lucide-react";
import { PixelPatternBg } from "./LogoIsotipo";

const serviceOptions = [
  "Selecciona un servicio",
  "Tienda Online",
  "Aplicación Móvil",
  "Página Web",
  "Consultoría Digital",
  "Otro",
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    servicio: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!formState.email.trim()) {
      newErrors.email = "El correo es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Ingresa un correo válido";
    }
    if (!formState.mensaje.trim())
      newErrors.mensaje = "Cuéntanos de tu proyecto";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Build WhatsApp message and open
    const servicio = formState.servicio || "No especificado";
    const texto = `Hola DigitalSolutions! 👋\n\n*Nombre:* ${formState.nombre}\n*WhatsApp:* ${formState.whatsapp || "No indicado"}\n*Servicio:* ${servicio}\n\n*Mensaje:*\n${formState.mensaje}`;
    const url = `https://wa.me/584145772057?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm font-semibold text-white placeholder-white/30 border outline-none transition-all duration-200 focus:ring-2 focus:ring-[#2B7BE0]/60";
  const inputStyle = {
    backgroundColor: "rgba(255,255,255,0.07)",
    borderColor: "rgba(255,255,255,0.12)",
  };
  const inputFocusStyle = "bg-[rgba(255,255,255,0.1)]";

  return (
    <section
      id="contacto"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#0D1F3C" }}
    >
      {/* Pixel pattern decoration */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none rotate-180">
        <PixelPatternBg />
      </div>

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(43,123,224,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest mb-4 block"
              style={{ color: "#2B7BE0" }}
            >
              Contáctanos
            </span>
            <h2
              className="font-bold text-4xl md:text-5xl mb-6 text-white leading-tight"
            >
              ¿Listo para digitalizar
              <br />
              tu negocio?
            </h2>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "rgba(200,223,254,0.75)" }}
            >
              Cuéntanos tu idea. En menos de 24 horas te respondemos con
              una propuesta clara y sin compromiso.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: Instagram,
                  label: "Instagram",
                  value: "@dsolutions.dev",
                  href: "https://instagram.com/dsolutions.dev",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "+58 414 577 2057",
                  href: "https://wa.me/584145772057",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(43,123,224,0.2)" }}
                    >
                      <Icon size={18} style={{ color: "#2B7BE0" }} />
                    </div>
                    <div>
                      <div
                        className="text-xs font-bold uppercase tracking-wider mb-0.5"
                        style={{ color: "rgba(200,223,254,0.5)" }}
                      >
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold transition-colors hover:text-white"
                          style={{ color: "#C8DFFE" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "#C8DFFE" }}
                        >
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: "rgba(43,123,224,0.2)" }}
                  >
                    <Send size={28} style={{ color: "#2B7BE0" }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    ¡Abriendo WhatsApp!
                  </h3>
                  <p style={{ color: "rgba(200,223,254,0.7)" }} className="text-sm">
                    Se abrió WhatsApp con tu mensaje listo para enviar.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "rgba(200,223,254,0.6)" }}
                    >
                      Nombre *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      autoComplete="name"
                      placeholder="Tu nombre completo"
                      value={formState.nombre}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                    />
                    {errors.nombre && (
                      <p className="text-xs mt-1.5" style={{ color: "#f87171" }}>
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "rgba(200,223,254,0.6)" }}
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="tu@correo.com"
                      value={formState.email}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                    />
                    {errors.email && (
                      <p className="text-xs mt-1.5" style={{ color: "#f87171" }}>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="block text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "rgba(200,223,254,0.6)" }}
                    >
                      WhatsApp
                    </label>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+58 414 577 2057"
                      value={formState.whatsapp}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>

                  {/* Servicio */}
                  <div>
                    <label
                      htmlFor="servicio"
                      className="block text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "rgba(200,223,254,0.6)" }}
                    >
                      Tipo de servicio
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formState.servicio}
                      onChange={handleChange}
                      className={inputClass}
                      style={{
                        ...inputStyle,
                        appearance: "none",
                        WebkitAppearance: "none",
                      }}
                    >
                      {serviceOptions.map((opt) => (
                        <option
                          key={opt}
                          value={opt === "Selecciona un servicio" ? "" : opt}
                          style={{ backgroundColor: "#0D1F3C", color: "#fff" }}
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: "rgba(200,223,254,0.6)" }}
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      placeholder="Cuéntanos de tu proyecto..."
                      value={formState.mensaje}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      style={inputStyle}
                    />
                    {errors.mensaje && (
                      <p className="text-xs mt-1.5" style={{ color: "#f87171" }}>
                        {errors.mensaje}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 font-bold text-sm px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 mt-2"
                    style={{
                      backgroundColor: "#2B7BE0",
                      color: "#FFFFFF",
                      boxShadow: "0 4px 24px rgba(43,123,224,0.35)",
                    }}
                  >
                    <Send size={16} />
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
