export function Peluqueros({ nombre }) {
  return (
    <div className="max-w-md bg-MechisWhite dark:bg-MechisBlack shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="h-64 flex items-center justify-center bg-gray-100">
        <img
          className="max-h-full max-w-full object-contain"
          src={`./images/${nombre}.jpg`}
          alt={`Foto de ${nombre}`}
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-MechisBlack dark:text-MechisWhite text-center">{nombre}</h2>
      </div>
    </div>
  );
}