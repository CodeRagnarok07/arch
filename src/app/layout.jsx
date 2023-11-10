import '/src/styles/main.scss'
import '/src/styles/tailwind.css'

// fonts
import { tourner, lemonmilk } from '/src/assets/fonts'
import {meta} from './meta'
// Metadata

// export const metadata = {
//   title: 'arch',
//   description: 'Portfolio desarrollador y diseñador web grothHaker',
// }



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


      <body className={`bg-[#030713] text-white ${tourner.variable} ${lemonmilk.variable} antialiased`}>
            {children}
      </body>

    </html>
  )
}
