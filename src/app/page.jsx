import MovilScroll from '/src/components/MovilScroll'
import NavbarMovil from "/src/components/MovilScroll/NavbarMovil";


import Hero from "./_Hero";

import PortfolioPaw from "./portfolio/PWA";

import Socials from "./contact/Social";
import Contact from "./contact";
import Skills from "./_Skills";
import Services from "./services";
// import Experience from './Experience';
import FQA from './services/FQA';
import Politicas from './about/politicas';






export default function App() {
    return (<>


            <MovilScroll>


                <main id='home'>
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
                    <Skills />
                </main>

                <main id='about'>
                    {/* add landing page */}
                    {/* experience */}
                    <FQA />

                    <Politicas/>

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