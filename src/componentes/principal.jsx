import AppointmentButton from "./AppointmentButton";

export function Principal({ scrollToSection, turnoRef }) {
  return (
    <div className="relative flex p-12 h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ opacity: 0.8, backgroundImage: "url('./images/bg1.jpg')" }}
      />
      <div className="mt-12 md:mt-32 flex flex-col justify-center items-start gap-10 z-10">
        <h1 className="text-5xl md:text-7xl font-bold">
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
