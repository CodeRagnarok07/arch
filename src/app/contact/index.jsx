
import Section from "/src/components/Globals/Sections"

export default function Contacto() {
    let copis =[
        "¿Tienes alguna pregunta o proyecto en mente? No dudes en ponerte en contacto conmigo.",
        "¿Estas preparado? puedes ponerte en contacto conmigo."
    ]
    return (
        <Section title="contacto" description={copis[1]}>
            <div className="container flex justify-center ">
                <div className="w-[400px]">

                <form className="border-primary border-sm p-6 rounded-lg gap-4  flex flex-col bg-black">
                    <input placeholder="Titulo" className="w-full btn border-primary border-sm" type="text" name="" id="" />
                    <input placeholder="Titulo" className="w-full btn border-primary border-sm" type="text" name="" id="" />

                    <textarea className="w-full btn border-primary border-sm" name="" id="" cols="30" rows="10"></textarea>
                    
                    <div className="flex justify-center">

                    <input type="submit" value="Enviar" className="btn border-secondary" />
                    </div>
                </form>
                </div>

            </div>

        </Section>

    )
}