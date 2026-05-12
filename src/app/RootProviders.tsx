'use client'

import { usePathname } from 'next/navigation'
import NavigationHeader from '@/components/sections/Navigations'
import { Footer } from '@/components/sections/Footer'
import { configs } from '@/configs'
import LogoImage from '../../public/images/logo.png'

export function RootProviders({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isVendas = pathname.startsWith('/vendas')

    return (
        <>
            {!isVendas && (
                <NavigationHeader
                    logo={LogoImage.src}
                    navs={configs.menu}
                    buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSf7UDEd4o_ll21lRKERe2rf83vGASGW0e1vJukTut4rD1OuPg/viewform"
                />
            )}

            {children}

            {!isVendas && <Footer rights="© 2026 Code Creative. Todos os direitos reservados." />}
        </>
    )
}
