


export default function CardImg({ sm, md, lg }) {

    return (
        <div className="grid place-items-center p-4">

            <div className="flex flex-col items-center p-2 rounded-xl border-2 bg-[#000000] border-[#00000060] shadow-md shadow-white">

                <img className="w-full h-[13rem] rounded-xl object-cover object-center" src={lg} alt="" />

                <div className="text-slate-600">.-.-.-.-.</div>
            </div>
        </div>
    )
}