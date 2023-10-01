import bg1 from "@/assets/img/bg/bg1.png";


export default function Bg1(){
    return <img src={bg1.src} alt="" 
    className="fixed left-0 top-0 w-full h-full 
    md:object-contain 
    object-cover  
    object-center
    "
     />
}