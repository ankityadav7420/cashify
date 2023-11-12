import React, { useState } from 'react';
import { FaMapMarkerAlt, FaAngleDown } from 'react-icons/fa';

const Header = () => {
    const menuItems = [
        {
            label: 'All',
            subItems: ['Sell','Phone', 'Laptop', 'Smartwatch','Tablet', 'More', 'Repair', 'Sell Gadgets','Buy Phone'],
        },
        {
            label: 'Sell Phones',
            subItems: ['Top Brands',
                'Apple',
                'Xiaomi',
                'Samsung',
                'Oneplus',
                'Nokia',
                'Poco',
                'More',
                'Top Selling Phones',
               ' Apple iPhone 12',
                'Samsung Galaxy Note 20',
                'Apple iPhone 11',
               ' One Plus 9 Pro',
               ' Xiaomi Redmi Note 4',
                'Apple iPhone 6',
                ],
        },
        {
            label: 'Sell Gadgets',
            subItems: ['Phone',
                'Laptop',
                'Smart Speaker',
                'Tablet',
                'Gaming Consoles',
                'iMac',
                'Smartwatch',
                'TV',
                'Earbuds',
                'DSLR Camera',
                'AC'],
        },
        {
            label: 'Buy Phone',
            subItems: ['Refurbished Phones',
            'Refurbished Laptops',
            'Refurbished Smart Watches',
            'Top Brands',
            'Apple',
            'Xiaomi',
            'Samsung',
            'Oneplus',
            'Nokia',
            'Oppo',
            'Vivo',
            'All Brands']
        },
        {
            label: 'Find New Gadget',
            subItems: ['Find New Phone',
            'Find New Laptop',
            'Find New Smartwatch',
            'Find New Tablet',
            'Explore',
            'Videos',
            'News',
            'Reviews',
            'Articles',
            'QnA',
            'Tips and Tricks',
            'Tech News',],
        },
        {
            label: 'Buy Laptop',
            subItems: [ 'Top Brands',
            'Apple',
            'Dell',
            'Lenovo',
            'HP',
            'Acer',
            'Asus',
            'Best Selling Laptops',
            'Apple MacBook Air Mid 2017 Refurbished',
            'Apple MacBook Air Early 2015 Refurbished',
            'Apple MacBook Air 2020 Refurbished',],
        },
        {
            label: 'Cashify Store',
            subItems: [ 'More in Cashify Stores',
            'Delhi',
            'Gurgaon',
            'Noida',
            'Bengaluru',
            'Chennai',
            'Pune',
            'Agra',
            'Patna',
            'Ghaziabad',
            'Meerut',
            'Mohali',
            'Thane',
            'More',],
        },
        {
            label: 'More',
            subItems: ['New Offers',
            'Partner with Us',
            'Contact Us',
            'Warranty Policy',
            'Refer & Earn',
            'Company',
            'About Us',
            'Careers',
            'Articles',
            'Become Supersale Partner',
            'Press Releases',
            'Terms & Conditions'],
        },
    ];

    const [isDropdownOpen, setDropdownOpen] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemHover = (index) => {
        setDropdownOpen(index);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setDropdownOpen(null);
    };

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row'>
                <span className='px-1 '>
                    <img
                        src='https://res.cloudinary.com/dzxyaeoyz/image/upload/v1699265990/cashify/corousal/cashify-logo_qjq5su.avif'
                        alt='Cashify Logo'
                        className='h-18 w-32 object-contain'
                    />
                </span>
                <input
                    placeholder='Search for mobiles, accessories & More'
                    className='px-2 h-12 my-2 mx-4 rounded-lg flex-grow bg-slate-100 border-none outline-none'
                />


                <div className='flex flex-row mx-3 cursor-pointer'>
                    <span className='p-1 my-2'>
                        <FaMapMarkerAlt className='text-green-500 h-6 w-6' />
                    </span>
                    <span className='p-1 my-2 text-lg'>Gurgaon</span>
                    <span className='p-1 my-4'>
                        <FaAngleDown />
                    </span>
                </div>

                <button className='bg-teal-500 bg-opacity-70 h-9 w-32 rounded-lg my-2 mx-4 px-2'>
                    <span className='object-cover text-center my-1'>Login</span>
                </button>
            </div>
            <hr />
            <div className='flex flex-row m-2'>
            {menuItems.map((menuItem, index) => (
                <div
                key={index}
                className={`relative p-1 m-1 cursor-pointer flex-grow flex-row font-semibold ${
                    selectedItem === menuItem.label ? 'font-bold' : ''
                }`}
                onMouseEnter={() => handleItemHover(index)}
                onMouseLeave={() => handleItemHover(null)}
                >
                {menuItem.label}
                {isDropdownOpen === index && (
                    <div className='absolute left-0 top-full bg-white border rounded-md p-2 flex-grow z-10 '>
                    {menuItem.subItems.map((subItem, subIndex) => (
                        <p
                        key={subIndex}
                        className='cursor-pointer p-1 text-left m-2 content-evenly  text-gray-900 font-normal hover:bg-gray-100'
                        onClick={() => handleItemClick(subItem)}
                        style={{ whiteSpace: 'nowrap' }}
                        >
                        {subItem}
                        </p>
                    ))}
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>
    );
};

export default Header;