"use client"
import { useState } from "react";
import Section from "../../../Globals/Sections"
import Ring3D from './Ring3D'
import { socials } from "/src/consts";

export default function Hero({ bg }) {
    const [current, setCurrent] = useState()


    return <Section bg="bg3" title="Skills" desciption="Puede agendar un cita y asesorarte gratuita y personalmente">

        <div className="my-auto">
            <div className="sm:scale-150">

                <Ring3D data={socials} current={current} setCurrent={setCurrent} />
            </div>

            <div className="container flex  flex-col text-center ">

                <h3 className="font-tourner text-[1rem] mb-1">Elemento</h3>
                <div className="box-shadow-special ">
                    <p className="flex px-4 py-1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi nobis dolore similique deserunt corrupti voluptatum,
                    </p>
                </div>

                <div className="flex gap-4 justify-center mt-2">
                    <div className="btn border-primary">ver mas</div>
                    <div className="btn border-secondary">ver mas</div>
                </div>
            </div>
        </div>


    </Section>
}