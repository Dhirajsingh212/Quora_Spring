"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button'; // Importing Button from ShadCN UI

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-tansparent bg-opacity-70 backdrop-blur-md border-b-2 text-white shadow-md fixed w-full z-10">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Quora</h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Services</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
          <div className="md:hidden">
            <Button onClick={toggleMenu} className="text-white">
              Menu
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Home</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">About</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Services</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;