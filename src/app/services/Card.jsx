"use client"
// import Icon from "./Icon.jsx"
import data from "/src/locale/data/services.json"
import { useEffect, useRef, useState } from "react";


export default function Card() {

    // style

    const [current, setCurrent] = useState(1)




    const texts = useRef()

    const handleChange = (e, k) => {
        const blurrings = texts.current.querySelectorAll(".blurring")
        for (let index = 0; index < blurrings.length; index++) {
            const element = blurrings[index];
            element.classList.toggle("blurring")
        }


        setTimeout(() => {
            for (let index = 0; index < blurrings.length; index++) {
                const element = blurrings[index];
                element.classList.toggle("blurring")
            }
        }, "750")


        setTimeout(() => {
            setCurrent(k)
        }, "1500")



    }

    const message = `
    hola angel estoy interesado en contratar el plan *${data.planes[current].tipo}* \n
    por un costo de $*${data.planes[current].price}*
    `




    return (
        <div className="container w-full ">

            <div className="my-auto rounded-lg shadow-sm shadow-white bg-black bg-opacity-90 p-3 relative" >

                {/* <div className="absolute inset-x-0 w-full flex justify-center translate-y-[-70%]">
                    <Icon/>
                </div> */}

                <div className="border-[#005C94] shadow-none border-2 border-opacity-60 rounded-lg bg-black p-2">

                    <div ref={texts} className="flex flex-col text-center">
                        <h3 className="blurring font-tourner text-lg leading-none">{data.planes[current].tipo}</h3>
                        <p className="blurring small" > {data.planes[current].description} </p>

                        <svg className="my-2" width="100%" height="5" viewBox="0 0 501 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M250.376 0.833008L427.153 1.1259L500.376 1.83301L427.153 2.54011L250.376 2.83301L73.5995 2.54011L0.376221 1.83301L73.5995 1.1259L250.376 0.833008Z" fill="white" />
                        </svg>

                        <ul className="flex justify-center gap-2">
                            {[...Array(3).keys()].map((k) => (
                                <li onClick={(e) => handleChange(e, k)} key={k} className={"h-2 w-8 rounded-2xl" + ` ${current == k ? "bg-white" : "bg-slate-700"}`} />
                            ))}
                        </ul>



                        <h4 className="text-left font-bold underline text-lg">Incluye:</h4>

                        <ul className="text-left blurring flex flex-col  gap-1 sm:gap-2 my-2">
                            {data.planes[current].include.map((v, k) => (
                                <li className="flex gap-2 items-center small" key={k}>
                                    <i className="min-w-[1rem] w-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                            <g clipPath="url(#clip0_716_1240)">
                                                <path d="M9 12.2617L12 9.26172M12 9.26172L9 6.26172M12 9.26172H6M16.5 9.26172C16.5 13.4039 13.1421 16.7617 9 16.7617C4.85786 16.7617 1.5 13.4039 1.5 9.26172C1.5 5.11958 4.85786 1.76172 9 1.76172C13.1421 1.76172 16.5 5.11958 16.5 9.26172Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

                        <h5 className="blurring font-bold text-2xl text-center">${data.planes[current].price}</h5>

                    </div>

                    <div className="flex justify-around my-4 sm:my-6">
                        
                        <a href={`https://api.whatsapp.com/send/?phone=%2B584126866045&text=${message}&type=phone_number&app_absent=0`}
                        
                        
                        className="btn  border-secondary p-2 rounded-[8px]">Contratar</a>
                        <a href="/gallery" className="btn  border-secondary p-2 rounded-[8px]">Ver Galería</a>


                    </div>




                </div>
            </div>
        </div>

    )
}