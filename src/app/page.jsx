import MovilScroll from '/src/components/MovilScroll'
import NavbarMovil from "/src/components/MovilScroll/NavbarMovil";


import Hero from "./ui/Hero";
import Skills from "./ui/Skills";

import PortfolioPaw from "./portfolio/PWA";

import Socials from "./contact/Social";
import Contact from "./contact";
import Services from "./services";
// import Experience from './Experience';
import FQA from './services/FQA';
import Politicas from './about/politicas';


import Landing from './landing-page/ui/index';
import Imagen from 'next/image';






export default function App() {
    return (<>


        <MovilScroll>


            <main id='home'>
                {/* <Landing/> */}


                <Hero />
                <Services />
                <Contact />
                <Socials />

            </main>

            <main id='services'>
                <Services />
                <FQA />

            </main>

            <main id='portfolio'>
                <PortfolioPaw />

            </main>
            <main id='blog'>
                {/* <Skills /> */}

                <section className='flex flex-col items-center justify-center text-center'>


                    <div className="w-min mx-auto flex flex-col items-center">
                        <span className='special1 font-tourner  text-[3.5rem] sm:text-[5.5rem] '>
                            Muy Pronto
                        </span>
                        <svg width="100%" height="5" viewBox="0 0 501 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M250.376 0.833008L427.153 1.1259L500.376 1.83301L427.153 2.54011L250.376 2.83301L73.5995 2.54011L0.376221 1.83301L73.5995 1.1259L250.376 0.833008Z" fill="white" />
                        </svg>
                    </div>
                    <h1 className="font-lemonmilk uppercase font-light text-[7rem] sm:text-[10rem]">
                        <span className="w-full">👨‍💻</span>
                    </h1>
                </section>

                <section>

                    <Imagen 
                    height={"1000"}
                    width={"1000"}
                    src={"/assets/img/bg/bg1.png"}
                    />
                </section>

            </main>

            <main id='about'>
                {/* add landing page */}
                <Politicas />

            </main>

            <main id='contact'>
                <Contact />
                <Socials />
            </main>



        </MovilScroll>

        <NavbarMovil />

    </>
    )

}