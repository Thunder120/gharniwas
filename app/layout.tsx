import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GHAR NIWAS | Jaipur's Elite Residential Plots",
  description: "Invest in premium residential plots across Jaipur's fastest growing locations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ backgroundColor: '#0B1F3A', color: '#FAF8F3', margin: 0, overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
