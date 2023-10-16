import MovilScroll from '/src/components/MovilScroll'
import Hero from "/src/components/Layout/pages/Hero";
import Portfolio from "/src/components/Layout/pages/Portfolio";
import Socials from "/src/components/Layout/pages/Socials";
import Contact from "/src/components/Layout/pages/Contact";
import Skills from "/src/components/Layout/pages/Skills";
import Services from "/src/components/Layout/pages/Services";
import Experience from '/src/components/Layout/pages/Experience';
import About from '/src/components/Layout/pages/About';




export default function App() {
    return (

        <MovilScroll>

            <main id='home'>
                <Hero />
                {/* api */}<Portfolio />
            </main>
            <main id='services'>
                {/* real */}<Services />
            </main>

            <main id='portfolio'>
                <Portfolio />
            </main>
            <main id='blog'>
                <Skills />
            </main>

            <main id='about'>
                {/* api */}<Experience />

            </main>
            <main id='contact'>
                {/* que funcione */} <Contact />
                {/* links */} <Socials />
            </main>


            {/* links working */}
        </MovilScroll>
    )
}