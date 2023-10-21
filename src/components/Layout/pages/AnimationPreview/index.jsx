import Section from "/src/components/Globals/Sections";
import img2 from '/assets/img/hero/web-2.png'

export default function AnimationPreview() {


    return <Section title="preview">


        <div className="owl_carrusel">

            {[...Array(5).keys()].map(v => (
                <div key={v}>
                    <img  src={img2} alt="" />
                </div>
            ))}

        </div>




    </Section>
}