export function Footer({ darkMode }) {
  console.log(darkMode);
  return (
    <div className="bg-MechisWhite dark:bg-MechisBlack z-50 flex p-4 w-full h-48 border-t-4 border-MechisYellow">
      <div className="flex flex-row justify-between w-full">
        <ul className="md:p-4 sm:p-2">
          <li className="text-MechisBlack dark:text-MechisWhite"><strong>HORARIOS</strong></li>
          <li>DESDE DOMINGO <br />HASTA LUNES</li>
          <li>7:30 A 12:00</li>
          <li>15:30 A 21:00</li>
        </ul>
        <ul className="md:p-4 sm:p-2">
          <li className="text-MechisBlack dark:text-MechisWhite"><strong>UBICACIÓN</strong></li>
          <li>CALLE 121</li>
          <li>NÚMERO 244</li>
        </ul>
        <ul className="md:p-4 sm:p-2">
          <li className="text-MechisBlack dark:text-MechisWhite"><strong>CONTACTANOS</strong></li>
          <li>WHATSAPP</li>
          <li>INSTAGRAM</li>
          <li>TWITTER</li>

        </ul>
        <img
          className="shrink-0 h-20 hidden md:block"
          src={
            darkMode
              ? "./images/LogotipoBlanco.png"
              : "./images/LogotipoNegro.png"
          }
          alt="No"
        />
      </div>
    </div>
  );
}
