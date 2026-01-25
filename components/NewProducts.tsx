"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Image from "next/image";

const productData = [
{ title: "Valencia Koltuk Takımı", img: "valenciakoltuk_yeni" },
{ title: "Valencia Köşe Takımı", img: "Valencia_yeni" },
{ title: "Pablo Koltuk Takımı", img: "pablo_yeni" },
{ title: "Idol Koltuk Takımı", img: "idol_yeni" },
{ title: "Castro Koltuk Takımı", img: "castro_yeni" },
{ title: "Midilli Koltuk Takımı", img: "midilli_yeni" },
{ title: "Belinay Koltuk Takımı", img: "belinay_yeni" },
{ title: "Solo Koltuk Takımı", img: "solo_yeni" },
{ title: "Edremit Koltuk Takımı", img: "edremit_yeni" },
{ title: "Melis Koltuk Takımı", img: "melis_yeni" },
{ title: "Riva Koltuk Takımı", img: "riva_yeni" },
{ title: "Didim Koltuk Takımı", img: "didim_yeni" },
{ title: "Polo Koltuk Takımı", img: "Polo_yeni" },
{ title: "Milda Koltuk Takımı", img: "milda_yeni" },
{ title: "Foca Koltuk Takımı", img: "foca_yeni" },
{ title: "Eylül Koltuk Takımı", img: "eylul_yeni" },
{ title: "Bohem Koltuk Takımı", img: "bohem_yeni" },
{ title: "Seul Koltuk Takımı", img: "seul_yeni" },
{ title: "Verona Koltuk Takımı", img: "verona_yeni" },
{ title: "Ceren Koltuk Takımı", img: "ceren_yeni" },
{ title: "Viyana Koltuk Takımı", img: "viyana_yeni" },
{ title: "Hazel Koltuk Takımı", img: "hazel_yeni" },
{ title: "Akasya Koltuk Takımı", img: "akasya_yeni" },
{ title: "Tila Koltuk Takımı", img: "tila_yeni" },
{ title: "Dikili Koltuk Takımı", img: "dikili_yeni" },
{ title: "Puzzle Köşe Takımı", img: "puzzle_yeni" },
{ title: "Centra Köşe Takımı", img: "centra_yeni" }
];

const NewProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? productData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === productData.length - 1 ? 0 : prev + 1));
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? productData.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === productData.length - 1 ? 0 : prev + 1));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const currentProduct = productData[currentIndex];

  return (
    <div>
      <div className="container pt-16 pb-16">
        <h2 className="font-medium text-2xl pb-4">Yeni Ürünler</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {productData.map((item, index) => (
            <Card 
              key={index} 
              title={item.title} 
              img={item.img} 
              onImageClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && currentProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2 transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Left Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-3 transition-colors"
              aria-label="Previous product"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-3 transition-colors"
              aria-label="Next product"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full aspect-[4/3] max-h-[90vh]">
              <Image
                src={`/${currentProduct.img}.png`}
                alt={currentProduct.title}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>

            {/* Product Title */}
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded text-base">
              {currentProduct.title} ({currentIndex + 1} / {productData.length})
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default NewProducts;
