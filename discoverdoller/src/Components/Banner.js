import React, { useState, useEffect } from 'react'


import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import "./Banner.scss"

const Banner = () => {
  const banner = [
    {
      banner: banner1,
    },
    {
      banner: banner2,
    },
    { banner: banner3 },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

 

    const prevSlide = () => {
        setActiveIndex(activeIndex === 0 ? banner.length - 1 : activeIndex - 1);
    };




    useEffect(() => {
        const nextSlideIntervalId = setInterval(() => {
            prevSlide();
        }, 3000);


        return () => clearInterval(nextSlideIntervalId);
    }, [activeIndex]);
  return (
    <div className="banner">
    <img src={banner[activeIndex]?.banner} alt='ecommerce' className='image' />
    </div>
  );
};

export default Banner;
