import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
export const tourner = localFont(
    {
        src: './tourner/Tourner.woff2',
        variable: '--font-tourner',
    }
)


export const lemonmilk = localFont(
    {
        src: [
            {
                path: './lemon_milk/LEMONMILK-Bold.woff2',
                weight: '700',
                style: 'normal',
            },
            {
                path: './lemon_milk/LEMONMILK-Medium.woff2',
                weight: '400',
                style: 'normal',
            },
            {
                path: './lemon_milk/LEMONMILK-Regular.woff2',
                weight: '500',
                style: 'normal',
            },
            {
                path: './lemon_milk/LEMONMILK-Light.woff2',
                weight: '300',
                style: 'normal',
            },

            {
                path: './lemon_milk/LEMONMILK-BoldItalic.woff2',
                weight: '700',
                style: 'italic',
            },
            {
                path: './lemon_milk/LEMONMILK-MediumItalic.woff2',
                weight: '500',
                style: 'italic',
            },
            {
                path: './lemon_milk/LEMONMILK-RegularItalic.woff2',
                weight: '400',
                style: 'italic',
            },
            {
                path: './lemon_milk/LEMONMILK-LightItalic.woff2',
                weight: '300',
                style: 'italic',
            },        
        ],
        variable: '--font-lemonmilk',
    }
)