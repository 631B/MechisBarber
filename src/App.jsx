import { Navbar } from "./componentes/navbar";
import { Peluqueros } from "./componentes/peluqueros";
import { Servicios } from "./componentes/servicios";
import { Footer } from "./componentes/footer";
import corteImage1 from "/images/corteImage1.jpg";
import corteImage2 from "/images/corteImage2.jpg";
import { useEffect, useRef, useState } from "react";
import { Principal } from "./componentes/principal";
import { Pedirturno } from "./componentes/pedirTurno";
import { Pricing } from "./componentes/pricing";
import { FaInstagram } from "react-icons/fa";

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
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
        pricingRef={pricingRef}
        galleryRef={galleryRef}
        barbersRef={barbersRef}
        turnoRef={turnoRef}
      />

      <Principal scrollToSection={scrollToSection} turnoRef={turnoRef} />

      <h2 ref={barbersRef} className="text-MechisYellow text-3xl font-bold p-6 text-center">
        Barberos
      </h2>
      <div className="flex flex-col items-center gap-6 w-full md:flex-row md:justify-between p-6">
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
          <h2 className="text-MechisYellow absolute text-2xl font-bold p-4 z-30">
            <strong>Servicios</strong>
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="mb-12 place-items-center grid grid-cols-2 grid-rows-2 w-[490px] h-[600px] md:w-[700px] md:h-[600px] lg:w-[1000px] lg:h-[600px]">
            <Servicios
              servicio="Corte de Pelo"
              descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              imagen={corteImage1}
              />
            <Servicios
              servicio="Corte de Pelo"
              descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              imagen={corteImage2}
              />
            <Servicios
              servicio="Corte de Pelo"
              descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              imagen={corteImage2}
              />
          </div>
        </div>
      </div>
      
      <h2 ref={pricingRef} className="text-MechisYellow mt-8 text-2xl p-4 flex justify-center"><strong>Precios</strong></h2>
      <div className="flex items-center justify-center min-h-screen">
        <div className="mb-12 place-items-center grid grid-cols-1 lg:grid-cols-2 grid-rows-2">
            <Pricing servicio="Corte de Pelo" descripcion="lorem ipsum dolor sit amet consectetur" precio="42$" imagen={corteImage1}/>
            <Pricing servicio="Corte de Pelo" descripcion="lorem ipsum dolor sit amet consectetur" precio="42$" imagen={corteImage2}/>
            <Pricing servicio="Corte de Pelo" descripcion="lorem ipsum dolor sit amet consectetur" precio="42$" imagen={corteImage1} />
        </div>
      </div>
      <Pedirturno />
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
