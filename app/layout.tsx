import "./globals.css";
import { Inter } from "next/font/google";

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
      <body className={inter.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/gtag/js?id=G-T7BGK77Z39`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
