"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Smartphone, Globe } from "lucide-react";
import { DotGridPattern } from "./LogoIsotipo";

const services = [
  {
    icon: ShoppingBag,
    title: "Tiendas Online",
    description:
      "E-commerce hecho para vender. Integración de pagos, inventario y gestión de pedidos desde el primer día. Tu negocio abierto las 24 horas.",
    features: ["Carrito de compras", "Pagos en línea", "Panel de gestión"],
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description:
      "Apps iOS y Android que tus clientes van a usar. Diseño pensado para retención, no solo para impresionar en el lanzamiento.",
    features: ["iOS y Android", "UI/UX nativa", "Notificaciones push"],
    featured: true,
  },
  {
    icon: Globe,
    title: "Páginas Web",
    description:
      "Sitios rápidos, seguros y bien posicionados. Estrategia comercial integrada que convierte visitas en clientes reales.",
    features: ["SEO técnico", "Alta velocidad", "Diseño responsivo"],
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative py-24 overflow-hidden bg-white"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <DotGridPattern />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest mb-4 block"
            style={{ color: "#2B7BE0" }}
          >
            Lo que hacemos
          </span>
          <h2
            className="font-bold text-4xl md:text-5xl mb-4"
            style={{ color: "#1A1A2E" }}
          >
            Servicios diseñados
            <br />
            para tu negocio
          </h2>
          <p className="text-lg" style={{ color: "#64748b", maxWidth: "42ch" }}>
            Socio tecnológico que entiende tu negocio. Cada proyecto, a la medida.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className={`relative rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  service.featured ? "border-2" : "border"
                }`}
                style={{
                  backgroundColor: service.featured ? "#0D1F3C" : "#FFFFFF",
                  borderColor: service.featured
                    ? "#2B7BE0"
                    : "rgba(43,123,224,0.18)",
                  boxShadow: service.featured
                    ? "0 8px 40px rgba(43,123,224,0.25)"
                    : "0 2px 16px rgba(13,31,60,0.06)",
                }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              >
                {service.featured && (
                  <span
                    className="absolute -top-3.5 left-8 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#2B7BE0", color: "#FFFFFF" }}
                  >
                    Más solicitado
                  </span>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: service.featured
                      ? "rgba(43,123,224,0.2)"
                      : "rgba(43,123,224,0.08)",
                  }}
                >
                  <Icon
                    size={26}
                    style={{ color: service.featured ? "#C8DFFE" : "#2B7BE0" }}
                  />
                </div>

                <h3
                  className="text-xl font-bold"
                  style={{ color: service.featured ? "#FFFFFF" : "#1A1A2E" }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{
                    color: service.featured
                      ? "rgba(200,223,254,0.75)"
                      : "#64748b",
                  }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2 mt-auto">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2.5 text-sm font-semibold"
                      style={{
                        color: service.featured ? "#C8DFFE" : "#2B7BE0",
                      }}
                    >
                      <span
                        className="w-5 h-5 rounded-md flex items-center justify-center text-xs"
                        style={{
                          backgroundColor: service.featured
                            ? "rgba(43,123,224,0.25)"
                            : "rgba(43,123,224,0.1)",
                        }}
                      >
                        ✓
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
