export function Principal({scrollToSection, turnoRef}) {
    return (
        <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{backgroundImage: "url('./images/background.jpeg')"}}>
            <button className="text-5xl font-bold text-center border-4 border-transparent p-4 transition-colors duration-300 hover:border-MechisYellow" onClick={() => scrollToSection(turnoRef)}>Pedir Turno</button>
        </div>
    )
}
