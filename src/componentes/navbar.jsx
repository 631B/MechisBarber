import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import React, { useEffect } from 'react';
import { useState } from 'react';

export function Navbar({ scrollToSection, servicesRef, barbersRef, darkMode, toggleDarkMode, turnoRef }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <div className={`fixed top-0 w-full flex justify-between transition-all duration-300 items-center h-24 px-4 z-50 ${
    isScrolled ? ' bg-MechisWhite dark:bg-MechisBlack border-b-4 border-gray-950' : 'border-0 bg-transparent'
    }`}>
        
        <img className={`shrink-0 h-20 transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"}`}
        src={darkMode ? "./images/LogotipoBlanco.png" : "./images/LogotipoNegro.png"} alt="No" />
        <ul className="hidden sm:flex font-bold md:text-3xl text-2xl">
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
            <button className='hover:text-MechisYellow' onClick={() => scrollToSection(turnoRef)}>
              Pedir Turno
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
        <li className="p-4 border-b border-gray-600 w-full text-center">
          <button onClick={() => scrollToSection(turnoRef) & setIsOpen(false)}>
            Pedir Turno
          </button>
        </li>
      </ul>
    </div>
  );
}
