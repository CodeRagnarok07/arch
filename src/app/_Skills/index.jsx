import Section from "/src/components/Globals/Sections"
import Ring3D from './Ring3D'
import { socials } from "/src/consts";

const data = await fetch(process.env.NEXT_PUBLIC_URL + "api/notion/skills").then((res) => res.json())


function Skills() {
    return (<Section bg="bg3" title="Habilidades Tecnicas" description="conoce mas sobre mis habilidades y conocimientos técnicos y las últimas tendencias en diseño y desarrollo web">
            <Ring3D data={data} />
    </Section>)
}

export default Skills