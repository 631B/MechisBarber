export function Servicios({ servicio, descripcion, imagenes }) {
  return (
    <div className="">
      <p>
        <strong>{servicio}</strong>
      </p>
      <p>{descripcion}</p>
      {imagenes.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index}`} />
      ))}
    </div>
  );
}
