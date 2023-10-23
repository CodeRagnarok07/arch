// const bord  = require('/src/assets/svg/nav/Interface.svg')
import { pages } from '/src/consts'
import ImagenLocal from '/src/utils/ImagenLocal'


export default function NavbarMovil() {

   

    return <div className="fixed inset-x-0  bottom-0 flex justify-center  ">
        <nav className="w-full max-w-[440px]
        min-h-min
        ">


            <img src={'/assets/svg/nav/Interface.svg'}   
            alt="" className='absolute w-full translate-y-[-20%] scale-[105%] max-w-[440px] z-[-1]' />

         

          

            <div className="flex items-center justify-around py-6 ">
                {pages.map((v, k) => (
                    <a key={k} href={"#"+v} className='min-w-[48px]  p-1 cursor-pointer hover:bg-[#0091f94f] text-[0.65rem] border-b-2 rounded-lg  flex flex-col items-center'>
                        <img 
                        className='h-6 w-6 ' 
                        src={`/assets/svg/nav/${v}.svg`}
                        alt={"#"+v} />
                        {v}
                    </a> 
                ))}
            </div>
        </nav>
    </div>
}