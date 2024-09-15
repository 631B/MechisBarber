export function Servicios({ servicio, descripcion, imagenes }) {
  return (
    <div className="md:flex p-4 sm:flex-row">
      <div className="flex flex-col">
        <p>
          <strong>{servicio}</strong>
        </p>
        <p>{descripcion}</p>
      </div>
      {imagenes.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index}`}/>
      ))}
    </div>
  );
}
