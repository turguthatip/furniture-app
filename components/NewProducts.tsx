import React from 'react'
import Card from './Card';
import Image from 'next/image';
import bafra from '/kongo.png'


const productData = [
    {
    title: 'Kongo Koltuk Takımı',
    img:'kongo',
    },
    {
    title: 'Nijer Koltuk Takımı',
    img:'nijer',
    },
    
    {
    title: 'Viyana Koltuk Takımı',
    img:'viyana',
    },
    {
    title: 'Verona Koltuk Takımı',
    img:'verona',
    },
    {
    title: 'Diva Koltuk Takımı',
    img:'diva',
    },
    {
    title: 'Hazel Koltuk Takımı',
    img:'hazel',
    },
    {
    title: 'Nefes Koltuk Takımı',
    img:'nefes',
    },
    {
    title: 'Eylül Koltuk Takımı',
    img:'eylul',
    },
    {
    title: 'Riva Koltuk Takımı',
    img:'riva',
    },
    {
    title: 'Barselona Koltuk Takımı',
    img:'barselona',
    },
    {
    title: 'Seul Koltuk Takımı',
    img:'seul',
    },
    {
    title: 'Solo Koltuk Takımı',
    img:'Solo',
    },
    {
    title: 'Orkide Koltuk Takımı',
    img:'orkide',
    },
    {
    title: 'Tila Koltuk Takımı',
    img:'tila',
    },
    {
    title: 'Milda Koltuk Takımı',
    img:'milda',
    },
    {
    title: 'Versac Koltuk Takımı',
    img:'versac',
    },
    {
    title: 'Star Koltuk Takımı',
    img:'star',
    },
    {
    title: 'Nepal Koltuk Takımı',
    img:'nepal',
    },
    {
    title: 'Sümbül Koltuk Takımı',
    img:'sumbul',
    },
    {
    title: 'Safir Koltuk Takımı',
    img:'safir',
    },
    {
    title: 'Milda Köşe Takımı',
    img:'mildakose',
    },
    {
    title: 'Centa Koltuk Takımı',
    img:'centa',
    },
    {
    title: 'Puzzle Köşe Takımı',
    img:'puzzle',
    },
    {
    title: 'Bafra Köşe Takımı',
    img:'bafra',
    },
    {
    title: 'Kozmos Köşe Takımı',
    img:'kozmos',
    },
    {
    title: 'Pera Köşe Takımı',
    img:'pera',
    },
    {
    title: 'Tila Köşe Takımı',
    img:'tilakose',
    },
    {
    title: 'Pukon Koltuk Takımı',
    img:'pukon',
    },
    {
    title: 'Sedef Koltuk Takımı',
    img:'sedef',
    },
    {
    title: 'Kozimo Koltuk Takımı',
    img:'kozimo',
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