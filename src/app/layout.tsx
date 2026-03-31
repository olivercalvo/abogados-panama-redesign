import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abogados en Panamá | Bufete de Abogados AbogadosPanamá.net",
  description:
    "Bufete de abogados #1 en migración en Panamá. 228 reseñas 5 estrellas. Consulta gratuita por WhatsApp. Derecho migratorio, mercantil, civil y más.",
  openGraph: {
    title: "Abogados en Panamá | Bufete de Abogados AbogadosPanamá.net",
    description:
      "Bufete de abogados #1 en migración en Panamá. 228 reseñas 5 estrellas. Consulta gratuita por WhatsApp.",
    locale: "es_PA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
