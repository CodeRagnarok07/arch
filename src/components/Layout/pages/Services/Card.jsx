"use client"
import icon from "/assets/svg/services/icon.svg"
import arrow from "/assets/svg/services/arrow.svg"
import data from "./data.json"
import { useEffect, useRef, useState } from "react";


export default function Card() {

    // style

    const [current, setCurrent] = useState(1)


    const feats = [
        "Diseño UX UI responsivo Personalizado",
        "1 Conexión De 1 Base de datos",
        "2 Componente funcional [ blog, servicios,  pag, etc]",
        "1 Landing page",
        "Contacto",
    ]


    const texts = useRef()

    const handleChange = (e, k) => {
        const blurrings = texts.current.querySelectorAll(".blurring")
        for (let index = 0; index < blurrings.length; index++) {
            const element = blurrings[index];
            element.classList.toggle("blurring")
        }


        setTimeout(()=>{
            for (let index = 0; index < blurrings.length; index++) {
                const element = blurrings[index];
                element.classList.toggle("blurring")
            }
        },"1000")
     

        setTimeout(()=>{
            setCurrent(k)
        },"1500")


       
    }


  

    return (
        <div className="container w-full ">

            <div className="my-auto rounded-lg shadow-sm shadow-white bg-black bg-opacity-90 p-3 relative" >

                <div className="absolute inset-x-0 w-full flex justify-center translate-y-[-70%]">
                    <img className="" src={icon} alt="" />
                </div>

                <div className="border-[#005C94] shadow-none border-2 border-opacity-60 rounded-lg bg-black p-2">

                    <div ref={texts} className="flex flex-col text-center">
                        <h3 className="blurring font-tourner text-lg leading-none">{data.planes[current].tipo}</h3>
                        <p className="blurring small" > {data.planes[current].description} </p>

                        <svg className="my-2" width="100%" height="5" viewBox="0 0 501 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M250.376 0.833008L427.153 1.1259L500.376 1.83301L427.153 2.54011L250.376 2.83301L73.5995 2.54011L0.376221 1.83301L73.5995 1.1259L250.376 0.833008Z" fill="white" />
                        </svg>

                        <ul className="flex justify-center gap-2">
                            {[...Array(3).keys()].map((k) => (
                                <li onClick={(e) =>handleChange(e, k) } key={k} className={"h-2 w-8 rounded-2xl" + ` ${current == k ? "bg-white" : "bg-slate-700"}`} />
                            ))}
                        </ul>



                        <h4 className="text-left font-bold underline text-lg">Incluye:</h4>

                        <ul className="text-left blurring flex flex-col  gap-1 sm:gap-2 my-2">
                            {data.planes[current].include.map((v, k) => (
                                <li className="flex gap-2 items-center small" key={k}>
                                    <i className="min-w-[1rem] w-4">
                                        <img src={arrow} alt="" />
                                    </i>
                                    {v}
                                </li>
                            ))}
                        </ul>

                        <h5 className="blurring font-bold text-2xl text-center">${data.planes[current].price}</h5>

                    </div>

                    <div className="flex justify-around my-4 sm:my-6">
                        <a href="#contact" className="btn  border-secondary p-2 rounded-[8px]">Contratar</a>

                       
                    </div>




                </div>
            </div>
        </div>

    )
}