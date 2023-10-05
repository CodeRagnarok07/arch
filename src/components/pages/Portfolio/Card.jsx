


export default function CardImg({ sm, md, lg }) {

    return (<div className="">

        <div className="m-4 flex flex-col items-center p-1 rounded-xl border-2 bg-[#000000] border-[#00000060] shadow-md shadow-white">

            <img className="rounded-xl object-contain object-center" src={lg} alt="" />

            <div className="text-slate-600">.-.-.-.-.</div>
        </div>
    </div>)
}