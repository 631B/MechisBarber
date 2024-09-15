import { Navbar } from "./componentes/navbar";
import { Peluqueros } from "./componentes/peluqueros";
import { Servicios } from "./componentes/servicios";
import { Footer } from "./componentes/footer";
import juanImage from "../public/images/Juan.jpg";
import pedroImage from "../public/images/Pedro.jpg";
import { useEffect, useRef, useState } from "react";

function App() {
  const images = [pedroImage, juanImage];
  const servicesRef = useRef(null);
  const barbersRef = useRef(null);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      return savedTheme === "dark"
    }
    else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark;
    }
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.add("scrollbar-dark")
      document.documentElement.classList.remove("scrollbar-light")
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("scrollbar-light")
      document.documentElement.classList.remove("scrollbar-dark")
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        servicesRef={servicesRef}
        barbersRef={barbersRef}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <h2 ref={barbersRef} className="mt-20 text-yellow-500 text-2xl p-4">
        <strong>Peluqueros</strong>
      </h2>
      <div className="flex flex-col items-center w-full md: md:flex-row md:justify-between">
        <Peluqueros nombre="Pedro" />
        <Peluqueros nombre="Juan" />
        <Peluqueros nombre="Adolfo" />
      </div>
      <h2 ref={servicesRef} className="text-yellow-500 text-2xl p-4"><strong>Servicios</strong></h2>
        <Servicios
          servicio="Corte de Pelo"
          descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repellat exercitationem ipsa fuga labore molestias error debitis tenetur sapiente quasi vitae quidem fugiat ducimus, similique rem mollitia commodi voluptas maxime."
          imagenes={images}
        />
          <Servicios
          servicio="Corte de Pelo"
          descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repellat exercitationem ipsa fuga labore molestias error debitis tenetur sapiente quasi vitae quidem fugiat ducimus, similique rem mollitia commodi voluptas maxime."
          imagenes={images}
        />
      <Footer darkMode={darkMode}/>
    </>
  );
}

export default App;
