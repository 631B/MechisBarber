export function Servicios({ servicio, descripcion, imagenes }) {
  return (
    <div className="flex text-white p-4">
      <div className="flex flex-col">
        <p>
          <strong>{servicio}</strong>
        </p>
        <p className="text-white">{descripcion}</p>
      </div>
      {imagenes.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index}`}/>
      ))}
    </div>
  );
}
