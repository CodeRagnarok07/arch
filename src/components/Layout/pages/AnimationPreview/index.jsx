import Section from "/src/components/Globals/Sections";
import img2 from '/assets/img/hero/web-2.png'
import {img_webs} from '/src/consts'

export default function AnimationPreview() {


    return <Section title="preview">


        <a href="#" className="gallery-minimalist">
            {img_webs.map(v => (
                <a key={v} id={"galery_"+ v} href={"#galery_"+ v}>
                    <img src={v} alt="" />
                </a>
            ))}
        </a>




    </Section>
}