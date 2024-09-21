const AppointmentButton = (turnoRef, scrollToSection) => {
  return (
    <button
      className="hover:text-MechisYellow hover:bg-MechisWhite bg-MechisYellow py-5 px-10 transition-all rounded-md font-bold text-sm"
      onClick={() => scrollToSection(turnoRef)}
    >
      RESERVA TU TURNO
    </button>
  );
};

export default AppointmentButton;
