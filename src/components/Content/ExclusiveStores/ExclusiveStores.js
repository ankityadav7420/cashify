import React,{useState, useRef} from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const ExclusiveStores = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    const location =[
        {
          "locationCity": "New York",
          "storeName": "Tech Haven",
          "locationAddress": "123 Main Street, Suite 101",
          "pincode": "10001",
          "city": "New York",
          "state": "NY",
          "country": "USA"
        },
        {
          "locationCity": "Los Angeles",
          "storeName": "Gadget Galaxy",
          "locationAddress": "456 Broadway Avenue, Floor 3",
          "pincode": "90001",
          "city": "Los Angeles",
          "state": "CA",
          "country": "USA"
        },
        {
          "locationCity": "Mumbai",
          "storeName": "Electro Emporium",
          "locationAddress": "789 Nariman Point, Suite 204",
          "pincode": "400021",
          "city": "Mumbai",
          "state": "MH",
          "country": "India"
        },
        {
          "locationCity": "Bangalore",
          "storeName": "Digital Delights",
          "locationAddress": "101 MG Road, Apt 302",
          "pincode": "560001",
          "city": "Bangalore",
          "state": "KA",
          "country": "India"
        },
        {
          "locationCity": "Delhi",
          "storeName": "Smart Stuff Store",
          "locationAddress": "555 Connaught Place, Suite 22",
          "pincode": "110001",
          "city": "Delhi",
          "state": "DL",
          "country": "India"
        },
        {
          "locationCity": "Hyderabad",
          "storeName": "Gizmo Junction",
          "locationAddress": "888 Hitech City, Floor 2",
          "pincode": "500081",
          "city": "Hyderabad",
          "state": "TS",
          "country": "India"
        },
        {
          "locationCity": "Chennai",
          "storeName": "Future Finds",
          "locationAddress": "333 Mount Road, Suite 15",
          "pincode": "600002",
          "city": "Chennai",
          "state": "TN",
          "country": "India"
        },
        {
          "locationCity": "Kolkata",
          "storeName": "Tech Trends",
          "locationAddress": "222 Park Street, Apt 10",
          "pincode": "700016",
          "city": "Kolkata",
          "state": "WB",
          "country": "India"
        },
        {
          "locationCity": "Pune",
          "storeName": "Innovative Infotech",
          "locationAddress": "444 Shivaji Nagar, Unit 5",
          "pincode": "411005",
          "city": "Pune",
          "state": "MH",
          "country": "India"
        },
        {
          "locationCity": "Ahmedabad",
          "storeName": "Byte Bazaar",
          "locationAddress": "777 C.G. Road, Floor 4",
          "pincode": "380009",
          "city": "Ahmedabad",
          "state": "GJ",
          "country": "India"
        }
      ];

      
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: currentSlide,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div className='text-start relative'>
      <span className='flex flex-row items-center ml-4 mb-4'>
        <h2 className='mr-2 text-xl text-teal-500'>170+ Experience Centres</h2>
        <h2 className='ml-2 text-xl text-teal-500'>4.5+ Star Ratings</h2>
      </span>

      <div className='relative w-full sm:w-1/5 h-12 rounded-lg border-1 shadow-2xl outline-1 text-start pl-4'>
        <input
            placeholder='Enter pin code'
            className='h-full w-full outline-none border-1 rounded-md'
        />
        <FaArrowRight className='absolute h-6 w-6 right-2 top-1/2 transform -translate-y-1/2 text-white bg-slate-700 rounded-full' />
       </div>

      <Slider ref={sliderRef} {...settings} className="overflow-hidden mt-4 ml-2">
        {location.map((loc, index) => (
          <div key={index} className="m-2">
            <div className='flex flex-col rounded-lg shadow-md border-1 cursor-pointer m-2 text-start'>
              <span className='left-2 mb-2'>
                <h1 className='text-start inline-block p-1 ml-2 rounded-md bg-teal-500 text-white'>
                  {loc.locationCity}
                </h1>
              </span>

              <div className='rounded-md flex flex-col text-start ml-3'>
                <h1 className="mt-2 mb-2 text-md font-semibold">{loc.storeName}</h1>
                <span className="text-sm opacity-60">
                  {loc.locationAddress}, {loc.city}, {loc.state}, {loc.pincode}, {loc.country}
                </span>
                <span className="mt-2 text-xl mb-4 flex flex-row items-center">
                  <h1 className=' rounded-lg text-sm'>
                    View Details
                  </h1>
                  <FaArrowRight className='text-sm font-sm ml-2' />
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className='absolute top-1/2 transform left-0 cursor-pointer bg-slate-50 h-9 w-9 rounded-full flex items-center justify-center translate-y-8'>
        <button onClick={() => sliderRef.current.slickPrev()} className='mr-2'>
            <FaArrowLeft size='1em' />
        </button>
        </div>
        <div className='absolute top-1/2 transform right-0 cursor-pointer bg-slate-50 h-9 w-9 rounded-full flex items-center justify-center translate-y-8'>
        <button onClick={() => sliderRef.current.slickNext()}>
            <FaArrowRight size='1em' />
        </button>
        </div>


    </div>
  );
};

export default ExclusiveStores;