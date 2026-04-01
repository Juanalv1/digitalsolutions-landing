import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const BASE_URL = "https://site-zeta-silk.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "DigitalSolutions — Tu aliado tecnológico",
  description:
    "Tiendas online, apps y webs diseñadas para vender más. Soluciones digitales a medida para impulsar tu negocio.",
  keywords: [
    "desarrollo web",
    "tiendas online",
    "aplicaciones móviles",
    "diseño web",
    "soluciones digitales",
    "ecommerce",
    "DigitalSolutions",
  ],
  authors: [{ name: "DigitalSolutions" }],
  creator: "DigitalSolutions",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "DigitalSolutions — Tu aliado tecnológico",
    description:
      "Tiendas online, apps y webs diseñadas para vender más. Soluciones digitales a medida para impulsar tu negocio.",
    url: BASE_URL,
    siteName: "DigitalSolutions",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalSolutions — Tu aliado tecnológico",
    description: "Tiendas online, apps y webs diseñadas para vender más.",
    creator: "@dsolutions_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DigitalSolutions",
  url: BASE_URL,
  logo: `${BASE_URL}/icon.svg`,
  description:
    "Tiendas online, apps y webs diseñadas para vender más. Soluciones digitales a medida.",
  slogan: "Tu aliado tecnológico",
  sameAs: ["https://instagram.com/dsolutions.dev"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  offers: [
    { "@type": "Offer", name: "Tiendas Online" },
    { "@type": "Offer", name: "Aplicaciones Móviles" },
    { "@type": "Offer", name: "Páginas Web" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={ibmPlexSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${ibmPlexSans.className} antialiased`}>{children}</body>
    </html>
  );
}
