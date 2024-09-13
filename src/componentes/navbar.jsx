import { FaBars, FaTimes } from 'react-icons/fa';
import React from 'react';
import { useState } from 'react';

export function Navbar({ scrollToSection, servicesRef, barbersRef }) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className="fixed top-0 w-full flex justify-between items-center h-24 px-4 z-50 bg-black text-white">
        <img className='shrink-0 h-28' src="./images/Isologo.png" alt="No" />

        <ul className="hidden sm:flex text-white">
          <li className="p-4">
            <button className='hover:text-yellow-500' onClick={() => scrollToSection(servicesRef)}>
              Servicios
            </button>
          </li>
          <li className="p-4">
            <button className='hover:text-yellow-500' onClick={() => scrollToSection(barbersRef)}>
              Peluqueros
            </button>
          </li>
        </ul>

      <div onClick={() => setIsOpen(!isOpen)} className="sm:hidden z-10">
          {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        } transition-all ease-in-out duration-500 absolute top-24 left-0 w-full bg-black text-white flex flex-col items-center sm:hidden`}>
        <li className="p-4 border-b border-gray-600 w-full text-center">
          <button onClick={() => scrollToSection(servicesRef) & setIsOpen(false)}>
            Servicios
          </button>
        </li>
        <li className="p-4 border-b border-gray-600 w-full text-center">
          <button onClick={() => scrollToSection(barbersRef) & setIsOpen(false)}>
            Peluqueros
          </button>
        </li>
      </ul>
    </div>
  );
}
