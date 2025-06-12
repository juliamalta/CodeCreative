import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { CiPhone } from 'react-icons/ci'
import { CiMail } from 'react-icons/ci'

import { Footer } from '@/components/sections/Footer'
import NavigationHeader from '@/components/sections/Navigations'
import { configs } from '@/configs'
import { cn } from '@/lib/utils'

import LogoImage from '../../public/images/logofooter.png'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const metadata: Metadata = configs.metadata

type RootLayoutProps = React.PropsWithChildren

const infoData = [
    {
        title: 'Fale Conosco',
        text1: '(00) 1234-5678 ou (00) 8765-4321',
        icon1: <CiPhone size={25} color="white" />,
        icon2: <CiMail size={25} color="white" />,
        text2: 'contato@exemplo.com',
    },
]

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className={cn('min-h-screen antialiased', spaceGrotesk.variable, inter.variable)}>
            <body className={inter.variable}>
                <NavigationHeader
                    logo={LogoImage.src}
                    navs={configs.menu}
                    buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSf7UDEd4o_ll21lRKERe2rf83vGASGW0e1vJukTut4rD1OuPg/viewform"
                />
                {children}
                <Footer info={infoData} rights="© 2025 Code Creative. Todos os direitos reservados." />
            </body>
        </html>
    )
}
