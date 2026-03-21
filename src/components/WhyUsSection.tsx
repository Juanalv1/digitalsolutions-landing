"use client";

import { motion } from "framer-motion";
import { SlidersHorizontal, HeartHandshake, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: SlidersHorizontal,
    title: "Soluciones a medida",
    description:
      "Cada línea de código refleja tu negocio. Sin plantillas genéricas, sin atajos. Construimos exactamente lo que necesitas.",
  },
  {
    icon: HeartHandshake,
    title: "Soporte continuo",
    description:
      "No desaparecemos al entregar el proyecto. Estamos disponibles para resolver dudas, corregir errores y hacer crecer tu plataforma.",
  },
  {
    icon: TrendingUp,
    title: "Enfoque en resultados",
    description:
      "Estrategia comercial que aumenta tus ingresos. Medimos el éxito en ventas, no en líneas de código.",
  },
];

export function WhyUsSection() {
  return (
    <section
      id="por-que"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "#C8DFFE" }}
    >
      {/* Pixel isotipo repeated pattern decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect x='4' y='4' width='10' height='10' rx='2' fill='%230D1F3C'/%3E%3Crect x='18' y='4' width='10' height='10' rx='2' fill='%230D1F3C'/%3E%3Crect x='32' y='4' width='10' height='10' rx='2' fill='%230D1F3C'/%3E%3Crect x='46' y='4' width='10' height='10' rx='2' fill='%230D1F3C'/%3E%3Crect x='4' y='18' width='10' height='10' rx='2' fill='%230D1F3C'/%3E%3Crect x='60' y='18' width='10' height='10' rx='2' fill='%230D1F3C'/%3E%3Crect x='4' y='32' width='10' height='10' rx='2' fill='%230D1F3C'/%3E%3Crect x='60' y='32' width='10' height='10' rx='2' fill='%230D1F3C'/%3E%3Crect x='4' y='46' width='10' height='10' rx='2' fill='%230D1F3C'/%3E%3Crect x='60' y='46' width='10' height='10' rx='2' fill='%230D1F3C'/%3E%3Crect x='4' y='60' width='10' height='10' rx='2' fill='%230D1F3C'/%3E%3Crect x='18' y='60' width='10' height='10' rx='2' fill='%230D1F3C'/%3E%3Crect x='32' y='60' width='10' height='10' rx='2' fill='%230D1F3C'/%3E%3Crect x='46' y='60' width='10' height='10' rx='2' fill='%230D1F3C'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span
              className="text-xs font-black uppercase tracking-widest mb-4 block"
              style={{ color: "#2B7BE0" }}
            >
              Por qué elegirnos
            </span>
            <h2
              className="font-black text-4xl md:text-5xl mb-6 leading-tight"
              style={{ color: "#0D1F3C" }}
            >
              Somos el socio tecnológico
              <br />
              que tu empresa merece
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#0D1F3C", opacity: 0.75 }}
            >
              Más que desarrolladores. Somos el equipo técnico que se preocupa
              por el éxito de tu negocio. Cada proyecto parte de entender tu
              industria, tu cliente y tus metas de ingresos.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 font-black text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                backgroundColor: "#0D1F3C",
                color: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(13,31,60,0.2)",
              }}
            >
              Hablemos de tu proyecto →
            </a>
          </motion.div>

          {/* Right: reasons */}
          <div className="flex flex-col gap-5">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  className="flex gap-5 p-6 rounded-2xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(43,123,224,0.15)",
                    backdropFilter: "blur(8px)",
                  }}
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#2B7BE0" }}
                  >
                    <Icon size={22} color="#FFFFFF" />
                  </div>
                  <div>
                    <h3
                      className="font-black text-base mb-1.5"
                      style={{ color: "#0D1F3C" }}
                    >
                      {reason.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#0D1F3C", opacity: 0.7 }}
                    >
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
