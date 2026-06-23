import React from "react";
import Card from "./Card";
import { productData } from "@/lib/products";

const NewProducts = () => {
  return (
    <div className="w-full px-4 md:px-8 pt-16 pb-16">
      <h2 className="font-semibold text-2xl md:text-3xl pb-4 text-center">Yeni Sezon Ürünleri</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {productData.map((item) => (
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
    </div>
  );
};
export default NewProducts;
