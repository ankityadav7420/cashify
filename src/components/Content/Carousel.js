import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = () => {
  const imageUrls = [
    'https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699265990/cashify/corousal/coro-4_vm4for.webp',
    'https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699265990/cashify/corousal/corousal-1_egbvgm.webp',
    'https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699265990/cashify/corousal/coro-5_xej1xb.webp',
    'https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699265990/cashify/corousal/coro-3_cn9akh.webp',
    'https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699690157/cashify/corousal/coro-6_wefgpl.webp',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    afterChange: (current) => setCurrentSlide(current),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const nextSlide = (currentSlide + 1) % imageUrls.length;
        sliderRef.current.slickGoTo(nextSlide);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className='relative w-full mx-auto overflow-hidden m-4 rounded-md p-4'>
      <Slider ref={sliderRef} {...settings}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className='h-96'>
            <img
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        ))}
      </Slider>
      <div className='absolute top-1/2 transform -translate-y-1/2 left-0 cursor-pointer bg-white h-9 w-9 rounded-full flex items-center justify-center'>
        <button onClick={() => sliderRef.current.slickPrev()}>
          <FaArrowLeft size='1.5em' />
        </button>
      </div>
      <div className='absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer bg-white h-9 w-9 rounded-full flex items-center justify-center'>
        <button onClick={() => sliderRef.current.slickNext()}>
          <FaArrowRight size='1.5em' />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
