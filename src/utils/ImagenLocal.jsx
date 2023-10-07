

// soluciona los problemas de compatilidad e importacion de imagenes
export default function Imagen({ src, className, alt }) {

    console.log("hola mundo estoy en cliente");

    if (import.meta.env) {
        // import.meta.env.VITE_DEV
    } else {
        // process.env.NEXT_PUBLIC_DEV
        // const newPath = require(src)
        // console.log(require(src));
    }
 

    return (
        <img className={className} 
        src={import.meta.env 
            ? 
            src 
            : 
            src
            
            // require(src).default.src
        } 
        
        alt={alt} />
    )
}