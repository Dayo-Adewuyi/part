import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center border-b border-gray-100">
    <div className="flex items-center">
      <Image 
        src="/logo.svg" 
        alt="Partholic Logo" 
        width={150} 
        height={40} 
        className="h-10 w-auto"
      />
    </div>
    <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
      Talk to us
    </button>
  </header>
  );
};

export default Header;