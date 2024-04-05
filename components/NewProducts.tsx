import React from 'react'
import Card from './Card';
import Image from 'next/image';

const productData = [
    {
    title: 'Kongo Koltuk Takımı',
    img:'/kongo.png',
    },
    {
    title: 'Nijer Koltuk Takımı',
    img:'/nijer.png',
    },
    
    {
    title: 'Viyana Koltuk Takımı',
    img:'/viyana.png',
    },
    {
    title: 'Verona Koltuk Takımı',
    img:'/verona.png',
    },
    {
    title: 'Diva Koltuk Takımı',
    img:'/diva.png',
    },
    {
    title: 'Hazel Koltuk Takımı',
    img:'/hazel.png',
    },
    {
    title: 'Nefes Koltuk Takımı',
    img:'/nefes.png',
    },
    {
    title: 'Eylül Koltuk Takımı',
    img:'/eylul.png',
    },
    {
    title: 'Riva Koltuk Takımı',
    img:'/riva.png',
    },
    {
    title: 'Barselona Koltuk Takımı',
    img:'/barselona.png',
    },
    {
    title: 'Seul Koltuk Takımı',
    img:'/seul.png',
    },
    {
    title: 'Solo Koltuk Takımı',
    img:'/Solo.png',
    },
    {
    title: 'Orkide Koltuk Takımı',
    img:'/orkide.png',
    },
    {
    title: 'Tila Koltuk Takımı',
    img:'/tila.png',
    },
    {
    title: 'Milda Koltuk Takımı',
    img:'/milda.png',
    },
    {
    title: 'Versac Koltuk Takımı',
    img:'/versac.png',
    },
    {
    title: 'Star Koltuk Takımı',
    img:'/star.png',
    },
    {
    title: 'Nepal Koltuk Takımı',
    img:'/nepal.png',
    },
    {
    title: 'Sümbül Koltuk Takımı',
    img:'/sumbul.png',
    },
    {
    title: 'Safir Koltuk Takımı',
    img:'/safir.png',
    },
    {
    title: 'Milda Köşe Takımı',
    img:'/mildakose.png',
    },
    {
    title: 'Centa Koltuk Takımı',
    img:'/centa.png',
    },
    {
    title: 'Puzzle Köşe Takımı',
    img:'/puzzle.png',
    },
    {
    title: 'Bafra Köşe Takımı',
    img:'/bafra.png',
    },
    {
    title: 'Kozmos Köşe Takımı',
    img:'/kozmos.png',
    },
    {
    title: 'Pera Köşe Takımı',
    img:'/pera.png',
    },
    {
    title: 'Tila Köşe Takımı',
    img:'/tilakose.png',
    },
    {
    title: 'Pukon Koltuk Takımı',
    img:'/pukon.png',
    },
    {
    title: 'Sedef Koltuk Takımı',
    img:'/sedef.png',
    },
    {
    title: 'Kozimo Koltuk Takımı',
    img:'/kozimo.png',
    },
];

const NewProducts= () => {
    return (
        <div>
            <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>Yeni Ürünler</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productData.map((item,index) => (
            <Card
            key={index}
            title={item.title}
            img={item.img}
            />
            ))}
            </div>
            </div>
        </div>
    )
}
export default NewProducts;