import Hero from "/src/components/pages/Hero";
import Portfolio from "/src/components/pages/Portfolio";
import Socials from "/src/components/pages/Socials";
import Contact from "/src/components/pages/Contact";
import MovilScroll from '/src/lib/MovilScroll'

import NavbarMovil from "/src/components/Layout/NavbarMovil";


export default function App() {
    return (
        <MovilScroll>

            <main>
                <Contact/>

                <Portfolio />
                <Hero />
                <Socials />
            </main>


            <NavbarMovil />
        </MovilScroll>
    )
}