import '@/styles/tailwind.css'
import { headers } from 'next/headers';
import BtnInstallPwa from '@/components/Layout/BtnInstallPwa';

const headersList = headers();

// headersList.forEach((v,k)=>{
//   console.log(v,k);

// })


const referer = new URL("http://" + headersList.get("host"))




const myData = {
  app_name: "angelfelipearch",
  author: "Angel Felipe",
  app_short_name: "ARCH",
  description: "soe grothemarketign",
  keywords: ["developer", "webdesing", "web", "UX/UI", "growth haker"],
}


export const metadata = {
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  title: myData.app_short_name,
  metadataBase: referer,
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
    url: 'https://nextjs.org',
    siteName: myData.app_short_name,
    type: 'website',
    locale: 'es-ES',
  },
  twitter: {
    card: 'app',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: {
      url: '/icons/icon.png',
      alt: 'Next.js Logo',
    },
    app: {
      name: 'twitter_app',
      id: {
        iphone: 'twitter_app://iphone',
        ipad: 'twitter_app://ipad',
        googleplay: 'twitter_app://googleplay',
      },
      url: {
        iphone: 'https://iphone_url',
        ipad: 'https://ipad_url',
      },
    },
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
      '/assets/startup/apple-touch-startup-image-768x1004.png',
      {
        url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  appLinks: {
    ios: {
      url: 'https://nextjs.org/ios',
      app_store_id: 'app_store_id',
    },
    android: {
      package: 'com.example.android/package',
      app_name: 'app_name_android',
    },
    web: {
      url: 'https://nextjs.org/web',
      should_fallback: true,
    },
  },
}

import MovilScroll from '@/components/lib/MovilScroll'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* statics */}
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="mask-icon" href="/icons/icon.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/icons/icon.svg" />
      </head>


      <body className={"bg-black text-white "}>
        {/* {children} */}
        <MovilScroll />
      </body>

    </html>
  )
}
