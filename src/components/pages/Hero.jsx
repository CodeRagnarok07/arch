"use client"

export default function Hero({ children }) {


    return <section className="relative" >

        <header className="text-center mt-16">
            <div className="w-min mx-auto">
                <h1 className='font-tourner tracking-[.34rem] text-7xl'>
                    <span>Angel</span> <br />
                    <span >Felipe</span>
                </h1>
                <svg width="100%" height="5" viewBox="0 0 501 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M250.376 0.833008L427.153 1.1259L500.376 1.83301L427.153 2.54011L250.376 2.83301L73.5995 2.54011L0.376221 1.83301L73.5995 1.1259L250.376 0.833008Z" fill="white" />
                </svg>

                <div>
                    <span>Diseño Y Desarrollo Web</span> <br />
                    <span>Growth Haker</span>
                </div>
            </div>
        </header>






        {children}

    </section>
}