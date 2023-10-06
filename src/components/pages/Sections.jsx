

const desc =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque dolorum neque numquam natus quam"

/**
 * 
 * @param {string} param0 
 * @param {string} param1 
 * @returns 
 */
export default function Section({title="titulo", description=desc, bg="bg1", children}){

    return <section className={"pb-20 pt-8 flex flex-col  gap-12 "  + bg}>
    <header className="header">
        <div className=" mx-auto flex flex-col items-center px-8">
            <h2 className='font-tourner tracking-[.34rem]  text-[2rem] '>
                {title}
            </h2>
            <svg width="100%" height="5" viewBox="0 0 501 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M250.376 0.833008L427.153 1.1259L500.376 1.83301L427.153 2.54011L250.376 2.83301L73.5995 2.54011L0.376221 1.83301L73.5995 1.1259L250.376 0.833008Z" fill="white" />
            </svg>

            <p className="mt-1">
               {description}
            </p>
        </div>

    </header>

    {children}

</section>
}