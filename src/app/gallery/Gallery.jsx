"use client"

export default function Gallery() {
    const hanldeHover = (e) => {
        e.currentTarget.play()
    }
    const hanldeHoverOut = (e) => {
        e.currentTarget.pause()
    }

    return <div className=" gallery">

        <iframe preload src="https://assets.pinterest.com/ext/embed.html?id=476889048055373031" height="359" width="345" frameborder="0" scrolling="no" ></iframe>

        {/* <img className="w-full h-full" src={`/assets/video/5.webp`} alt="" />
        <video
        controls
         onMouseOver={(e) => hanldeHover(e)} onMouseLeave={(e) => hanldeHoverOut(e)}
        className="w-full h-full" src={`/assets/video/5.webm`} alt="" /> */}


        {/* {[...Array(4).keys()].map((v, k) => (
            <a key={k} href={"#gallery_video_" + v} id={"gallery_video_" + v}>

                <video muted onMouseOver={(e) => hanldeHover(e)} onMouseLeave={(e) => hanldeHoverOut(e)} preload={true} src={`/assets/video/0${v + 1}.mp4`} />
            </a>
        ))} */}




    </div>
}