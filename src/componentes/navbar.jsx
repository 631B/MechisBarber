import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import AppointmentButton from "./AppointmentButton";

export function Navbar({
  scrollToSection,
  servicesRef,
  pricingRef,
  galleryRef,
  barbersRef,
  darkMode,
  toggleDarkMode,
  turnoRef,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`fixed w-full flex justify-between transition-all duration-300 px-2 z-50 ${
        isScrolled
          ? "top-0 h-24  bg-gray-300 dark:bg-gray-900 items-center"
          : "top-10 h-32 bg-transparent items-start"
      }`}
    >
      <img
        className={"shrink-0 h-20 transition-opacity duration-300"}
        src={
          darkMode
            ? "./images/LogotipoBlanco.png"
            : "./images/LogotipoNegro.png"
        }
        alt="No"
      />
      <ul
        className={`flex items-center justify-evenly fixed top-0 left-1/2 transform -translate-x-1/2 w-11/12 h-8 bg-MechisWhite dark:bg-MechisBlack rounded-b-full shadow-md z-0 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <li>
          <strong>Numero:</strong> 13513414
        </li>
        <li>
          <strong>Horarios:</strong> sabado domingo
        </li>
      </ul>

      <ul
        className={`hidden lg:flex font-bold text-md p-4 ${
          isScrolled ? "top-10" : "top-0"
        }`}
      >
        <li className="p-4">
          <button
            className="hover:text-MechisYellow"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            INICIO
          </button>
        </li>
        <li className="p-4">
          <button
            className="hover:text-MechisYellow"
            onClick={() => scrollToSection(barbersRef)}
          >
            BARBEROS
          </button>
        </li>
        <li className="p-4">
          <button
            className="hover:text-MechisYellow"
            onClick={() => scrollToSection(servicesRef)}
          >
            SERVICIOS
          </button>
        </li>
        <li className="p-4">
          <button
            className="hover:text-MechisYellow"
            onClick={() => scrollToSection(pricingRef)}
          >
            PRECIOS
          </button>
        </li>
        <li className="p-4">
          <button
            className="hover:text-MechisYellow"
            onClick={() => scrollToSection(galleryRef)}
          >
            GALERIA
          </button>
        </li>
        <li className="p-4 flex items-center justify-center ">
          <button onClick={() => toggleDarkMode()}>
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
        </li>
        <AppointmentButton
          scrollToSection={scrollToSection}
          turnoRef={turnoRef}
        />
      </ul>

      <ul
        className={`z-10 w-full flex items-center justify-between ${
          isScrolled ? "block lg:hidden" : "hidden lg:hidden"
        }`}
      >
        <li className="p-4 flex items-center">
          <button onClick={() => toggleDarkMode()}>
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
        </li>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 flex items-center"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </li>
      </ul>

      <ul
        className={`${
          isOpen & isScrolled
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        } bg-MechisWhite text-MechisBlack dark:bg-MechisBlack dark:text-MechisWhite transition-all ease-in-out duration-500 absolute top-24 left-0 w-full flex flex-col items-center lg:hidden`}
      >
        <li className="p-4 border-b border-gray-600 w-full text-center">
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" }) & setIsOpen(false)
            }
          >
            INICIO
          </button>
        </li>
        <li className="p-4 border-b border-gray-600 w-full text-center">
          <button
            onClick={() => scrollToSection(barbersRef) & setIsOpen(false)}
          >
            BARBEROS
          </button>
        </li>
        <li className="p-4 border-b border-gray-600 w-full text-center">
          <button
            onClick={() => scrollToSection(servicesRef) & setIsOpen(false)}
          >
            SERVICIOS
          </button>
        </li>
        <li className="p-4 border-b border-gray-600 w-full text-center">
          <button
            onClick={() => scrollToSection(pricingRef) & setIsOpen(false)}
          >
            PRECIOS
          </button>
        </li>
        <li className="p-4 border-b border-gray-600 w-full text-center">
          <button
            onClick={() => scrollToSection(galleryRef) & setIsOpen(false)}
          >
            GALERIA
          </button>
        </li>
      </ul>
    </nav>
  );
}
