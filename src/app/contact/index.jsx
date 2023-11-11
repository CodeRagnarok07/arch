"use client"
import { useState } from "react"
import Section from "/src/components/Globals/Sections"

export default function Contacto() {

    const [data, setData ] = useState({
        name:"",
        description: ""
    })

    // const handleChange=(e, name)=>{
    //     // const name = e.name
    //     setData({...data, name: e.target.value})
    //     console.log(data);

    // }




    return (
        <Section title="contacto" description={"¿Tienes alguna pregunta o proyecto en mente? No dudes en ponerte en contacto conmigo."}>
            <div className="container flex justify-center ">
                <div className="w-[400px]">

                <form className="border-primary border-sm p-6 rounded-lg gap-4  flex flex-col bg-black">
                    <input name={"name"} onChange={(e)=>setData({...data, "name": e.target.value})} placeholder="Tu nombre" className="w-full btn border-primary border-sm" type="text"  id="" />
                    <input   placeholder="Correo" className="hidden md:flex w-full btn border-primary border-sm" type="text"  id="" />

                    <textarea name={"description"} onChange={(e)=>setData({...data, "description": e.target.value})} placeholder="Preguntas o sugerencias" className="w-full btn border-primary border-sm"  id="" cols="30" rows="10">

                    </textarea>
                    
                    <div className="flex justify-center">

                    {/* <input type="submit" value="Enviar" className="btn border-secondary" /> */}
                    
                    <a 
                    href={`Hola mi nombre es ${data.name} \n \n

                    ${data.description}
                    
                    `}
                    
                    target="_blank"  className="btn border-secondary">Enviar</a>
                 
                    </div>
                </form>
                </div>

            </div>

        </Section>

    )
}