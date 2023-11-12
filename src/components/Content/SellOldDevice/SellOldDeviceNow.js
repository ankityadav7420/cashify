import React from 'react'

const SellOldDeviceNow = () => {

    const sellOldDevice = [
        {
          "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691317/cashify/our%20service/sell_phone_c3tjzm.webp",
          "label": "Sell Phone"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691343/cashify/sell%20old%20device/laptop_sell_he2twb.webp",
            "label": "Buy Laptops"
        },
        {
          "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691343/cashify/sell%20old%20device/sell_earburds_osynzz.webp",
          "label": "Sell Earburds"
        },
        {
          "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691345/cashify/sell%20old%20device/sell_tablet_kfzkf8.webp",
          "label": "Sell Tablets"
        },
        {
          "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691345/cashify/sell%20old%20device/sell_tv_a4r0dk.webp",
          "label": "Sell TV"
        },
        {
          "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691346/cashify/sell%20old%20device/smartwatch_bubke6.webp",
          "label": "Sell Smartwatch"
        },
        {
          "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691346/cashify/sell%20old%20device/smart_speaker_di6cmy.webp",
          "label": "Sell SmartSpeaker"
        },
       
        {
          "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691344/cashify/sell%20old%20device/sell_more_ryvrjk.webp",
          "label": "Sell More"
        }
      ]
  return (
        <div className="flex items-center mx-2 h-32 m-6">
            {sellOldDevice.map((image, index) => (
                <div key={index} className="cursor-pointer flex flex-col items-center rounded-md p-2">
                    <img
                        src={image.image}
                        alt={`image ${index + 1}`}
                        className="object-cover transition-transform transform text-red-100 scale-100 hover:scale-110"
                    />
                    <span className="mt-1 text-lg">
                        {image.label}
                    </span>
                </div>
            ))}
        </div>
    );

}

export default SellOldDeviceNow