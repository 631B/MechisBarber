import { Navbar } from "./componentes/navbar";
import { Peluqueros } from "./componentes/peluqueros";
import { Servicios } from "./componentes/servicios";
import { Footer } from "./componentes/footer";
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
      <h2 ref={barbersRef} className="mt-24 text-yellow-500 text-2xl p-4">
        <strong>Peluqueros</strong>
      </h2>
      <div className="w-full overflow-x-auto flex snap-x snap-mandatory space-x-4 p-4 justify-between">
        <Peluqueros nombre="Pedro" />
        <Peluqueros nombre="Juan" />
        <Peluqueros nombre="Pepe" />
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
      <Footer />
    </>
  );
}

export default App;
