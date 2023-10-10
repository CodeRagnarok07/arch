import Img from "./Img"

export default function Frame() {

    const img_webs = [
        "/assets/img/hero/web-1.png",
        "/assets/img/hero/web-2.png",
        "/assets/img/hero/web-3.png",
        "/assets/img/hero/web-4.png",
        "/assets/img/hero/web-5.png",
    ]

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