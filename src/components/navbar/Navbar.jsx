'use client'
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            {/* Place your logo here */}
            <Image src="/your-logo.png" alt="Logo" width={50} height={50} />
          </div>
          <div className="hidden md:block">
            {/* Desktop Menu Items */}
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/service/SocialMediaManagement" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
              <a href="#" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button onClick={toggleMenu} className="text-gray-800 hover:text-indigo-600">
              {isMenuOpen ? '-' : '='}
              
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
          <a href="#" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
