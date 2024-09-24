import { useState } from "react";

export function Pedirturno() {
  const [barber, setBarber] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [optionalMessage, setOptionalMessage] = useState("");
  const phoneNumber = "5493482441796";

  const sendMessage = () => {
    if (!barber || !service || !time) {
      alert("Complete el formulario");
      return;
    }

    const message = `Hola, me gustaria pedir turno con ${barber}, para ${service}, a las ${time}. ${
      optionalMessage ? ` \n${"Mensaje adicional:"} ${optionalMessage}` : ""
    }`;

    const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="p-4 text-MechisBlack dark:text-MechisWhite">
      <div className="mb-4">
        <label className="block text-lg mb-2">Selecciona un Ṕeluquero:</label>
        <select
          className="border p-2 bg-MechisYellow w-56"
          value={barber}
          onChange={(e) => setBarber(e.target.value)}
        >
          <option value="">Selecciona un Peluquero</option>
          <option value="Pedro">Pedro</option>
          <option value="Juan">Juan</option>
          <option value="Adolfo">Adolfo</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg mb-2">Selecciona un Servicio:</label>
        <select
          className="border p-2 bg-MechisYellow w-56"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Selecciona un Servicio</option>
          <option value="Corte de Pelo">Corte de Pelo</option>
          <option value="Servicio2">Servicio2</option>
          <option value="Servicio3">Servicio3</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg mb-2">Selecciona un Horario:</label>
        <select
          className="border p-2 bg-MechisYellow w-56"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Selecciona un Horario</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg mb-2">Agregar un Mensaje:</label>
        <input
          type="text"
          className="border p-2 bg-MechisYellow w-56 dark:placeholder:text-MechisWhite placeholder:text-MechisBlack "
          value={optionalMessage}
          onChange={(e) => setOptionalMessage(e.target.value)}
          placeholder="Mensaje (opcional)"
        />
      </div>

      <button className="bg-MechisYellow w-56 p-2 mt-4 hover:text-MechisYellow hover:bg-MechisBlack hover:dark:bg-MechisWhite" onClick={sendMessage}>Enviar Mensaje</button>
    </div>
  );
}
