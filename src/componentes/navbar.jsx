export function Navbar({ scrollToSection, servicesRef, barbersRef }) {
  return (
    <div className="fixed top-0 w-full flex justify-between items-center h-24 max-w-full mx-auto px-4 z-50 bg-black text-white">
      <h1 className="text-3xl font-bold text-blue-500">
        Logo
      </h1>
      <ul className="hidden sm:flex text-white">
        <li className="p-4">
          <button onClick={() => scrollToSection(servicesRef)}>
            Servicios
          </button>
        </li>
        <li className="p-4">
          <button onClick={() => scrollToSection(barbersRef)}>
            Peluqueros
          </button>
        </li>
      </ul>
    </div>
  );
}
