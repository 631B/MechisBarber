const AppointmentButton = ({ turnoRef, scrollToSection }) => {
  return (
    <button
      className="hover:text-MechisYellow hover:bg-MechisWhite bg-MechisYellow px-12 py-5 transition-all rounded-md font-bold text-sm"
      onClick={() => scrollToSection(turnoRef)}
    >
      RESERVA TU TURNO
    </button>
  );
};

export default AppointmentButton;
