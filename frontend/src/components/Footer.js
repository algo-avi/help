import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='container mx-auto py-6 px-4 flex flex-wrap justify-between items-center'>
        <div className='w-full lg:w-1/4 mb-6 lg:mb-0'>
          <h2 className='text-lg font-semibold text-red-500 lg:text-e74c3c'>About Lelo Mall</h2>
          <p className='mt-2'>Lelo Mall is your one-stop destination for all your shopping needs. We provide a wide range of products at affordable prices.</p>
        </div>
        <div className='w-full lg:w-1/4 mb-6 lg:mb-0 lg:ml-auto'>
          <h2 className='text-lg font-semibold text-red-500 lg:text-e74c3c'>Useful Links</h2>
          <ul className='mt-2'>
            <li><a href='#' className='hover:text-gray-400'>Home</a></li>
            <li><a href='#' className='hover:text-gray-400'>Shop</a></li>
            <li><a href='#' className='hover:text-gray-400'>About Us</a></li>
            <li><a href='#' className='hover:text-gray-400'>Contact</a></li>
          </ul>
        </div>
        {/* Vertical line */}
        <div className='hidden lg:block h-full border-l border-gray-400'></div>
        <div className='w-full lg:w-1/4 mb-6 lg:mb-0'>
          <h2 className='text-lg font-semibold text-red-500 lg:text-e74c3c'>Connect With Us</h2>
          <ul className='mt-2'>
            <li>Email: info@lelomall.com</li>
            <li>Phone: +1234567890</li>
            <li>Address: 123 Street, City, Country</li>
          </ul>
        </div>
        {/* Vertical line */}
        <div className='hidden lg:block h-full border-l border-gray-400'></div>
        <div className='w-full lg:w-1/4'>
          <h2 className='text-lg font-semibold text-red-500 lg:text-e74c3c'>Follow Us</h2>
          <div className='mt-2 flex space-x-4'>
            <a href='#' className='text-gray-300 hover:text-gray-400'><FaFacebook /></a>
            <a href='#' className='text-gray-300 hover:text-gray-400'><FaTwitter /></a>
            <a href='#' className='text-gray-300 hover:text-gray-400'><FaInstagram /></a>
            <a href='#' className='text-gray-300 hover:text-gray-400'><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-800 py-4'>
        <p className='text-center text-sm'>&copy; {new Date().getFullYear()} Lelo Mall. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
