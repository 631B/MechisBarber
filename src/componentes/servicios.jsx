export function Servicios({ servicio, descripcion, imagenes }) {
  return (
    <div className="">
      <h2>
        <strong>{servicio}</strong>
      </h2>
      <p>{descripcion}</p>
      <img src={imagenes} alt="no" />
    </div>
  );
}
