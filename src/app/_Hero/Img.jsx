
export default function Img({src, k}){
    return <img src={src} alt="" style={{
        "top": (Math.random(k, 10)*50)+"%",
        "left": (Math.random(k, 10)*50)+"%",
        "right": (Math.random(k, 10)*100)+"%", 
        animationDelay: k+"s"                       
     }}  className='w-24 h-auto  absolute'/>
}