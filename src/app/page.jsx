import MovilScroll from '/src/lib/MovilScroll'
import Hero from "/src/components/pages/Hero";
import Portfolio from "/src/components/pages/Portfolio";
import Socials from "/src/components/pages/Socials";
import Contact from "/src/components/pages/Contact";
import Skills from "/src/components/pages/Skills";
import Services from "/src/components/pages/Services";

import NavbarMovil from "/src/components/Layout/NavbarMovil";


export default function App() {
    return (
        
        <MovilScroll>

            <main>
                <Services/>
                <Skills/>
                <Contact/>

                <Portfolio />
                <Hero />
                <Socials />
            </main>
        


            <NavbarMovil />
        </MovilScroll>
    )
}