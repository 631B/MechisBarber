import { Navbar } from "./componentes/navbar";
import { Peluqueros } from "./componentes/peluqueros";
import { Servicios } from "./componentes/servicios";

function App() {
  return (
    <>
      <Navbar />
      <Peluqueros nombre="Pedro" />
      <Peluqueros nombre="Juan" />
      <Servicios
        servicio="Corte de Pelo"
        descripcion="Corte de pelo..."
        imagenes="../../public/images/Juan.jpg, ../../public/images/Pedro.jpg"
      />
    </>
  );
}

export default App;
