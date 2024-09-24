export function Servicios({ servicio, descripcion, imagen }) {
  return (
    <div className="py-10 px-6 text-sm md:text-lg lg:text-xl">
      <div className="flex text-center flex-col items-center justify-center p-4 rounded-3xl bg-gray-300 text-MechisBlack dark:bg-gray-900 dark:text-MechisWhite">
        <p>
          <strong>{servicio}</strong>
        </p>
        <p>{descripcion}</p>
        <img
          className="mt-2 w-32 h-32"
          src={imagen}
          alt="No se encontro la imagen"
        />
      </div>
    </div>
  );
}
