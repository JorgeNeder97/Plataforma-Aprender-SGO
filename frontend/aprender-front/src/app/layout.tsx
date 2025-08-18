import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./normalize.css";
import { Providers } from "@/redux/Providers";
import AppInitializer from "@/app/AppInitializer";


const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ["latin", "latin-ext"],
    style: ["normal", "italic"]
})

export const metadata: Metadata = {
  title: "Plataforma Aprender",
  description: "Plataforma Aprender - Ministerio de Educación, Ciencia y Tecnología de Santiago del Estero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={poppins.className}
      >
        <Providers>
            <AppInitializer />
            {children}
        </Providers>
      </body>
    </html>
  );
}
