import type { Metadata } from "next";
import { getProductsByCategory } from "@/lib/products";
import KoltukFilter from "@/components/KoltukFilter";

export const metadata: Metadata = {
  title: "Koltuk Takımları | Assuva Mobilya",
  description:
    "Assuva Mobilya'nın şık ve konforlu koltuk takımları koleksiyonunu keşfedin. Yataklı ve yataksız seçenekler, modern ve klasik tasarımlar Balıkesir'den.",
};

export default function KoltukTakimlariPage() {
  const products = getProductsByCategory("koltuk");

  return (
    <main className="w-full px-4 md:px-8 pt-16 pb-16">
      <h1 className="font-semibold text-2xl md:text-3xl pb-4 text-center">Koltuk Takımları</h1>
      <KoltukFilter products={products} />
    </main>
  );
}
