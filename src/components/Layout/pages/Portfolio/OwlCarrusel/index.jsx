"use client"
import { useEffect, useRef, useState } from 'react'
import Card from '../Card'
import styles from './styles.module.scss'

export default function OwlCarrusel() {

    const img_webs = [
        "/assets/img/hero/web-1.png",
        "/assets/img/hero/web-3.png",
        "/assets/img/hero/web-4.png",
        "/assets/img/hero/web-2.png",
        "/assets/img/hero/web-5.png",
    ]

    const refCarusel = useRef()
    const carrousel = refCarusel.current

    const [current, setCurrent] = useState(1)

    const handleClick = (e, k) => {
        for (let index = 0; index < carrousel.children.length; index++) {
            const element = carrousel.children[index];
            element.className = styles.item
        }

        setCurrent(k)

        if (refCarusel?.current?.children[0]) {
            carrousel.children[k - 1]?.classList.add(styles.left)
            carrousel.children[k]?.classList.add(styles.main)
            carrousel.children[k + 1]?.classList.add(styles.right)
            if (k - 1 < 0) {
                carrousel.children[carrousel.children.length - 1]?.classList.add(styles.left)
            }
            if (k == carrousel.children.length - 1) {
                carrousel.children[0]?.classList.add(styles.right)
            }
        }
    }
    useEffect(() => {
        if (refCarusel?.current?.children[0]) {
            const carrousel = refCarusel.current
            carrousel.children[current - 1]?.classList.add(styles.right)
            carrousel.children[current]?.classList.add(styles.main)
            carrousel.children[current + 1]?.classList.add(styles.left)
        }

    }, [])


    const hanldeNext = (bool, actual) => {

        carrousel.children[current]
        for (let index = 0; index < carrousel.children.length; index++) {
            const element = carrousel.children[index];
            element.className = styles.item
        }


        if (refCarusel?.current?.children[0]) {

            if (bool) {

                carrousel.children[actual + 1]?.classList.add(styles.right)
                carrousel.children[actual]?.classList.add(styles.main)
                carrousel.children[actual - 1]?.classList.add(styles.left)

                if (actual >= carrousel.children.length - 1) {
                    carrousel.children[0]?.classList.add(styles.right)
                    setCurrent(-1)
                }

                if (actual <= 0) {
                    carrousel.children[carrousel.children.length - 1]?.classList.add(styles.left)

                }

            } else {
                carrousel.children[actual + 1]?.classList.add(styles.right)
                carrousel.children[actual]?.classList.add(styles.main)
                carrousel.children[actual - 1]?.classList.add(styles.left)

                if (actual <= 0) {
                    carrousel.children[actual]?.classList.add(styles.main)
                    carrousel.children[carrousel.children.length - 1]?.classList.add(styles.left)
                    setCurrent(carrousel.children.length)

                }

                console.log(actual, carrousel.children.length - 1);


                if (actual == carrousel.children.length - 1) {
                    console.log("ultimo");
                    carrousel.children[carrousel.children.length - 2]?.classList.add(styles.left)
                    carrousel.children[carrousel.children.length - 1]?.classList.add(styles.main)
                    carrousel.children[0]?.classList.add(styles.right)
                }
            }

        }

    }

    const [touchStart, setTouchStart] = useState()
    const hanldeTouchstart = (e) => {
        setTouchStart(e.changedTouches[0].clientX)
    }

    const hanldeTouchEnd = (e) => {
        // next
        if (touchStart - 50 > e.changedTouches[0].clientX) {
            let actual = current + 1
            if (actual >= carrousel.children.length - 1) {
                setCurrent(0)
            }
            setCurrent(actual)
            hanldeNext(true, actual)
            // previus
        } else if (touchStart + 50 < e.changedTouches[0].clientX) {
            let actual = current - 1
            setCurrent(actual)
            hanldeNext(false, actual)
        }
    }





    return <div>

        <ul
            onTouchStart={(e) => hanldeTouchstart(e)}
            onTouchEnd={(e) => hanldeTouchEnd(e)}

            ref={refCarusel} className={styles.carrousel} >
            {img_webs.map((v, k) => (
                <li onClick={(e) => handleClick(e, k)} className={styles.item} key={k}>
                    <Card lg={v} />
                </li>
            ))}
        </ul>

        <div className="box-shadow-special w-min px-8 mx-auto z-10 relative">
            <div className="selector">
                <div />
                <div className="active" />
                <div />
                <div />
            </div>
        </div>

    </div>
}