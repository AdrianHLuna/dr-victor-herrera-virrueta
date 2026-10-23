import type { Metadata } from "next";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { doctor } from "@/data/doctor";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drvictorherreravirrueta.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${doctor.title} ${doctor.name} | ${doctor.specialty} en ${doctor.city}`,
  description: doctor.bio.substring(0, 150) + "...",
  // Corregido 2026-10-19: las keywords anteriores anunciaban "CDMX" y "Manga
  // Gástrica" — el doctor está en Mérida, Yucatán, y no ofrece manga
  // gástrica (solo balón intragástrico, ver services.ts). Esas keywords
  // desviaban la relevancia de búsqueda local hacia una ciudad y un
  // procedimiento equivocados.
  keywords: [
    `${doctor.specialty} en ${doctor.city}, ${doctor.state}`,
    "Cirujano General Mérida",
    "Endoscopia del Aparato Digestivo Mérida",
    "Cirugía de Vesícula Laparoscópica Mérida",
    "Cirugía de Hernias Mérida",
    "Balón Intragástrico Mérida",
    "Gastroscopia y Colonoscopia Yucatán",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${doctor.title} ${doctor.name} | ${doctor.specialty}`,
    description: doctor.bio.substring(0, 150) + "...",
    url: siteUrl,
    siteName: `${doctor.title} ${doctor.name}`,
    locale: "es_MX",
    type: "website",
    images: [
      {
        // Dimensiones reales del archivo (retrato vertical) — nunca declarar
        // un tamaño inventado, bug real encontrado antes en otro sitio.
        url: doctor.photo,
        width: 960,
        height: 1280,
        alt: `${doctor.title} ${doctor.name}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = doctor.gtmId || "GTM-K6W8FQG3";

  return (
    <html lang="es-MX" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <GoogleAnalytics />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
