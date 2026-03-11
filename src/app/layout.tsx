import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"], 
  variable: "--font-bebas-neue" 
});

export const metadata: Metadata = {
  title: "STREET FOOD | Burgers, Tacos & Wraps",
  description: "Le meilleur du fast food urbain. Burgers savoureux, French Tacos massifs et Wraps frais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${bebasNeue.variable} scroll-smooth`}>
      <body className="antialiased relative bg-street-dark text-white selection:bg-street-accent selection:text-street-dark">
        <div className="bg-noise mix-blend-overlay"></div>
        {children}
      </body>
    </html>
  );
}
