"use client";
import { useMemo, useRef } from "react";
import Slider from "react-slick";
import { Product } from "@/lib/products";
import Card from "@/components/Card";

interface Props {
  products: Product[];
}

export default function RelatedProducts({ products }: Props) {
  const sliderRef = useRef<Slider>(null);

  const shuffled = useMemo(
    () => [...products].sort(() => Math.random() - 0.5),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="mt-16 pb-8">
      <h2 className="text-2xl font-medium text-gray-900 mb-8">Benzer Ürünler</h2>

      <div className="relative">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-gray-600 shadow-md"
          aria-label="Önceki"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <Slider ref={sliderRef} {...settings}>
          {shuffled.map((item) => (
            <div key={item.slug} className="px-3">
              <Card
                title={item.title}
                img={item.images[0]}
                href={`/urunler/${item.slug}`}
              />
            </div>
          ))}
        </Slider>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-gray-600 shadow-md"
          aria-label="Sonraki"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
