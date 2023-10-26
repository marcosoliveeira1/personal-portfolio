import { Inter, Caveat, Jost } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
})

export const subtitleBold = Caveat({
    weight: '700',
    subsets: ['latin'],
    display: 'swap'
});

export const title = Jost({
    weight: '700',
    subsets: ['latin'],
    display: 'swap'
})


export const description = Jost({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})