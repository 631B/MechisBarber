import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

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

    const message = `Hola, me gustaría pedir turno con ${barber}, para ${service}, a las ${time}. ${
      optionalMessage ? ` \n${"Mensaje adicional:"} ${optionalMessage}` : ""
    }`;

    const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-lg mb-2">Selecciona un Peluquero:</label>
        <select
          className="border border-gray-300 p-2 bg-MechisYellow w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-MechisYellow shadow-sm"
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
          className="border border-gray-300 p-2 bg-MechisYellow w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-MechisYellow shadow-sm"
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
          className="border border-gray-300 p-2 bg-MechisYellow w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-MechisYellow shadow-sm"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Selecciona un Horario</option>
          <option value="8">8:00</option>
          <option value="9">9:00</option>
          <option value="10">10:00</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg mb-2">Agregar un Mensaje:</label>
        <input
          type="text"
          className="border border-gray-300 p-2 bg-MechisYellow w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-MechisYellow dark:placeholder-gray-400 placeholder-gray-600"
          value={optionalMessage}
          onChange={(e) => setOptionalMessage(e.target.value)}
          placeholder="Mensaje (opcional)"
        />
      </div>

      <button
        className="bg-MechisYellow text-green-700 w-full p-3 rounded-lg flex items-center justify-center gap-2 hover:bg-MechisWhite dark:hover:bg-MechisBlack hover:text-MechisYellow transition-all duration-300 shadow-md"
        onClick={sendMessage}
      >
        <FaWhatsapp className="text-2xl" />
        Enviar Mensaje
      </button>
    </div>
  );
}
