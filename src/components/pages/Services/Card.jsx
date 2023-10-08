import icon from "./icon.svg"

export default function Card() {

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
                <p className="text-[0.65rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ipsa dignissimos impedit distinctio facilis error architecto ad sapiente rerum officiis laborum.</p>
                <h4 className="font-bold underline text-lg">Incluye:</h4>

                <ul className="flex flex-col gap-2 my-2">
                    {feats.map((v, k) => (
                        <li className="flex gap-2 items-center" key={k}>
                            <i className="w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                    <g clip-path="url(#clip0_716_1240)">
                                        <path d="M9 12.2617L12 9.26172M12 9.26172L9 6.26172M12 9.26172H6M16.5 9.26172C16.5 13.4039 13.1421 16.7617 9 16.7617C4.85786 16.7617 1.5 13.4039 1.5 9.26172C1.5 5.11958 4.85786 1.76172 9 1.76172C13.1421 1.76172 16.5 5.11958 16.5 9.26172Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_716_1240">
                                            <rect width="18" height="18" fill="white" transform="translate(0 0.261719)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </i>

                            {v}
                        </li>
                    ))}
                </ul>

                <h5 className="font-bold text-2xl text-center">$499</h5>

            </div>
            <div className="flex justify-around my-4">
                <div className="btn rounded-sm border-secondary">Contratar</div>
                <div className="btn rounded-sm border-danger">Test</div>
                <div className="btn rounded-sm border-blue">Ver Mas</div>
            </div>

            <div className="flex flex-col text-center">
                <h3 className="font-tourner text-lg">Standar</h3>
                <div className="flex  justify-center gap-1
                ">
                    <div className="bg-slate-700 h-1 w-8 rounded-2xl" />
                    <div className="bg-slate-100 h-1 w-8 rounded-2xl" />
                    <div className="bg-slate-700 h-1 w-8 rounded-2xl" />
                </div>
            </div>
        </div>
    )
}