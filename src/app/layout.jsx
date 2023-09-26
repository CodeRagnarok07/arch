import '@/styles/tailwind.css'
import { headers } from 'next/headers';

const headersList = headers();

const referer = new URL(headersList.get("referer"))

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
const algo = <>
  <meta name="msapplication-config" content="/browserconfig.xml" />
  <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
  <link rel="shortcut icon" href="/favicon.ico" />
</>


const data = {

  app_name: "angelfelipearch",
  author: "Angel Felipe",
  app_short_name: "ARCH",
  description: "soe grothemarketign",
  keywords: ["developer", "webdesing", "web", "UX/UI", "growth haker"],
}


export const metadata = {
  title: data.app_short_name,
  metadataBase: referer,
  other: {
    "apple-mobile-web-app-status-bar-style" : "default",
    "apple-mobile-web-app-capable" : "yes",
    "format-detection" : "telephone=no",
    "mobile-web-app-capable" : "yes",
    "msapplication-tap-highlight" : "no",
    "msapplication-TileColor" : "#2B5797",
  },
  description: data.description,
  generator: 'Next.js',
  applicationName: data.app_short_name,
  referrer: 'origin-when-cross-origin',
  keywords: data.keywords,
  category: 'technology',

  creator: data.author,
  publisher: data.author,

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
    title: data.app_short_name,
    description: data.description,
    url: 'https://nextjs.org',
    siteName: data.app_short_name,
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


const sizes = [
  128, 
  // 10, 16, 24, 32, 48, 57, 58, 60, 62, 64, 70, 72, 76, 80, 96, 99, 114, 120, 144,  128, 150, 152, 173, 180, 192, 200, 256, 310, 384, 512, 1024, 1800,
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
            {/* statics */}
          <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={"bg-black text-white "}>{children}</body>
    </html>
  )
}
