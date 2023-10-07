import '/src/styles/main.scss'
import '/src/styles/tailwind.css'
// import { headers } from 'next/headers';

// fonts
import { tourner, lemonmilk } from '/src/assets/fonts'

// Metadata
import { meta } from '/src/consts'
// const headersList = headers();
// meta.metadataBase = new URL("http://" + headersList.get("host"))

export const metadata = {
  title: 'arch',
  description: 'Portfolio desarrollador y diseñador web grothHaker',
}


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
