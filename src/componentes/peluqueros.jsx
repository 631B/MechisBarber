export function Peluqueros({ nombre }) {
  return (
    <div className="text-center max-w-xs w-full p-2">
      <strong className="block">{nombre}</strong>
      <img className="h-28 md:h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src={`./images/${nombre}.jpg`} alt={`Foto de ${nombre}`} />
    </div>
  );
}
