"use client";
import { useRef } from "react";
import Slider from "react-slick";
import Image from "next-export-optimize-images/image";
import Link from "next/link";

const slides = [
  { src: "/pablo_yeni.png", label: "Koltuk Takımı", name: "Pablo", slug: "pablo-koltuk-takimi" },
  { src: "/edremit_yeni.png", label: "Koltuk Takımı", name: "Edremit", slug: "edremit-koltuk-takimi" },
  { src: "/castro_yeni.png", label: "Koltuk Takımı", name: "Castro", slug: "castro-koltuk-takimi" },
  { src: "/Polo_yeni.png", label: "Koltuk Takımı", name: "Polo", slug: "polo-koltuk-takimi" },
  { src: "/seul_yeni.png", label: "Koltuk Takımı", name: "Seul", slug: "seul-koltuk-takimi" },
  { src: "/ValenciaKoseTakimi1.png", label: "Köşe Takımı", name: "Valencia", slug: "valencia-kose-takimi" },
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
            <div className="relative h-[40vh] md:h-[85vh] overflow-hidden rounded-lg">
              <Image
                src={slide.src}
                alt={`${slide.name} ${slide.label}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 90vw, 64vw"
              />
              <div className="slide-overlay absolute inset-0 bg-black transition-opacity duration-400" />

              {/* Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent rounded-lg pointer-events-none" />

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5">
                <p className="text-white/60 text-xs uppercase tracking-widest mb-1">{slide.label}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white text-xl font-medium">{slide.name}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => sliderRef.current?.slickPrev()}
                      className="hidden md:flex w-9 h-9 items-center justify-center rounded-full bg-white/15 border border-white/30 text-white hover:bg-white/25 transition-colors"
                      aria-label="Önceki"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => sliderRef.current?.slickNext()}
                      className="hidden md:flex w-9 h-9 items-center justify-center rounded-full bg-white/15 border border-white/30 text-white hover:bg-white/25 transition-colors"
                      aria-label="Sonraki"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <Link
                      href={`/urunler/${slide.slug}`}
                      className="flex items-center gap-1.5 bg-white text-gray-900 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      İncele
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-colors shadow-md"
        aria-label="Önceki"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-colors shadow-md"
        aria-label="Sonraki"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
