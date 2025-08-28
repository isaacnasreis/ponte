import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Ponte",
  description:
    'Projeto Ponto - Uma ferramenta de planejamento de vida e projetos que combate a sobrecarga e a paralisia por decisão. A filosofia da "Ponte" é ajudar o usuário a conectar seu estado atual (carreira, rotina, projetos) ao seu estado desejado (metas de longo prazo, paixões) através de um planejamento realista, focado e sustentável, com forte ênfase no bem-estar.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
