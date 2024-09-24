export function Pricing({servicio, descripcion, precio}) {
    return (
        <div className="p-8 text-xs md:text-lg z-30">
            <div className="w-[320px] h-[150px] md:w-[500px] md:h-[150px] lg:w-[440px] lg:h-[150px] flex text-center items-center justify-center p-6 rounded-3xl bg-gray-200 text-MechisBlack dark:bg-gray-800 dark:text-MechisWhite">
                <img className="rounded-full w-28 h-28" src="images/corteImage2.jpg" alt="" />
                <div className="flex flex-col">
                    <p>
                    <strong>{servicio}</strong>
                    </p>
                    <p>{descripcion}</p>
                </div>
                <p className="text-MechisYellow">{precio}</p>
            </div>
        </div>
    )
}