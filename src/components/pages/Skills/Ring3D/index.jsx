"use client"
import { useRef, useState } from 'react'
import styles from './styles.module.scss'
import ImagenLocal from '/src/utils/ImagenLocal'

const MyComponent = ({ data, setCurrent, current }) => {

    const sliderRef = useRef()

    const [CurrentDeg, setCurrentDeg] = useState(0)

    const grados = (1 / data.length) * 360
    const handleSlider = (bool) => {
        const children = sliderRef.current.children
        if (bool) {
            sliderRef.current.style.transform = `perspective(500px) rotateX(-20deg) rotateY(${CurrentDeg - grados}deg)`
            setCurrentDeg(CurrentDeg - grados)
        } else {
            sliderRef.current.style.transform = `perspective(500px) rotateX(-20deg) rotateY(${CurrentDeg + grados}deg)`
            setCurrentDeg(CurrentDeg + grados)

        }

        if (current === data.length - 1) {
            setCurrent(0)
            children[0].children[0].classList.toggle("active")

        } else {
            setCurrent(current + 1)

            if(current !== 0){
                children[current-1].children[0].classList.toggle("active")
            }
            children[current].children[0].classList.toggle("active")

        }
  

    }

    useState(() => {

        if (sliderRef.current) {
            setTimeout(() => {
                handleSlider(true)
            }, 500)
        }
        console.log(CurrentDeg);
    }, [sliderRef])


    return <div style={{ "--grados": grados + 'deg' }} className={styles.slider}>



        <div ref={sliderRef} className={styles.slider_cont} >
            {data.map((v, k) => (
                <i style={{ "--i": k + 1 }} key={k} >
                        <img className='w-full' src={v.icon} alt="" />                        
                </i>
            ))}

        </div>

        <div className={styles.controls}>
            <div onClick={() => handleSlider(false)}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.5938 31.9269C23.9757 32.3089 24.4535 32.4908 25.0271 32.4728C25.5993 32.4561 26.0764 32.2568 26.4583 31.8748C26.8403 31.4929 27.0313 31.0068 27.0313 30.4165C27.0313 29.8262 26.8403 29.3401 26.4583 28.9582L24.5833 27.0832H31.3021C31.8924 27.0832 32.3785 26.8832 32.7604 26.4832C33.1424 26.0846 33.3333 25.5901 33.3333 24.9998C33.3333 24.4096 33.134 23.9144 32.7354 23.5144C32.3354 23.1158 31.8403 22.9165 31.25 22.9165H24.5833L26.5104 20.9894C26.8924 20.6075 27.075 20.1297 27.0583 19.5561C27.0403 18.9839 26.8403 18.5068 26.4583 18.1248C26.0764 17.7429 25.5903 17.5519 25 17.5519C24.4097 17.5519 23.9236 17.7429 23.5417 18.1248L18.125 23.5415C17.7083 23.9582 17.5 24.4443 17.5 24.9998C17.5 25.5554 17.7083 26.0415 18.125 26.4582L23.5938 31.9269ZM25 45.8332C22.1181 45.8332 19.4097 45.2859 16.875 44.1915C14.3403 43.0984 12.1354 41.6144 10.2604 39.7394C8.38542 37.8644 6.90139 35.6596 5.80834 33.1248C4.71389 30.5901 4.16667 27.8818 4.16667 24.9998C4.16667 22.1179 4.71389 19.4096 5.80834 16.8748C6.90139 14.3401 8.38542 12.1353 10.2604 10.2603C12.1354 8.38525 14.3403 6.90053 16.875 5.80609C19.4097 4.71303 22.1181 4.1665 25 4.1665C27.8819 4.1665 30.5903 4.71303 33.125 5.80609C35.6597 6.90053 37.8646 8.38525 39.7396 10.2603C41.6146 12.1353 43.0986 14.3401 44.1917 16.8748C45.2861 19.4096 45.8333 22.1179 45.8333 24.9998C45.8333 27.8818 45.2861 30.5901 44.1917 33.1248C43.0986 35.6596 41.6146 37.8644 39.7396 39.7394C37.8646 41.6144 35.6597 43.0984 33.125 44.1915C30.5903 45.2859 27.8819 45.8332 25 45.8332ZM25 41.6665C29.6181 41.6665 33.5507 40.0436 36.7979 36.7978C40.0438 33.5505 41.6667 29.6179 41.6667 24.9998C41.6667 20.3818 40.0438 16.4491 36.7979 13.2019C33.5507 9.95609 29.6181 8.33317 25 8.33317C20.3819 8.33317 16.45 9.95609 13.2042 13.2019C9.95695 16.4491 8.33334 20.3818 8.33334 24.9998C8.33334 29.6179 9.95695 33.5505 13.2042 36.7978C16.45 40.0436 20.3819 41.6665 25 41.6665Z" fill="#D9D9D9" />
                </svg>
            </div>

            <div onClick={() => handleSlider(true)}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.4583 31.8748L31.875 26.4582C32.2917 26.0415 32.5 25.5554 32.5 24.9998C32.5 24.4443 32.2917 23.9582 31.875 23.5415L26.4063 18.0728C26.0243 17.6908 25.5472 17.5082 24.975 17.5248C24.4014 17.5429 23.9236 17.7429 23.5417 18.1248C23.1597 18.5068 22.9688 18.9929 22.9688 19.5832C22.9688 20.1734 23.1597 20.6596 23.5417 21.0415L25.4167 22.9165H18.6979C18.1076 22.9165 17.6215 23.1158 17.2396 23.5144C16.8576 23.9144 16.6667 24.4096 16.6667 24.9998C16.6667 25.5901 16.8667 26.0846 17.2667 26.4832C17.6653 26.8832 18.1597 27.0832 18.75 27.0832H25.4167L23.4896 29.0103C23.1076 29.3922 22.925 29.87 22.9417 30.4436C22.9597 31.0158 23.1597 31.4929 23.5417 31.8748C23.9236 32.2568 24.4097 32.4478 25 32.4478C25.5903 32.4478 26.0764 32.2568 26.4583 31.8748ZM25 45.8332C22.1181 45.8332 19.4097 45.2859 16.875 44.1915C14.3403 43.0984 12.1354 41.6144 10.2604 39.7394C8.38542 37.8644 6.90139 35.6596 5.80834 33.1248C4.71389 30.5901 4.16667 27.8818 4.16667 24.9998C4.16667 22.1179 4.71389 19.4096 5.80834 16.8748C6.90139 14.3401 8.38542 12.1353 10.2604 10.2603C12.1354 8.38525 14.3403 6.90053 16.875 5.80609C19.4097 4.71303 22.1181 4.1665 25 4.1665C27.8819 4.1665 30.5903 4.71303 33.125 5.80609C35.6597 6.90053 37.8646 8.38525 39.7396 10.2603C41.6146 12.1353 43.0986 14.3401 44.1917 16.8748C45.2861 19.4096 45.8333 22.1179 45.8333 24.9998C45.8333 27.8818 45.2861 30.5901 44.1917 33.1248C43.0986 35.6596 41.6146 37.8644 39.7396 39.7394C37.8646 41.6144 35.6597 43.0984 33.125 44.1915C30.5903 45.2859 27.8819 45.8332 25 45.8332ZM25 41.6665C29.6181 41.6665 33.5507 40.0436 36.7979 36.7978C40.0438 33.5505 41.6667 29.6179 41.6667 24.9998C41.6667 20.3818 40.0438 16.4491 36.7979 13.2019C33.5507 9.95609 29.6181 8.33317 25 8.33317C20.3819 8.33317 16.45 9.95609 13.2042 13.2019C9.95695 16.4491 8.33334 20.3818 8.33334 24.9998C8.33334 29.6179 9.95695 33.5505 13.2042 36.7978C16.45 40.0436 20.3819 41.6665 25 41.6665Z" fill="#D9D9D9" />
                </svg>

            </div>

        </div>
    </div>
}

export default MyComponent;