import Img from "./Img"
import {img_webs} from '/src/consts'
export default function Frame() {

  
    return <div className='w-4/5 mx-auto grid place-items-center'>

    
        <div className='relative max-w-sm'>

            <img className='absolute inset-0 brightness-200 blur-[1px]' src={"assets/img/hero/mask.png"} alt="" />
            <img src={"/assets/img/hero/frame.png"} alt="" />

            <div className="absolute inset-0 a-floating">
                {img_webs.map((v, k) => (
                    <Img key={k} src={v} alt="" k={k}
                    />
                ))}
            </div>
        </div>
    </div>
}