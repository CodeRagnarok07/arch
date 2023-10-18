"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect } from "react";

// gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerFunction() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (window) {



            for (let index = 0; index < document.querySelectorAll("section").length; index++) {
                const element = document.querySelectorAll("section")[index];

                console.log(element);

                document.addEventListener('scroll', () => {

                    let bodyScrollTop = element.scrollTop;
                    let elementScrollTop = document.documentElement.scrollTop;
                    let elementScrollHeight = document.documentElement.scrollHeight;
                    let elementClientHeight = document.documentElement.clientHeight;
                    console.log(
                        bodyScrollTop,
                        elementScrollTop,
                        elementScrollHeight,
                        elementClientHeight,
                    );
                })

               
            }



        }
    })
    return <div>
        script
    </div>
}