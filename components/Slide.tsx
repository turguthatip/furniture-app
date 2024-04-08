import Image from 'next/image';
import React from 'react'

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle }) => {
  return (
    <Image
      className="w-[100%] md:w-auto h-auto object-cover object-right md:object-left-bottom"
      src={`/${img}.png`}
      alt='banner'
      width={1440}  // Adjusted width
      height={1440} // Adjusted height
    />
  );
};

export default Slide