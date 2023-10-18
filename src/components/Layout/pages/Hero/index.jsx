"use client"

import Frame from './Frame'

export default function Hero() {


    return <section className="bg1 h-full flex flex-col justify-around" >
        <header className="text-center mt-8 ">
            <div className="w-min mx-auto flex flex-col items-center">
                <span className='special1 font-tourner  text-[3.5rem] sm:text-[5.5rem] '>
                    arch.dv
                </span>
                <svg width="100%" height="5" viewBox="0 0 501 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M250.376 0.833008L427.153 1.1259L500.376 1.83301L427.153 2.54011L250.376 2.83301L73.5995 2.54011L0.376221 1.83301L73.5995 1.1259L250.376 0.833008Z" fill="white" />
                </svg>
            </div>
            <h1 className="font-lemonmilk uppercase font-light text-[1.7rem] sm:text-[2rem]">
                <span className="w-full">Diseño Y Desarrollo  Multiplataforma  </span> 
            </h1>
        </header>

        {/* <Frame /> */}







    </section>
}