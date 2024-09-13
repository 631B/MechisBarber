export function Footer() {
    return (
        <div className="bg-gray-950 text-white z-50 flex p-4 mt-10 w-full h-48">
            <div className="flex flex-row justify-between w-full">
                <ul className="md:p-6 sm:p-2">
                    <li className="text-yellow-500">Horarios</li>
                    <li>7:30 A 12:00</li>
                    <li>15:30 A 21:00</li>
                </ul>
                <ul className="md:p-6 sm:p-2">
                    <li className="text-yellow-500">Ubicacion</li>
                    <li>Calle 121</li>
                    <li>Numero 244</li>
                </ul>
                <ul className="md:p-6 sm:p-2">
                    <li className="text-yellow-500">Numero</li>
                    <li>134134143</li>
                </ul>
                <img className="p-0" src="./images/Isologo.png" alt="" />
            </div>
        </div>
    )
}