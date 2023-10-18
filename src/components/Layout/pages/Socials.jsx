import Section from "/src/components/Globals/Sections";
import { socials } from '/src/consts'

export default function Socials() {



    return <section className={" flex flex-col  bg1 justify-center "}>

        <header className="header container">
            <h2 className="font-tourner ">Redes Sociales</h2>

            <svg width="100%" height="5" viewBox="0 0 501 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M250.376 0.833008L427.153 1.1259L500.376 1.83301L427.153 2.54011L250.376 2.83301L73.5995 2.54011L0.376221 1.83301L73.5995 1.1259L250.376 0.833008Z" fill="white"></path></svg>
            
    
            <p className="mt-2">
            Conéctate conmigo en mis redes sociales para estar al día con mis últimos proyectos y publicaciones de blog.
            </p>
        </header>


        <div className="container flex items-center justify-center w-[100%] xs:w-3/5 sm:w-3/5 ">
            <div className="flex gap-3 flex-wrap justify-center ">

                {socials.map((v, k) => (
                    <div key={k}>
                        <img src={v.icon} alt="" />
                    </div>
                ))}
            </div>

        </div>
    </section>
}