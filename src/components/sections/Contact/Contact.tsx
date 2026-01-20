'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { ContactProps } from '@/components/sections/Contact/Contact.types'
import { Button } from '@/components/ui/button'

function Contact({ title, text, buttontext }: ContactProps) {
    return (
        <section>
            <div className="flex flex-col bg-color-haiti py-6 sm:flex-row">
                <div className="mx-auto flex flex-col items-center justify-center gap-5 p-5 py-24 sm:p-8 lg:p-16">
                    <div>
                        <h1 className="text-center text-2xl font-semibold text-white sm:text-left sm:text-2xl lg:text-4xl">
                            {title}
                        </h1>
                    </div>
                    <div className="2xl:max-w-2xl">
                        <p className="text-sm font-normal text-color-cblue sm:text-left sm:text-base lg:text-base">
                            {text}
                        </p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-4 sm:justify-normal">
                        <div>
                            <Button variant="herobutton" size="hero" asChild className="rounded-full">
                                <Link href="https://www.instagram.com/codecreativebr/">
                                    {buttontext} <ArrowRight className="ml-2 size-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
