import Section from "./Sections";


export default function Socials() {

    const Socials_Icons = [
        { 
            name: "discord", 
            link:"#", 
            icon:""
        },
        { 
            name: "facebook", 
            link:"#", 
            icon:""
        },
        { 
            name: "ig", 
            link:"#", 
            icon:""
        },
        { 
            name: "tiktok", 
            link:"#", 
            icon:""
        },
        { 
            name: "twicht", 
            link:"#", 
            icon:""
        },
        { 
            name: "twitter", 
            link:"#", 
            icon:""
        },
        { 
            name: "youtube", 
            link:"#", 
            icon:""
        },
    ]

    return <Section title="Redes Sociales" description="Puedes contactarme o seguirme en mis redes sociales">


        <div className="grid place-items-center  ">
            <div className="flex gap-3 flex-wrap justify-center w-4/5">

                {Socials_Icons.map((v,k)=>(
                    <div key={k}>
                        <img src={`/src/assets/svg/socials/${v.name}.svg`} alt="" />
                    </div>
                ))}
            </div>

        </div>
    </Section>
}