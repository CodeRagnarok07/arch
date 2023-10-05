
import Section from "./Sections"

export default function Contacto() {

    return (
        <Section title="contacto" description="Puede agendar un cita y asesorarte gratuita y personalmente">
            <div className="container">

                <form className="border-primary border-sm p-6 rounded-lg gap-4  flex flex-col bg-black">
                    <input placeholder="Titulo" className="w-full btn border-primary border-sm" type="text" name="" id="" />
                    <input placeholder="Titulo" className="w-full btn border-primary border-sm" type="text" name="" id="" />

                    <textarea className="w-full btn border-primary border-sm" name="" id="" cols="30" rows="10"></textarea>
                    
                    <div className="flex justify-center">

                    <input type="submit" value="Enviar" className="btn border-secondary" />
                    </div>
                </form>
            </div>



        </Section>

    )
}