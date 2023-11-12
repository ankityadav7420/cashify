
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const RefurbishedPhone = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    const refurbishedPhones = [
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691234/cashify/Buy%20Refurbished%20Phones/vivo_y22_pfkeo9.png",
            "label": " Apple iphone 13 -Refurbished",
            "originalPrice": 73780,
            "offeredPrice": 62330,
            "ratingPoints": 4.5,
            "offerType": "Dhamaka Sale"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691233/cashify/Buy%20Refurbished%20Phones/remi_note_9_pro_z8sx2t.png",
            "label": "Apple iphone XR-Refurbished",
            "originalPrice": 19770,
            "offeredPrice": 17600,
            "ratingPoints": 4.0,
            "offerType": "Dhamaka Sale"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691232/cashify/Buy%20Refurbished%20Phones/redmi_note_10_wffqaj.png",
            "label": "Apple iphone 11- Refurbished",
            "originalPrice": 7650,
            "offeredPrice": 5640,
            "ratingPoints": 4.8,
            "offerType": "Diwali offer"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691232/cashify/Buy%20Refurbished%20Phones/redmi_12_pro_wajho8.png",
            "label": "Redmi 12 pro",
            "originalPrice": 5889,
            "offeredPrice": 4350,
            "ratingPoints": 4.2,
            "offerType": "Dhamaka Sale"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691232/cashify/Buy%20Refurbished%20Phones/redmi_11_i9yke8.png",
            "label": "Xiaomi Redmi 11",
            "originalPrice": 45999,
            "offeredPrice": 43799,
            "ratingPoints": 4.6,
            "offerType": "Dhamaka Sale"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691231/cashify/Buy%20Refurbished%20Phones/redmi_10_pro_edx7fs.png",
            "label": "Xiaomi redmi note 10 pro",
            "originalPrice": 1590,
            "offeredPrice": 1270,
            "ratingPoints": 4.3,
            "offerType": "Diwali offer"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691231/cashify/Buy%20Refurbished%20Phones/poco_x3_pro_hipine.png",
            "label": "POCO X3- Refurbished",
            "originalPrice": 2380,
            "offeredPrice": 2160,
            "ratingPoints": 4.7,
            "offerType": "offer"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691231/cashify/Buy%20Refurbished%20Phones/redmi_9_yvplig.png",
            "label": "Xiaomi redmi-9",
            "originalPrice": 1920,
            "offeredPrice": 1590,
            "ratingPoints": 4.4,
            "offerType": "Diwali offer"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691231/cashify/Buy%20Refurbished%20Phones/iphone_xs_c7tmhr.png",
            "label": "Xiaomi redmi-9",
            "originalPrice": 1920,
            "offeredPrice": 1590,
            "ratingPoints": 4.4,
            "offerType": "Diwali offer"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691231/cashify/Buy%20Refurbished%20Phones/oneplus_9rt_q5gyxl.png",
            "label": "oneplus 9",
            "originalPrice": 1920,
            "offeredPrice": 1590,
            "ratingPoints": 4.4,
            "offerType": "Diwali offer"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691231/cashify/Buy%20Refurbished%20Phones/oneplus_7_agrhto.png",
            "label": "oneplud 9",
            "originalPrice": 1920,
            "offeredPrice": 1590,
            "ratingPoints": 4.4,
            "offerType": "X-Mas Offer"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691231/cashify/Buy%20Refurbished%20Phones/oneplus_9pro_vp3h8q.png",
            "label": "oneplus 9 pro",
            "originalPrice": 1920,
            "offeredPrice": 1590,
            "ratingPoints": 4.4,
            "offerType": "Diwali offer"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691230/cashify/Buy%20Refurbished%20Phones/iphone_13_hb94i0.png",
            "label": "iphone 13",
            "originalPrice": 1920,
            "offeredPrice": 1590,
            "ratingPoints": 4.4,
            "offerType": "Diwali offer"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691230/cashify/Buy%20Refurbished%20Phones/iphone_se_w4rayc.png",
            "label": "iphone 14",
            "originalPrice": 1920,
            "offeredPrice": 1590,
            "ratingPoints": 4.4,
            "offerType": "New Year"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699723243/cashify/Buy%20Refurbished%20Phones/oneplus-6_ixwlj7.png",
            "label": "One Plus 6",
            "originalPrice": 1920,
            "offeredPrice": 1590,
            "ratingPoints": 4.4,
            "offerType": "Diwali offer"
        },

    ];
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: currentSlide,
        afterChange: (current) => setCurrentSlide(current),
       };
      
      return (
        <div className="relative m-6">
          <Slider ref={sliderRef} {...settings} className="overflow-hidden">
            {refurbishedPhones.map((image, index) => (
              <div key={index} className="">
                <div className='flex flex-col rounded-lg shadow-md border-1 cursor-pointer m-2'>
                  <span className='text-start left-0'>
                    <h1 className='text-start left-0 inline-block p-1 rounded-md bg-orange-400'> 45% OFF</h1>
                  </span>
                  <img
                    src={image.image}
                    alt={`image ${index + 1}`}
                    className="ml-2 mr-2"
                  />
                  <div className='rounded-md flex flex-col text-start ml-3'>
                    <h1 className="mt-1 mb-4">{image.label}</h1>
                    <span className="mt-1 text-lg text-yellow-500">Ratings: {image.ratingPoints}</span>
                    <span className="mt-1 text-md font-semibold">
                      ₹{image.offeredPrice}
                      <span className="ml-2 text-lg line-through text-gray-500">₹{image.originalPrice}</span>
                    </span>
                    <span className="mt-1 text-lg text-green-600">Save ₹{image.originalPrice - image.offeredPrice}</span>
                    <span className="mt-1 text-md mb-2">
                      <h3 className='inline-block  px-1 rounded-lg bg-blue-900 text-white m-2'>{image.offerType}</h3>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
    
          <div className='absolute top-1/2 transform -translate-y-1/2 left-0 cursor-pointer bg-slate-100 h-9 w-9 rounded-full flex items-center justify-center'>
            <button onClick={() => sliderRef.current.slickPrev()}>
              <FaArrowLeft size='1.5em' />
            </button>
          </div>
          <div className='absolute top-1/2 transform -translate-y-1/2 right-0 cursor-pointer bg-slate-100 h-9 w-9 rounded-full flex items-center justify-center'>
            <button onClick={() => sliderRef.current.slickNext()}>
              <FaArrowRight size='1.5em' />
            </button>
          </div>
        </div>
      );
    };
    
    export default RefurbishedPhone;