import Link from 'next/link'
import logo from '../../../../public/images/CodeCreative.png'
import { FooterProps } from './Footer.types'
import Image from 'next/image'

function Footer({ rights }: FooterProps) {
    return (
        <section id="footer" className="overflow-hidden bg-[#191919]">
            {/* Copyright and Social Media Links */}
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-center border-t border-color-boulder">
                    <div className="md-gap-0 flex w-full items-center justify-between gap-10 py-12">
                        <div className="flex items-start">
                            <Link className="block max-w-max" href="/">
                                <Image width={172} height={73} src={logo} alt="logo" />
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="flex items-center md:justify-end">
                                <div className="items-center justify-center">
                                    <p className="text-white">© Code Creative. Todos os direitos reservados</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
