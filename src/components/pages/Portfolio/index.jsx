"use client"
import Section from '../Sections'

import useCarrusel from '/src/lib/Carrusels/Grid/useCarrusel'


import style from '/src/lib/Carrusels/Grid/styles.module.scss'

export default function Skills() {

    const sizes ={
            sm:1,
            md:2
        }
    

    const {CarruselRef, arrowControler, dotControlerRef} = useCarrusel({sizes})


    const Socials_Icons = [
        "discord",
        "facebook",
        "ig",
        "tiktok",
        "twicht",
        "twitter",
        "youtube",

    ]

    // const [algo,] = useCarrusel("algo")



    return <Section bg="bg2" title="Portafolio">



        <div className='container  flex flex-col w-1/4 h-[140px] relative' >

            {/* <ContCarrusel >
                {Socials_Icons.map((v, k) => (
                    <img key={k} src={`/src/assets/svg/socials/${v}.svg`} alt="" />
                ))}
            </ContCarrusel> */}

            <div ref={CarruselRef}  >
                {Socials_Icons.map((v, k) => (
                    <img key={k} src={`/src/assets/svg/socials/${v}.svg`} alt="" />
                ))}
            </div>

            <div className="flex gap-4">
                <div onClick={()=>arrowControler(false)} className="bg-green-100 p-1 leading-[1] rounded-full text-black font-bold cursor-pointer">{"<"}</div> 
                <div onClick={()=>arrowControler(true)} className="bg-green-100 p-1 leading-[1] rounded-full text-black font-bold cursor-pointer">{">"}</div>
            </div>

    
                    


        </div>



    </Section>
}