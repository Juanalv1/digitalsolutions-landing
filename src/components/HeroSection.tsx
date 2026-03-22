"use client";

import { motion } from "framer-motion";
import { PixelPatternBg } from "./LogoIsotipo";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0D1F3C" }}
    >
      {/* Pixel decoration — top right */}
      <div className="absolute top-0 right-0 pointer-events-none select-none">
        <PixelPatternBg className="opacity-100" />
      </div>

      {/* Radial glow */}
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(43,123,224,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border mb-8"
              style={{
                color: "#C8DFFE",
                borderColor: "rgba(200,223,254,0.25)",
                backgroundColor: "rgba(43,123,224,0.12)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "#2B7BE0" }}
              />
              Tu aliado tecnológico
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-bold leading-tight text-white mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            Impulsamos tu crecimiento
            <br />
            <span style={{ color: "#2B7BE0" }}>con soluciones digitales</span>
            <br />
            a medida.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "rgba(200,223,254,0.8)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          >
            Tiendas online, apps y webs diseñadas para vender más.
            <br className="hidden sm:block" />
            Plataformas escalables para crecer sin límites.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              style={{
                backgroundColor: "#2B7BE0",
                color: "#FFFFFF",
                boxShadow: "0 4px 24px rgba(43,123,224,0.35)",
              }}
            >
              Cotiza gratis
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 font-bold text-base px-8 py-4 rounded-xl border transition-all duration-200 hover:bg-white/5"
              style={{
                color: "#C8DFFE",
                borderColor: "rgba(200,223,254,0.3)",
              }}
            >
              Ver servicios
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="mt-16 flex flex-wrap gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { value: "+50", label: "Proyectos entregados" },
              { value: "100%", label: "Clientes satisfechos" },
              { value: "24/7", label: "Soporte continuo" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "#2B7BE0" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "rgba(200,223,254,0.6)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#servicios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        style={{ color: "rgba(200,223,254,0.4)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Ir a servicios"
      >
        <span className="text-xs font-semibold uppercase tracking-widest">Explorar</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
