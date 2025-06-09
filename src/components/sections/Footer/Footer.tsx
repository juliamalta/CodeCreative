import Link from 'next/link'

import logo from '../../../../public/images/logoFooter.png'
import { FooterProps } from './Footer.types'

function Footer({ info, rights }: FooterProps) {
    return (
        <section id="footer" className="overflow-hidden bg-color-resolver">
            <div className="md-gap-0 container flex w-full flex-col justify-between gap-10 py-24 md:flex-row">
                <div className="flex items-start">
                    <Link className="block max-w-max" href="/">
                        <img className="w-full" src={logo.src} alt="" />
                    </Link>
                </div>
                <div>
                    <p className="text-color-french text-sm font-normal text-white">
                        Transformamos ideias em soluções digitais<br></br> inovadoras. Desenvolvimento web, mobile
                        <br></br> e design digital de alta qualidade.
                    </p>
                </div>

                <div className="flex gap-6 md:justify-end">
                    <a
                        className="flex h-11 items-center justify-center rounded-xl bg-color-magnolia p-4 text-gray-400 hover:text-gray-400"
                        href="https://www.instagram.com/iemadalenabrandao/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#833ECC" viewBox="0 0 24 24" className="size-5">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                    <a
                        className="flex h-11 items-center justify-center rounded-xl bg-color-magnolia p-4 text-gray-400 hover:text-gray-400"
                        href="https://github.com/iemadalenabrandao">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#833ECC" viewBox="0 0 24 24" className="size-5">
                            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.304 3.438 9.804 8.207 11.397.6.111.82-.263.82-.586 0-.293-.01-1.066-.015-2.09-3.338.726-4.04-1.604-4.04-1.604-.547-1.394-1.334-1.768-1.334-1.768-1.09-.744.082-.73.082-.73 1.204.085 1.832 1.24 1.832 1.24 1.07 1.836 2.807 1.303 3.493.998.107-.776.418-1.303.76-1.602-2.667-.302-5.467-1.335-5.467-5.92 0-1.31.467-2.385 1.234-3.226-.124-.303-.535-1.523.117-3.168 0 0 1.008-.323 3.295 1.237.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.287-1.56 3.295-1.237 3.295-1.237.652 1.645.242 2.865.118 3.168.768.84 1.234 1.916 1.234 3.226 0 4.602-2.805 5.618-5.482 5.916.429.37.812 1.096.812 2.221 0 1.604-.014 2.895-.014 3.289 0 .325.22.699.82.586C20.563 21.804 24 17.304 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Copyright and Social Media Links */}
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-between border-t border-color-studio py-12">
                    <div className="mb-6">
                        <p className="text-color-blue text-sm text-white md:text-base">{rights}</p>
                    </div>
                    <div className="mb-6 flex gap-10">
                        <p className="text-color-french text-sm text-white md:text-base">Termos de Uso </p>
                        <p className="text-color-french text-sm text-white md:text-base">Política de Privacidade</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
