export function Peluqueros({ nombre }) {
  return (
    <div className="text-center max-w-xs w-[220px] md:w-full p-4 bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
      <strong className="block text-lg font-semibold text-MechisBlack dark:text-MechisWhite mb-2">{nombre}</strong>
      <img
        className="h-56 md:h-96 w-full object-contain md:object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
        src={`./images/${nombre}.jpg`}
        alt={`Foto de ${nombre}`}
      />
    </div>
  );
}