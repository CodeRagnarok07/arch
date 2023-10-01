"use client"

export default function Hero({ bg }) {


    return <section style={{ backgroundImage: `url("${bg.src}")` }}>
        <header>

            <h1 className='font-tourner text-7xl'>hero</h1>
        </header>

    </section>
}