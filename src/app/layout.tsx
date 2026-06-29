import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wheel O Feed | Ankleshwar's #1 Cafe",
    template: "%s | Wheel O Feed",
  },
  description:
    "Ankleshwar's #1 multi-cuisine cafe. Italian, Chinese, Fast Food & Beverages. Open 1PM-10:30PM at GIDC, Ankleshwar.",
  keywords: [
    "cafe",
    "Ankleshwar",
    "Wheel O Feed",
    "GIDC",
    "pizza",
    "pasta",
    "coffee",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-dvh flex flex-col antialiased selection:bg-amber/30 selection:text-cream">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
