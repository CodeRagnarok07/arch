import '/src/styles/main.scss'
import '/src/styles/tailwind.css'
import { tourner, lemonmilk } from '/src/assets/fonts'


export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <body className={`bg-[#030713] text-white ${tourner.variable} ${lemonmilk.variable} overflow-auto`}>
            {children}
      </body>

    </html>
  )
}
