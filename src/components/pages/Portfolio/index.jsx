"use client"
import Section from '../Sections'
import Card from './Card'

import useCarrusel from '/src/lib/Carrusels/Grid/useCarrusel'

// Owl Carousel
// https://codepen.io/emrankhan016/details/rzpEjq
export default function Skills() {

    const {CarruselRef, dotControlerRef } = useCarrusel()
    const img_webs = [
        "/src/assets/img/hero/web-1.png",
        "/src/assets/img/hero/web-2.png",
        "/src/assets/img/hero/web-3.png",
        "/src/assets/img/hero/web-4.png",
        "/src/assets/img/hero/web-5.png",
    ]



    return <Section bg="bg2" title="Portafolio">

        <div className="container">

            <div className="flex">

                <div ref={CarruselRef} >
                    {img_webs.map((v,k)=>(
                        <Card key={k} lg={v}/>
                    ))}
                </div>

                <div ref={dotControlerRef}>

                </div>


            </div>
        </div>



     



    </Section>
}