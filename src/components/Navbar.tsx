"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Por qué elegirnos", href: "#por-que" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D1F3C]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo — recortado para mostrar solo el contenido real del SVG (canvas 2000x500, contenido en x:325-1515, y:170-370) */}
        <a href="#" className="flex items-center" aria-label="DigitalSolutions — inicio">
          {/* Recorte del canvas SVG 2000×500: contenido real en x[325-1515], y[170-370] */}
          {/* Escala 0.185 → SVG 370×93px, contenido en 60px,31px → 220×37px visible */}
          <div style={{ overflow: "hidden", width: "226px", height: "38px", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logotipo_claro.svg"
              alt="DigitalSolutions"
              style={{
                width: "370px",
                height: "93px",
                maxWidth: "none",
                marginLeft: "-60px",
                marginTop: "-31px",
              }}
            />
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/80 hover:text-white font-semibold text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 bg-[#2B7BE0] hover:bg-[#1d6acf] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#2B7BE0]/25"
        >
          Cotiza gratis
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0D1F3C]/98 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white font-semibold py-2 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-[#2B7BE0] text-white font-bold text-sm px-5 py-3 rounded-lg text-center mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Cotiza gratis
          </a>
        </div>
      )}
    </header>
  );
}
