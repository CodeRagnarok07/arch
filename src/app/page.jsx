import MovilScroll from '/src/components/MovilScroll'
import Hero from "/src/components/Layout/pages/Hero";

import PortfolioPaw from "../components/Layout/pages/PortfolioPaw";
import PortfolioWeb from "../components/Layout/pages/PortfolioWeb";

import Socials from "/src/components/Layout/pages/Socials";
import Contact from "/src/components/Layout/pages/Contact";
import Skills from "/src/components/Layout/pages/Skills";
import Services from "/src/components/Layout/pages/Services";
// import Experience from '/src/components/Layout/pages/Experience';
import About from '/src/components/Layout/pages/About';
import FQA from '../components/Layout/pages/FQA';
import AnimationPreview from '../components/Layout/pages/AnimationPreview';




export default function App() {
    return (

        <MovilScroll>


            <main id='home'>
                <AnimationPreview/>
                <Hero />
                {/* <PortfolioPaw /> */}
                <Services />
                <Contact />
                <Socials />

            </main>

            <main id='services'>
                <Services />
                {/* add landing page */}
                <FQA />

            </main>

            <main id='portfolio'>
                <PortfolioPaw />
                {/* <PortfolioWeb /> */}

            </main>
            <main id='blog'>
                {/* add blog */}
                <Skills />
            </main>

            <main id='about'>
                {/* api */}
                {/* add landing page */}
                {/* experience */}
            </main>

            <main id='contact'>
                {/* que funcione */} <Contact />
                {/* links */} <Socials />
            </main>


            {/* links working */}
        </MovilScroll>
    )
}