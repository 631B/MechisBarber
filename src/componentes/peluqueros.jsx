export function Peluqueros({ nombre }) {
  return (
    <div>
      <strong>{nombre}</strong>
      <img src={`./images/${nombre}.jpg`} alt={`Foto de ${nombre}`} />
    </div>
  );
}
