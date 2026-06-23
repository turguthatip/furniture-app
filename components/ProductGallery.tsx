"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next-export-optimize-images/image";

interface Props {
  images: string[];
  title: string;
  dimensions?: { label: string; value: string }[][];
}

export default function ProductGallery({ images, title }: Props) {
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  function handleScroll() {
    if (!scrollRef.current) return;
    const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
    setSelected(index);
  }

  function scrollToIndex(i: number) {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ left: i * scrollRef.current.offsetWidth, behavior: "smooth" });
    setSelected(i);
  }

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevImage = useCallback(() => {
    setLightbox((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setLightbox((prev) => (prev === null ? null : (prev + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, prevImage, nextImage]);

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Mobile — swipe carousel */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-lg"
          >
            {images.map((img, i) => (
              <div
                key={img}
                className="relative aspect-[16/10] flex-shrink-0 w-full snap-start bg-white cursor-zoom-in"
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={`/${img}.png`}
                  alt={`${title} görsel ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === selected ? "bg-gray-900" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Desktop — thumbnails + main image */}
        <div className="hidden lg:flex gap-3">
          {images.length > 1 && (
            <div className="flex flex-col gap-2 flex-shrink-0">
              {images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setSelected(i)}
                  className={`relative w-20 h-20 md:w-28 md:h-28 rounded-md overflow-hidden border-2 transition-colors bg-white ${
                    i === selected
                      ? "border-gray-900"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <Image
                    src={`/${img}.png`}
                    alt={`${title} görsel ${i + 1}`}
                    fill
                    className="object-contain p-1"
                    sizes="112px"
                  />
                </button>
              ))}
            </div>
          )}

          <div
            className="relative aspect-[16/10] flex-1 rounded-lg overflow-hidden bg-white cursor-zoom-in"
            onClick={() => setLightbox(selected)}
          >
            <Image
              src={`/${images[selected]}.png`}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 67vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={closeLightbox}
            aria-label="Kapat"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              className="absolute left-3 md:left-6 text-white/80 hover:text-white"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Önceki"
            >
              <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-[90vw] h-[70vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/${images[lightbox]}.png`}
              alt={`${title} görsel ${lightbox + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              className="absolute right-3 md:right-6 text-white/80 hover:text-white"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Sonraki"
            >
              <svg className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Bottom thumbnails */}
          {images.length > 1 && (
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setLightbox(i)}
                  className={`relative w-14 h-14 rounded-md overflow-hidden border-2 transition-colors flex-shrink-0 ${
                    i === lightbox ? "border-white" : "border-white/30 hover:border-white/60"
                  }`}
                >
                  <Image
                    src={`/${img}.png`}
                    alt={`${title} görsel ${i + 1}`}
                    fill
                    className="object-contain bg-white/10"
                    sizes="56px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
