import Section from "./Sections";
import {socials} from '/src/consts'

export default function Socials() {

    

    return <section className={"pb-20 pt-8 flex flex-col  gap-12 bg1 justify-center "}>

        <header class="header"><div class="w-min mx-auto flex flex-col items-center px-8"><h2 class="font-tourner tracking-[.34rem]  text-[2rem] ">Redes Sociales</h2><svg width="100%" height="5" viewBox="0 0 501 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M250.376 0.833008L427.153 1.1259L500.376 1.83301L427.153 2.54011L250.376 2.83301L73.5995 2.54011L0.376221 1.83301L73.5995 1.1259L250.376 0.833008Z" fill="white"></path></svg><p class="mt-2">Puedes contactarme o seguirme en mis redes sociales</p></div></header>


        <div className="grid place-items-center  ">
            <div className="flex gap-3 flex-wrap justify-center w-3/5">

                {socials.map((v, k) => (
                    <div key={k}>
                        <img src={v.icon} alt="" />
                    </div>
                ))}
            </div>

        </div>
    </section>
}