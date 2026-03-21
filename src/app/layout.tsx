import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DigitalSolutions — Tu aliado tecnológico",
  description:
    "Tiendas online, apps y webs diseñadas para vender más. Soluciones digitales a medida para impulsar tu negocio.",
  openGraph: {
    title: "DigitalSolutions — Tu aliado tecnológico",
    description:
      "Tiendas online, apps y webs diseñadas para vender más. Soluciones digitales a medida para impulsar tu negocio.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalSolutions — Tu aliado tecnológico",
    description: "Tiendas online, apps y webs diseñadas para vender más.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={nunito.variable}>
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  );
}
