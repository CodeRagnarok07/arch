import frameImg from '/src/assets/img/hero/frame.png'
import mask from '/src/assets/img/hero/mask.png'
export default function Frame() {

    const img_webs = [
        "/src/assets/img/hero/web-1.png",
        "/src/assets/img/hero/web-2.png",
        "/src/assets/img/hero/web-3.png",
        "/src/assets/img/hero/web-4.png",
        "/src/assets/img/hero/web-5.png",
    ]

    return <div className='w-4/5 mx-auto grid place-items-center'>

      

        <div className='relative'>

            <img className='absolute inset-0 brightness-200 blur-[1px]' src={mask} alt="" />
            <img src={frameImg} alt="" />

            <div className="absolute inset-0 a-floating">
                {img_webs.map((v, k) => (
                    <img 
                    className='w-24 h-auto  absolute'
                     key={k} src={v} alt=""
                    
                    style={{
                        "top": (Math.random(k, 10)*50)+"%",
                        "right": (Math.random(k, 10)*100)+"%", 
                        animationDelay: k+"s"                       
                     }}
                    />
                ))}
            </div>
        </div>
    </div>
}