import Card from "@/components/Card";
import { getProductsByCategory } from "@/lib/products";

export const metadata = {
  title: "Köşe Takımları | Assuva Mobilya",
  description: "Assuva Mobilya köşe takımları koleksiyonu.",
};

export default function KoseTakimlariPage() {
  const products = getProductsByCategory("kose");

  return (
    <main className="w-full px-4 md:px-8 pt-16 pb-16">
      <h1 className="font-semibold text-2xl md:text-3xl pb-4 text-center">Köşe Takımları</h1>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {products.map((item) => (
          <Card
            key={item.slug}
            title={item.title}
            img={item.images[0]}
            hoverImg={item.images[1]}
            href={`/urunler/${item.slug}`}
            yatakli={item.yatakli}
          />
        ))}
      </div>
    </main>
  );
}
