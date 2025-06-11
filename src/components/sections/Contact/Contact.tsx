import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'

import { ContactProps } from '@/components/sections/Contact/Contact.types'

import logo from '../../../../public/images/logoFooter.png'

function Contact({ text1, text2, email, icon1, icon2, textEmail, wpp, textWpp }: ContactProps) {
    return (
        <section id="footer" className="overflow-hidden bg-color-magnolia">
            <div className="md-gap-0 container flex w-full flex-col justify-between gap-10 py-24 md:flex-row">
                <div className="flex flex-col items-start gap-4 md:w-1/4">
                    <p className="text-2xl font-semibold">{text1}</p>
                    <p className="text-color-storm">{text2}</p>
                </div>
                <div className="flex gap-3">
                    <div className="flex size-16 items-center justify-center rounded-lg bg-color-blue">{icon1}</div>
                    <div>
                        <p className="font-bold">{email}</p>
                        <p className="text-base text-color-storm">{textEmail}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="flex size-16 items-center justify-center rounded-lg bg-color-blue">{icon2}</div>
                    <div>
                        <p className="font-bold">{wpp}</p>
                        <p className="text-base text-color-storm">{textWpp}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
