import React from 'react'

const OurService = () => {

    const ourServices = [
        {
          "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691317/cashify/our%20service/sell_phone_c3tjzm.webp",
          "label": "Sell Phone"
        },
        {
            "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691314/cashify/our%20service/boy_phone_dlmw3f.webp",
            "label": "Buy Phone"
        },
        {
          "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691316/cashify/our%20service/find_new_vk5q9y.webp",
          "label": "Find New Phone"
        },
        {
          "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691316/cashify/our%20service/repair_a4jq6z.webp",
          "label": "Repair Phone"
        },
        {
          "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691315/cashify/our%20service/recycle_orjpw8.webp",
          "label": "Recycle"
        },
        {
          "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691315/cashify/our%20service/nearby_store_xai7fw.webp",
          "label": "Nearby Stores"
        },
        {
          "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691314/cashify/our%20service/buy_laptop_pjp63i.webp",
          "label": "Buy Laptops"
        },
       
        {
          "image": "https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699691316/cashify/our%20service/reuse_with_cashify_fb10yd.webp",
          "label": "Reuse with cashify"
        }
      ]
      
      return (
        <div className="flex items-center mx-2 h-32 m-6">
          {ourServices.map((image, index) => (
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

export default OurService