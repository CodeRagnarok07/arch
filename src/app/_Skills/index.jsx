import Section from "/src/components/Globals/Sections"
import Ring3D from './Ring3D'
import { socials } from "/src/consts";


function Skills() {

    // const data = await fetch(process.env.NEXT_PUBLIC_URL + "api/notion/skills").then((res) =>     res.json())

    return (<Section bg="bg3" title="Habilidades Tecnicas" description="conoce mas sobre mis habilidades y conocimientos técnicos y las últimas tendencias en programación y desarrollo web">

      
            <Ring3D data={socials} />
    

        


    </Section>)
}

export default Skills