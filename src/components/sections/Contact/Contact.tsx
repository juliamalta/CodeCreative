'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { ContactProps } from '@/components/sections/Contact/Contact.types'
import { Button } from '@/components/ui/button'
import imgbg from '../../../../public/images/bg.png'
import { FaWhatsapp } from 'react-icons/fa'
function Contact({ title, text, buttontext }: ContactProps) {
    return (
        <section>
            <div className="h-80 overflow-hidden">
                <img src={imgbg.src} alt="img" className="size-full object-cover" />
            </div>
            <div className="flex flex-col bg-color-haiti py-6 sm:flex-row">
                <div className="mx-auto flex flex-col items-center justify-center gap-5 p-5 py-24 sm:p-8 lg:p-16">
                    <div className="flex flex-col items-center justify-center gap-3 lg:w-2/5">
                        <div>
                            <h1 className="text-2xl font-semibold text-white sm:text-left sm:text-2xl lg:text-center lg:text-4xl">
                                {title}
                            </h1>
                        </div>
                        <div className="items-center">
                            <p className="text-sm font-normal text-color-cblue sm:text-left sm:text-base lg:text-center lg:text-base">
                                {text}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4 sm:justify-normal">
                        <div className="hidden justify-end lg:flex">
                            <a
                                href="https://wa.me/5531996398460"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pointer-events-auto relative flex w-full items-center justify-center gap-3 rounded-full bg-color-studio px-5 py-3 text-sm font-semibold text-white transition hover:bg-color-studio sm:w-fit sm:text-base 2xl:text-base">
                                <FaWhatsapp className="text-xl sm:text-2xl" />
                                <span className="whitespace-nowrap">Entre em contato</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
