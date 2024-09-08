export function Navbar({ scrollToSection, servicesRef, barbersRef }) {
  return (
    <div className=" bg-cyan-600 h-10 w-100% fixed top-0 left-0">
      <ul className="flex gap-10 mx-20 text-xl px-10">
        <li>
          <button onClick={() => scrollToSection(servicesRef)}>
            Servicios
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection(barbersRef)}>
            Peluqueros
          </button>
        </li>
      </ul>
    </div>
  );
}
