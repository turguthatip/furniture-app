import FocusedSlider from "@/components/FocusedSlider";
import NewProducts from "@/components/NewProducts";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Assuva Mobilya",
  url: "https://assuva.com.tr",
  image: "https://assuva.com.tr/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Balıkesir",
    addressCountry: "TR",
  },
  description:
    "Balıkesir'de kaliteli mobilya üreticisi. Koltuk takımları, köşe takımları ve ev mobilyaları.",
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <FocusedSlider />
      <NewProducts />
    </main>
  );
}
