import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jessé Satlei - Portfólio",
  description: "Conheça o portfólio de Jessé Satlei, desenvolvedor web e back end.",
  authors: [{ name: "Jessé Satlei" }],
  keywords: ["Jessé Satlei", "desenvolvedor web", "back end", "portfólio"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
