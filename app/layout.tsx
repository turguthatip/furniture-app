import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

const siteDescription =
  "Assuva Mobilya, ev dekorasyonunda en üst düzey kalite ve estetik arayanlar için tasarlanmış özgün mobilya koleksiyonları sunar. Her bir parça, ustalıkla işlenmiş ve dayanıklı malzemeler kullanılarak üretilmiştir. Geniş ürün yelpazemiz, her tarza ve mekana uygun seçenekler sunar; yatak odası takımları, modern oturma grupları, işlevsel mutfak dolapları ve daha fazlası. Balıkesir Mobilya ile evinizi özgünlük ve zarafetle dönüştürün";

export const metadata: Metadata = {
  metadataBase: new URL("https://assuva.com.tr"),
  title: "Kaliteli Mobilya Üreticisi - Balıkesir Mobilya",
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Assuva Mobilya",
    title: "Kaliteli Mobilya Üreticisi - Balıkesir Mobilya",
    description: siteDescription,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Assuva Mobilya" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaliteli Mobilya Üreticisi - Balıkesir Mobilya",
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">

      <body className={inter.className}>
        <GoogleAnalytics gaId="G-GZ5QJ7CLQ2" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}