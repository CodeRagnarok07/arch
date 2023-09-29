import {seoData} from '@/utils/consts'


export default function SeoConfig () {


    const fonts = [{ type: "woff", href: "/fonts/atkinson-regular.woff" }]


    console.log(seoData);


    return (<>
        <meta name="application-name" content="PWA App" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Best PWA App in the world" />

        {/* preload */}
        {fonts.map((v, k) => (<link key={k} rel="preload" href={v.href} as="font" type={v.type} crossorigin />))}

        {/* config */}
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* statics */}
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="manifest" href="/manifest.json" />

        {/* theme */}
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="theme-color" content="#000000" />

        {/* icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {seoData.twitter.map((v,k)=>( <meta key={k} name={`twitter:${v.name}`} content={v.content} />))}
        {seoData.og.map((v,k)=>( <meta key={k} name={`og:${v.name}`} content={v.content} />))}
        {seoData?.apple_touch_startup_image.map((v,k)=>( <link key={k} rel='apple-touch-startup-image' href={`/images/apple_splash_${v.path}.png`} sizes={v.size} />))}

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />



    </>)
}