export function Peluqueros({ nombre }) {
  return (
    <div className="text-white">
      <strong>{nombre}</strong>
      <img className="grayscale hover:grayscale-0 transition-all duration-500" src={`./images/${nombre}.jpg`} alt={`Foto de ${nombre}`} />
    </div>
  );
}
