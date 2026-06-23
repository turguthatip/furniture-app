"use client";

import { useState } from "react";
import Card from "@/components/Card";
import { getProductsByCategory } from "@/lib/products";

const allProducts = getProductsByCategory("koltuk");

export default function KoltukTakimlariPage() {
  const [yatakliOnly, setYatakliOnly] = useState(false);

  const products = yatakliOnly ? allProducts.filter((p) => p.yatakli) : allProducts;

  return (
    <main className="w-full px-4 md:px-8 pt-16 pb-16">
      <h1 className="font-semibold text-2xl md:text-3xl pb-4 text-center">Koltuk Takımları</h1>
      <div className="flex justify-center mt-4 mb-8">
        <button
          onClick={() => setYatakliOnly((prev) => !prev)}
          className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
            yatakliOnly
              ? "bg-stone-900 text-white border-stone-900"
              : "bg-white text-stone-700 border-stone-300 hover:border-stone-500"
          }`}
        >
          Yataklı
        </button>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
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
