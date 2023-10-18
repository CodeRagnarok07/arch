

/**
 * @param {string} param0 
 * @param {string} param1 
 * @returns 
 */
export default function Section({ title = "titulo", description, bg = "bg1", children }) {


    return <section className={" flex flex-col mb-[120px] " + bg}>

        <header className="header sm:container ">
            <h2 className='font-tourner'>
                {title}
            </h2>
            <svg width="100%" height="5" viewBox="0 0 501 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M250.376 0.833008L427.153 1.1259L500.376 1.83301L427.153 2.54011L250.376 2.83301L73.5995 2.54011L0.376221 1.83301L73.5995 1.1259L250.376 0.833008Z" fill="white" />
            </svg>
            {description && <p className="mt-1 small">{description} </p>}

        </header>
        <div className="my-auto">

            {children}
        </div>

    </section>
}