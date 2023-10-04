import Hero from "/src/components/pages/Hero";
import Portfolio from "/src/components/pages/Portfolio";
import Socials from "/src/components/pages/Socials";
import MovilScroll from '/src/components/Layout/MovilScroll'


export default function App() {
    return (
        <MovilScroll>

            <main>

                <Portfolio />
                <Hero />
                <Socials />
            </main>
         

        </MovilScroll>
    )
}