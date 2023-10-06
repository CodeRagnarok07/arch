import { useEffect, useRef, useState } from 'react';
import style from './styles.module.scss'

// export const Carrusel = ({ children }) => {
//     return (<div className='slider_grid'  >{children}</div>)
// }


/**
 * @description Crea la funcionalidad de un carrusel con display flex
 * @param {string} type hace algo
 * @returns {Array}<T> [ref="container", function="handle Next previus", ref="current", ref="dotcontainer"] = 
 */
const useCarrusel = () => {

    /** @description useRef Container of childs */
    const CarruselRef = useRef()

    /** @description useRef container that generate of list of divs that handle the number of carrusel*/
    const dotControlerRef = useRef()


    const [current, setCurrent] = useState(0)
    const Current = {
        state: current,
        setCurrent: setCurrent
    }

    /**
     * @description function handle current true=next false=previus
     * @param {Boolean | number} bol */
    function arrowControler(bol) {

        const slider = CarruselRef.current
        const childWidth = slider.children[0].offsetWidth
        const cols = Math.round(slider.offsetWidth / childWidth)
        const nextwidssthSliderrr = childWidth * cols


        setCurrent(current + 1)

        console.log(slider.offsetWidth, childWidth, "=", slider.offsetWidth / childWidth);
        console.log(slider.children.length, cols);
        if (bol == true) {
            if (current + 1 >= slider.children.length / cols) {
                console.log("dale palante", slider.offsetWidth);
                slider.scrollLeft = 0
                setCurrent(0)
            } else {
                slider.scrollLeft += nextwidssthSliderrr
            }
        } else {
            if (current < 1) {
                slider.scrollLeft = slider.children.length * nextwidssthSliderrr
                setCurrent(Math.round(slider.children.length / cols) - 1)
            } else {
                slider.scrollLeft -= nextwidssthSliderrr
                setCurrent(current - 1)


            }
        }

    }





    useEffect(() => {
        if (CarruselRef.current.children[0]) {
            const slider = CarruselRef.current
            const childWidth = slider.children[0].offsetWidth
            const cols = slider.offsetWidth / childWidth
            const n_childs = CarruselRef.current.children.length / cols

            // agrega estilo
            CarruselRef.current.className = style.slider_grid

            function indexControler(e, i) {
                slider.scrollLeft = childWidth * i * cols
                const oldActive = dotControlerRef.current.querySelector(".active")
                if (oldActive) {
                    oldActive.className = ""
                }
                // console.log(dotControlerRef.current.getElementsByClassName("active"));
                e.className = "active"
            }

            // si existe un children
            if (dotControlerRef.current) {
                for (let index = 0; index < n_childs; index++) {

                    let newChild

                    if (slider.children[index]?.src) {
                        newChild = document.createElement("img")
                        newChild.src = slider.children[index].src                
                    } else {
                        newChild = document.createElement("div")
                        newChild.onclick = (e) => indexControler(e.target, index);
                    }

                    newChild.onclick = (e) => indexControler(e.target, index);
                    dotControlerRef.current.appendChild(newChild)

                }
            }
        }

    }, [])






    // 
    // return [ContCarrusel, arrowControler, Current, dotControlerRef]



    return {
        "CarruselRef": CarruselRef,
        "arrowControler": arrowControler,
        "Current": Current,
        "dotControlerRef": dotControlerRef,
    }

}

export default useCarrusel




// example
// const example = <div className='container w-min flex flex-col' >
//     <div ref={CarruselRef} className='slider-grid'>
//         {Socials_Icons.map((v, k) => (
//             <img key={k} src={`/src/assets/svg/socials/${v}.svg`} alt="" />
//         ))}
//     </div>
//     <div className="flex gap-4">
//         <div onClick={()=>arrowControler(false)} className="bg-green-100 p-1 leading-[1] rounded-full text-black font-bold cursor-pointer">{"<"}</div> 
//         <div onClick={()=>arrowControler(true)} className="bg-green-100 p-1 leading-[1] rounded-full text-black font-bold cursor-pointer">{">"}</div>
//     </div>
//     <div className="dot " ref={dotControlerRef}>
//     </div>
// </div>
