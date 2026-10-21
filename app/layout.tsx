import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    images: [{ url: "/edremit-koltuk-takimi-1.png", width: 1200, height: 800, alt: "Assuva Mobilya - Kaliteli Mobilya" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaliteli Mobilya Üreticisi - Balıkesir Mobilya",
    description: siteDescription,
    images: ["/edremit-koltuk-takimi-1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MJ2VSNX2');`,
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MJ2VSNX2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <GoogleAnalytics gaId="G-GZ5QJ7CLQ2" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}