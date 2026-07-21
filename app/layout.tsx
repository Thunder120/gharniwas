import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "GHAR NIWAS | Jaipur's Most Exclusive Residential Plots",
  description: "Invest in premium residential plots across Jaipur's fastest growing locations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-body bg-midnight text-ivory`}>
        {children}
      </body>
    </html>
  );
}
