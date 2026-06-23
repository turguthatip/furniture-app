"use client";
import React from "react";
import Image from "next-export-optimize-images/image";
import Link from "next/link";

interface propsType {
  title: string;
  img: string;
  hoverImg?: string;
  href: string;
  yatakli?: boolean;
}

const Card: React.FC<propsType> = ({ img, title, href, yatakli }) => {
  return (
    <div className="w-full overflow-hidden rounded-md bg-white">
      <Link
        href={href}
        className="relative block w-full aspect-[3/2] overflow-hidden"
      >
        <Image
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          src={`/${img}.png`}
          fill
          alt={title}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 33vw"
        />
        {yatakli && (
          <span className="absolute top-3 left-3 bg-stone-900/80 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm tracking-wide">
            Yataklı
          </span>
        )}
      </Link>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg text-gray-700">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Card;
