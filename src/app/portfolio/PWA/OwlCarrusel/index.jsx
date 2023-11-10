"use client"
import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
// import Image from '/src/components/Globals/Sectionsage';

export default function OwlCarrusel({ data }) {
    const refCarrusel = useRef()
    const carrousel = refCarrusel.current
    useEffect(() => {
        if (refCarrusel?.current?.children[0]) {
            const carrousel = refCarrusel.current
            carrousel.children[0]?.classList.add(styles.right)
            carrousel.children[1]?.classList.add(styles.main)
            carrousel.children[2]?.classList.add(styles.left)
        }

    }, [])



    const [current, setCurrent] = useState(1)

    const handleClick = (e, k) => {
        const parent = e.currentTarget.parentNode
        if (parent.children[0]) {

            for (let index = 0; index < parent.children.length; index++) {
                const element = parent.children[index];
                element.className = styles.item
            }

            setCurrent(k)

            if (refCarrusel?.current?.children[0]) {
                parent.children[k - 1]?.classList.add(styles.left)
                parent.children[k]?.classList.add(styles.main)
                parent.children[k + 1]?.classList.add(styles.right)

                if (k - 1 < 0) {
                    parent.children[parent.children.length - 1]?.classList.add(styles.left)
                }
                if (k == parent.children.length - 1) {
                    parent.children[0]?.classList.add(styles.right)
                }

            }
        }
    }




    const hanldeNext = (bool, actual) => {

        carrousel.children[current]
        for (let index = 0; index < carrousel.children.length; index++) {
            const element = carrousel.children[index];
            element.className = styles.item
        }


        if (refCarrusel?.current?.children[0]) {

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
            // onTouchStart={(e) => hanldeTouchstart(e)}
            // onTouchEnd={(e) => hanldeTouchEnd(e)}

            ref={refCarrusel} className={styles.carrousel} >
            {data.map((v, k) => (
                <li onClick={(e) => handleClick(e, k)} className={styles.item} key={k} >

                    <div className="h-full flex flex-col items-center p-2 rounded-xl border-2 bg-[#000000] border-[#00000060] shadow-md shadow-white">

                        <img preload height={"85"} width={"100"} className="h-[85%] w-full  rounded-xl object-cover object-top " 
                        
                        // src={v.img_lg[0].file.url} 
                        src={`/assets/img/portfolio/${v.img}`} 
                        alt="" />
                        
                        <div className="text-slate-600 flex flex-col  items-center h-min" >
                            <span>.-.-.-.-.</span>
                            <a className='border-primary btn text-center rounded-lg flex justify-center' target='_blank' href={v.Live}>Ver</a>
                        </div>
                    </div>
                </li>
            ))}
        </ul>

        <div className="box-shadow-special w-min px-8 mx-auto z-10 relative">
            <div className="selector">
                {data.map((v, k) => (
                    <div key={k} className={k == current && "active"} />
                ))}


            </div>
        </div>

    </div>
}