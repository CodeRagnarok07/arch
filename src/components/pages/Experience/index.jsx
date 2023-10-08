import Section from "../Sections";
import styles from './styles.module.scss'
export default function Experience() {
    const Experience = [
        {
            name: "Arsis",
            titulo: "Full-Stack developer",
            place: "algo",
            date: {
                init: "2021-01-28",
                end: "2022-07-28",
            },
            actividades: "Mi rol como desarrollador web es ofrecer las distintas herramientas modernas desde los servicios a contratar (cloud computing, Hosting ) y las tecnologías que mejor se adapte creativamente a las necesidades del cliente, ( django, wordpress, next.js, notion, postgresql, mysql, docker, react.js ) ofreciendo el mayor beneficio calidad/precio Ademas de ofrecer interactividad a los diseños que son provistos por la empresa, tomando asi las decisiones finales sobre usabilidad y experiencia de usuario",

        }
    ]

    const array = [...Array(2).keys()];


    return <Section title="Experiencia Laboral">

        <div className="container">

            <div className={styles.experience}>
                {array.map((v, k) => (
                    <div key={k} className={styles.element}>
                        <div className={styles.card}>
                            <h2 className="font-bold text-2xl">
                                Freelance
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore eveniet aperiam reprehenderit. Aliquid soluta, harum laudantium labore, iure earum beatae aliquam consectetur natus amet architecto facilis, quidem deserunt magni repellat?</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
}