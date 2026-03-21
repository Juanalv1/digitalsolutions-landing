import Image from "next/image";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative py-12 border-t"
      style={{
        backgroundColor: "#0D1F3C",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo blanco completo */}
          <a href="#" aria-label="DigitalSolutions — inicio">
            <Image
              src="/logotipo_claro.svg"
              alt="DigitalSolutions"
              width={160}
              height={40}
              className="h-8 w-auto"
            />
          </a>

          {/* Slogan */}
          <p
            className="text-sm font-semibold"
            style={{ color: "rgba(200,223,254,0.55)" }}
          >
            Tu aliado tecnológico
          </p>

          {/* Social */}
          <a
            href="https://instagram.com/dsolutions.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 font-bold text-sm transition-colors hover:text-white"
            style={{ color: "rgba(200,223,254,0.6)" }}
            aria-label="Instagram de DigitalSolutions"
          >
            <Instagram size={18} />
            @dsolutions.dev
          </a>
        </div>

        {/* Divider */}
        <div
          className="border-t mb-6"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        />

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p
            className="text-sm"
            style={{ color: "rgba(200,223,254,0.4)" }}
          >
            © 2026 DigitalSolutions. Todos los derechos reservados.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(200,223,254,0.25)" }}
          >
            Built with Claude Web Builder by{" "}
            <a
              href="https://tododeia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors"
              style={{ color: "rgba(200,223,254,0.25)" }}
            >
              Tododeia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
