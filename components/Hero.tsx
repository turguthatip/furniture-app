'use client';
import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    };
    const slideData = [
    {
        id:0,
        img:"/banner-1.png",
        title: "Yeni Ürünler",
        mainTitle: "Koltuk Modelleri",
    },
    {
        id:1,
        img:"/banner-2.png",
        title: "Yeni Ürünler",
        mainTitle: "Koltuk Modelleri",
    },
];

  return (
    <div>
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item)=>(
                <Slide
                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                />
            ))}
            </Slider>
        </div>
    </div>
  )
}

export default Hero