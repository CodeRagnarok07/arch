import Section from "/src/components/Globals/Sections";


export default function About() {
    return (<Section title="Sobre mi">

        <div className="container">
            <img
                className="rounded-full w-[15rem] h-[15rem] object-cover border-blur"
                src="/assets/Desarrollador_web.JPG" alt="" />

            <div className="text-center   ">
                <h2 className="font-tourner text-2xl ">Angel Riera</h2>
                <h3 className="font-lemonmilk uppercase">Experto en desarrollo y diseño Web</h3>
            </div>
        </div>

    </Section>)
}