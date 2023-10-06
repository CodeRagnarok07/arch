


const myData = {
    app_name: "angelfelipearch",
    author: "Angel Felipe",
    app_short_name: "ARCH",
    description: "soe grothemarketign",
    keywords: ["developer", "webdesing", "web", "UX/UI", "growth haker"],
}


export const meta = {
    // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
    title: myData.app_short_name,
    metadataBase: "referer",
    other: {
        "apple-mobile-web-app-status-bar-style": "default",
        "apple-mobile-web-app-capable": "yes",
        "format-detection": "telephone=no",
        "mobile-web-app-capable": "yes",
        "msapplication-tap-highlight": "no",
        "msapplication-TileColor": "#2B5797",
    },
    description: myData.description,
    generator: 'Next.js',
    applicationName: myData.app_short_name,
    referrer: 'origin-when-cross-origin',
    keywords: myData.keywords,
    category: 'technology',

    creator: myData.author,
    publisher: myData.author,

    colorScheme: 'dark',
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'cyan' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],

    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    itunes: {
        appId: 'myAppStoreID',
        appArgument: 'myAppArgument',
    },

    // alternates: {
    //   canonical: 'https://nextjs.org',
    //   languages: {
    //     'en-US': 'https://nextjs.org/en-US',
    //     'de-DE': 'https://nextjs.org/de-DE',
    //   },
    //   media: {
    //     'only screen and (max-width: 600px)': 'https://nextjs.org/mobile',
    //   },
    //   types: {
    //     'application/rss+xml': 'https://nextjs.org/rss',
    //   },
    // },
    openGraph: {
        title: myData.app_short_name,
        description: myData.description,
        // url: 'https://nextjs.org',
        siteName: myData.app_short_name,
        type: 'website',
        locale: 'es-ES',
    },
    twitter: {
        card: myData.app_short_name,
        title: myData.app_short_name,
        description: myData.description,
        // url: 'https://nextjs.org',

        siteId: '1467726470533754880',
        creator: 'Angel Riera',
        creatorId: '1467726470533754880',
  
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },

    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    verification: {
        google: 'google',
        yandex: 'yandex',
        yahoo: 'yahoo',
        other: {
            me: ['my-email', 'my-link'],
        },
    },

    appleWebApp: {
        title: 'Apple Web App',
        statusBarStyle: 'black-translucent',
        startupImage: [
            'icons/public/icons/icon-768x1004.png', // image-768x1004.png', //
            {
                url: 'icons/public/icons/icon-1536x2008.png', // image-1536x2008.png
                media: '(device-width: 768px) and (device-height: 1024px)',
            },
        ],
    },
    // appLinks: {
    //     ios: {
    //         url: 'https://nextjs.org/ios',
    //         app_store_id: 'app_store_id',
    //     },
    //     android: {
    //         package: 'com.example.android/package',
    //         app_name: 'app_name_android',
    //     },
    //     web: {
    //         url: 'https://nextjs.org/web',
    //         should_fallback: true,
    //     },
    // },
}

// define scroll y or pages
export const pages =[ "home", "about", "services", "portfolio", "contact" ]

export const socials = [
    {
        name: "discord",
        link: "#",
        icon: "/src/assets/svg/socials/discord.svg"
    },
    {
        name: "facebook",
        link: "#",
        icon: "/src/assets/svg/socials/facebook.svg"
    },
    {
        name: "ig",
        link: "#",
        icon: "/src/assets/svg/socials/ig.svg"
    },
    {
        name: "tiktok",
        link: "#",
        icon: "/src/assets/svg/socials/tiktok.svg"
    },
    {
        name: "twicht",
        link: "#",
        icon: "/src/assets/svg/socials/twicht.svg"
    },
    {
        name: "twitter",
        link: "#",
        icon: "/src/assets/svg/socials/twitter.svg"
    },
    {
        name: "youtube",
        link: "#",
        icon: "/src/assets/svg/socials/youtube.svg"
    },
]