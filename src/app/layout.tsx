import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-ibm-plex-sans",
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
    <html lang="es" className={ibmPlexSans.variable}>
      <body className={`${ibmPlexSans.className} antialiased`}>{children}</body>
    </html>
  );
}
