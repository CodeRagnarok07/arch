import Section from "../../../Globals/Sections"
import Ring3D from './Ring3D'
import { socials } from "/src/consts";




// const dynamicData = await fetch(process.env.NEXT_PUBLIC_URL + "api/notion/skills", { cache: 'no-store' })

export default function Skills() {

    // console.log(dynamicData);
    return <Section bg="bg3" title="Skills" desciption="">

        <div className="scale-75 sm:scale-150">
            <Ring3D data={data} />
        </div>

        <div className="container flex  flex-col text-center sm:mt-[8rem]  ">

            <h3 className="font-tourner text-[1rem] mb-1 ">Elemento</h3>
            <div className="box-shadow-special ">
                <p className="hidden sm:flex px-4 py-1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi nobis dolore similique deserunt corrupti voluptatum,
                </p>
            </div>

            <div className="flex gap-4 justify-center mt-2">
                <div className="btn border-primary">ver mas</div>
                <div className="btn border-secondary">ver mas</div>
            </div>
        </div>


    </Section>
}