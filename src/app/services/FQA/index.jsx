import Section from "/src/components/Globals/Sections";
import data from '/src/locale/data/FQA.json'




export default function FQA() {

    return <Section title="FQA" >
        <div className="container">

            <ul className="flex flex-col">
                {data.map((v, k) => (
                    <li id={"fqa_"+k}  className="toggle " key={k}>
                        <a href={"#fqa_"+k} className="toggle-card ">
                            <h2 >{v.name}</h2>

                            <p>
                                {v.description}
                            </p>
                        </a>

                    </li>
                ))}
            </ul>

        </div>

    </Section>
}

{/* <Toggler data={data}  /> */ }

