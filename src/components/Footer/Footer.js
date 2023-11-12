import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Company from './Company';

const Footer = () => {
  const links = [
    { to: '/privacy', label: 'Privacy' },
    { to: '/terms', label: 'Terms' },
    { to: '/sitemap', label: 'Sitemap' },
    { to: '/company-details', label: 'Company details' },
  ];

  return (
    <footer className="bg-gray-100 text-center py-2 h-15 mt-2"> 
      <div className='flex flex-col'>
        <div className='bg-gray-100'>
          <Company />
        </div>
        <hr className='m-0' />

        <div className='flex flex-col md:flex-row justify-between mx-4'>
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-2 items-center'>
            <p>&copy; 2023 bookMyHome.Inc</p>
            {links.map((link, index) => (
              <a key={index} href={link?.to} className='cursor-pointer hover:underline'>
                {link.label}
              </a>
            ))}
          </div>
          <div className='flex flex-row space-x-4 items-center p-2'>
            <FaLinkedin className='text-blue-500 cursor-pointer w-12 h-12 p-2' />
            <FaInstagram className='text-blue-500 cursor-pointer w-12 h-12 p-2' />
            <FaFacebook className='text-blue-500 cursor-pointer w-12 h-12 p-2' />
            <FaTwitter className='text-blue-500 cursor-pointer w-12 h-12 p-2' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
