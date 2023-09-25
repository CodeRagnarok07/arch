

export default function () {


    const fonts = [{ type: "woff", href: "/fonts/atkinson-regular.woff" }]




    return (<>
        {fonts.map((v, k) => ( <link rel="preload" href={v.href} as="font" type={v.type} crossorigin /> ))}
        
        {fonts.map((v, k) => ( <link rel="preload" href={v.href} as="font" type={v.type} crossorigin /> ))}

    </>)
}