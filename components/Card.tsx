import React from 'react'
import Image from 'next/image';
import bafra from '/kongo.png'


interface propsType {
 title: string;
 img: string;
}

const Card: React.FC<propsType> =({
  img,
  title,
}) => {
  return (
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none lg:h-60">
    <div>
        <Image 
        className='w-full h-auto' 
        src={`/${img}.png`}
        width={400}
        height={30}
        alt={title}
        />
      </div>
      <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {title}
                  </h3>
                    </div>
              </div>
    </div>
  );
};
export default Card