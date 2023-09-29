import styles from './styles.module.scss'



export default function MovilScroll() {
    return <div className={styles.navigator}>

        {/* <div ref={slider} class='snap-x overflow-scroll scroll-smooth h-full flex items-center justify-start'>
            {images.map((e, i) => (
                <div key={i} className='snap-start flex flex-shrink-0 w-auto mx-4'>
                </div>
            ))}
        </div> */}


        <main id='1'>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
        </main>

        <main id='2'>
            <section></section>
        </main>

        <main id='3'>
            <section></section>
            <section></section>
            <section></section>
        </main>


        <div className="fixed bottom-10 inset-x-10 gap-4  bg-indigo-500 text-white text-bold p-1 rounded-full flex justify-center">
            <a className='bg-indigo-800 rounded-xl px-2' href="#1"> 1 </a>
            <a className='bg-indigo-800 rounded-xl px-2' href="#2"> 2 </a>
            <a className='bg-indigo-800 rounded-xl px-2' href="#3"> 3 </a>
        </div>

    </div>
}
