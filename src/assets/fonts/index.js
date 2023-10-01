import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
export const tourner = localFont(
    {
        src: './tourner/Tourner.ttf',
        variable: '--font-tourner',
    }
)