export function Services({servicio, descripcion, precio, imagen}) {
  return (
      <div className="p-8 text-xs md:text-lg z-30">
          <div className="w-[320px] h-[150px] md:w-[450px] md:h-[150px] lg:w-[440px] lg:h-[150px] flex text-center items-center justify-center p-6 rounded-3xl bg-MechisWhite text-MechisBlack dark:bg-MechisBlack dark:text-MechisWhite">
              <img className="rounded-full w-20 h-20 lg:h-28 lg:w-28" src={imagen} alt="" />
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