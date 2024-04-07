import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Headertop from "@/components/Headertop";
import Header from "@/components/Header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaliteli Mobilya Üreticisi - Balıkesir Mobilya",
  description: "Assuva Mobilya, ev dekorasyonunda en üst düzey kalite ve estetik arayanlar için tasarlanmış özgün mobilya koleksiyonları sunar. Her bir parça, ustalıkla işlenmiş ve dayanıklı malzemeler kullanılarak üretilmiştir. Geniş ürün yelpazemiz, her tarza ve mekana uygun seçenekler sunar; yatak odası takımları, modern oturma grupları, işlevsel mutfak dolapları ve daha fazlası. Balıkesir Mobilya ile evinizi özgünlük ve zarafetle dönüştürün",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Headertop />
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
