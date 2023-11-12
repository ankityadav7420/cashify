import React from 'react';
import Carousel from './Content/Carousel';
import OurService from './Content/OurService/OurService';
import SellOldDeviceNow from './Content/SellOldDevice/SellOldDeviceNow';
import RefurbishedPhone from './Content/RefurbishedPhone/RefurbishedPhone';
import ExclusiveStores from './Content/ExclusiveStores/ExclusiveStores';

const Main = () => {
  return (
    <div className="p-0">
      <Carousel />
      <div className='mt-4 mb-6'>
        <h1 className='text-left font-semibold text-3xl mb-2 pl-4'>Our Services</h1>
        <OurService />
      </div>
      <div className='mt-6 mb-6'>
        <h1 className='text-left font-semibold text-3xl mb-2 pl-4'>Sell Your Old Device Now</h1>
        <SellOldDeviceNow />
      </div>
      <div className='mt-6 mb-6'>
        <h1 className='text-left font-semibold text-3xl pl-4 m-6'>Buy Refurbished Phones</h1>
        <RefurbishedPhone />
      </div>

      <div className='ml-4 mt-4'>
        <span className='flex flex-col'>
            <h1 className='text-left font-semibold text-3xl ml-4'>Our Exclusive Stores</h1>
            <h2 className='text-teal-500 bg-opacity-70 text-end ml-4'>View all stores</h2>
        </span>
        <ExclusiveStores />
      </div>

    </div>
  );
}

export default Main;
