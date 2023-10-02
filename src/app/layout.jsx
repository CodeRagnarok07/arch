import '../styles/tailwind.css'
import { headers } from 'next/headers';
import BtnInstallPwa from '@/components/Layout/BtnInstallPwa';
import MovilScroll from '@/components/Layout/MovilScroll'

// fonts
import { tourner, lemonmilk } from '@/assets/fonts'

// Metadata
import { meta } from '@/consts'
const headersList = headers();
meta.metadataBase = new URL("http://" + headersList.get("host"))
export const metadata = meta


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        {/* statics */}
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="mask-icon" href="/icons/icon.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/icons/icon.svg" />
      </head>


      <body className={`bg-[#030713] text-white ${tourner.variable} ${lemonmilk.variable}`}>
        <MovilScroll >
            {children}
        </MovilScroll>
      </body>

    </html>
  )
}
