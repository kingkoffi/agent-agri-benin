import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agent Agri-Bénin | Formation & Sensibilisation",
  description: "Agent IA de veille, analyse et sensibilisation agricole au Bénin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}