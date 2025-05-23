import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estudando Next",
  description: "Criado por Manu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
