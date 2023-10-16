import icon from "/assets/svg/services/icon.svg"
import arrow from "/assets/svg/services/arrow.svg"

export default function Card() {

    const active = {
        color: 'white',
    };

    

    const feats = [
        "Diseño UX UI responsivo Personalizado",
        "1 Conexión De 1 Base de datos",
        "2 Componente funcional [ blog, servicios,  pag, etc]",
        "1 Landing page",
        "Contacto",
    ]

    return (
        <div className="mt-4 rounded-lg shadow-sm shadow-white bg-black bg-opacity-90 p-3 relative" >
            <div className="absolute inset-x-0 w-full flex justify-center translate-y-[-70%]">
                <img className="" src={icon} alt="" />
            </div>
            <div className="border-[#005C94] shadow-none border-2 border-opacity-60 rounded-lg bg-black p-2">
                <h2 className="text-center text-xl font-bold">Notion a Web profesional</h2>
                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ipsa dignissimos impedit distinctio facilis error architecto ad sapiente rerum officiis laborum.</p>
                <h4 className="font-bold underline text-lg">Incluye:</h4>

                <ul className="flex flex-col  gap-1 sm:gap-2 my-2">
                    {feats.map((v, k) => (
                        <li className="flex gap-2 items-center" key={k}>
                            <i className="w-5">
                               <img src={arrow} alt="" />
                            </i>

                            {v}
                        </li>
                    ))}
                </ul>

                <h5 className="font-bold text-2xl text-center">$499</h5>

            </div>

            <div className="flex justify-around my-4 sm:my-6">
                <div className="btn rounded-sm border-secondary">Contratar</div>
                <div className="btn rounded-sm border-danger">Test</div>
                <div className="btn rounded-sm border-blue">Ver Mas</div>
            </div>

            <div className="flex flex-col text-center">
                <h3 className="font-tourner text-lg">Standar</h3>
                <div className="flex  justify-center gap-1
                ">
                    <div className="bg-slate-700 h-1 w-8 rounded-2xl" />
                    <div className={"bg-slate-700 h-1 w-8 rounded-2xl " + " " + active} />
                    <div className="bg-slate-700 h-1 w-8 rounded-2xl" />
                </div>
            </div>
        </div>
    )
}