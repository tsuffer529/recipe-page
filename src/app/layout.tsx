import type { Metadata } from "next";
import { Outfit, Young_Serif } from "next/font/google";
import "./globals.css";

const youngSerif = Young_Serif({
  variable: "--font-young-serif",
  weight: ["400"],
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Recipe Page",
  description: "Frontend Mentor Solution",
  icons: {
    icon: "favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${youngSerif.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
