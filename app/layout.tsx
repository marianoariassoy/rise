import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./animations.css";
import "./hamburguer.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Riise & Asoc. - Riise Mármol Layún",
    template: "%s - Riise & Asoc.",
  },
  description:
    "Con más de tres décadas de trayectoria en el Desarrollo Inmobiliario, seguimos construyendo con la misma visión y compromiso de siempre. Hoy evolucionamos hacia Riise y asociados, una marca que surge desde la experiencia y la confianza que nos caracterizan.",
  icons: {
    icon: "/assets/iso.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} min-h-full flex flex-col`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
