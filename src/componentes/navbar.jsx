import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import React from 'react';
import { useState } from 'react';

export function Navbar({ scrollToSection, servicesRef, barbersRef, darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="dark:bg-MechisBlack bg-MechisWhite fixed top-0 w-full flex justify-between items-center border-b-4 border-gray-950 h-24 px-4 z-50">
        <img className='shrink-0 h-20' src={darkMode ? "./images/LogotipoBlanco.png" : "./images/LogotipoNegro.png"} alt="No" />
        

        <ul className="hidden sm:flex">
          <li className="p-4">
            <button className='hover:text-MechisYellow' onClick={() => scrollToSection(servicesRef)}>
              Servicios
            </button>
          </li>
          <li className="p-4">
            <button className='hover:text-MechisYellow' onClick={() => scrollToSection(barbersRef)}>
              Peluqueros
            </button>
          </li>
          <li className="p-4">
            <button onClick={() => toggleDarkMode()}>
              {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </li>
        </ul>

      <div onClick={() => setIsOpen(!isOpen)} className="sm:hidden z-10">
          {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        } bg-MechisWhite text-MechisBlack dark:bg-MechisBlack dark:text-MechisWhite transition-all ease-in-out duration-500 absolute top-24 left-0 w-full flex flex-col items-center sm:hidden`}>
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
