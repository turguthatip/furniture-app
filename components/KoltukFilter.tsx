"use client";

import { useState } from "react";
import Card from "@/components/Card";
import type { Product } from "@/lib/products";

type Filter = "tumu" | "yatakli" | "yataksiz";

const filters: { value: Filter; label: string }[] = [
  { value: "tumu", label: "Tümü" },
  { value: "yatakli", label: "Yataklı" },
  { value: "yataksiz", label: "Yataksız" },
];

export default function KoltukFilter({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<Filter>("tumu");

  const filtered = products.filter((p) => {
    if (filter === "yatakli") return p.yatakli;
    if (filter === "yataksiz") return !p.yatakli;
    return true;
  });

  return (
    <>
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
        {filtered.map((item) => (
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
    </>
  );
}
