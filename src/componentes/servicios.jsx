export function Servicios({ servicio, descripcion, imagenes }) {
  return (
    <div className="flex items-center p-2">
      <p className="text-white w-[18%]">
        <strong>{servicio}</strong>
      </p>
      <p className="text-white">{descripcion}</p>
      {imagenes.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index}`} />
      ))}
    </div>
  );
}
