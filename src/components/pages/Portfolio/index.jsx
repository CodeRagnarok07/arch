"use client"
import Section from '../Sections'
import Card from './Card'

import useCarrusel from '/src/lib/Carrusels/Grid/useCarrusel'

// Owl Carousel
// https://codepen.io/emrankhan016/details/rzpEjq
export default function Skills() {

    const {CarruselRef, dotControlerRef } = useCarrusel()
    const img_webs = [
        "/assets/img/hero/web-1.png",
        "/assets/img/hero/web-2.png",
        "/assets/img/hero/web-3.png",
        "/assets/img/hero/web-4.png",
        "/assets/img/hero/web-5.png",
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

            <div className="box-shadow-special w-min px-8 mx-auto ">
                <div className="selector">
                    <div />
                    <div className="active" />
                    <div />
                    <div />
                </div>
            </div>
                    
            
        </div>



     



    </Section>
}