import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'

import { ContactProps } from '@/components/sections/Contact/Contact.types'

import logo from '../../../../public/images/logoFooter.png'

function Contact({ text1, text2, email, icon1, icon2, textEmail, wpp, textWpp }: ContactProps) {
    return (
        <section className="container mx-auto my-24">
            <div className="flex flex-col rounded-3xl bg-color-haiti sm:flex-row">
                <div className="mx-auto flex flex-col items-center justify-center gap-5 p-5 py-24 sm:p-8 lg:p-16">
                    <div>
                        <h1 className="text-center text-xl font-semibold text-white sm:text-left sm:text-2xl lg:text-4xl">
                            Ready to Start Your Next Project?
                        </h1>
                    </div>
                    <div>
                        <p className="text-center text-sm font-normal text-color-athensGray sm:text-left sm:text-base lg:text-xl">
                            Let´s collaborate to bring your vision to life with cutting-edge technology and execeptional
                            design
                        </p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-4 sm:justify-normal">
                        <div>
                            <p className="text-white">button text</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
