export function Servicios({ servicio, descripcion, imagen }) {
  return (
    <div className="h-full w-full py-10 px-24">
      <div className="p-4 bg-gray-300 text-MechisBlack dark:bg-gray-900 dark:text-MechisWhite">
        <p>
          <strong>{servicio}</strong>
        </p>
        <p>{descripcion}</p>
        <img src={imagen} alt="No se encontro la imagen" />
      </div>
    </div>
  );
}
