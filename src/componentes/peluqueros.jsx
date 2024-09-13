export function Peluqueros({ nombre }) {
  return (
    <div className="text-center w-48 shrink-0">
      <strong className="block text-white">{nombre}</strong>
      <img className="grayscale hover:grayscale-0 transition-all duration-500" src={`./images/${nombre}.jpg`} alt={`Foto de ${nombre}`} />
    </div>
  );
}
