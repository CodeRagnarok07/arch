import OwlCarrusel from './OwlCarrusel'
import Section from '/src/components/Globals/Sections'
import data from '/src/locale/data/portfolio.json'

const url = process.env.NEXT_PUBLIC_URL + "api/notion/portfolio"


// Owl Carousel
// https://codepen.io/emrankhan016/details/rzpEjq

export default async function PAW() {
    // const data = await fetch(url, { cache: 'no-store' }).then((res) => res.json())

    return <Section bg="bg2" title="Portafolio PAW" description="Portafolio de Aplicaciones Móviles: Descubre cómo llevar la movilidad al siguiente nivel de las aplicaciones móviles.">
        <OwlCarrusel data={data} />

    </Section>
}