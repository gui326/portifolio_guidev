import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GuiBatista | Portifólio de um Desenvolvedor Full-Stack",
  description:
    "Desenvolvedor full-stack, com conhecimento em HTML5, CSS3, JavaScript, Node.js, React, React Native e Next.js. Apaixonado pelo mundo da programação.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId="GTM-WG2262PB" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
