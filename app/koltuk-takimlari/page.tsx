"use client";

import { useState } from "react";
import Card from "@/components/Card";
import { getProductsByCategory } from "@/lib/products";

const allProducts = getProductsByCategory("koltuk");

type Filter = "tumu" | "yatakli" | "yataksiz";

const filters: { value: Filter; label: string }[] = [
  { value: "tumu", label: "Tümü" },
  { value: "yatakli", label: "Yataklı" },
  { value: "yataksiz", label: "Yataksız" },
];

export default function KoltukTakimlariPage() {
  const [filter, setFilter] = useState<Filter>("tumu");

  const products = allProducts.filter((p) => {
    if (filter === "yatakli") return p.yatakli;
    if (filter === "yataksiz") return !p.yatakli;
    return true;
  });

  return (
    <main className="w-full px-4 md:px-8 pt-16 pb-16">
      <h1 className="font-semibold text-2xl md:text-3xl pb-4 text-center">Koltuk Takımları</h1>
      <div className="flex justify-center gap-3 mt-4 mb-8">
        {filters.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
              filter === value
                ? "bg-stone-900 text-white border-stone-900"
                : "bg-white text-stone-700 border-stone-300 hover:border-stone-500"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
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
