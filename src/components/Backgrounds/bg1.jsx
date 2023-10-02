import bg1 from "@/assets/img/bg/bg1.png";


export default function Bg1(){
    console.log(bg1);
    return <img src={bg1} alt="" 
    className="fixed left-0 top-0 w-full h-full 
    md:object-contain 
    object-cover  
    object-center
    "
     />
}