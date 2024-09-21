import AppointmentButton from "./AppointmentButton";

export function Principal({ scrollToSection, turnoRef }) {
  return (
    <div
      className="bg-cover bg-center h-screen flex p-12 opacity-80 z-0"
      style={{ backgroundImage: "url('./images/bg1.jpg')" }}
    >
      <div className="mt-32 flex flex-col justify-center items-start gap-10 z-50">
        <h1 className="text-7xl font-bold">
          Barberia y <br />
          Cortes de pelo
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
          Natus deleniti pariatur esse voluptates.
        </p>
        <AppointmentButton
          scrollToSection={scrollToSection}
          turnoRef={turnoRef}
        />
      </div>
    </div>
  );
}
