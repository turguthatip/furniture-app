"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center bg-gray-100">
      {/* Mobile Hero Image */}
      <div className="relative w-full h-auto block md:hidden">
        <Image
          src="/mobileheroimage.png"
          alt="Hero Image"
          width={768}
          height={1024}
          priority
          className="w-full h-auto object-contain"
          sizes="100vw"
        />
      </div>
      {/* Desktop Hero Image */}
      <div className="relative w-full h-auto hidden md:block">
        <Image
          src="/heroimage.png"
          alt="Hero Image"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto object-contain"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default Hero;
