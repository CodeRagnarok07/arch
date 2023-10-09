import MovilScroll from '/src/lib/MovilScroll'
import Hero from "../components/Layout/pages/Hero";
import Portfolio from "../components/Layout/pages/Portfolio";
import Socials from "../components/Layout/pages/Socials";
import Contact from "../components/Layout/pages/Contact";
import Skills from "../components/Layout/pages/Skills";
import Services from "../components/Layout/pages/Services";
import Experience from '../components/Layout/pages/Experience';
import About from '../components/Layout/pages/About';

import NavbarMovil from "/src/components/Layout/NavbarMovil";


export default function App() {
    return (

        <MovilScroll>

            <main>
                {/* 
                    conectar api
                    owl carrusel
                    handle
                */}
                <Portfolio />

                <Hero />

                {/* api */}
                <Experience />

                {/* api */}
                <Skills />


              

                {/* que funcione */}
                <Contact />

                {/* links */}
                <Socials />

                {/* <About />
                 <Services />
                */}

            </main>


            {/* links working */}
            <NavbarMovil />
        </MovilScroll>
    )
}