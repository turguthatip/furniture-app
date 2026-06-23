"use client";
import { useRef } from "react";
import Slider from "react-slick";
import Image from "next-export-optimize-images/image";
import Link from "next/link";

const slides = [
  { src: "/edremit_yeni.png", alt: "Edremit Koltuk Takımı", slug: "edremit-koltuk-takimi" },
  { src: "/pablo_yeni.png", alt: "Pablo Koltuk Takımı", slug: "pablo-koltuk-takimi" },
  { src: "/castro_yeni.png", alt: "Castro Koltuk Takımı", slug: "castro-koltuk-takimi" },
  { src: "/Polo_yeni.png", alt: "Polo Koltuk Takımı", slug: "polo-koltuk-takimi" },
  { src: "/seul_yeni.png", alt: "Seul Koltuk Takımı", slug: "seul-koltuk-takimi" },
  { src: "/ValenciaKoseTakimi1.png", alt: "Valencia Köşe Takımı", slug: "valencia-kose-takimi" },
];

export default function FocusedSlider() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    centerMode: true,
    centerPadding: "18%",
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 768, settings: { centerPadding: "6%", dots: true } },
    ],
  };

  return (
    <section className="relative w-full bg-white overflow-hidden focused-slider">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="px-2">
            <div className="relative h-[70vh] overflow-hidden rounded-lg">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 90vw, 64vw"
              />
              <div className="slide-overlay absolute inset-0 bg-black transition-opacity duration-400" />
              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between">
                <span className="inline-block bg-black/80 text-white text-sm font-medium px-4 py-2 rounded-full tracking-wide">
                  {slide.alt}
                </span>
                <Link
                  href={`/urunler/${slide.slug}`}
                  className="flex items-center gap-2 bg-black/80 text-white text-sm font-medium px-4 py-2 rounded-full tracking-wide hover:bg-black transition-colors"
                >
                  <span>İncele</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-gray-600 shadow-md"
        aria-label="Önceki"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white border border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-gray-600 shadow-md"
        aria-label="Sonraki"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
