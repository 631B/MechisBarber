import { Navbar } from "./componentes/navbar";
import { Peluqueros } from "./componentes/peluqueros";
import { Servicios } from "./componentes/servicios";
import juanImage from "../public/images/Juan.jpg";
import pedroImage from "../public/images/Pedro.jpg";
import { useRef } from "react";

function App() {
  const images = [pedroImage, juanImage];
  const servicesRef = useRef(null);
  const barbersRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        servicesRef={servicesRef}
        barbersRef={barbersRef}
      />
      <h2 ref={barbersRef} className="mt-16">
        Peluqueros
      </h2>
      <Peluqueros nombre="Pedro" />
      <Peluqueros nombre="Juan" />
      <h2 ref={servicesRef}>Servicios</h2>
      <Servicios
        servicio="Corte de Pelo"
        descripcion="Corte de pelo..."
        imagenes={images}
      />
    </>
  );
}

export default App;
