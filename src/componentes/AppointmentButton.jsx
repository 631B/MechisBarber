const AppointmentButton = ({
  turnoRef,
  scrollToSection,
  isScrolled,
  hideOnScroll,
  navBar,
}) => {
  return (
    <button
      className={`hover:text-MechisYellow hover:bg-MechisWhite bg-MechisYellow transition-all rounded-md font-bold text-sm ${
        (hideOnScroll && !isScrolled ? "hidden" : "block",
        navBar ? "px-2 py-2" : "px-12 py-5")
      }`}
      onClick={() => scrollToSection(turnoRef)}
    >
      RESERVA TU TURNO
    </button>
  );
};

export default AppointmentButton;
