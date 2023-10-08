import MovilScroll from '/src/lib/MovilScroll'
import Hero from "/src/components/pages/Hero";
import Portfolio from "/src/components/pages/Portfolio";
import Socials from "/src/components/pages/Socials";
import Contact from "/src/components/pages/Contact";
import Skills from "/src/components/pages/Skills";
import Services from "/src/components/pages/Services";
import Experience from '/src/components/pages/Experience';
import About from '/src/components/pages/About';

import NavbarMovil from "/src/components/Layout/NavbarMovil";


export default function App() {
    return (

        <MovilScroll>

            <main>
                <About/>
                <Experience/>
                <Skills />

                {/* <Services/>
                <Contact/>

                <Portfolio />
                <Hero />
                <Socials /> */}
            </main>



            <NavbarMovil />
        </MovilScroll>
    )
}