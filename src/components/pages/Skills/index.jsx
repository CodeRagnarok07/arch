"use client"
import { useState } from "react";
import Section from "../Sections"
import Ring3D from './Ring3D'
import { socials } from "/src/consts";

export default function Hero({ bg }) {
    const [current, setCurrent] = useState()


    return <Section bg="bg3" title="Skills" desciption="Puede agendar un cita y asesorarte gratuita y personalmente">
        <Ring3D data={socials} current={current} setCurrent={setCurrent} />
    </Section>
}