import React from "react";
import Image from "next/image";

interface propsType {
  title: string;
  img: string;
  onImageClick: () => void;
}

const Card: React.FC<propsType> = ({ img, title, onImageClick }) => {
  return (
    <div className="w-full overflow-hidden rounded-md bg-white">
      <div 
        className="relative w-full aspect-[3/2] cursor-pointer hover:opacity-90 transition-opacity"
        onClick={onImageClick}
      >
        <Image
          className="w-full h-full object-cover"
          src={`/${img}.png`}
          fill
          alt={title}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 33vw"
        />
      </div>
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
