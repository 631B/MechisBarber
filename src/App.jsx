import { Navbar } from "./componentes/navbar";
import { Peluqueros } from "./componentes/peluqueros";
import { Footer } from "./componentes/footer";
import corteImage1 from "/images/corteImage1.jpg";
import corteImage2 from "/images/corteImage2.jpg";
import { useEffect, useRef, useState } from "react";
import { Principal } from "./componentes/principal";
import { Pedirturno } from "./componentes/pedirTurno";
import { FaInstagram } from "react-icons/fa";
import { Services } from "./componentes/servicios";

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const barbersRef = useRef(null);
  const turnoRef = useRef(null);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDark;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.add("scrollbar-dark");
      document.documentElement.classList.remove("scrollbar-light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("scrollbar-light");
      document.documentElement.classList.remove("scrollbar-dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const scrollToSection = (ref) => {
    const navbarHeight = 95;
    const sectionTop = ref.current.offsetTop;

    window.scrollTo({
      top: sectionTop - navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        homeRef={homeRef}
        servicesRef={servicesRef}
        galleryRef={galleryRef}
        barbersRef={barbersRef}
        turnoRef={turnoRef}
      />

      <Principal scrollToSection={scrollToSection} turnoRef={turnoRef} />

      <h2 ref={barbersRef} className="text-MechisBlack dark:text-MechisWhite text-3xl font-bold p-6 text-center">
        BARBEROS
      </h2>
      <div className="flex flex-col items-center gap-8 w-full md:flex-row md:justify-between px-16 pb-10">
        <Peluqueros nombre="Pedro" />
        <Peluqueros nombre="Juan" />
        <Peluqueros nombre="Adolfo" />
      </div>

      <div ref={servicesRef} className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ opacity: 0.8, backgroundImage: "url('./images/bg2.jpeg')" }}
        />
        <div className="flex justify-center mb-12">
          <h2 className="text-MechisBlack dark:text-MechisWhite absolute text-4xl font-bold p-4 z-30">
            <strong>Nuestros Servicios</strong>
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="place-items-center grid grid-cols-1 md:grid-cols-2 grid-rows-2 w-[490px] h-[600px] md:w-[700px] md:h-[600px] lg:w-[1000px] lg:h-[600px]">
            <Services servicio="Corte de Pelo" descripcion="lorem ipsum dolor sit amet consectetur" precio="42$" imagen={corteImage1}/>
            <Services servicio="Corte de Pelo" descripcion="lorem ipsum dolor sit amet consectetur" precio="42$" imagen={corteImage2}/>
            <Services servicio="Corte de Pelo" descripcion="lorem ipsum dolor sit amet consectetur" precio="42$" imagen={corteImage1} />
          </div>
        </div>
      </div>
      
      <div className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ opacity: 0.8, backgroundImage: "url('./images/bg2.jpeg')" }}
        />
        <div className="absolute inset-0 bg-MechisBlack opacity-50 z-10"></div>

        <div className="z-20 p-6 text-MechisBlack dark:text-MechisWhite bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full mx-auto">
          <h2 ref={turnoRef} className="text-MechisBlack dark:text-MechisWhite mb-3 font-bold text-4xl text-center">Reserva tu Turno</h2>
          <Pedirturno />
        </div>
      </div>

      <Footer darkMode={darkMode} />

      <a href="https://www.instagram.com/" className="fixed bottom-5 right-5 z-50">
        <div className="p-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full">
          <FaInstagram className="text-4xl text-MechisWhite" />
        </div>
      </a>
    </>
  );
}

export default App;
