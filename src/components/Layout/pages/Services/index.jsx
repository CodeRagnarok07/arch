import Section from "/src/components/Globals/Sections";
import Card from "./Card";
import data from "./data.json"


export default function Services() {
    console.log(data);
    return <Section title="Servicios" description="Diseño y Desarrollo">

        <div className="container flex justify-center ">
            <div className="w-[400px]">
                
                <Card />
            </div>
        </div>

    </Section>
}