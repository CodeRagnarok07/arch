import '../styles/tailwind.css'
import { headers } from 'next/headers';
import BtnInstallPwa from '/src/components/Layout/BtnInstallPwa';
import MovilScroll from '/src/components/Layout/MovilScroll'

// fonts
import { tourner, lemonmilk } from '/src/assets/fonts'

// Metadata
import { meta } from '/src/consts'
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
            {children}
      </body>

    </html>
  )
}
