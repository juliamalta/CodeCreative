import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'

import logo from '../../../../public/images/logoFooter.png'

function Contact() {
    return (
        <section id="footer" className="overflow-hidden bg-color-magnolia">
            <div className="md-gap-0 container flex w-full flex-col justify-between gap-10 py-24 md:flex-row">
                <div className="flex w-1/4 flex-col items-start gap-4">
                    <p className="text-2xl font-semibold">Vamos Conversar?</p>
                    <p className="text-color-storm">
                        Pronto para transformar sua ideia em realidade? Entre em contato conosco e vamos discutir seu
                        projeto.
                    </p>
                </div>
                <div className="flex">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-color-magnolia">
                        <AiOutlineMail size={30} color="#833ECC" />
                    </div>
                    <div>
                        <p className="font-bold">Email</p>
                        <p className="text-base text-color-storm">contato@devcraft.com.br</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-color-magnolia">
                        <FaWhatsapp size={30} color="#833ECC" />
                    </div>
                    <div>
                        <p className="font-bold">Whatsapp</p>
                        <p className="text-base text-color-storm">(11) 999999-0000</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
