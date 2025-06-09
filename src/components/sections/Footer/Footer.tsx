import Link from 'next/link'

import logo from '../../../../public/images/logoFooter.png'
import { FooterProps } from './Footer.types'

function Footer({ info, rights }: FooterProps) {
    return (
        <section id="footer" className="overflow-hidden" style={{ backgroundColor: '#131C11' }}>
            <div className="container mx-auto flex flex-col justify-between py-16 sm:flex-row lg:flex-row">
                {/* Logo and description section */}
                <div className="mb-10 w-full md:w-1/4 lg:w-auto">
                    <div className="flex items-start">
                        <Link className="block max-w-max" href="/">
                            <img className="w-full" src={logo.src} alt="" />
                        </Link>
                    </div>
                </div>

                {/* Footer navigation and contact info */}

                {/* Location Info */}
                <div className="flex flex-col gap-8 xl:flex-row">
                    {info.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4 px-2 lg:p-0">
                            <div className="flex items-start sm:items-center">
                                <p className="text-center text-xl text-white">{item.title}</p>
                            </div>
                            <div className="flex items-start">
                                {item.icon1}
                                <p className="ml-4 whitespace-nowrap text-sm text-white md:text-base">{item.text1}</p>
                            </div>
                            <div className="flex items-start">
                                {item.icon2}
                                <a href={item.link} className="ml-4 whitespace-nowrap text-sm text-white md:text-base">
                                    {item.text2}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Copyright and Social Media Links */}
            <div className="container mx-auto mt-16">
                <div className="flex flex-wrap items-center border-t border-gray-600 py-12">
                    <div className="mb-6 w-full md:mb-0 md:w-1/2">
                        <p className="text-sm text-white md:text-base">{rights}</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex justify-center gap-6 md:justify-end">
                            {/* Facebook Icon */}
                            <a
                                className="text-gray-400 hover:text-gray-400"
                                href="https://www.facebook.com/iemadalenabrandao">
                                <svg
                                    width="10"
                                    height="18"
                                    viewBox="0 0 10 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.63494 17.7273V9.76602H9.3583L9.76688 6.66246H6.63494V4.68128C6.63494 3.78301 6.88821 3.17085 8.20297 3.17085L9.87712 3.17017V0.394238C9.5876 0.357335 8.59378 0.272728 7.43708 0.272728C5.0217 0.272728 3.3681 1.71881 3.3681 4.37391V6.66246H0.636475V9.76602H3.3681V17.7273H6.63494Z"
                                        fill="currentColor"></path>
                                </svg>
                            </a>

                            {/* Instagram Icon */}
                            <a
                                className="text-gray-400 hover:text-gray-400"
                                href="https://www.instagram.com/iemadalenabrandao/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="size-5">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
