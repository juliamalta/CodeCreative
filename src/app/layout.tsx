import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Space_Grotesk, Inter, Manrope } from 'next/font/google'
import './globals.css'
import { CiPhone } from 'react-icons/ci'
import { CiMail } from 'react-icons/ci'
import { Toaster } from 'sonner'
import { GoogleAnalyticsClient } from '@/components/GoogleAnalyticsClient'
import { configs } from '@/configs'
import { cn } from '@/lib/utils'
import Pixel from '@/components/pixel'
import { GTM } from '@/components/gtm'
import { Contentsquare } from '@/components/contentSquare'
import { RootProviders } from '@/app/RootProviders'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})
const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
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
        <html lang="en" className="scroll-smooth">
            <body className={cn('min-h-screen bg-background antialiased', manrope.className)}>
                <Contentsquare />
                <Pixel />
                <GoogleAnalyticsClient gaMeasurementId="G-322MDB8015" />
                <GTM gtmId="G-322MDB8015" />
                <RootProviders>{children}</RootProviders>
                <Toaster richColors position="top-right" />
            </body>
        </html>
    )
}
