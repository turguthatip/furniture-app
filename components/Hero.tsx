import React from "react";
import Image from "next-export-optimize-images/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      {/* Full image */}
      <Image
        src="/ValenciaKoseTakimi1.png"
        alt="Valencia Köşe Takımı"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Text with blur pill — top center */}
      <div className="absolute top-10 inset-x-0 flex justify-center px-4">
        <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-8 py-4">
          <p className="text-white text-lg md:text-2xl font-semibold tracking-wide text-center drop-shadow">
            Konfor ve zarafet bir arada
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
