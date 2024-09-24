import { Navbar } from "./componentes/navbar";
import { Peluqueros } from "./componentes/peluqueros";
import { Servicios } from "./componentes/servicios";
import { Footer } from "./componentes/footer";
import corteImage1 from "../public/images/corteImage1.jpg";
import corteImage2 from "../public/images/corteImage2.jpg";
import { useEffect, useRef, useState } from "react";
import { Principal } from "./componentes/principal";
import { Pedirturno } from "./componentes/pedirTurno";

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
      <h2 ref={barbersRef} className=" text-MechisYellow text-2xl p-4">
        <strong>Peluqueros</strong>
      </h2>
      <div className="flex flex-col items-center w-full md: md:flex-row md:justify-between">
        <Peluqueros nombre="Pedro" />
        <Peluqueros nombre="Juan" />
        <Peluqueros nombre="Adolfo" />
      </div>
      <h2 ref={servicesRef} className="text-MechisYellow text-2xl p-4">
        <strong>Servicios</strong>
      </h2>
      <div className="mb-12 grid grid-cols-2 grid-rows-2 w-[490px] h-[600px] md:w-[890px] md:h-[600px] lg:w-[1180px] lg:h-[600px]">
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
      <h2 ref={turnoRef} className="text-MechisYellow text-2xl p-4">
        <strong>Pedir Turno</strong>
      </h2>
      <Pedirturno />
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
