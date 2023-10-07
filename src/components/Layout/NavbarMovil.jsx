// const bord  = require('/src/assets/svg/nav/Interface.svg')
import { pages } from '/src/consts'
import ImagenLocal from '/src/utils/ImagenLocal'


export default function NavbarMovil() {

   

    return <div className="fixed inset-x-0 bottom-0 flex justify-center  ">
        <nav className="w-full 
        min-h-min
        ">


            <img src={'/assets/svg/nav/Interface.svg'} 


            alt="" className='absolute w-full translate-y-[-20%] scale-[105%]' />

         

          

            <div className="flex items-center justify-around py-6">
                {pages.map((v, k) => (
                    <div key={k} className='text-[0.65rem] border-b-2 rounded-sm flex flex-col items-center'>
                        <img 
                        className='h-6 w-6' 
                        src={`/assets/svg/nav/${v}.svg`}
                        alt="" />
                        {v}
                    </div>
                ))}
            </div>
        </nav>
    </div>
}